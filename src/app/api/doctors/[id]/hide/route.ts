import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);

    // Only admins can hide/unhide doctor profiles
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { id } = await params;
    const { hidden } = await request.json();

    // Validate that hidden is a boolean
    if (typeof hidden !== "boolean") {
      return NextResponse.json(
        { error: 'Invalid request. The "hidden" field must be a boolean.' },
        { status: 400 },
      );
    }

    // Update the doctor's hidden status
    const updatedDoctor = await prisma.doctorProfile.update({
      where: { id: parseInt(id) },
      data: { hidden },
      select: {
        id: true,
        name: true,
        hidden: true,
        userId: true,
      },
    });

    return NextResponse.json({
      message: `Doctor profile has been ${hidden ? "hidden" : "unhidden"} successfully`,
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.error("Error updating doctor profile visibility:", error);

    return NextResponse.json(
      { error: "An error occurred while updating the doctor profile" },
      { status: 500 },
    );
  }
}
