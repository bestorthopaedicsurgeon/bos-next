import nodemailer from 'nodemailer';
import path from 'path';

import {
  getOTPEmailTemplate,
  getNotificationTemplate,
  getWelcomeEmailTemplate,
  getDoctorWelcomeEmailTemplate,
  getAppointmentConfirmationTemplate,
  getDoctorAppointmentNotificationTemplate,
  getPasswordResetTemplate,
  getClaimApprovedTemplate,
  getClaimSubmittedTemplate
} from './emailTemplates';

// Google Workspace SMTP: the domain's mail is hosted on Google, so sending
// through Google keeps same-domain delivery internal and matches SPF.
// EMAIL_USERNAME = the Workspace mailbox (e.g. support@bestorthopaedicsurgeon.com.au)
// EMAIL_PASSWORD = an app password for that account (requires 2-Step Verification)
// EMAIL_FROM     = optional send-as alias (e.g. noreply@...), must be added as a
//                  "Send mail as" alias in Gmail or Google rewrites it back.
const DEFAULT_EMAIL_PORT = 587;

function getOptionalEmailSetting(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function getRequiredEmailSetting(name: string): string {
  const value = getOptionalEmailSetting(name);

  if (!value || value === 'PASTE_GMAIL_APP_PASSWORD_HERE') {
    throw new Error(`${name} must be configured for outgoing email`);
  }

  return value;
}

function parseEmailPort(value: string | undefined): number {
  if (!value) {
    return DEFAULT_EMAIL_PORT;
  }

  const port = Number(value);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`EMAIL_PORT must be a valid TCP port, received "${value}"`);
  }

  return port;
}

const EMAIL_HOST = getOptionalEmailSetting('EMAIL_HOST') || 'smtp.gmail.com';
const EMAIL_PORT = parseEmailPort(getOptionalEmailSetting('EMAIL_PORT'));
const EMAIL_USERNAME = getRequiredEmailSetting('EMAIL_USERNAME');
const EMAIL_PASSWORD = getRequiredEmailSetting('EMAIL_PASSWORD');

export const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465,
  requireTLS: EMAIL_PORT !== 465,
  auth: {
    user: EMAIL_USERNAME,
    pass: EMAIL_PASSWORD,
  },
});

const FROM_NAME = getOptionalEmailSetting('EMAIL_FROM_NAME') || 'Best Orthopaedic Surgeons';
const FROM_ADDRESS = getOptionalEmailSetting('EMAIL_FROM') || EMAIL_USERNAME;
const REPLY_TO = getOptionalEmailSetting('EMAIL_REPLY_TO');

export const EMAIL_SENDER = `"${FROM_NAME}" <${FROM_ADDRESS}>`;

// Common attachments for all emails
const commonAttachments = [
  {
    filename: 'bos-logo-2.png',
    path: path.join(process.cwd(), 'public', 'logos', 'bos-logo-2.png'),
    cid: 'logo' // same cid as in the html template
  }
];

export function generateOTP(): string {
  // Generate a 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendOTP(email: string, otp: string): Promise<void> {
  const { html, text } = getOTPEmailTemplate(otp);

  const mailOptions = {
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to: email,
    subject: 'Verify Your Email - Best Orthopedic Surgeons',
    text,
    html,
    attachments: commonAttachments,
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
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to,
    subject,
    text,
    html,
    attachments: commonAttachments,
  };

  try {
    console.log('Attempting to send email from:', EMAIL_USERNAME);
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
 * Send a welcome email to a new user based on their role
 */
export async function sendWelcomeEmail(email: string, userName: string, role?: string): Promise<void> {
  const { html, text } = role === 'DOCTOR' 
    ? getDoctorWelcomeEmailTemplate(userName)
    : getWelcomeEmailTemplate(userName);

  const subject = role === 'DOCTOR'
    ? 'Welcome to the Best Orthopedic Surgeons Network! 🩺'
    : 'Welcome to Best Orthopedic Surgeons! 🎉';

  const mailOptions = {
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to: email,
    subject,
    text,
    html,
    attachments: commonAttachments,
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
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to: email,
    subject: 'Appointment Confirmed - Best Orthopedic Surgeons',
    text,
    html,
    attachments: commonAttachments,
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
 * Send an appointment notification to a doctor/secretary
 */
export async function sendAppointmentNotificationToDoctor(
  email: string,
  details: {
    surgeonName: string;
    patientName: string;
    patientEmail: string;
    patientPhone: string;
    date: string;
    time: string;
    location: string;
    consultationType: string;
    symptoms?: string;
    message?: string;
  }
): Promise<void> {
  const { html, text } = getDoctorAppointmentNotificationTemplate(details);

  const mailOptions = {
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to: email,
    subject: `New Appointment: ${details.patientName} - Best Orthopedic Surgeons`,
    text,
    html,
    attachments: commonAttachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Appointment notification sent to doctor successfully!');
  } catch (error: any) {
    console.error('❌ Failed to send appointment notification to doctor:', error.message);
    throw new Error(`Failed to send appointment notification to doctor: ${error.message}`);
  }
}

/**
 * Send a password reset email
 */
export async function sendPasswordReset(email: string, resetLink: string, userName: string): Promise<void> {
  const { html, text } = getPasswordResetTemplate(resetLink, userName);

  const mailOptions = {
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to: email,
    subject: 'Reset Your Password - Best Orthopedic Surgeons',
    text,
    html,
    attachments: commonAttachments,
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
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to: email,
    subject: 'Doctor Profile Claim Approved! 🩺',
    text,
    html,
    attachments: commonAttachments,
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
    from: EMAIL_SENDER,
    replyTo: REPLY_TO,
    to: email,
    subject: 'Claim Request Received - Best Orthopedic Surgeons 🩺',
    text,
    html,
    attachments: commonAttachments,
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
