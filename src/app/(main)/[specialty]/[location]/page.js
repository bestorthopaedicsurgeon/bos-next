import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getSubspecialtyBySlug,
  seoSubspecialties,
} from "@/lib/constants/seoSubspecialties";
import { getLocationBySlug } from "@/lib/constants/seoLocations";
import {
  getSurgeonsBySubAndLoc,
  getValidSubLocCombos,
} from "@/lib/seo/subLocCombos";
import DoctorCard from "@/components/reusable/doctorCard";
import ProfileHeader from "@/components/reusable/profileHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { LinkPillsSection } from "@/components/seo/LinkPillsSection";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.bestorthopaedicsurgeon.com.au";

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  const combos = await getValidSubLocCombos();
  return combos.map((c) => ({ specialty: c.subSlug, location: c.locSlug }));
}

export async function generateMetadata({ params }) {
  const { specialty: subSlug, location: locSlug } = await params;
  const sub = getSubspecialtyBySlug(subSlug);
  const loc = getLocationBySlug(locSlug);
  if (!sub || !loc) {
    return { title: "Not Found", robots: { index: false, follow: false } };
  }
  return {
    title: { absolute: `${sub.heading} in ${loc.name} | BOS` },
    description: `Find and compare the best ${sub.keyword} in ${loc.name}, Western Australia. View profiles, qualifications, hospital affiliations and patient reviews, then book an appointment.`,
    alternates: { canonical: `/${sub.slug}/${loc.slug}` },
  };
}

export default async function SubspecialtyLocationPage({ params }) {
  const { specialty: subSlug, location: locSlug } = await params;
  const sub = getSubspecialtyBySlug(subSlug);
  const loc = getLocationBySlug(locSlug);
  if (!sub || !loc) notFound();

  const [surgeons, combos] = await Promise.all([
    getSurgeonsBySubAndLoc(sub, loc),
    getValidSubLocCombos(),
  ]);
  const canonicalUrl = `${BASE_URL}/${sub.slug}/${loc.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Surgeons", item: `${BASE_URL}/surgeons` },
      {
        "@type": "ListItem",
        position: 3,
        name: `${sub.heading} in Western Australia`,
        item: `${BASE_URL}/${sub.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: `${sub.heading} in ${loc.name}`,
        item: canonicalUrl,
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${sub.heading} in ${loc.name}`,
    description: `Directory of the best ${sub.keyword} practising in ${loc.name}, Western Australia.`,
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

  // Sibling cross-links (same subspecialty elsewhere / other specialties here).
  const sameSubElsewhere = combos
    .filter((c) => c.subSlug === sub.slug && c.locSlug !== loc.slug)
    .map((c) => {
      const l = getLocationBySlug(c.locSlug);
      return { href: `/${sub.slug}/${c.locSlug}`, label: `${sub.name} surgeons in ${l?.name || c.locSlug}` };
    });
  const otherSubsHere = combos
    .filter((c) => c.locSlug === loc.slug && c.subSlug !== sub.slug)
    .map((c) => {
      const s = getSubspecialtyBySlug(c.subSlug);
      return { href: `/${c.subSlug}/${loc.slug}`, label: `${s?.name || c.subSlug} surgeons in ${loc.name}` };
    });

  return (
    <div className="container">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={collectionSchema} />

      <ProfileHeader
        heading={`${sub.heading} in ${loc.name}`}
        step1="surgeons"
        step2={`${sub.name} in ${loc.name}`}
      />

      <div className="mx-auto mt-12 mb-16 max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-neutral-700">
          {`Looking for the best ${sub.name.toLowerCase()} surgeons in ${loc.name}? Browse experienced ${sub.keyword} practising in ${loc.name}, Western Australia. Compare their qualifications, hospital affiliations and patient reviews, then book an appointment with the right specialist.`}
        </p>
      </div>

      <section className="mb-20">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-syne text-primary">
            {`${sub.heading} in ${loc.name}`}
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
              {`We are currently adding ${sub.keyword} in ${loc.name}.`}
            </p>
            <Link
              href={`/${sub.slug}`}
              className="bg-primary inline-block rounded-full px-8 py-4 font-medium text-white transition-all hover:bg-primary/90"
            >
              {`See all ${sub.name.toLowerCase()} surgeons in WA`}
            </Link>
          </div>
        )}
      </section>

      <LinkPillsSection
        title={`${sub.name} surgeons in other areas`}
        links={[
          { href: `/${sub.slug}`, label: `${sub.name} surgeons across WA` },
          ...sameSubElsewhere,
        ]}
      />
      <LinkPillsSection
        title={`Other orthopaedic specialties in ${loc.name}`}
        links={[
          { href: `/best-orthopaedic-surgeons/${loc.slug}`, label: `All surgeons in ${loc.name}` },
          ...otherSubsHere,
        ]}
      />
    </div>
  );
}
