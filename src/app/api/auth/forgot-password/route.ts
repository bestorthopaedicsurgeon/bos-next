import { prisma } from "@/lib/prisma";
import { generateOTP, sendOTP } from "@/lib/services/emailService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found with this email" },
        { status: 404 }
      );
    }

    const otp = generateOTP();
    const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes expiry

    // Store OTP in database
    // Using upsert to update existing token or create new one
    await prisma.verificationToken.upsert({
      where: { identifier: email },
      update: {
        token: otp,
        otp: otp,
        expires
      },
      create: {
        identifier: email,
        token: otp,
        otp: otp,
        expires,
      },
    });

    // Send OTP via email
    await sendOTP(email, otp);

    return NextResponse.json(
      { success: true, message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { error: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
