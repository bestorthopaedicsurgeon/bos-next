import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const { firstName, lastName, email, phone, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create contact entry
    const newContact = await prisma.contactUs.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        data: newContact, 
        message: "Contact form submitted successfully" 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Contact form submission error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}