// Email template utilities for Best Orthopedic Surgeons
// Matches the website's design theme with professional healthcare styling

const PRIMARY_COLOR = '#2f797b';
const PRIMARY_HOVER = '#1f5a5c';
const BACKGROUND_COLOR = '#f8f9fa';
const TEXT_PRIMARY = '#292a39';
const TEXT_SECONDARY = '#747474';

/**
 * Base email template wrapper
 */
function getEmailWrapper(content: string): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>Best Orthopedic Surgeons</title>
      <!--[if mso]>
      <style type="text/css">
        body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
      </style>
      <![endif]-->
    </head>
    <body style="margin: 0; padding: 0; background-color: ${BACKGROUND_COLOR}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${BACKGROUND_COLOR};">
        <tr>
          <td style="padding: 40px 20px;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="
  background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_HOVER} 100%);
  padding: 20px 30px;
  text-align: center;
  border-radius: 12px 12px 0 0;
">
  <img src="https://juiziglmzcqnbaagsdrq.supabase.co/storage/v1/object/public/bos-logos/bos-logo-2.png"
       alt="Best Orthopaedic Surgeon"
       style="max-width: 150px; height: auto; display: block; margin: 0 auto;">
</td>

              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px 30px;">
                  ${content}
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="
  background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_HOVER} 100%);
  padding: 24px;
  text-align: center;
  border-radius: 0 0 12px 12px;
">
  <p style="margin: 0 0 6px 0; color: rgba(255,255,255,0.9); font-size: 14px;">
    This email was sent by Best Orthopaedic Surgeons
  </p>
  <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
    © ${new Date().getFullYear()} Best Orthopaedic Surgeons. All rights reserved.
  </p>
</td>

              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

/**
 * OTP Verification Email Template
 */
export function getOTPEmailTemplate(otp: string): { html: string; text: string } {
  const content = `
    <div style="text-align: center;">
      <div style="display: inline-block; background: linear-gradient(135deg, #e8f4f5 0%, #d4ebec 100%); border-radius: 12px; padding: 30px; margin-bottom: 30px;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 20px;">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="${PRIMARY_COLOR}"/>
        </svg>
        <h2 style="margin: 0 0 15px 0; color: ${TEXT_PRIMARY}; font-size: 24px; font-weight: 700;">
          Verify Your Email
        </h2>
        <p style="margin: 0 0 25px 0; color: ${TEXT_SECONDARY}; font-size: 16px; line-height: 1.6;">
          Please use the following One-Time Password (OTP) to verify your email address:
        </p>
        <div style="background-color: #ffffff; border: 2px dashed ${PRIMARY_COLOR}; border-radius: 8px; padding: 20px; margin: 0 auto; display: inline-block;">
          <div style="font-size: 36px; font-weight: 700; color: ${PRIMARY_COLOR}; letter-spacing: 8px; font-family: 'Courier New', monospace;">
            ${otp}
          </div>
        </div>
      </div>
      
      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 6px; text-align: left; margin-top: 30px;">
        <p style="margin: 0 0 8px 0; color: #856404; font-size: 14px; font-weight: 600;">
          ⏱️ Important Information
        </p>
        <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.6;">
          This OTP will expire in <strong>10 minutes</strong>. If you didn't request this verification, please ignore this email.
        </p>
      </div>
      
      <p style="margin: 30px 0 0 0; color: ${TEXT_SECONDARY}; font-size: 14px; line-height: 1.6;">
        Need help? Contact our support team for assistance.
      </p>
    </div>
  `;

  return {
    html: getEmailWrapper(content),
    text: `Email Verification\n\nYour OTP for email verification is: ${otp}\n\nThis OTP will expire in 10 minutes.\n\nIf you didn't request this verification, please ignore this email.\n\n© ${new Date().getFullYear()} Best Orthopedic Surgeons. All rights reserved.`
  };
}

/**
 * Welcome Email Template
 */
export function getWelcomeEmailTemplate(userName: string): { html: string; text: string } {
  const content = `
    <div style="text-align: center;">
      <div style="margin-bottom: 30px;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="${PRIMARY_COLOR}" opacity="0.3"/>
          <path d="M2 17L12 22L22 17V11L12 16L2 11V17Z" fill="${PRIMARY_COLOR}"/>
        </svg>
      </div>
      
      <h2 style="margin: 0 0 15px 0; color: ${TEXT_PRIMARY}; font-size: 28px; font-weight: 700;">
        Welcome to Best Orthopedic Surgeons! 🎉
      </h2>
      
      <p style="margin: 0 0 10px 0; color: ${TEXT_PRIMARY}; font-size: 18px;">
        Hello <strong>${userName}</strong>,
      </p>
      
      <p style="margin: 0 0 30px 0; color: ${TEXT_SECONDARY}; font-size: 16px; line-height: 1.6;">
        Thank you for joining our platform. We're excited to help you find the best orthopedic surgeons in Australia.
      </p>
      
      <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px; padding: 25px; margin-bottom: 30px; text-align: left;">
        <h3 style="margin: 0 0 15px 0; color: ${TEXT_PRIMARY}; font-size: 18px; font-weight: 600;">
          What's Next?
        </h3>
        <ul style="margin: 0; padding-left: 20px; color: ${TEXT_SECONDARY}; font-size: 15px; line-height: 1.8;">
          <li>Browse our directory of top orthopedic surgeons</li>
          <li>Read patient reviews and ratings</li>
          <li>Book appointments with specialists</li>
          <li>Access educational resources and blog posts</li>
        </ul>
      </div>
      
      <a href="#" style="display: inline-block; background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_HOVER} 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(47, 121, 123, 0.3);">
        Explore Surgeons
      </a>
      
      <p style="margin: 30px 0 0 0; color: ${TEXT_SECONDARY}; font-size: 14px; line-height: 1.6;">
        If you have any questions, our support team is here to help!
      </p>
    </div>
  `;

  return {
    html: getEmailWrapper(content),
    text: `Welcome to Best Orthopedic Surgeons!\n\nHello ${userName},\n\nThank you for joining our platform. We're excited to help you find the best orthopedic surgeons in Australia.\n\nWhat's Next?\n- Browse our directory of top orthopedic surgeons\n- Read patient reviews and ratings\n- Book appointments with specialists\n- Access educational resources and blog posts\n\nIf you have any questions, our support team is here to help!\n\n© ${new Date().getFullYear()} Best Orthopedic Surgeons. All rights reserved.`
  };
}

/**
 * Appointment Confirmation Email Template
 */
export function getAppointmentConfirmationTemplate(details: {
  patientName: string;
  surgeonName: string;
  date: string;
  time: string;
  location: string;
}): { html: string; text: string } {
  const content = `
    <div>
      <div style="text-align: center; margin-bottom: 30px;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="${PRIMARY_COLOR}" stroke-width="2" fill="none"/>
          <line x1="3" y1="9" x2="21" y2="9" stroke="${PRIMARY_COLOR}" stroke-width="2"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="${PRIMARY_COLOR}" stroke-width="2" stroke-linecap="round"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="${PRIMARY_COLOR}" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="15" r="2" fill="${PRIMARY_COLOR}"/>
        </svg>
      </div>
      
      <h2 style="margin: 0 0 10px 0; color: ${TEXT_PRIMARY}; font-size: 24px; font-weight: 700; text-align: center;">
        Appointment Confirmed ✓
      </h2>
      
      <p style="margin: 0 0 30px 0; color: ${TEXT_SECONDARY}; font-size: 16px; text-align: center;">
        Hello ${details.patientName}, your appointment has been successfully scheduled.
      </p>
      
      <div style="background: linear-gradient(135deg, #e8f4f5 0%, #d4ebec 100%); border-left: 4px solid ${PRIMARY_COLOR}; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td style="padding: 8px 0;">
              <strong style="color: ${TEXT_PRIMARY}; font-size: 14px;">Surgeon:</strong>
            </td>
            <td style="padding: 8px 0; text-align: right;">
              <span style="color: ${TEXT_SECONDARY}; font-size: 14px;">${details.surgeonName}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0;">
              <strong style="color: ${TEXT_PRIMARY}; font-size: 14px;">Date:</strong>
            </td>
            <td style="padding: 8px 0; text-align: right;">
              <span style="color: ${TEXT_SECONDARY}; font-size: 14px;">${details.date}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0;">
              <strong style="color: ${TEXT_PRIMARY}; font-size: 14px;">Time:</strong>
            </td>
            <td style="padding: 8px 0; text-align: right;">
              <span style="color: ${TEXT_SECONDARY}; font-size: 14px;">${details.time}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0;">
              <strong style="color: ${TEXT_PRIMARY}; font-size: 14px;">Location:</strong>
            </td>
            <td style="padding: 8px 0; text-align: right;">
              <span style="color: ${TEXT_SECONDARY}; font-size: 14px;">${details.location}</span>
            </td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #d1ecf1; border-left: 4px solid #0c5460; padding: 15px; border-radius: 6px; margin-bottom: 25px;">
        <p style="margin: 0 0 8px 0; color: #0c5460; font-size: 14px; font-weight: 600;">
          📋 Before Your Appointment
        </p>
        <p style="margin: 0; color: #0c5460; font-size: 14px; line-height: 1.6;">
          Please arrive 15 minutes early and bring any relevant medical records or imaging results.
        </p>
      </div>
      
      <div style="text-align: center;">
        <a href="#" style="display: inline-block; background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_HOVER} 100%); color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 15px; font-weight: 600; margin-right: 10px;">
          Add to Calendar
        </a>
        <a href="#" style="display: inline-block; background-color: #ffffff; color: ${PRIMARY_COLOR}; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 15px; font-weight: 600; border: 2px solid ${PRIMARY_COLOR};">
          View Details
        </a>
      </div>
    </div>
  `;

  return {
    html: getEmailWrapper(content),
    text: `Appointment Confirmed\n\nHello ${details.patientName}, your appointment has been successfully scheduled.\n\nAppointment Details:\nSurgeon: ${details.surgeonName}\nDate: ${details.date}\nTime: ${details.time}\nLocation: ${details.location}\n\nBefore Your Appointment:\nPlease arrive 15 minutes early and bring any relevant medical records or imaging results.\n\n© ${new Date().getFullYear()} Best Orthopedic Surgeons. All rights reserved.`
  };
}

/**
 * Password Reset Email Template
 */
export function getPasswordResetTemplate(resetLink: string, userName: string): { html: string; text: string } {
  const content = `
    <div style="text-align: center;">
      <div style="margin-bottom: 30px;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="11" width="14" height="10" rx="2" stroke="${PRIMARY_COLOR}" stroke-width="2" fill="none"/>
          <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="${PRIMARY_COLOR}" stroke-width="2" stroke-linecap="round"/>
          <circle cx="12" cy="16" r="1.5" fill="${PRIMARY_COLOR}"/>
        </svg>
      </div>
      
      <h2 style="margin: 0 0 15px 0; color: ${TEXT_PRIMARY}; font-size: 24px; font-weight: 700;">
        Reset Your Password
      </h2>
      
      <p style="margin: 0 0 10px 0; color: ${TEXT_PRIMARY}; font-size: 16px;">
        Hello ${userName},
      </p>
      
      <p style="margin: 0 0 30px 0; color: ${TEXT_SECONDARY}; font-size: 15px; line-height: 1.6;">
        We received a request to reset your password. Click the button below to create a new password:
      </p>
      
      <a href="${resetLink}" style="display: inline-block; background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_HOVER} 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(47, 121, 123, 0.3); margin-bottom: 30px;">
        Reset Password
      </a>
      
      <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; border-radius: 6px; text-align: left; margin-bottom: 25px;">
        <p style="margin: 0 0 8px 0; color: #856404; font-size: 14px; font-weight: 600;">
          🔒 Security Notice
        </p>
        <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.6;">
          This link will expire in <strong>1 hour</strong>. If you didn't request a password reset, please ignore this email or contact support if you have concerns.
        </p>
      </div>
      
      <p style="margin: 0; color: ${TEXT_SECONDARY}; font-size: 13px; line-height: 1.6;">
        If the button doesn't work, copy and paste this link into your browser:<br/>
        <span style="color: ${PRIMARY_COLOR}; word-break: break-all;">${resetLink}</span>
      </p>
    </div>
  `;

  return {
    html: getEmailWrapper(content),
    text: `Reset Your Password\n\nHello ${userName},\n\nWe received a request to reset your password. Click the link below to create a new password:\n\n${resetLink}\n\nThis link will expire in 1 hour. If you didn't request a password reset, please ignore this email or contact support if you have concerns.\n\n© ${new Date().getFullYear()} Best Orthopedic Surgeons. All rights reserved.`
  };
}

/**
 * General Notification Email Template
 */
export function getNotificationTemplate(subject: string, message: string, actionText?: string, actionLink?: string): { html: string; text: string } {
  const content = `
    <div>
      <h2 style="margin: 0 0 20px 0; color: ${TEXT_PRIMARY}; font-size: 24px; font-weight: 700;">
        ${subject}
      </h2>
      
      <div style="color: ${TEXT_SECONDARY}; font-size: 15px; line-height: 1.8; margin-bottom: 30px;">
        ${message.replace(/\n/g, '<br/>')}
      </div>
      
      ${actionText && actionLink ? `
        <div style="text-align: center; margin-top: 30px;">
          <a href="${actionLink}" style="display: inline-block; background: linear-gradient(135deg, ${PRIMARY_COLOR} 0%, ${PRIMARY_HOVER} 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 6px rgba(47, 121, 123, 0.3);">
            ${actionText}
          </a>
        </div>
      ` : ''}
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
        <p style="margin: 0; color: ${TEXT_SECONDARY}; font-size: 14px; line-height: 1.6;">
          Thank you for using Best Orthopedic Surgeons.
        </p>
      </div>
    </div>
  `;

  return {
    html: getEmailWrapper(content),
    text: `${subject}\n\n${message}\n\n${actionText && actionLink ? `${actionText}: ${actionLink}\n\n` : ''}Thank you for using Best Orthopedic Surgeons.\n\n© ${new Date().getFullYear()} Best Orthopedic Surgeons. All rights reserved.`
  };
}
