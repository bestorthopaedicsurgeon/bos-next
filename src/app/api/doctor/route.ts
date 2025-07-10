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
      title,
      experience,
      designation,
      practiceName,
      clinicAddress,
      state,
      practicePhone,
      subspecialities,
      about,
      registrationsAssociations,
      qualifications,
      awardsPublications,
      hospitalAffiliations,
      DoctorAvailability,
      doctorAvailabilityDays,
    } = body;

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

    const data = {
      title: title || undefined,
      experience: experience || undefined,
      designation: designation || undefined,
      practiceName: practiceName || undefined,
      clinicAddress: clinicAddress || undefined,
      state: state || undefined,
      practicePhone: practicePhone || undefined,
      subspecialities: subspecialities || [],
      about: about || undefined,
      registrationsAssociations: registrationsAssociations || undefined,
      qualifications: qualifications || undefined,
      awardsPublications: awardsPublications || undefined,
      hospitalAffiliations: hospitalAffiliations || undefined,
      // DoctorAvailabilityDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    };

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

    return NextResponse.json({ success: true, profile });
  } catch (error: any) {
    console.error("Error in PATCH doctor profile:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (
      !session?.user?.role ||
      !["DOCTOR", "ADMIN"].includes(session.user.role)
    ) {
      return NextResponse.json(
        { success: false, error: "Not authorized to update doctor profile." },
        { status: 403 },
      );
    }

    const doctorId = Number(params.id);
    if (isNaN(doctorId)) {
      return NextResponse.json(
        { success: false, error: "Invalid doctor ID." },
        { status: 400 },
      );
    }

    const body = await req.json();

    // If the user is a DOCTOR, they can only update their own profile
    if (session.user.role === "DOCTOR") {
      const profile = await prisma.doctorProfile.findUnique({
        where: { id: doctorId },
        select: { userId: true },
      });

      if (!profile || profile.userId !== session.user.id) {
        return NextResponse.json(
          {
            success: false,
            error: "You are not allowed to update this profile.",
          },
          { status: 403 },
        );
      }
    }

    const updatedProfile = await prisma.doctorProfile.update({
      where: { id: doctorId },
      data: {
        ...body,
      },
    });

    return NextResponse.json({ success: true, data: updatedProfile });
  } catch (error) {
    console.error("Error updating doctor profile:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 },
    );
  }
}
