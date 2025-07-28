import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { get } from "http";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  console.log("Fetching doctor with id:", session);
  let id = session?.user?.id;
  console.log("this is the id" , typeof(id))

  if (!id) {
    return NextResponse.json({ error: "id is required." }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
      include: {
        doctorProfile: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "Doctor not found." },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: user.doctorProfile,
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
