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
import Image from "next/image";

const ProfileDropdown = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // Get user image from session
  const userImage = session?.user?.image;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer rounded-full overflow-hidden">
          {userImage ? (
            <Image
              src={userImage}
              alt="Profile"
              width={100}
              height={100}
              className="w-full h-full max-sm:w-8 max-sm:h-8 object-cover rounded-full"
            />
          ) : (
            <div className="bg-primary p-3 max-sm:p-2">
              <User className="text-primary-foreground h-5 w-5 max-sm:h-4 max-sm:w-4" />
            </div>
          )}
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
            {/* <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/patient-profile" className="w-full">View Profile</Link>
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
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
