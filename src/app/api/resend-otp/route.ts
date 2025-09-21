import { resendOTP } from "@/lib/controllers/authController";
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

    await resendOTP(email);

    return NextResponse.json({
      success: true,
      message: "OTP has been resent to your email"
    });

  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to resend OTP" },
      { status: 400 }
    );
  }
}
