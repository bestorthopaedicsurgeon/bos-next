import { registerUser } from "@/lib/controllers/authController";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { user, message } = await registerUser(body);

    // Don't return the full user object, just what's needed for the client
    const { id, email, name, role } = user;

    return NextResponse.json({
      success: true,
      message,
      data: { id, email, name, role },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json(
        { success: false, error: err.message },
        { status: 400 },
      );
    }
    return NextResponse.json(
      { success: false, error: "Registration failed" },
      { status: 400 },
    );
  }
}
