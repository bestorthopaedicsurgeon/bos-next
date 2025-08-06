import React from "react";

const ProfileHeader = (props) => {
  const { heading, step1, step2, step3 } = props;
  
  return (
    <div className="profile_head">
      <h1 className="text-(--secondary)">{heading}</h1>
      {step1 && (
        <p className="text-(--secondary)">{`${step1[0].toUpperCase() + step1.slice(1)} ${step2? `> ${step2}` : ""}  ${step3? `> ${step3}` : ""}`}</p>
      )}
    </div>
  );
};

export default ProfileHeader;
