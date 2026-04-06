"use client";
import React, { useState, useEffect } from "react";
import DoctorProfileForm from "@/components/registration/DoctorProfileForm";
import { useSearchParams } from "next/navigation";

const AdminCreateDoctorPage = () => {
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

export default AdminCreateDoctorPage;
