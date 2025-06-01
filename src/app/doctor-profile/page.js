"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React from 'react'
import { profileHeader } from "@/data/profileHeader";
const page = () => {
  return (
    <div className="container m-auto">
     {profileHeader.createProfile.map((data) => (
            <ProfileHeader
              key={data.heading}
              heading={data.heading}
              step1={data.step1}
              step2={data.step2}
              step3={data.step3}
            />
          ))}
    
    </div>
  )
}

export default page