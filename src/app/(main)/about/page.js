export const metadata = {
  // Keyword map: "best orthopaedic surgeon".
  title: { absolute: 'Best Orthopaedic Surgeon in WA | About Our Directory' },
  description: 'How we help you find the best orthopaedic surgeon in Perth and Western Australia, with verified profiles and real patient reviews in one independent directory.',
  alternates: { canonical: '/about' },
};

import { AboutUsSection } from "@/components/aboutPage/AboutUsSection";
import { CtaSectionAbout } from "@/components/aboutPage/CtaSection";
import { HeroSection } from "@/components/aboutPage/Hero";
import { Partners } from "@/components/aboutPage/Partners";
import { WhoWeAre } from "@/components/aboutPage/WhoWeAre";
import { WhyChooseUs } from "@/components/aboutPage/WhyChooseUs";
import { CtaSection } from "@/components/hero/CTA/CtaSection";
import { FeaturedSurgeonsSection } from "@/components/hero/FeaturedSurgeonsSection";
import { ServicesSection } from "@/components/hero/ServicesSection";
import { TestimonialsSection } from "@/components/hero/Testimonials/TestimonialsSection";
import { getFeaturedDoctors } from "@/lib/data/publicData";
import React from "react";

// Same refresh as the homepage, which shares the featured surgeon lineup.
export const revalidate = 3600;

const AboutPage = async () => {
  const featuredDoctors = await getFeaturedDoctors();

  return (
    <div>
      <div className="container">
      <HeroSection />
      <AboutUsSection />
      <WhoWeAre />
      <WhyChooseUs />
      </div>
      <CtaSectionAbout />
      <div className="container">
      <FeaturedSurgeonsSection doctors={featuredDoctors} />
      </div>
      <TestimonialsSection />
      {/* <Partners /> */}
      <div className="container">
      <CtaSection />
      </div>
      
      {/* <div className="container">
      <ServicesSection />
      </div> */}
    </div>
  );
};

export default AboutPage;
