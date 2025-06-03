import { AllSurgeons } from "@/components/surgeonsPage/AllSurgeons";
import { HeroSection } from "@/components/surgeonsPage/Hero";
import InfoSectionLeft from "@/components/surgeonsPage/InfoSectionLeft";
import InfoSectionRight from "@/components/surgeonsPage/InfoSectionRight";
import Types from "@/components/surgeonsPage/Types";
import React from "react";

const SurgeonsPage = () => {
  return (
    <div>
      <HeroSection />
      <AllSurgeons />
      <InfoSectionLeft image={"/surgeons/info1.png"} />
      <InfoSectionRight image={"/surgeons/info2.png"} />
      <Types />
      <InfoSectionLeft image={"/surgeons/info3.png"} />
      <InfoSectionRight image={"/surgeons/info4.png"} />
    </div>
  );
};

export default SurgeonsPage;
