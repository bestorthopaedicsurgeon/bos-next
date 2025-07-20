
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
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="container">
      <HeroSection />
      <AboutUsSection />
      <WhoWeAre />
      <WhyChooseUs />
      <CtaSectionAbout />
      <FeaturedSurgeonsSection />
      <Partners />
      <CtaSection />
      </div>
      <TestimonialsSection />
      <div className="container">
      <ServicesSection />
      </div>
    </div>
  );
};

export default AboutPage;
