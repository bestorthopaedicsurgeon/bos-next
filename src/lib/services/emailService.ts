import nodemailer from 'nodemailer';
import {
  getOTPEmailTemplate,
  getNotificationTemplate,
  getWelcomeEmailTemplate,
  getAppointmentConfirmationTemplate,
  getPasswordResetTemplate,
  getClaimApprovedTemplate,
  getClaimSubmittedTemplate
} from './emailTemplates';

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
  const { html, text } = getOTPEmailTemplate(otp);

  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Verify Your Email - Best Orthopedic Surgeons',
    text,
    html,
  };

  try {

    const info = await transporter.sendMail(mailOptions);

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
  actionText?: string;
  actionLink?: string;
}

export async function sendEmail({ to, subject, message, actionText, actionLink }: EmailOptions): Promise<void> {
  const { html, text } = getNotificationTemplate(subject, message, actionText, actionLink);

  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject,
    text,
    html,
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

/**
 * Send a welcome email to a new user
 */
export async function sendWelcomeEmail(email: string, userName: string): Promise<void> {
  const { html, text } = getWelcomeEmailTemplate(userName);

  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Welcome to Best Orthopedic Surgeons! 🎉',
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully!');
  } catch (error: any) {
    console.error('❌ Failed to send welcome email:', error.message);
    throw new Error(`Failed to send welcome email: ${error.message}`);
  }
}

/**
 * Send an appointment confirmation email
 */
export async function sendAppointmentConfirmation(
  email: string,
  details: {
    patientName: string;
    surgeonName: string;
    date: string;
    time: string;
    location: string;
  }
): Promise<void> {
  const { html, text } = getAppointmentConfirmationTemplate(details);

  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Appointment Confirmed - Best Orthopedic Surgeons',
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Appointment confirmation email sent successfully!');
  } catch (error: any) {
    console.error('❌ Failed to send appointment confirmation:', error.message);
    throw new Error(`Failed to send appointment confirmation: ${error.message}`);
  }
}

/**
 * Send a password reset email
 */
export async function sendPasswordReset(email: string, resetLink: string, userName: string): Promise<void> {
  const { html, text } = getPasswordResetTemplate(resetLink, userName);

  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Reset Your Password - Best Orthopedic Surgeons',
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent successfully!');
  } catch (error: any) {
    console.error('❌ Failed to send password reset email:', error.message);
    throw new Error(`Failed to send password reset email: ${error.message}`);
  }
}

/**
 * Send a claim approval email to a doctor
 */
export async function sendClaimApprovedEmail(email: string, userName: string, password?: string): Promise<void> {
  const { html, text } = getClaimApprovedTemplate(userName, email, password);

  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Doctor Profile Claim Approved! 🩺',
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Claim approval email sent successfully!');
  } catch (error: any) {
    console.error('❌ Failed to send claim approval email:', error.message);
    throw new Error(`Failed to send claim approval email: ${error.message}`);
  }
}

/**
 * Send a claim submission confirmation email to a doctor
 */
export async function sendClaimSubmittedEmail(email: string, userName: string): Promise<void> {
  const { html, text } = getClaimSubmittedTemplate(userName);

  const mailOptions = {
    from: `"Best Orthopedic Surgeons" <${process.env.EMAIL_USERNAME}>`,
    to: email,
    subject: 'Claim Request Received - Best Orthopedic Surgeons 🩺',
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Claim submission email sent successfully!');
  } catch (error: any) {
    console.error('❌ Failed to send claim submission email:', error.message);
    // We don't necessarily want to throw here and fail the whole request 
    // if just the email fails, but for now we follow the existing pattern
    throw new Error(`Failed to send claim submission email: ${error.message}`);
  }
}
