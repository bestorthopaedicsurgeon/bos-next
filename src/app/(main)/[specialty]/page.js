import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getSubspecialtyBySlug,
  seoSubspecialties,
} from "@/lib/constants/seoSubspecialties";
import { seoLocations } from "@/lib/constants/seoLocations";
import { getSurgeonsBySubspecialty } from "@/lib/seo/subspecialtySurgeons";
import { matchesLocation } from "@/lib/seo/match";
import { COMBO_THRESHOLD } from "@/lib/seo/subLocCombos";
import DoctorCard from "@/components/reusable/doctorCard";
import ProfileHeader from "@/components/reusable/profileHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { LinkPillsSection } from "@/components/seo/LinkPillsSection";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.bestorthopaedicsurgeon.com.au";

// Only the known subspecialty slugs resolve; anything else 404s at the routing
// layer (so this flat segment never acts as a catch-all).
export const dynamicParams = false;
export const revalidate = 3600;

export function generateStaticParams() {
  return seoSubspecialties.map((s) => ({ specialty: s.slug }));
}

export async function generateMetadata({ params }) {
  const { specialty: slug } = await params;
  const sub = getSubspecialtyBySlug(slug);
  if (!sub) {
    return { title: "Not Found", robots: { index: false, follow: false } };
  }
  return {
    title: { absolute: `${sub.heading} in Western Australia | BOS` },
    description: `Find and compare the best ${sub.keyword} in Western Australia. View profiles, qualifications, hospital affiliations and patient reviews, then book an appointment with the right specialist.`,
    alternates: { canonical: `/${sub.slug}` },
  };
}

export default async function SubspecialtyPage({ params }) {
  const { specialty: slug } = await params;
  const sub = getSubspecialtyBySlug(slug);
  if (!sub) notFound();

  const surgeons = await getSurgeonsBySubspecialty(sub);
  const canonicalUrl = `${BASE_URL}/${sub.slug}`;

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
        name: `${sub.heading} in Western Australia`,
        item: canonicalUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${sub.heading} in Western Australia`,
    description: `Directory of the best ${sub.keyword} practising in Western Australia.`,
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

  // Contextual links to this subspecialty in each location that has depth.
  const locationLinks = seoLocations
    .map((l) => ({ l, count: surgeons.filter((s) => matchesLocation(s, l)).length }))
    .filter((x) => x.count >= COMBO_THRESHOLD)
    .map((x) => ({
      href: `/${sub.slug}/${x.l.slug}`,
      label: `${sub.name} surgeons in ${x.l.name}`,
    }));

  const otherSubLinks = seoSubspecialties
    .filter((s) => s.slug !== sub.slug)
    .map((s) => ({ href: `/${s.slug}`, label: s.heading }));

  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      <ProfileHeader
        heading={`${sub.heading} in Western Australia`}
        step1="surgeons"
        step2={sub.name}
      />

      {/* Intro */}
      <div className="mx-auto mt-12 mb-16 max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-neutral-700">{sub.intro}</p>
      </div>

      {/* Surgeon grid */}
      <section className="mb-24">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-syne text-primary">
            {sub.heading} in Western Australia
          </h2>
        </div>

        {surgeons.length > 0 ? (
          <>
            <div className="mb-6 text-sm text-gray-600">
              Showing {surgeons.length}{" "}
              {surgeons.length === 1 ? "surgeon" : "surgeons"}
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
              We are currently adding {sub.keyword} to the directory. Browse all
              orthopaedic surgeons across Western Australia in the meantime.
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
          Not sure which surgeon you need?
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

      {/* Contextual internal links to the subspecialty x location matrix */}
      <LinkPillsSection
        title={`${sub.heading} by location`}
        subtitle={`Find ${sub.keyword} in your area across Western Australia.`}
        links={locationLinks}
      />
      <LinkPillsSection
        title="Explore other orthopaedic specialties"
        links={otherSubLinks}
      />
    </div>
  );
}
