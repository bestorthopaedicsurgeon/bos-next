import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { id: string } }) {
  try {
    const doctorId = Number(context.params.id);

    if (isNaN(doctorId)) {
      return NextResponse.json(
        { success: false, error: "Invalid doctor ID." },
        { status: 400 },
      );
    }

    const profile = await prisma.doctorProfile.findUnique({
      where: { id: doctorId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!profile) {
      return NextResponse.json(
        { success: false, error: "Doctor profile not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, profile });
  } catch (error: any) {
    console.error("Error in GET doctor profile:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
