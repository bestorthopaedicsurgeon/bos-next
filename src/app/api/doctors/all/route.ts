import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

  try {
    const doctors = await prisma.doctorProfile.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        reviews: {
          select: {
            id: true,
            professionalism: true,
            punctuality: true,
            helpfulness: true,
            knowledge: true,
            review: true,
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    if (!doctors || doctors.length === 0) {
      return NextResponse.json(
        { success: false, error: "No doctors found." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: doctors,
        message: "Doctors fetched successfully",
        count: doctors.length,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching doctors data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch doctors data." },
      { status: 500 },
    );
  }
}
