import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "ADMIN") {
    redirect("/unauthorized"); // or your login page
  }

  return (
    <div className="admin-layout">
      {/* Admin sidebar or header if needed */}
      {children}
    </div>
  );
}
