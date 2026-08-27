import { Blogsection } from "@/components/hero/blog/Blogsection";
import { CtaSection } from "@/components/hero/CTA/CtaSection";
import { FAQSection } from "@/components/hero/FAQ/FAQSection";
import { SearchableDoctorsWrapper } from "@/components/hero/SearchableDoctorsWrapper";
import { ServicesSection } from "@/components/hero/ServicesSection";
import { TestimonialsSection } from "@/components/hero/Testimonials/TestimonialsSection";
import { getFeaturedDoctors } from "@/lib/data/publicData";
import Image from "next/image";

// Prerendered with hourly refresh; doctor and blog mutations revalidate this
// page directly, so content changes still appear immediately.
export const revalidate = 3600;

export const metadata = {
  title: {
    absolute: "Best Orthopaedic Surgeons in Western Australia | BOS",
  },
  description:
    "Find orthopaedic surgeons across Western Australia by specialty, location, qualifications and patient reviews. Choose the right surgeon for your care.",
  alternates: { canonical: "/" },
  // Note: no per-page `openGraph` override here — doing so would drop the
  // site-wide og:image from src/app/opengraph-image.js. og:title/description
  // are inherited from the root layout; the page <title>/description above
  // remain page-specific for search.
};

export default async function Home() {
  const featuredDoctors = await getFeaturedDoctors();

  return (
    <>
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <SearchableDoctorsWrapper featuredDoctors={featuredDoctors} />
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
