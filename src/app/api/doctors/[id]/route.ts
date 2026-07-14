import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { revalidateDoctorContent } from "@/lib/data/publicData";

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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const numericId = Number(id);

    if (isNaN(numericId)) {
      return NextResponse.json(
        { success: false, error: "Invalid doctor ID." },
        { status: 400 },
      );
    }

    // Prisma doesn't have Cascade delete enabled on the relations in the schema,
    // so we manually clean up related data before deleting the profile itself.
    // deleteMany safely drops records without throwing if they don't exist.
    await prisma.$transaction([
      prisma.doctorAvailabilityTime.deleteMany({ where: { doctorId: numericId } }),
      prisma.doctorSpecificAvailability.deleteMany({ where: { doctorId: numericId } }),
      prisma.doctorReview.deleteMany({ where: { doctorId: numericId } }),
      prisma.doctorClaimRequest.deleteMany({ where: { doctorId: numericId } }),
      prisma.question.deleteMany({ where: { doctorId: numericId } }), // Automatically cascades to related answers based on schema
      prisma.doctorProfile.delete({ where: { id: numericId } }),
    ]);

    revalidateDoctorContent();

    return NextResponse.json({
      success: true,
      message: "Doctor profile deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete doctor profile." },
      { status: 500 },
    );
  }
}
