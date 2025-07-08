import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
