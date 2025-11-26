import { NextRequest, NextResponse } from "next/server";
import { verifyResetToken } from "@/lib/controllers/passwordResetController";

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: "Token is required" },
        { status: 400 }
      );
    }

    // Verify the token
    const result = await verifyResetToken(token);

    if (!result.valid) {
      return NextResponse.json(
        { valid: false, error: "Invalid or expired reset token" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      valid: true,
      email: result.email,
    });
  } catch (error: any) {
    console.error("Error in verify-reset-token:", error);
    
    return NextResponse.json(
      { valid: false, error: "Failed to verify token" },
      { status: 500 }
    );
  }
}
