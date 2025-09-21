import ProfileHeader from "@/components/reusable/profileHeader";
import { WhyJoinBOS } from "@/components/surgeonProfilePage/WhyJoinBOS";
import { HowItWorks } from "@/components/surgeonProfilePage/HowItWorks";
import { EligibilitySection } from "@/components/surgeonProfilePage/EligibilitySection";
import { CallToAction } from "@/components/surgeonProfilePage/CallToAction";
import React from "react";

const HowToMakeSurgeonsProfilePage = () => {
  return (
  
      <div className="container">
        <ProfileHeader heading={"Create Your Surgeon Profile"} step1={"surgeons"} step2={"registration guide"} />
        <WhyJoinBOS />
     
      <HowItWorks />
     
        <EligibilitySection />
      <CallToAction />
      </div>
   
  );
};

export default HowToMakeSurgeonsProfilePage;
