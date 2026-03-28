"use client";
import DoctorProfileForm from "@/components/registration/DoctorProfileForm";
import React from "react";

const DoctorRegistrationPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Doctor Profile Registration</h1>
      <DoctorProfileForm 
        mode="create" 
        userRole="DOCTOR" 
      />
    </div>
  );
};

export default DoctorRegistrationPage;
