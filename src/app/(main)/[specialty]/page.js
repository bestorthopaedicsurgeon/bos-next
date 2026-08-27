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
import { AnswerSummary } from "@/components/seo/AnswerSummary";
import { SeoFaq } from "@/components/seo/SeoFaq";

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
    description: `Find ${sub.keyword} in Western Australia. Compare qualifications, hospital affiliations and patient reviews to choose a specialist.`,
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

  // Data for the extractable answer block and FAQ (computed from the live
  // directory so every page carries unique, factual numbers).
  const perthLoc = seoLocations.find((l) => l.slug === "perth");
  const perthCount = perthLoc
    ? surgeons.filter((s) => matchesLocation(s, perthLoc)).length
    : 0;
  const singular = sub.keyword.replace(/s$/, "");
  const summaryText =
    `Best Orthopaedic Surgeons (BOS) lists ${surgeons.length} verified ` +
    `${sub.keyword} across Western Australia` +
    (perthCount > 0
      ? `, including ${perthCount} practising in the Perth metropolitan area`
      : "") +
    `. Each profile shows the surgeon's qualifications, subspecialties, ` +
    `hospital affiliations and patient reviews, so you can compare ` +
    `specialists and contact the right one for your condition.`;

  const faqs =
    surgeons.length > 0
      ? [
          {
            q: `How many ${sub.keyword} are there in Western Australia?`,
            a: `BOS currently lists ${surgeons.length} verified ${sub.keyword} across Western Australia${perthCount > 0 ? `, with ${perthCount} practising in and around Perth` : ""}. Each surgeon has a profile showing qualifications, hospital affiliations and reviews from patients.`,
          },
          {
            q: `How do I choose the right ${singular} in Perth?`,
            a: (
              <>
                Compare subspecialty focus, qualifications such as FRACS and
                FAOrthA, hospital affiliations and reviews from patients who had
                similar treatment. Once you have a shortlist, ask your GP for a
                referral to that surgeon by name. You can{" "}
                <Link href="/surgeons" className="text-primary underline">
                  compare all surgeons in the directory
                </Link>{" "}
                before deciding.
              </>
            ),
            aText: `Compare subspecialty focus, qualifications such as FRACS and FAOrthA, hospital affiliations and reviews from patients who had similar treatment. Once you have a shortlist, ask your GP for a referral to that surgeon by name.`,
          },
          {
            q: `Do I need a GP referral to see a ${singular} in Australia?`,
            a: `You can book a consultation without a referral, but Medicare only rebates specialist consultations when you have a valid referral from your GP or another specialist. Most patients visit their GP first, then book with the surgeon of their choice.`,
          },
        ]
      : [];

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
      <div className="mx-auto mt-12 mb-10 max-w-3xl text-center">
        <p className="text-lg leading-relaxed text-neutral-700">{sub.intro}</p>
      </div>

      {/* Extractable direct answer with live directory numbers */}
      {surgeons.length > 0 && <AnswerSummary>{summaryText}</AnswerSummary>}

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

      {/* FAQ with FAQPage schema */}
      <SeoFaq
        title={`${sub.heading}: common questions`}
        faqs={faqs}
      />

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
