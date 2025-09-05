"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const ProfileDropdown = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="bg-primary cursor-pointer rounded-full p-3">
          <User className="text-primary-foreground h-8 w-8 max-sm:h-5 max-sm:w-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {!session && (
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/login" className="w-full">Login</Link>
          </DropdownMenuItem>
        )}

        {session?.user?.role === "PATIENT" && (
          <>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/patient-profile" className="w-full">View Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </DropdownMenuItem>
          </>
        )}

        {session?.user?.role === "DOCTOR" && (
          <>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/doctor" className="w-full">View Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </DropdownMenuItem>
          </>
        )}

        {session?.user?.role === "ADMIN" && (
          <>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/admin" className="w-full">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut({ callbackUrl: "/login" })}
            >
              Logout
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
