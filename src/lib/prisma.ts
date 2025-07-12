
import { PrismaClient } from '@prisma/client';
import { env } from 'process';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

console.log("Initializing Prisma Client...", env.DATABASE_URL);

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
