import nodemailer from 'nodemailer';

// Configure nodemailer with GoDaddy Email (Outlook/Office 365)
// If you get authentication errors, try these alternatives:
// Option 1: Office 365 (most common for GoDaddy Outlook)
// Option 2: GoDaddy's direct SMTP - change host to 'smtp.secureserver.net'
// Option 3: Use port 465 with secure: true instead of 587

export const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // Try 'smtp.office365.com' if this doesn't work
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: process.env.EMAIL_USERNAME, // Your full GoDaddy email address (e.g., info@yourdomain.com)
    pass: process.env.EMAIL_PASSWORD, // Your email password (NOT app-specific password for GoDaddy)
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export function generateOTP(): string {
  // Generate a 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendOTP(email: string, otp: string): Promise<void> {
  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Verify Your Email',
    text: `Your OTP for email verification is: ${otp}\nThis OTP will expire in 10 minutes.`,
    html: `
      <div>
        <h2>Email Verification</h2>
        <p>Your OTP for email verification is: <strong>${otp}</strong></p>
        <p>This OTP will expire in 10 minutes.</p>
      </div>
    `,
  };

  try {
    console.log('Attempting to send email from:', process.env.EMAIL_USERNAME);
    console.log('SMTP Host:', 'smtp.office365.com');
    console.log('SMTP Port:', 587);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error: any) {
    console.error('❌ DETAILED EMAIL ERROR:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });
    throw new Error(`Failed to send verification email: ${error.message}`);
  }
}

export interface EmailOptions {
  to: string;
  subject: string;
  message: string;
}

export async function sendEmail({ to, subject, message }: EmailOptions): Promise<void> {
  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject,
    text: message,
    html: `
      <div>
        <h2>${subject}</h2>
        <div>${message.replace(/\n/g, '<br>')}</div>
      </div>
    `,
  };

  try {
    console.log('Attempting to send email from:', process.env.EMAIL_USERNAME);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
  } catch (error: any) {
    console.error('❌ DETAILED EMAIL ERROR:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
    });
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
