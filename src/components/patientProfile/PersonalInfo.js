"use client";
import React from "react";

const PersonalInfo = ({ user }) => {
  const infoFields = [
    { label: "Name", value: user?.name || "N/A" },
    { label: "Phone number", value: user?.phone || "N/A" },
    { label: "Age", value: user?.age || "N/A" },
    { label: "Date of birth", value: user?.dob ? new Date(user.dob).toLocaleDateString('en-GB') : "N/A" },
    { label: "Email Address", value: user?.email || "N/A" },
  ];

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#232323] mb-8 font-syne">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
        {infoFields.map((field, index) => (
          <div key={index}>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">{field.label}</p>
            <p className="text-[#232323] font-medium text-sm">{field.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
