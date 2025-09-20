import nodemailer from 'nodemailer';

// Configure nodemailer with your email service
export const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
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
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send verification email');
  }
}
