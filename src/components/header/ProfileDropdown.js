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
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </DropdownMenuItem>
        )}

        {session?.user?.role === "PATIENT" && (
          <>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push("/patient-profile")}
            >
              View Profile
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
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push("/doctor")}
            >
              View Profile
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
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => router.push("/admin")}
            >
              Dashboard
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
