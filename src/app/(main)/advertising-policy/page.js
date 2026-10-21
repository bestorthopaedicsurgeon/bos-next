import Link from "next/link";
import ProfileHeader from "@/components/reusable/profileHeader";

export const metadata = {
  title: "Advertising Policy",
  description:
    "How Best Orthopaedic Surgeons labels, reviews, delivers, and reports direct advertising while protecting visitors and organic directory results.",
  alternates: { canonical: "/advertising-policy" },
};

const sections = [
  {
    title: "Clear separation from directory results",
    body: "Paid advertisements are labelled as sponsored advertisements and are visually separate from surgeon profiles, patient reviews, editorial content, and clinical information. Payment cannot change the organic order of surgeons or purchase a better directory ranking.",
  },
  {
    title: "Advertiser identity and destinations",
    body: "Each advertisement identifies the advertiser and shows the destination website hostname before a visitor follows the link. BOS only accepts secure HTTPS destinations and may reject or pause a campaign when its creative and landing page do not match.",
  },
  {
    title: "Healthcare advertising review",
    body: "Advertisers are responsible for the accuracy, permissions, and regulatory compliance of their campaigns. BOS reviews submitted material before publication and may request evidence for healthcare claims, offers, testimonials, therapeutic goods, or use of professional titles.",
  },
  {
    title: "Private, aggregate reporting",
    body: "BOS records aggregate impressions, clicks, and video engagement to report campaign performance. The advertising system does not store visitor identities, health information, surgeon search terms, IP addresses, browser fingerprints, or third party advertising identifiers. BOS does not use advertising tracking pixels or retargeting.",
  },
  {
    title: "Campaign refusal and removal",
    body: "BOS may refuse, pause, or remove advertising that is misleading, unsafe, offensive, technically disruptive, inconsistent with this policy, or likely to reduce trust in the directory. Publication does not mean BOS endorses an advertiser, service, treatment, or clinical outcome.",
  },
];

export default function AdvertisingPolicyPage() {
  return (
    <main className="container pb-20">
      <ProfileHeader
        heading="Advertising Policy"
        headingAs="h1"
        step1="policies"
        step2="advertising"
      />

      <div className="mx-auto mt-12 max-w-4xl">
        <p className="font-dm-sans text-lg leading-8 text-neutral-700">
          Best Orthopaedic Surgeons accepts selected direct advertising to support
          the directory. Our advertising standards are designed to keep paid
          placements transparent, professional, and separate from independent
          surgeon information.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title} className="border-l-2 border-primary pl-5">
              <h2 className="font-syne text-2xl font-semibold text-neutral-900">
                {section.title}
              </h2>
              <p className="mt-3 font-dm-sans text-base leading-7 text-neutral-700">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-primary/20 bg-white p-6">
          <h2 className="font-syne text-2xl font-semibold text-neutral-900">
            Questions or concerns
          </h2>
          <p className="mt-3 font-dm-sans text-base leading-7 text-neutral-700">
            To ask about an advertisement, report a concern, or discuss advertising
            with BOS, contact our team and include the advertiser name and the page
            where the placement appeared.
          </p>
          <Link
            href="/contactUs"
            className="mt-5 inline-flex rounded-md bg-primary px-5 py-3 font-dm-sans text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
          >
            Contact BOS
          </Link>
        </div>
      </div>
    </main>
  );
}
