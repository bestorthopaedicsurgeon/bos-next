import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { sendPasswordReset } from "@/lib/services/emailService";
import crypto from "crypto";

/**
 * Request a password reset - generates token and sends email
 */
export async function requestPasswordReset(email: string): Promise<void> {
  // Check if user exists (but don't reveal this in response for security)
  const user = await prisma.user.findUnique({ where: { email } });
  
  if (!user) {
    // Don't reveal that user doesn't exist - just silently succeed
    console.log(`Password reset requested for non-existent email: ${email}`);
    return;
  }

  // Generate secure random token
  const resetToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  
  // Token expires in 1 hour
  const expires = new Date(Date.now() + 60 * 60 * 1000);

  // Store hashed token in database using VerificationToken table
  // Use identifier format: "password-reset:email"
  const identifier = `password-reset:${email}`;

  await prisma.$transaction(async (tx) => {
    // Remove any existing password reset tokens for this email
    await tx.verificationToken.deleteMany({
      where: { identifier }
    });

    // Create new password reset token
    await tx.verificationToken.create({
      data: {
        identifier,
        token: hashedToken,
        expires,
        otp: '', // Empty string since field is required (not used for password reset)
        attempts: 0,
      }
    });
  });

  // Create reset link with the unhashed token
  const resetLink = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;

  // Send password reset email
  try {
    await sendPasswordReset(user.email, resetLink, user.name || user.firstName || 'User');
    console.log('✅ Password reset email sent successfully');
  } catch (error: any) {
    console.error('❌ Failed to send password reset email:', error.message);
    throw new Error('Failed to send password reset email');
  }
}

/**
 * Verify if a reset token is valid
 */
export async function verifyResetToken(token: string): Promise<{ valid: boolean; email?: string }> {
  // Hash the token to compare with database
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  // Find all password reset tokens
  const resetTokens = await prisma.verificationToken.findMany({
    where: {
      identifier: {
        startsWith: 'password-reset:'
      }
    }
  });

  // Find matching token
  const record = resetTokens.find(r => r.token === hashedToken);

  if (!record) {
    return { valid: false };
  }

  // Check if expired
  if (new Date() > record.expires) {
    // Clean up expired token
    await prisma.verificationToken.delete({
      where: { identifier: record.identifier }
    });
    return { valid: false };
  }

  // Extract email from identifier
  const email = record.identifier.replace('password-reset:', '');

  return { valid: true, email };
}

/**
 * Reset password using valid token
 */
export async function resetPassword(token: string, newPassword: string): Promise<void> {
  // Verify token first
  const { valid, email } = await verifyResetToken(token);

  if (!valid || !email) {
    throw new Error('Invalid or expired reset token');
  }

  // Hash new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update user password
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword }
  });

  // Clean up the reset token
  const identifier = `password-reset:${email}`;
  await prisma.verificationToken.deleteMany({
    where: { identifier }
  });

  console.log(`✅ Password reset successful for: ${email}`);
}
