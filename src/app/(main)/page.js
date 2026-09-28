import { Blogsection } from "@/components/hero/blog/Blogsection";
import { CtaSection } from "@/components/hero/CTA/CtaSection";
import { FAQSection } from "@/components/hero/FAQ/FAQSection";
import { SearchableDoctorsWrapper } from "@/components/hero/SearchableDoctorsWrapper";
import { ServicesSection } from "@/components/hero/ServicesSection";
import { TestimonialsSection } from "@/components/hero/Testimonials/TestimonialsSection";
import { getFeaturedDoctors } from "@/lib/data/publicData";
import { LinkPillsSection } from "@/components/seo/LinkPillsSection";
import { seoLocations } from "@/lib/constants/seoLocations";
import { seoSubspecialties } from "@/lib/constants/seoSubspecialties";
import Image from "next/image";

// Prerendered with hourly refresh; doctor and blog mutations revalidate this
// page directly, so content changes still appear immediately.
export const revalidate = 3600;

export const metadata = {
  // Keyword map: "orthopaedic surgeon near me" (home already ranks for it),
  // keeping the brand phrase in the title.
  title: {
    absolute: "Orthopaedic Surgeon Near Me | Best Orthopaedic Surgeons in WA",
  },
  description:
    "Find an orthopaedic surgeon near you. Compare 100+ orthopaedic surgeons across Perth and Western Australia by specialty, suburb, hospital and patient reviews.",
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
        {/* Same pill card as /surgeons: gives every specialty and location
            page a link from the strongest page on the site. */}
        <LinkPillsSection
          title="Find an orthopaedic surgeon near you"
          subtitle="Browse orthopaedic surgeons by specialty or by location across Perth and Western Australia."
          links={[
            ...seoSubspecialties.map((sub) => ({
              href: `/${sub.slug}`,
              label: sub.heading,
            })),
            ...seoLocations.map((loc) => ({
              href: `/best-orthopaedic-surgeons/${loc.slug}`,
              label: `Orthopaedic Surgeons in ${loc.name}`,
            })),
          ]}
        />
        <FAQSection />
      </div>
    </>
  );
}
