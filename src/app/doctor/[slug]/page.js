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
import GoogleReviews, {
  getGoogleReviews,
} from "@/components/docProfile/GoogleReviews";
import { doctorSpecialtyLabel, formatDoctorName } from "@/lib/utils";
import { SeoFaq } from "@/components/seo/SeoFaq";
import { seoLocations } from "@/lib/constants/seoLocations";
import { seoSubspecialties } from "@/lib/constants/seoSubspecialties";
import { norm } from "@/lib/seo/match";
import Link from "next/link";
import {
  hospitalName,
  hospitalNames,
  listJoin,
  practiceAreas,
  withArticle,
} from "@/lib/seo/copy";

// Public profile identity must always resolve to the production domain. This
// prevents local or preview environment values from leaking into canonicals,
// breadcrumbs, and Physician entity IDs.
const BASE_URL = "https://www.bestorthopaedicsurgeon.com.au";

// Prerendered per doctor with a daily safety net; the doctor mutation APIs
// call revalidateDoctorContent() so edits show up immediately. Unknown or
// hidden slugs still render on demand (dynamicParams default).
export const revalidate = 86400;

export async function generateStaticParams() {
  const slugs = await getPublicDoctorSlugs();
  return slugs.map((slug) => ({ slug }));
}

const cleanText = (value) =>
  String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const truncateDescription = (value, maxLength = 155) => {
  const text = cleanText(value);
  if (text.length <= maxLength) return text;

  const shortened = text.slice(0, maxLength - 3).trimEnd();
  const lastSpace = shortened.lastIndexOf(" ");
  return `${lastSpace > 0 ? shortened.slice(0, lastSpace) : shortened}...`;
};

const getDoctorDisplayName = (doctor) =>
  cleanText(formatDoctorName(doctor?.title, doctor?.name || "Doctor"));

// Search snippet written from the profile's own data. The about text is often
// the surgeon's own website copy, so it makes a poor, duplicated snippet.
const getDoctorMetaDescription = (doctor) => {
  const name = getDoctorDisplayName(doctor);
  const specialty = doctorSpecialtyLabel(doctor?.designation).toLowerCase();
  const location = cleanText(doctor?.location);
  const where = location ? `in ${location}, WA` : "in Western Australia";
  const areas = practiceAreas(doctor).slice(0, 3).map((a) => a.label);
  const lead = `${name} is an ${specialty} ${where}${
    areas.length > 0 ? ` treating ${listJoin(areas)} conditions` : ""
  }.`;
  return truncateDescription(
    `${lead} View qualifications, hospitals and reviews.`,
    160,
  );
};

const getDoctorDescription = (doctor, maxLength = 155) => {
  const about = cleanText(doctor?.about);

  if (about.length >= 100) {
    return truncateDescription(about, maxLength);
  }

  const location = cleanText(doctor?.location);
  const locationText = location
    ? ` in ${location}, Western Australia`
    : " across Western Australia";

  return truncateDescription(
    `View ${getDoctorDisplayName(doctor)}'s profile, specialties, qualifications, practice locations and patient reviews${locationText}.`,
    maxLength,
  );
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

  const displayName = getDoctorDisplayName(doctData);
  const specialty = doctorSpecialtyLabel(doctData?.designation);
  const location = doctData?.location ? ` in ${cleanText(doctData.location)}` : "";

  // Name searches ("dr rhys clark", "dr rhys clark reviews") are the main way
  // patients find a profile. Absolute, so the brand suffix does not push the
  // title past the length Google shows.
  const pageTitle = `${displayName} Reviews | ${specialty}${location}`;
  const description = getDoctorMetaDescription(doctData);

  const canonicalSlug = doctData?.slug || slug;
  const canonicalUrl = `${BASE_URL}/doctor/${canonicalSlug}`;

  return {
    title: { absolute: pageTitle },
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
            alt: displayName,
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

  const designation = doctData?.designation || "Orthopaedic Surgeon";
  const pageTitle = getDoctorDisplayName(doctData);

  const canonicalSlug = doctData?.slug || slug;
  const googleReviewData = getGoogleReviews(canonicalSlug);
  const primaryGoogleListing = googleReviewData?.listings?.find(
    (listing) => listing.primary,
  );

  // Link the physician entity to its Google listing, but never merge imported
  // Google ratings into BOS review markup. Google's review-snippet policy does
  // not allow ratings aggregated from another website.

  const schemaDescription = getDoctorDescription(doctData, 300);

  // ── Build structured postal addresses from the doctor's practice locations ──
  const practices = Array.isArray(doctData?.practices) ? doctData.practices : [];
  const parsePostcode = (val) => {
    const m = String(val || "").match(/\d{4}/);
    return m ? m[0] : undefined;
  };
  const parseLocality = (addr, fallback) => {
    const m = String(addr || "").match(
      /(?:^|,)\s*([A-Za-z][A-Za-z\s'-]*?)\s+WA(?:\s+\d{4})?\s*$/i,
    );
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

  // Individual review objects for the Physician schema. Valid because the
  // same reviews are now rendered in the page HTML (reviews tab).
  const reviewSchemaItems = (res?.reviewsData?.reviews || [])
    .slice(0, 5)
    .filter((r) => r.review)
    .map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.user?.name || "Verified patient" },
      datePublished: String(r.createdAt).slice(0, 10),
      reviewBody: r.review,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.averageRating,
        bestRating: 5,
        worstRating: 1,
      },
    }));

  const cleanSubspecialties = Array.isArray(doctData?.subspecialities)
    ? doctData.subspecialities.filter(Boolean)
    : [];

  // ✅ Physician JSON-LD Schema (undefined fields are dropped by JSON.stringify)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${BASE_URL}/doctor/${canonicalSlug}#physician`,
    name: pageTitle,
    occupationalCategory: designation,
    medicalSpecialty: "https://schema.org/Musculoskeletal",
    description: schemaDescription,
    url: `${BASE_URL}/doctor/${canonicalSlug}`,
    // Only the surgeon's own Google profile is the same entity; a shared
    // clinic listing is not.
    ...(primaryGoogleListing?.url && !primaryGoogleListing.shared && {
      sameAs: [primaryGoogleListing.url],
    }),
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
    ...(reviewSchemaItems.length > 0 && { review: reviewSchemaItems }),
    ...(Array.isArray(doctData?.hospitalAffiliations) &&
      doctData.hospitalAffiliations.length > 0 && {
        hospitalAffiliation: doctData.hospitalAffiliations.map((h) => ({
          "@type": "Hospital",
          name: hospitalName(h) || undefined,
          ...(h?.address && { address: h.address }),
        })),
      }),
  };

  // The specialty and suburb shown on the profile link to their directory
  // pages, when one exists.
  const firstSubspecialty = norm((cleanSubspecialties[0] || "").split(",")[0]);
  const subspecialtyPage = seoSubspecialties.find((s) =>
    s.matchTerms.some((t) => firstSubspecialty.includes(norm(t))),
  );
  const doctorLocation = norm(doctData?.location);
  const locationPage =
    seoLocations.find(
      (l) => l.type === "suburb" && l.suburbs.map(norm).includes(doctorLocation),
    ) || seoLocations.find((l) => l.suburbs.map(norm).includes(doctorLocation));
  const subspecialtyHref = subspecialtyPage ? `/${subspecialtyPage.slug}` : null;
  const locationHref = locationPage
    ? `/best-orthopaedic-surgeons/${locationPage.slug}`
    : null;

  // Questions answered only from this profile's own data.
  // Suburbs read cleanly where stored practice names and addresses vary.
  const practiceSuburbs = [
    ...new Set(
      practices
        .map((p) => parseLocality(p?.clinicAddress, undefined))
        .filter(Boolean),
    ),
  ];
  const hospitals = hospitalNames(doctData?.hospitalAffiliations);
  const areas = practiceAreas(doctData || {});
  const firstPracticeName = practices.find((p) => p?.phone)?.practiceName;
  const specialty = doctorSpecialtyLabel(doctData?.designation).toLowerCase();
  // Answers use the short form ("Dr Clark") so the full name is not repeated
  // in every sentence.
  const shortName = formatDoctorName(
    doctData?.title,
    (doctData?.name || "").trim().split(/s+/).pop(),
  );
  const profileFaqs = doctData
    ? [
        practiceSuburbs.length > 0 && {
          q: `Where does ${pageTitle} consult?`,
          a: `${shortName} consults in ${listJoin(practiceSuburbs)}. The Clinic Location section above lists each address and phone number.`,
        },
        hospitals.length > 0 && {
          q: `Which hospitals is ${pageTitle} affiliated with?`,
          a: `${shortName} is affiliated with ${listJoin(hospitals)}.`,
        },
        areas.length > 0 && {
          q: `What does ${pageTitle} specialise in?`,
          // Each area links to its directory page, styled like the links in
          // the specialty page FAQs.
          a: (
            <>
              {`${shortName} is ${withArticle(specialty)} whose areas of practice include `}
              {areas.map((area, i) => (
                <span key={area.href}>
                  {i > 0 && (i === areas.length - 1 ? " and " : ", ")}
                  <Link
                    href={area.href}
                    className="text-primary underline"
                    style={{ fontSize: "inherit", fontWeight: "inherit" }}
                  >
                    {area.label}
                  </Link>
                </span>
              ))}
              {" surgery."}
            </>
          ),
          aText: `${shortName} is ${withArticle(specialty)} whose areas of practice include ${listJoin(areas.map((a) => a.label))} surgery.`,
        },
        {
          q: `How do I book an appointment with ${pageTitle}?`,
          a: primaryPhone
            ? `Use the Book Appointment button on this page, or call ${firstPracticeName ? `${firstPracticeName} on ` : ""}${primaryPhone}.`
            : `Use the Book Appointment button on this page to request a time with ${shortName}.`,
        },
        {
          q: `Do I need a referral to see ${pageTitle}?`,
          a: `You can book a consultation without a referral, but Medicare only rebates specialist consultations when you have a valid referral from your GP or another specialist. Most patients visit their GP first, then book with the surgeon of their choice.`,
        },
      ].filter(Boolean)
    : [];

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
          // The doctor's name below is the page's h1.
          headingAs="div"
          step1={data.step1}
          step2={pageTitle}
        />
      ))}

      <div className="w-full max-w-7xl mx-auto flex flex-col min-lg:flex-row items-start gap-10 mt-10">
        {/* left area */}
        <div className="flex-1 w-full flex flex-col gap-5">
          <DocProfile docProfile_Details={doctData} locationHref={locationHref} />
          <DocInfo
            docProfile_Details={doctData}
            subspecialtyHref={subspecialtyHref}
          />
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

      <DocTabs
        doctData={doctData}
        initialReviews={res?.reviewsData}
        initialQuestions={res?.questions}
        googleReviews={
          <GoogleReviews
            slug={canonicalSlug}
            doctorName={pageTitle}
            data={googleReviewData}
          />
        }
      />
      {/* Same FAQ block as the location pages, built from this profile only */}
      <div className="w-full max-w-7xl mx-auto mt-16">
        <SeoFaq
          title={`Common questions about ${pageTitle}`}
          faqs={profileFaqs}
        />
      </div>
      <FindAnotherSurgeonCTA />
    </div>
  );
};

export default Page;
