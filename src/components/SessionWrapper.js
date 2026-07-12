"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ children }) {
  // No refetch on window focus: each refetch is a serverless invocation, and
  // session data here only changes on sign in/out.
  return (
    <SessionProvider refetchOnWindowFocus={false}>{children}</SessionProvider>
  );
}
