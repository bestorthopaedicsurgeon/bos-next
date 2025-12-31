"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Calendar, Edit3 } from "lucide-react";

const PatientInfo = ({ user }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-6 shadow-sm">
      <div className="relative h-28 w-28 shrink-0 rounded-xl overflow-hidden border border-gray-100">
        {user?.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-50 text-gray-400">
            <User className="h-10 w-10" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900">{user?.name || "User"}</h1>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <span>Joined on {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : "20/05/2025"}</span>
          </div>
        </div>
        <Link 
          href="/profile/edit"
          className="mt-2 inline-flex items-center gap-2 bg-[#2F797B] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all w-fit"
        >
          <Edit3 className="h-4 w-4" />
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default PatientInfo;
