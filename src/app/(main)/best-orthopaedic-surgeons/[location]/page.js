import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocationBySlug, seoLocations } from "@/lib/constants/seoLocations";
import { seoSubspecialties } from "@/lib/constants/seoSubspecialties";
import { getSurgeonsByLocation } from "@/lib/seo/locationSurgeons";
import { matchesSubspecialty } from "@/lib/seo/match";
import { COMBO_THRESHOLD } from "@/lib/seo/subLocCombos";
import DoctorCard from "@/components/reusable/doctorCard";
import ProfileHeader from "@/components/reusable/profileHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { LinkPillsSection } from "@/components/seo/LinkPillsSection";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.bestorthopaedicsurgeon.com.au";

// Prerendered per location, refreshed hourly and on doctor mutations via
// revalidateDoctorContent(). Mirrors the [specialty] pages setup.
export const revalidate = 3600;

export function generateStaticParams() {
  return seoLocations.map((loc) => ({ location: loc.slug }));
}

export async function generateMetadata({ params }) {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: {
      absolute: `Best Orthopaedic Surgeons in ${location.name} | BOS`,
    },
    description: `Find and compare the best orthopaedic surgeons in ${location.name}, Western Australia. View profiles, subspecialties, hospital affiliations and patient reviews, then book an appointment with the right specialist.`,
    alternates: { canonical: `/best-orthopaedic-surgeons/${location.slug}` },
  };
}

export default async function LocationPage({ params }) {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const surgeons = await getSurgeonsByLocation(location);
  const canonicalUrl = `${BASE_URL}/best-orthopaedic-surgeons/${location.slug}`;

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
        name: `Best Orthopaedic Surgeons in ${location.name}`,
        item: canonicalUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best Orthopaedic Surgeons in ${location.name}`,
    description: `Directory of the best orthopaedic surgeons practising in ${location.name}, Western Australia.`,
    url: canonicalUrl,
    about: { "@type": "MedicalSpecialty", name: "Orthopedic" },
    ...(surgeons.length > 0 && {
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: surgeons.length,
        itemListElement: surgeons.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${BASE_URL}/doctor/${s.slug || s.id}`,
          name: `${s.title ? s.title + " " : ""}${s.name || ""}`.trim(),
        })),
      },
    }),
  };

  const otherLocations = seoLocations.filter((l) => l.slug !== location.slug);

  // Contextual links to each subspecialty in THIS location that has depth.
  const subspecialtyLinks = seoSubspecialties
    .map((s) => ({ s, count: surgeons.filter((d) => matchesSubspecialty(d, s)).length }))
    .filter((x) => x.count >= COMBO_THRESHOLD)
    .map((x) => ({
      href: `/${x.s.slug}/${location.slug}`,
      label: `${x.s.name} surgeons in ${location.name}`,
    }));

  const otherLocationLinks = otherLocations.map((l) => ({
    href: `/best-orthopaedic-surgeons/${l.slug}`,
    label: `Orthopaedic surgeons in ${l.name}`,
  }));

  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      {/* Teal banner header (same component as doctor / FAQ pages) */}
      <ProfileHeader
        heading={`Best Orthopaedic Surgeons in ${location.name}`}
        step1="surgeons"
        step2={location.name}
      />

      {/* Intro */}
      <div className="mx-auto mt-12 mb-16 max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-neutral-700">
          {location.intro}
        </p>
      </div>

      {/* Surgeon grid */}
      <section className="mb-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-syne text-primary">
            {surgeons.length > 0
              ? `Best Orthopaedic Surgeons in ${location.name}`
              : `Best Orthopaedic Surgeons near ${location.name}`}
          </h2>
        </div>

        {surgeons.length > 0 ? (
          <>
            <div className="mb-6 text-sm text-gray-600">
              Showing {surgeons.length} orthopaedic{" "}
              {surgeons.length === 1 ? "surgeon" : "surgeons"} in {location.name}
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {surgeons.map((s) => (
                <DoctorCard key={s.id} {...s} reviewButton={true} />
              ))}
            </div>
          </>
        ) : (
          <div className="border-primary rounded-3xl border p-10 text-center">
            <p className="mb-6 text-lg text-neutral-700">
              We are currently adding orthopaedic surgeons in {location.name}.
              Browse the full Western Australia directory to find a specialist
              near you.
            </p>
            <Link
              href="/surgeons"
              className="bg-primary inline-block rounded-full px-8 py-4 font-medium text-white transition-all hover:bg-primary/90"
            >
              Browse all orthopaedic surgeons
            </Link>
          </div>
        )}
      </section>

      {/* CTA to full directory */}
      <section className="bg-primary mb-24 rounded-4xl px-10 py-16 text-center text-primary-foreground">
        <h2 className="font-syne mb-4 text-primary-foreground">
          Looking across Western Australia?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-primary-foreground/85">
          Search the full directory of orthopaedic surgeons across WA by name,
          subspecialty and location.
        </p>
        <Link
          href="/surgeons"
          className="bg-primary-foreground text-primary inline-block rounded-full px-8 py-4 font-semibold transition-all hover:bg-primary-foreground/90"
        >
          Browse the full directory
        </Link>
      </section>

      {/* Contextual internal links: specialties in this location + other areas */}
      <LinkPillsSection
        title={`Orthopaedic surgeons in ${location.name} by specialty`}
        subtitle={`Find the right specialist in ${location.name} for your condition.`}
        links={subspecialtyLinks}
      />
      <LinkPillsSection
        title="Orthopaedic surgeons in other areas"
        links={otherLocationLinks}
      />
    </div>
  );
}
