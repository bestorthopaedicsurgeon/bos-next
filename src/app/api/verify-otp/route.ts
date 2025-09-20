import { verifyOTP } from "@/lib/controllers/authController";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();
    
    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" }, 
        { status: 400 }
      );
    }

    const user = await verifyOTP(email, otp);
    
    // Return the created user without sensitive data
    const { password, ...userWithoutPassword } = user;
    
    return NextResponse.json({ 
      success: true, 
      user: userWithoutPassword 
    });
    
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message }, 
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to verify OTP" }, 
      { status: 400 }
    );
  }
}
