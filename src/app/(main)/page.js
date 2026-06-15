import { Blogsection } from "@/components/hero/blog/Blogsection";
import { CtaSection } from "@/components/hero/CTA/CtaSection";
import { FAQSection } from "@/components/hero/FAQ/FAQSection";
import { SearchableDoctorsWrapper } from "@/components/hero/SearchableDoctorsWrapper";
import { ServicesSection } from "@/components/hero/ServicesSection";
import { TestimonialsSection } from "@/components/hero/Testimonials/TestimonialsSection";
import Image from "next/image";

export const metadata = {
  title: {
    absolute: "Best Orthopaedic Surgeons in Western Australia | BOS",
  },
  description:
    "Find the best orthopaedic surgeons in Western Australia. Compare profiles, qualifications and patient reviews, and book an appointment with a knee, hip, shoulder or spine specialist near you.",
  alternates: { canonical: "/" },
  // Note: no per-page `openGraph` override here — doing so would drop the
  // site-wide og:image from src/app/opengraph-image.js. og:title/description
  // are inherited from the root layout; the page <title>/description above
  // remain page-specific for search.
};

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
        <FAQSection />
      </div>
    </>
  );
}
