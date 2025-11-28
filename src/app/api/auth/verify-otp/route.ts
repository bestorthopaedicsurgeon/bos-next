import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/services/emailService";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

function generateRandomPassword(length = 10) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    // Verify OTP
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { identifier: email },
    });

    if (!verificationToken) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    // Check if OTP matches
    if (verificationToken.otp !== otp) {
      return NextResponse.json(
        { error: "Invalid OTP" },
        { status: 400 }
      );
    }

    // Check if expired
    if (new Date() > verificationToken.expires) {
      return NextResponse.json(
        { error: "OTP has expired" },
        { status: 400 }
      );
    }

    // OTP is valid, generate new password
    const newPassword = generateRandomPassword(12);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user password
    const user = await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    // Send new password via email
    await sendEmail({
      to: email,
      subject: "Your New Password - Best Orthopedic Surgeons",
      message: `
        <p>Your password has been successfully reset.</p>
        <p><strong>Your new password is: ${newPassword}</strong></p>
        <p>Please login and change your password immediately for security.</p>
      `,
      actionText: "Login Now",
      actionLink: `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/login`,
    });

    // Delete the used OTP
    await prisma.verificationToken.delete({
      where: { identifier: email },
    });

    return NextResponse.json(
      { success: true, message: "Password reset successful. Check your email for the new password." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
