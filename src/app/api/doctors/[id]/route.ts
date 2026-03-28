import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  let { id } = await params;
  
  const numericId = Number(id);
  const isNumeric = !isNaN(numericId);

  console.log(`Fetching doctor with ${isNumeric ? "ID" : "slug"}:`, id);

  try {
    const doctor = await prisma.doctorProfile.findUnique({
      where: isNumeric ? { id: numericId } : { slug: id },
    });

    if (!doctor) {
      return NextResponse.json(
        { success: false, error: "Doctor not found." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: doctor,
        message: "Doctor fetched successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching doctor data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch doctor data." },
      { status: 500 },
    );
  }
}
