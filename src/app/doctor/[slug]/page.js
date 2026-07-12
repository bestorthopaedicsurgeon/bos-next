import ProfileHeader from "@/components/reusable/profileHeader";
import React from "react";

import { docProfile_Details } from "@/data/doctorProfile";
import { profileHeader } from "@/data/profileHeader";
import AvailabilityCalendar from "@/components/calendar";
import HospitalAffiliations from "@/components/docProfile/HospAffil";
import DocInfo from "@/components/docProfile/docInfo";
import DocProfile from "@/components/docProfile/docProfile";
import { TabsList } from "@/components/ui/tabs";
import { DocTabs } from "@/components/docProfile/tabs";
import { redirect } from "next/navigation";
import { FindAnotherSurgeonCTA } from "@/components/docProfile/FindAnotherSurgeonCTA";
import {
  getDoctorPageData,
  getPublicDoctorSlugs,
} from "@/lib/data/publicData";
import { JsonLd } from "@/components/seo/JsonLd";
import ReviewScroller from "@/components/docProfile/ReviewScroller";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.bestorthopaedicsurgeon.com.au";

// Prerendered per doctor with a daily safety net; the doctor mutation APIs
// call revalidateDoctorContent() so edits show up immediately. Unknown or
// hidden slugs still render on demand (dynamicParams default).
export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = await getPublicDoctorSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Helper to capitalise first letter only
const formatTitle = (title) => {
  if (!title) return "";
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

// ─────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await getDoctorPageData(slug);

  if (!res || !res.data) {
    return {
      title: "Doctor Profile Not Found | Best Orthopaedic Surgeons",
      robots: { index: false, follow: false },
    };
  }

  const doctData = res.data;

  const formattedTitle = formatTitle(doctData?.title);
  const doctorName = doctData?.name || "Doctor";
  const designation = doctData?.designation
    ? doctData.designation.charAt(0).toUpperCase() +
    doctData.designation.slice(1).toLowerCase()
    : "Orthopaedic Surgeon";
  const location = doctData?.location ? ` in ${doctData.location}` : "";

  const pageTitle = `${formattedTitle ? `${formattedTitle}. ` : ""}${doctorName} - ${designation}${location}`;

  // Use about field for description if available
  let description = `View the profile of ${formattedTitle ? `${formattedTitle}. ` : ""
    }${doctorName}, ${designation} in Australia. Book an appointment on Best Orthopaedic Surgeons.`;

  if (doctData?.about) {
    const stripped = doctData.about.replace(/<[^>]*>/g, ""); // strip HTML tags
    description =
      stripped.length > 160 ? stripped.substring(0, 157) + "..." : stripped;
  }

  const canonicalSlug = doctData?.slug || slug;
  const canonicalUrl = `${BASE_URL}/doctor/${canonicalSlug}`;

  return {
    title: pageTitle,
    description: description,
    // ✅ Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description: description,
      url: canonicalUrl,
      type: "profile",
      images: doctData?.image
        ? [
          {
            url: doctData.image,
            alt: `${formattedTitle ? `${formattedTitle}. ` : ""}${doctorName}`,
          },
        ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description,
      images: doctData?.image ? [doctData.image] : undefined,
    },
  };
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
const Page = async ({ params }) => {
  const { slug } = await params;

  // Check if we should redirect from numeric ID to slug
  const isNumeric = !isNaN(Number(slug));

  const res = await getDoctorPageData(slug);

  if (res?.data) {
    // If it was a numeric ID, redirect to the slug for SEO
    if (isNumeric && res.data.slug) {
      redirect(`/doctor/${res.data.slug}`);
    }
  }

  if (!res) {
    console.error("Doctor profile not found");
    // redirect("/doctor-registration");
  }

  const doctData = res?.data;

  const formattedTitle = formatTitle(doctData?.title);
  const designation = doctData?.designation || "Orthopaedic Surgeon";
  const pageTitle = `${formattedTitle ? `${formattedTitle}. ` : ""}${doctData?.name || "Doctor"
    }`;

  const canonicalSlug = doctData?.slug || slug;

  // Build description for schema (strip HTML if any)
  const schemaDescription = doctData?.about
    ? doctData.about.replace(/<[^>]*>/g, "").substring(0, 300)
    : `${pageTitle} is a specialist orthopaedic surgeon in Australia.`;

  // ── Build structured postal addresses from the doctor's practice locations ──
  const practices = Array.isArray(doctData?.practices) ? doctData.practices : [];
  const parsePostcode = (val) => {
    const m = String(val || "").match(/\d{4}/);
    return m ? m[0] : undefined;
  };
  const parseLocality = (addr, fallback) => {
    const m = String(addr || "").match(/([A-Za-z][A-Za-z\s]*?)\s+WA\s*\d{4}/);
    return m ? m[1].trim() : fallback || undefined;
  };
  const practiceAddresses = practices
    .filter((p) => p && (p.clinicAddress || p.postCode))
    .map((p) => ({
      "@type": "PostalAddress",
      streetAddress: p.clinicAddress || undefined,
      addressLocality: parseLocality(p.clinicAddress, doctData?.location),
      addressRegion: "WA",
      postalCode: parsePostcode(p.postCode),
      addressCountry: "AU",
    }));
  const primaryPhone = practices.find((p) => p?.phone)?.phone || doctData?.phone;

  // Review aggregate for the schema, computed in the same single query as the
  // profile (see getDoctorPageData).
  const aggregateRating = res?.aggregateRating || null;

  const cleanSubspecialties = Array.isArray(doctData?.subspecialities)
    ? doctData.subspecialities.filter(Boolean)
    : [];

  // ✅ Physician JSON-LD Schema (undefined fields are dropped by JSON.stringify)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${BASE_URL}/doctor/${canonicalSlug}#physician`,
    name: pageTitle,
    jobTitle: designation,
    medicalSpecialty: "Orthopedic",
    description: schemaDescription,
    url: `${BASE_URL}/doctor/${canonicalSlug}`,
    areaServed: { "@type": "State", name: "Western Australia" },
    ...(doctData?.image && { image: doctData.image }),
    ...(primaryPhone && { telephone: primaryPhone }),
    ...(cleanSubspecialties.length > 0 && { knowsAbout: cleanSubspecialties }),
    ...(practiceAddresses.length > 0 && {
      address:
        practiceAddresses.length === 1
          ? practiceAddresses[0]
          : practiceAddresses,
    }),
    ...(aggregateRating && { aggregateRating }),
    ...(Array.isArray(doctData?.hospitalAffiliations) &&
      doctData.hospitalAffiliations.length > 0 && {
        hospitalAffiliation: doctData.hospitalAffiliations.map((h) => ({
          "@type": "Hospital",
          name: (h && (h.name || h)) || undefined,
          ...(h?.address && { address: h.address }),
        })),
      }),
  };

  // ✅ Breadcrumb JSON-LD Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Surgeons",
        item: `${BASE_URL}/surgeons`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageTitle,
        item: `${BASE_URL}/doctor/${canonicalSlug}`,
      },
    ],
  };

  return (
    <div className="">
      {/* ✅ JSON-LD structured data */}
      <JsonLd data={schemaData} />
      <JsonLd data={breadcrumbSchema} />

      {/* Scrolls to the review form when arriving via a "Write a Review" button */}
      <ReviewScroller />

      {docProfile_Details.stepper.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={`${formattedTitle ? `${formattedTitle}. ` : ""}${doctData?.name || "Doctor"
            }`}
        />
      ))}

      <div className="w-full max-w-7xl mx-auto flex flex-col min-lg:flex-row items-start gap-10 mt-10">
        {/* left area */}
        <div className="flex-1 w-full flex flex-col gap-5">
          <DocProfile docProfile_Details={doctData} />
          <DocInfo docProfile_Details={doctData} />
        </div>
        {/* right area */}
        <div className="w-full min-lg:w-[450px] xl:w-[500px] flex flex-col gap-5 min-lg:self-stretch">
          <AvailabilityCalendar
            availability={doctData?.DoctorAvailabilityTime}
          />
          <HospitalAffiliations
            hospitals={doctData?.hospitalAffiliations}
            className="flex-1"
          />
        </div>
      </div>

      <DocTabs doctData={doctData} />
      <FindAnotherSurgeonCTA />
    </div>
  );
};

export default Page;