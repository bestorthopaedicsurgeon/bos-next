import React from "react";

const ProfileHeader = (props) => {
  const { heading, step1, step2, step3, headingAs = "h1" } = props;
  const Heading = headingAs;
  
  return (
    <div className="profile_head">
      <Heading className="text-(--secondary) text-center font-[700] max-lg:text-[24px] min-lg:text-[48px]">
        {heading}
      </Heading>
      {step1 && (
        <p className="text-(--secondary) text-center">{`${step1[0].toUpperCase() + step1.slice(1)} ${step2? `> ${step2}` : ""}  ${step3? `> ${step3}` : ""}`}</p>
      )}
    </div>
  );
};

export default ProfileHeader;
