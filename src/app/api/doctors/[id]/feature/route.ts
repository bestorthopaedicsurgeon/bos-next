import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  try {
    const session = await getServerSession(authOptions);

    // Only admins can feature/unfeature doctor profiles
    if (session?.user?.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const { id } = await params;
    const { featured } = await request.json();

    // Validate that featured is a boolean
    if (typeof featured !== "boolean") {
      return NextResponse.json(
        { error: 'Invalid request. The "featured" field must be a boolean.' },
        { status: 400 },
      );
    }

    // Update the doctor's featured status
    const updatedDoctor = await prisma.doctorProfile.update({
      where: { id: parseInt(id) },
      data: { featured },
      select: {
        id: true,
        name: true,
        featured: true,
        userId: true,
      },
    });

    return NextResponse.json({
      message: `Doctor profile has been ${featured ? "featured" : "unfeatured"} successfully`,
      doctor: updatedDoctor,
    });
  } catch (error) {
    console.error("Error updating doctor profile feature status:", error);

    return NextResponse.json(
      { error: "An error occurred while updating the doctor profile" },
      { status: 500 },
    );
  }
}
