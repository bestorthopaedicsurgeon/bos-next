import { Blogsection } from "@/components/hero/blog/Blogsection";
import { CtaSection } from "@/components/hero/CTA/CtaSection";
import { SearchableDoctorsWrapper } from "@/components/hero/SearchableDoctorsWrapper";
import { ServicesSection } from "@/components/hero/ServicesSection";
import { TestimonialsSection } from "@/components/hero/Testimonials/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <SearchableDoctorsWrapper />
      </div>
      <TestimonialsSection />
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <CtaSection />
        <Blogsection />
        <ServicesSection />
      </div>
    </>
  );
}
