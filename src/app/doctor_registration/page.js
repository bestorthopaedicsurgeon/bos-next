import ProfileHeader from "@/components/reusable/profileHeader";
import React from "react";
import { profileHeader } from "@/data/profileHeader";
import WelcomeTxt from "@/components/reusable/welcomeTxt";
const page = () => {
  return (
    <div>
      {profileHeader.createProfile.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={data.step2}
          step3={data.step3}
        />
      ))}
      {profileHeader.welcome.map((data, key) => (
        <WelcomeTxt
          key={key}
          header={data.heading}
          subTxt={data.subTxt}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default page;
