import { NextRequest, NextResponse } from "next/server";
import { resetPassword } from "@/lib/controllers/passwordResetController";

export async function POST(req: NextRequest) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { error: "Token and new password are required" },
        { status: 400 }
      );
    }

    // Validate password strength
    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    // Reset the password
    await resetPassword(token, newPassword);

    return NextResponse.json({
      message: "Password has been reset successfully. You can now log in with your new password.",
    });
  } catch (error: any) {
    console.error("Error in reset-password:", error);
    
    return NextResponse.json(
      { error: error.message || "Failed to reset password. The link may be invalid or expired." },
      { status: 400 }
    );
  }
}
