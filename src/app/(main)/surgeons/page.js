import { AllSurgeons } from "@/components/surgeonsPage/AllSurgeons";
import { HeroSection } from "@/components/surgeonsPage/Hero";
import React from "react";

const SurgeonsPage = () => {
  return (
    <div>
      <HeroSection />
      <AllSurgeons />
    </div>
  );
};

export default SurgeonsPage;
