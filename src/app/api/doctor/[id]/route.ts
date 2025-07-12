import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> },
) {
  let { id } = await params;
  //convert id to number if it's a string
  id = Number(id);
  console.log("Fetching doctor with slug:", id);

  if (!id) {
    return NextResponse.json({ error: "id is required." }, { status: 400 });
  }

  try {
    const doctor = await prisma.doctorProfile.findUnique({
      where: { id: id },
    });

    if (!doctor) {
      return NextResponse.json(
        { success: false, error: "Doctor not found." },
        { status: 404 },
      );
    }

    return (
      NextResponse.json({
        success: true,
        data: doctor,
        message: "Doctor fetched successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching doctor data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch doctor data." },
      { status: 500 },
    );
  }
}
