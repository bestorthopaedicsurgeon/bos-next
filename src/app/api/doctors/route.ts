import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    let { userId: bodyUserId } = body;

    // const { practiceName, clinicAddress, state, practicePhone } = //   practices[0] || {};

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
      userId = bodyUserId ?? undefined;
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

    const data: any = {};

    if ("title" in body) data.title = body.title;
    if ("name" in body) data.name = body.name;
    if ("experience" in body) data.experience = body.experience;
    if ("designation" in body) data.designation = body.designation;
    if ("practices" in body) data.practices = body.practices;
    if ("subspecialities" in body) data.subspecialities = body.subspecialities;
    if ("about" in body) data.about = body.about;
    if ("registrationsAssociations" in body)
      data.registrationsAssociations = body.registrationsAssociations;
    if ("qualifications" in body) data.qualifications = body.qualifications;
    if ("awardsPublications" in body)
      data.awardsPublications = body.awardsPublications;
    if ("hospitalAffiliations" in body)
      data.hospitalAffiliations = body.hospitalAffiliations;
    if ("doctorAvailability" in body)
      data.DoctorAvailability = { create: body.doctorAvailability };
    if ("location" in body) data.location = body.location;

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

    // 3. Determine doctorId based on role
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

    // 4. Optional: Validate doctorId
    if (!doctorId || isNaN(doctorId)) {
      return NextResponse.json(
        { success: false, error: "Invalid doctor ID" },
        { status: 400 },
      );
    }

    // 5. Prepare updatable data
    const data: any = {};

    if ("title" in body) data.title = body.title;
    if ("name" in body) data.name = body.name;
    if ("experience" in body) data.experience = body.experience;
    if ("designation" in body) data.designation = body.designation;
    if ("practices" in body) data.practices = body.practices;
    if ("subspecialities" in body) data.subspecialities = body.subspecialities;
    if ("about" in body) data.about = body.about;
    if ("registrationsAssociations" in body)
      data.registrationsAssociations = body.registrationsAssociations;
    if ("qualifications" in body) data.qualifications = body.qualifications;
    if ("awardsPublications" in body)
      data.awardsPublications = body.awardsPublications;
    if ("hospitalAffiliations" in body)
      data.hospitalAffiliations = body.hospitalAffiliations;
    if ("location" in body) data.location = body.location;

    // 6. Perform update
    const updatedProfile = await prisma.doctorProfile.update({
      where: { id: doctorId },
      data,
    });

    // 7. Handle Doctor Availability (Weekly Schedule) - Delete + Create Strategy
    if (
      "doctorAvailability" in body &&
      Array.isArray(body.doctorAvailability)
    ) {
      // Delete existing availability for this doctor
      await prisma.doctorAvailabilityTime.deleteMany({
        where: { doctorId: doctorId },
      });

      // Create new availability records
      if (body.doctorAvailability.length > 0) {
        await prisma.doctorAvailabilityTime.createMany({
          data: body.doctorAvailability.map((item: any) => ({
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
    if (
      "specificAvailability" in body &&
      Array.isArray(body.specificAvailability)
    ) {
      for (const item of body.specificAvailability) {
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
