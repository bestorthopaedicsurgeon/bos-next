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
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getDoctorProfile } from "@/lib/apiCalls/server/doctor";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.bestorthopaedicsurgeon.com.au";

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
  const res = await getDoctorProfile(slug);

  if (!res || !res.success || !res.data) {
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
  let description = `View the profile of ${
    formattedTitle ? `${formattedTitle}. ` : ""
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
const Page = async ({ params, searchParams }) => {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const writeReview = resolvedSearchParams?.writeReview === "true";

  // Check if we should redirect from numeric ID to slug
  const isNumeric = !isNaN(Number(slug));

  const res = await getDoctorProfile(slug);

  if (res?.success && res.data) {
    // If it was a numeric ID, redirect to the slug for SEO
    if (isNumeric && res.data.slug) {
      redirect(`/doctor/${res.data.slug}`);
    }
  }

  if (!res || !res.success) {
    console.error("Doctor profile not found");
    // redirect("/doctor-registration");
  }

  let doctData;

  if (res.success && res.data) {
    doctData = res.data;
    console.log("doctData", doctData);
  }

  const formattedTitle = formatTitle(doctData?.title);
  const designation = doctData?.designation || "Orthopaedic Surgeon";
  const pageTitle = `${formattedTitle ? `${formattedTitle}. ` : ""}${
    doctData?.name || "Doctor"
  }`;

  const canonicalSlug = doctData?.slug || slug;

  // Build description for schema (strip HTML if any)
  const schemaDescription = doctData?.about
    ? doctData.about.replace(/<[^>]*>/g, "").substring(0, 300)
    : `${pageTitle} is a specialist orthopaedic surgeon in Australia.`;

  // ✅ Physician JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: pageTitle,
    jobTitle: designation,
    medicalSpecialty: "Orthopedic Surgery",
    description: schemaDescription,
    url: `${BASE_URL}/doctor/${canonicalSlug}`,
    ...(doctData?.image && { image: doctData.image }),
    ...(doctData?.phone && { telephone: doctData.phone }),
    address: {
      "@type": "PostalAddress",
      addressLocality: doctData?.location || "",
      addressCountry: "AU",
    },
    ...(doctData?.hospitalAffiliations?.length > 0 && {
      hospitalAffiliation: doctData.hospitalAffiliations.map((h) => ({
        "@type": "Hospital",
        name: h.name || h,
      })),
    }),
  };

  return (
    <div className="">
      {/* ✅ JSON-LD Physician Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {docProfile_Details.stepper.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={`${formattedTitle ? `${formattedTitle}. ` : ""}${
            doctData?.name || "Doctor"
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

      <DocTabs doctData={doctData} writeReview={writeReview} />
    </div>
  );
};

export default Page;