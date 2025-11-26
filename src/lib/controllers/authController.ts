import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { generateOTP, sendOTP, sendWelcomeEmail } from "@/lib/services/emailService";

// Helper: check expiry using VerificationToken.expires
function isExpired(expires: Date): boolean {
  return new Date() > expires;
}

export async function registerUser(data: any): Promise<{ user: User; message: string }> {
  const {
    email,
    password,
    firstName,
    lastName,
    title,
    phone,
    role,
    ...doctorInfo
  } = data;

  if (!email || !password || !role || !firstName || !lastName || !phone) {
    throw new Error("All fields are required");
  }

  const name = `${firstName} ${lastName}`.trim();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("User already exists");

  // Hash password but do NOT create user yet
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new OTP and pending registration payload stored in VerificationToken.token as JSON
  const otp = generateOTP();
  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  const pending = {
    email,
    passwordHash: hashedPassword,
    firstName,
    lastName,
    name,
    phone,
    role,
    title: title ?? null,
    doctorInfo: doctorInfo ?? {},
    // We also store otp/attempts in columns, but keep in JSON for completeness
    otp,
    attempts: 0,
    createdAt: new Date().toISOString(),
  };

  // Remove any previous pending registrations for this identifier (identifier is PK)
  await prisma.$transaction(async (tx) => {
    // Remove any existing verification tokens for this email
    await tx.verificationToken.deleteMany({
      where: { identifier: email }
    });

    // Create new verification token
    await tx.verificationToken.create({
      data: {
        identifier: email,
        token: JSON.stringify(pending), // Generate a random token
        otp,
        expires,
        attempts: 0
      }
    });
  });

  // Send OTP to email
  await sendOTP(email, otp);

  // Return non-sensitive summary for client flow
  return {
    user: {
      id: "pending-verification",
      email,
      name,
      firstName: firstName || null,
      lastName: lastName || null,
      phone,
      role,
      image: null,
      emailVerified: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as User,
    message: "Verification OTP sent to your email",
  };
}

export async function verifyOTP(email: string, otp: string): Promise<User> {
  // Fetch by PK (identifier)
  const record = await prisma.verificationToken.findUnique({ where: { identifier: email } });

  if (!record) {
    throw new Error("No verification request found. Please register again.");
  }

  // Parse payload from token JSON
  let payload: any;
  try {
    payload = JSON.parse(record.token || "{}");
  } catch {
    await prisma.verificationToken.deleteMany({ where: { identifier: email } });
    throw new Error("Verification data corrupted. Please register again.");
  }

  // Check expiry using record.expires
  if (isExpired(record.expires)) {
    await prisma.verificationToken.deleteMany({ where: { identifier: email } });
    throw new Error("OTP has expired. Please register again.");
  }

  // Validate OTP using the column
  if (record.otp !== otp) {
    const attempts = (record.attempts ?? 0) + 1;

    // Update attempts in DB and JSON payload snapshot
    payload.attempts = attempts;

    await prisma.verificationToken.update({
      where: { identifier: email },
      data: { attempts, token: JSON.stringify(payload) },
    });

    if (attempts >= 3) {
      await prisma.verificationToken.deleteMany({ where: { identifier: email } });
      throw new Error("Too many failed attempts. Please register again.");
    }

    throw new Error("Invalid OTP");
  }

  // OTP valid -> create the user from payload, then delete pending token(s)
  const createdUser = await prisma.user.create({
    data: {
      email: payload.email,
      phone: payload.phone,
      name: payload.name,
      firstName: payload.firstName || null,
      lastName: payload.lastName || null,
      password: payload.passwordHash,
      role: payload.role,
      ...(payload.role === "DOCTOR" && {
        doctorProfile: { create: {} },
      }),
    },
    include: { doctorProfile: true },
  });

  // Clean up any pending records for this email
  await prisma.verificationToken.deleteMany({ where: { identifier: email } });

  // Send welcome email (don't block registration if email fails)
  try {
    await sendWelcomeEmail(createdUser.email, createdUser.name || createdUser.firstName || 'User');
    console.log('✅ Welcome email sent successfully');
  } catch (emailError: any) {
    console.error('⚠️ Failed to send welcome email (non-critical):', emailError.message);
    // Continue - email failure shouldn't break registration
  }

  return createdUser;
}

export async function resendOTP(email: string): Promise<void> {
  // Do not resend if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error("User already exists");

  const record = await prisma.verificationToken.findUnique({ where: { identifier: email } });
  if (!record) {
    throw new Error("No pending verification found. Please register again.");
  }

  let payload: any;
  try {
    payload = JSON.parse(record.token || "{}");
  } catch {
    await prisma.verificationToken.deleteMany({ where: { identifier: email } });
    throw new Error("Verification data corrupted. Please register again.");
  }

  // Generate and set new OTP, reset attempts, and extend expiry
  const newOtp = generateOTP();
  const newExpires = new Date(Date.now() + 10 * 60 * 1000);

  payload.otp = newOtp;
  payload.attempts = 0;

  await prisma.verificationToken.update({
    where: { identifier: email },
    data: {
      token: JSON.stringify(payload),
      expires: newExpires,
      otp: newOtp,
      attempts: 0,
    },
  });

  await sendOTP(email, newOtp);
}
