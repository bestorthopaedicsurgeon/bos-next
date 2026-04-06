"use client";
import DoctorProfileForm from "@/components/registration/DoctorProfileForm";
import React from "react";

const DoctorRegistrationPage = () => {
  return (
    <div className="">
      <DoctorProfileForm 
        mode="create" 
        userRole="DOCTOR" 
      />
    </div>
  );
};

export default DoctorRegistrationPage;
