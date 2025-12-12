import { NextResponse, NextRequest } from 'next/server';
import { transporter } from '@/lib/services/emailService';

// The email address where collaboration requests will be sent
const COLLABORATE_EMAIL = 'info@bestorthopaedicsurgeon.com.au';

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

    // Email content for the collaboration request
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #217B7E; border-bottom: 2px solid #217B7E; padding-bottom: 10px;">
          New Collaboration Request
        </h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Why they want to collaborate:</h3>
          <p style="background-color: #fff; padding: 15px; border-left: 4px solid #217B7E; margin: 10px 0;">
            ${reason.replace(/\n/g, '<br>')}
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Best Orthopaedic Surgeons website collaboration form.
        </p>
      </div>
    `;

    const textContent = `
New Collaboration Request

Name: ${name}
Email: ${email}

Why they want to collaborate:
${reason}

---
This email was sent from the Best Orthopaedic Surgeons website collaboration form.
    `;

    const mailOptions = {
      from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
      to: COLLABORATE_EMAIL,
      replyTo: email, // So you can reply directly to the person
      subject: `Collaboration Request from ${name}`,
      text: textContent,
      html: htmlContent,
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

