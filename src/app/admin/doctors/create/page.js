"use client";
import React, { useState, useEffect, Suspense } from "react";
import DoctorProfileForm from "@/components/registration/DoctorProfileForm";
import { useSearchParams } from "next/navigation";

const AdminCreateDoctorContent = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId"); // Optionally pass a userId to link the profile to a user
  
  return (
    <div className="">
      <DoctorProfileForm 
        mode="create" 
        userRole="ADMIN" 
        doctorId={userId} // Passing userId if exists
      />
    </div>
  );
};

export default function AdminCreateDoctorPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#83C5BE]"></div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <AdminCreateDoctorContent />
    </Suspense>
  );
}
