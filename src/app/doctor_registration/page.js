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
      {/*need to check size */}
      {profileHeader.welcome.map((data, key) => (
        <div key={key} className="text-center mt-[77px]">
          <h3 className="text-(--primary)">{data.heading}</h3>
          <span>{data.subTxt}</span>
        </div>
      ))}

      <form action=""></form>
    </div>
  );
};

export default page;
