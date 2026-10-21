import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// The signed-in ADMIN session, or null. Every advertising admin route uses it.
export async function getAdminSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || session.user.role !== "ADMIN") return null;
  return session;
}
