import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
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
      doctorAvailabilityDays,
    } = body;

    const profile = await prisma.doctorProfile.create({
      data: {
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
        DoctorAvailabilityDays: doctorAvailabilityDays || [],
      },
    });

    return NextResponse.json({ success: true, profile });
  } catch (error: any) {
    console.error("Error creating doctor profile:", error);
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

    let {
      userId,
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
      doctorAvailabilityDays,
    } = body;

    userId = session?.user?.id || userId;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "userId is required" },
        { status: 400 },
      );
    }

    // Check if profile already exists for this user
    const existingProfile = await prisma.doctorProfile.findFirst({
      where: {
        user: {
          id: userId,
        },
      },
    });

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

    if (existingProfile) {
      // Update existing profile
      profile = await prisma.doctorProfile.update({
        where: { id: existingProfile.id },
        data,
      });
    } else {
      // Create new profile and link to user
      profile = await prisma.doctorProfile.create({
        data: {
          ...data,
          user: {
            connect: { id: userId },
          },
        },
      });
    }

    return NextResponse.json({ success: true, profile });
  } catch (error: any) {
    console.error("Error in PATCH doctor profile:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
