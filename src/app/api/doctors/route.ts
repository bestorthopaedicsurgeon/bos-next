import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { DoctorProfileSchema } from "@/lib/validations/doctor";
import { slugify } from "@/lib/utils";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    // 1. Validate input
    const validation = DoctorProfileSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input data",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
      userId: bodyUserId,
      doctorAvailability,
      specificAvailability: _, // Not used in POST
      ...restData
    } = validation.data;

    let userId: string | undefined;

    // Ensure only DOCTOR or ADMIN proceed
    if (
      !session?.user?.role ||
      !(session.user.role === "DOCTOR" || session.user.role === "ADMIN")
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "You are not authorized to create a doctor profile",
        },
        { status: 403 },
      );
    }

    // Doctor: use session user ID
    if (session.user.role === "DOCTOR") {
      userId = session.user.id;
    }

    // Admin: use provided userId if any
    else if (session.user.role === "ADMIN") {
      userId = (bodyUserId as string) ?? undefined;
    }

    if (userId) {
      const existingProfile = await prisma.doctorProfile.findFirst({
        where: { user: { id: userId } },
      });

      if (existingProfile) {
        return NextResponse.json(
          {
            success: false,
            error: "A profile already exists for this user.",
          },
          { status: 400 },
        );
      }
    }

    const data: any = { ...restData };
    if (doctorAvailability) {
      data.DoctorAvailability = { create: doctorAvailability };
    }

    // Generate slug
    if (data.name) {
      let baseSlug = slugify(data.name);
      let slug = baseSlug;
      let counter = 1;

      while (true) {
        const existing = await prisma.doctorProfile.findUnique({
          where: { slug },
        });

        if (!existing) break;

        slug = `${baseSlug}-${counter}`;
        counter++;
      }
      data.slug = slug;
    }

    let profile;

    profile = await prisma.doctorProfile.create({
      data: {
        ...data,
        ...(userId && {
          user: {
            connect: { id: userId },
          },
        }),
      },
    });

    return NextResponse.json({ success: true, profile }, { status: 201 });
  } catch (error: Error | any) {
    console.error("Error in POST doctor profile:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "User ID is required" },
        { status: 400 },
      );
    }

    const profile = await prisma.doctorProfile.findFirst({
      where: { userId },
      include: {
        DoctorAvailability: true,
        specificAvailability: true,
      },
    });

    if (!profile) {
      return NextResponse.json(
        { success: false, error: "Profile not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, data: profile }, { status: 200 });
  } catch (error) {
    console.error("Error fetching doctor profile:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}

export async function PATCH(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();

    // 1. Ensure user is authenticated
    if (!session?.user?.id) {
      return NextResponse.json(
        { success: false, error: "Not authenticated" },
        { status: 401 },
      );
    }

    // 2. Allow only DOCTOR or ADMIN roles
    const userRole = session.user.role;
    if (!["DOCTOR", "ADMIN"].includes(userRole)) {
      return NextResponse.json(
        { success: false, error: "Not authorized" },
        { status: 403 },
      );
    }

    // 3. Validate input
    const validation = DoctorProfileSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input data",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
      doctorAvailability,
      specificAvailability,
      userId: _, // Not updated via PATCH here
      ...updateData
    } = validation.data;

    // 4. Determine doctorId based on role
    let doctorId: number | undefined;

    if (userRole === "ADMIN") {
      if (!body.id) {
        return NextResponse.json(
          { success: false, error: "Doctor ID is required for ADMIN" },
          { status: 400 },
        );
      }
      doctorId = Number(body.id);
    } else if (userRole === "DOCTOR") {
      const doctor = await prisma.doctorProfile.findFirst({
        where: { user: { id: session.user.id } },
        select: { id: true },
      });

      if (!doctor) {
        return NextResponse.json(
          { success: false, error: "Doctor profile not found" },
          { status: 404 },
        );
      }

      doctorId = doctor.id;
    }

    // 5. Optional: Validate doctorId
    if (!doctorId || isNaN(doctorId)) {
      return NextResponse.json(
        { success: false, error: "Invalid doctor ID" },
        { status: 400 },
      );
    }

    // 6. Perform update
    const updatedProfile = await prisma.doctorProfile.update({
      where: { id: doctorId },
      data: {
        ...updateData,
        ...(updateData.name && {
          slug: await (async () => {
            let baseSlug = slugify(updateData.name);
            let slug = baseSlug;
            let counter = 1;
            while (true) {
              const existing = await prisma.doctorProfile.findUnique({
                where: { slug },
              });
              if (!existing || existing.id === doctorId) break;
              slug = `${baseSlug}-${counter}`;
              counter++;
            }
            return slug;
          })(),
        }),
      },
    });

    // 7. Handle Doctor Availability (Weekly Schedule) - Delete + Create Strategy
    if (doctorAvailability && Array.isArray(doctorAvailability)) {
      // Delete existing availability for this doctor
      await prisma.doctorAvailabilityTime.deleteMany({
        where: { doctorId: doctorId },
      });

      // Create new availability records
      if (doctorAvailability.length > 0) {
        await prisma.doctorAvailabilityTime.createMany({
          data: doctorAvailability.map((item: any) => ({
            doctorId: doctorId!,
            dayOfWeek: item.dayOfWeek,
            startTime: item.startTime,
            endTime: item.endTime,
            location: item.location,
            clinicName: item.location === "CLINIC" ? item.clinicName : null,
          })),
        });
      }
    }

    // 8. Handle Specific Availability (Date Overrides)
    if (specificAvailability && Array.isArray(specificAvailability)) {
      for (const item of specificAvailability) {
        const date = new Date(item.date);
        date.setHours(0, 0, 0, 0); // Normalize to midnight
        
        await prisma.doctorSpecificAvailability.upsert({
          where: {
            doctorId_date: {
              doctorId: doctorId!,
              date: date,
            },
          },
          update: {
            isAvailable: item.isAvailable,
            startTime: item.startTime,
            endTime: item.endTime,
            location: item.location,
            clinicName: item.location === "CLINIC" ? item.clinicName : null,
          },
          create: {
            doctorId: doctorId!,
            date: date,
            isAvailable: item.isAvailable,
            startTime: item.startTime,
            endTime: item.endTime,
            location: item.location,
            clinicName: item.location === "CLINIC" ? item.clinicName : null,
          },
        });
      }
    }

    return NextResponse.json(
      { success: true, data: updatedProfile },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating doctor profile:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
