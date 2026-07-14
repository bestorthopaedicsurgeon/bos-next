import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // updated from number → string
      role: string;
      doctorId?: number | null;
      image?: string;
    } & DefaultSession["user"];
    token: {
      id: string; // updated from number → string
      role: string;
      image?: string;
    };
  }

  interface User extends DefaultUser {
    role: string;
    image?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string;
    image?: string;
    doctorId?: number | null;
  }
}