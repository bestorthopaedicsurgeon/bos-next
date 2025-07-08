import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

export async function registerUser(data: any): Promise<User> {
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

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      phone,
      name,
      firstName: firstName || null,
      lastName: lastName || null,
      password: hashedPassword,
      role,
      ...(role === "DOCTOR" && {
        doctorProfile: {
          create: {},
        },
      }),
    },
    include: {
      doctorProfile: true,
    },
  });

  return user;
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid credentials");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  return user;
}
