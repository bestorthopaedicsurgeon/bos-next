import { SearchableSurgeonsWrapper } from "@/components/surgeonsPage/SearchableSurgeonsWrapper";
import InfoSectionLeft from "@/components/surgeonsPage/InfoSectionLeft";
import InfoSectionRight from "@/components/surgeonsPage/InfoSectionRight";
import Types from "@/components/surgeonsPage/Types";
import React, { Suspense } from "react";
import InfoSectionLefta from "@/components/surgeonsPage/infoSectionLefta";
import InfoSectionRightb from "@/components/surgeonsPage/infoSectionRightb";
import { JsonLd } from "@/components/seo/JsonLd";
import { seoLocations } from "@/lib/constants/seoLocations";
import { seoSubspecialties } from "@/lib/constants/seoSubspecialties";
import { LinkPillsSection } from "@/components/seo/LinkPillsSection";

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.bestorthopaedicsurgeon.com.au";

export const metadata = {
  title: "Orthopaedic Surgeons in Western Australia",
  description:
    "Browse and compare the best orthopaedic surgeons across Western Australia. Filter by subspecialty such as knee, hip, shoulder, spine, sports, hand and foot, and find the right specialist for your care.",
  alternates: { canonical: "/surgeons" },
  // No per-page `openGraph` override (would drop the site-wide og:image).
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Surgeons",
      item: `${SITE_URL}/surgeons`,
    },
  ],
};

const SurgeonsPage = () => {
  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema} />
      <Suspense fallback={<div>Loading Surgeons...</div>}>
        <SearchableSurgeonsWrapper />
      </Suspense>
      <InfoSectionLeft image={"/surgeons/info1.png"} />
      <InfoSectionRight image={"/surgeons/info2.png"} />
      <Types />
      <InfoSectionLefta image={"/surgeons/info3.png"} />
      <InfoSectionRightb image={"/surgeons/info4.png"} />

      {/* Polished internal-linking: browse by subspecialty and by location */}
      <LinkPillsSection
        title="Find the best orthopaedic surgeons by subspecialty"
        subtitle="Browse specialists by the part of the body or condition they treat."
        links={seoSubspecialties.map((s) => ({
          href: `/${s.slug}`,
          label: s.heading,
        }))}
      />
      <LinkPillsSection
        title="Find the best orthopaedic surgeons by location"
        subtitle="Browse orthopaedic surgeons across Perth and regional Western Australia."
        links={seoLocations.map((l) => ({
          href: `/best-orthopaedic-surgeons/${l.slug}`,
          label: `Best Orthopaedic Surgeons in ${l.name}`,
        }))}
      />
    </div>
  );
};

export default SurgeonsPage;
