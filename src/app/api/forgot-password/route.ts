import { NextRequest, NextResponse } from "next/server";
import { requestPasswordReset } from "@/lib/controllers/passwordResetController";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Request password reset (always returns success for security)
    await requestPasswordReset(email);

    // Always return success message (don't reveal if email exists)
    return NextResponse.json({
      message: "If an account exists with this email, a password reset link has been sent.",
    });
  } catch (error: any) {
    console.error("Error in forgot-password:", error);
    
    // Return generic success message even on error (for security)
    // Only log the actual error server-side
    return NextResponse.json({
      message: "If an account exists with this email, a password reset link has been sent.",
    });
  }
}
