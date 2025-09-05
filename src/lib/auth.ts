import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || profile.email.split('@')[0],
          email: profile.email,
          image: profile.picture,
          role: 'PATIENT' // Default role for OAuth users
        };
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid email profile"
        }
      }
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Type checking fix
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid credentials");
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password,
        );
        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Allow OAuth sign-in without password
      if (account?.provider === 'google') {
        return true;
      }
      // For credentials provider, check if user exists and has password
      if (user) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });
        if (existingUser && !existingUser.password) {
          // User exists but doesn't have a password (OAuth user)
          throw new Error('Please sign in with Google');
        }
      }
      return true;
    },

    async jwt({ token, user, account, profile }) {
      if (user && account) {
        if (account.provider === 'google' && profile) {

          const existingUser = await prisma.user.upsert({
            where: { email: user.email! },
            update: {
              name: user.name!,
              image: user.image,
              emailVerified: new Date(),
            },
            create: {
              email: user.email!,
              name: user.name!,
              role: "PATIENT",
              image: user.image,
              emailVerified: new Date(),
              password: '', // Temporary password for OAuth users
            },
          });
          token.id = existingUser.id;
          token.role = existingUser.role;
        } else {
          token.id = user.id as string;
          token.role = user.role as string;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        const doctor = await prisma.doctorProfile.findUnique({
          where: { userId: token.id },
          select: { id: true },
        });

        session.user.id = token.id;
        session.user.role = token.role;
        session.user.doctorId = doctor?.id || null;
      }

      return session;
    },
  },
  pages: {
    signIn: "/login", // optional
  },
  secret: process.env.NEXTAUTH_SECRET,
};
