"use client";
import { HeroSection } from "./HeroSection";
import { FeaturedSurgeonsSection } from "./FeaturedSurgeonsSection";

export const SearchableDoctorsWrapper = ({ featuredDoctors }) => {
  return (
    <>
      <HeroSection />
      <FeaturedSurgeonsSection doctors={featuredDoctors} />
    </>
  );
};
