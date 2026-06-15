"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogIn, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const ProfileDropdown = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Get user image from session
  const userImage = session?.user?.image;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer rounded-full overflow-hidden w-16 h-16 max-sm:w-12 max-sm:h-12 flex items-center justify-center bg-primary border-2 border-primary/20 shadow-sm hover:border-primary/40 transition-all">
          {userImage ? (
            <Image
              src={userImage}
              alt="Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <User className="text-primary-foreground h-8 w-8" />
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {!session && (
          <>
            <DropdownMenuItem asChild className="cursor-pointer gap-2 transition-all duration-200 hover:translate-x-0.5 hover:!bg-primary/10 hover:!text-primary">
              <Link href="/login" className="w-full flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer gap-2 transition-all duration-200 hover:translate-x-0.5 hover:!bg-primary/10 hover:!text-primary">
              <Link href="/signup" className="w-full flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Link>
            </DropdownMenuItem>
          </>
        )}

        {session?.user?.role === "PATIENT" && (
          <>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/profile" className="w-full">View Profile</Link>
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
