import { Blogsection } from "@/components/hero/blog/Blogsection";
import { CtaSection } from "@/components/hero/CTA/CtaSection";
import { FeaturedSurgeonsSection } from "@/components/hero/FeaturedSurgeonsSection";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServicesSection } from "@/components/hero/ServicesSection";
import { TestimonialsSection } from "@/components/hero/Testimonials/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedSurgeonsSection />
      <TestimonialsSection />
      <CtaSection />
      <Blogsection />
      <ServicesSection />
    </div>
  );
}
