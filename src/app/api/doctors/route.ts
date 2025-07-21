import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const session = await getServerSession(authOptions);
    const body = await req.json();
    let {
      userId: bodyUserId,
    } = body;

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
    // const data = {
    //   title: body.title ?? undefined,
    //   experience: body.experience ?? undefined,
    //   designation: body.designation ?? undefined,
    //   practices: body.practices ?? undefined,
    //   // practiceName: body.practiceName ?? undefined,
    //   // clinicAddress: body.clinicAddress ?? undefined,
    //   // state: body.state ?? undefined,
    //   // practicePhone: body.practicePhone ?? undefined,
    //   subspecialities: body.subspecialities ?? undefined,
    //   about: body.about ?? undefined,
    //   registrationsAssociations: body.hasOwnProperty(
    //     "registrationsAssociations",
    //   )
    //     ? body.registrationsAssociations
    //     : undefined,
    //   qualifications: body.qualifications ?? undefined,
    //   awardsPublications: body.awardsPublications ?? undefined,
    //   hospitalAffiliations: body.hospitalAffiliations ?? undefined,
    // };

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

    // 6. Perform update
    const updatedProfile = await prisma.doctorProfile.update({
      where: { id: doctorId },
      data,
    });

    if (
      "doctorAvailability" in body &&
      Array.isArray(body.doctorAvailability)
    ) {
      for (const item of body.doctorAvailability) {
        if (item.id) {
          // Existing record, update it
          await prisma.doctorAvailabilityTime.upsert({
            where: { id: item.id },
            update: {
              dayOfWeek: item.dayOfWeek,
              startTime: item.startTime,
              endTime: item.endTime,
              location: item.location,
              clinicName: item.location === "CLINIC" ? item.clinicName : null,
            },
            create: {
              doctorId: doctorId,
              dayOfWeek: item.dayOfWeek,
              startTime: item.startTime,
              endTime: item.endTime,
              location: item.location,
              clinicName: item.location === "CLINIC" ? item.clinicName : null,
            },
          });
        } else {
          // New record, just create
          await prisma.doctorAvailabilityTime.create({
            data: {
              doctorId: doctorId,
              dayOfWeek: item.dayOfWeek,
              startTime: item.startTime,
              endTime: item.endTime,
              location: item.location,
              clinicName: item.location === "CLINIC" ? item.clinicName : null,
            },
          });
        }
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
