import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, error: "Please Log in to ask question" },
        { status: 401 },
      );
    }

    const { content, doctorId, isConfidential } = await req.json();

    if (!content || !doctorId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const question = await prisma.question.create({
      data: {
        content,
        isConfidential: Boolean(isConfidential),
        patientId: session.user.id,
        doctorId: parseInt(doctorId),
      },
    });

    return NextResponse.json({ success: true, data: question });
  } catch (error) {
    console.error("[QUESTIONS_POST]", error);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    const { searchParams } = new URL(req.url);
    const doctorId = searchParams.get("doctorId");
    const patientId = searchParams.get("patientId");

    let questions;

    if (!session?.user) {
      if (!doctorId) {
        return NextResponse.json(
          { success: false, error: "doctorId is required for public access" },
          { status: 400 },
        );
      }

      questions = await prisma.question.findMany({
        where: {
          doctorId: parseInt(doctorId),
          isConfidential: false, // Only non-confidential for non-logged in users
        },
        include: {
          patient: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          answers: {
            include: {
              author: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
            },
            orderBy: {
              createdAt: "asc",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return NextResponse.json({ success: true, data: questions });
    }

    if (doctorId) {
      // Get questions for a specific doctor
      questions = await prisma.question.findMany({
        where: {
          doctorId: parseInt(doctorId),
          OR: [
            // Show all questions to admins
            ...(session.user.role === "ADMIN" ? [{}] : []),

            // Show all questions to the doctor they're assigned to
            ...(session.user.role === "DOCTOR" &&
            session.user.doctorId === parseInt(doctorId)
              ? [{}]
              : []),

            // Show questions to the patient who asked them
            ...(session.user.role === "PATIENT"
              ? [{ patientId: session.user.id }]
              : []),

            // For everyone else, only show non-confidential questions
            { isConfidential: false },
          ],
        },
        include: {
          patient: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
          answers: {
            include: {
              author: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
            },
            orderBy: {
              createdAt: "asc",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else if (patientId) {
      // Get questions for a specific patient
      if (session.user.id !== patientId && session.user.role !== "ADMIN") {
        return NextResponse.json(
          { success: false, error: "Unauthorized" },
          { status: 401 },
        );
      }

      questions = await prisma.question.findMany({
        where: { patientId },
        include: {
          doctor: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
            },
          },
          answers: {
            include: {
              author: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                },
              },
            },
            orderBy: {
              createdAt: "asc",
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      return NextResponse.json(
        { success: false, error: "Missing doctorId or patientId" },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true, data: questions });
  } catch (error) {
    console.error("[QUESTIONS_GET]", error);
    return NextResponse.json(
      { success: false, error: "Internal error" },
      { status: 500 },
    );
  }
}
