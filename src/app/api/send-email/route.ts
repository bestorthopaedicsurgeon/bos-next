import { NextResponse, NextRequest } from 'next/server';
import { sendEmail } from '@/lib/services/emailService';

export async function POST(req: NextRequest) {
  try {
    const { to, subject, message, actionText, actionLink } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: to, subject, message" },
        { status: 400 }
      );
    }

    await sendEmail({ to, subject, message, actionText, actionLink });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic'; // Ensure dynamic route handling for Vercel
