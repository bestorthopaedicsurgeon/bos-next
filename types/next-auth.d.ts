/**
 * Ambient module declaration for next-auth.
 * The installed next-auth@4.24.11 package is missing its index.d.ts.
 * This provides the bare minimum type surface to satisfy TypeScript
 * until node_modules is reinstalled cleanly.
 */
declare module "next-auth" {
  import type { NextApiRequest, NextApiResponse } from "next";

  export interface DefaultSession {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
    expires: string;
  }

  export interface Session extends DefaultSession {}

  export interface DefaultUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  export interface User extends DefaultUser {}

  export interface Account {
    provider: string;
    type: string;
    providerAccountId: string;
    access_token?: string;
    token_type?: string;
    id_token?: string;
    refresh_token?: string;
    scope?: string;
    expires_at?: number;
    session_state?: string;
  }

  export interface Profile {
    sub?: string;
    name?: string;
    email?: string;
    image?: string;
  }

  export interface CallbacksOptions {
    signIn?: (params: { user: User; account: Account | null; profile?: Profile; email?: { verificationRequest?: boolean }; credentials?: Record<string, any> }) => any;
    jwt?: (params: { token: any; user?: User; account?: Account | null; profile?: Profile; trigger?: string; isNewUser?: boolean; session?: any }) => any;
    session?: (params: { session: Session; token: any; user?: User }) => any;
    redirect?: (params: { url: string; baseUrl: string }) => any;
  }

  export interface NextAuthOptions {
    providers: any[];
    callbacks?: CallbacksOptions;
    pages?: any;
    session?: any;
    secret?: string;
    adapter?: any;
    [key: string]: any;
  }

  export function getServerSession(...args: any[]): Promise<Session | null>;
  export default function NextAuth(options: NextAuthOptions): any;
}

declare module "next-auth/jwt" {
  export interface JWT {
    [key: string]: any;
  }
  export function getToken(params: any): Promise<JWT | null>;
}

declare module "next-auth/next" {
  import type { NextAuthOptions } from "next-auth";
  export function getServerSession(...args: any[]): Promise<any>;
}

declare module "next-auth/providers/google" {
  export default function GoogleProvider(options: {
    clientId: string;
    clientSecret: string;
    [key: string]: any;
  }): any;
}

declare module "next-auth/providers/credentials" {
  export default function CredentialsProvider(options: any): any;
}
