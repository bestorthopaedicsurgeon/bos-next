import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({success:false, error: "Unauthorized"}, { status: 401 });
    }

    const { content, questionId } = await req.json();

    if (!content || !questionId) {
      return NextResponse.json({success: false, error: "Missing required fields"}, { status: 400 });
    }

    // Verify the user has permission to answer this question
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      select: { doctorId: true, patientId: true },
    });

    if (!question) {
      return NextResponse.json({success: false, error: "Question not found"}, { status: 404 });
    }

    // Only the doctor or patient in the conversation can answer
    const isDoctor = session.user.role === 'DOCTOR';
    const isPatient = session.user.role === 'PATIENT';
    
    if (isDoctor) {
      const doctor = await prisma.doctorProfile.findFirst({
        where: { userId: session.user.id },
        select: { id: true },
      });
      
      if (doctor?.id !== question.doctorId) {
        return NextResponse.json({success: false, error: "Unauthorized"}, { status: 401 });
      }
    } else if (isPatient && session.user.id !== question.patientId) {
      return NextResponse.json({success: false, error: "Unauthorized"}, { status: 401 });
    } else if (!isDoctor && !isPatient) {
      return NextResponse.json({success: false, error: "Unauthorized"}, { status: 401 });
    }

    const answer = await prisma.answer.create({
      data: {
        content,
        questionId,
        authorId: session.user.id,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    return NextResponse.json({success: true, data: answer});
  } catch (error) {
    console.error("[ANSWERS_POST]", error);
    return NextResponse.json({success: false, error: "Internal error"}, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({success: false, error: "Unauthorized"}, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const questionId = searchParams.get("questionId");

    if (!questionId) {
      return NextResponse.json({success: false, error: "Missing questionId"}, { status: 400 });
    }

    // Verify the user has permission to view these answers
    const question = await prisma.question.findUnique({
      where: { id: questionId },
      select: { 
        doctorId: true, 
        patientId: true,
        isConfidential: true,
      },
    });

    if (!question) {
      return NextResponse.json({success: false, error: "Question not found"}, { status: 404 });
    }

    // Check if the user is part of this conversation or an admin
    const isDoctor = session.user.role === 'DOCTOR';
    const isPatient = session.user.role === 'PATIENT';
    const isAdmin = session.user.role === 'ADMIN';
    
    let hasAccess = false;
    
    if (isDoctor) {
      const doctor = await prisma.doctorProfile.findFirst({
        where: { userId: session.user.id },
        select: { id: true },
      });
      hasAccess = doctor?.id === question.doctorId;
    } else if (isPatient) {
      hasAccess = session.user.id === question.patientId;
    } else if (isAdmin) {
      hasAccess = true;
    }

    if (!hasAccess) {
      return NextResponse.json({success: false, error: "Unauthorized"}, { status: 401 });
    }

    const answers = await prisma.answer.findMany({
      where: { questionId },
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
        createdAt: 'asc',
      },
    });

    return NextResponse.json({success: true, data: answers});
  } catch (error) {
    console.error("[ANSWERS_GET]", error);
    return NextResponse.json({success: false, error: "Internal error"}, { status: 500 });
  }
}
