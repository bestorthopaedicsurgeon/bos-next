import { NextResponse, NextRequest } from 'next/server';
import path from 'path';
import { transporter, EMAIL_SENDER } from '@/lib/services/emailService';
import { getNotificationTemplate } from '@/lib/services/emailTemplates';

// The email address where collaboration requests will be sent
const COLLABORATE_EMAIL = process.env.CONTACT_EMAIL || 'support@bestorthopaedicsurgeon.com.au';

export async function POST(req: NextRequest) {
  try {
    const { name, email, reason } = await req.json();

    // Validate required fields
    if (!name || !email || !reason) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, reason" },
        { status: 400 }
      );
    }

    // Use standard notification template for consistency
    const { html, text } = getNotificationTemplate(
      `Collaboration Request from ${name}`,
      `
Name: ${name}
Email: ${email}

Why they want to collaborate:
${reason}
      `,
      "View on Website",
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    );

    const mailOptions = {
      from: EMAIL_SENDER,
      to: COLLABORATE_EMAIL,
      replyTo: email,
      subject: `Collaboration Request from ${name}`,
      text: text,
      html: html,
      attachments: [
        {
          filename: 'bos-logo-2.png',
          path: path.join(process.cwd(), 'public', 'logos', 'bos-logo-2.png'),
          cid: 'logo'
        }
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Collaboration request email sent successfully!');

    return NextResponse.json({ 
      success: true, 
      message: "Collaboration request sent successfully" 
    });
  } catch (error: any) {
    console.error("❌ Error sending collaboration email:", error);
    return NextResponse.json(
      { message: error.message || "Failed to send collaboration request" },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';

