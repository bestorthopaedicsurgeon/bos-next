import { JsonLd } from "./JsonLd";

// Server-rendered FAQ section with FAQPage structured data. `faqs` items:
// { q, a, aText } where `a` may contain JSX (links) for the visible answer
// and `aText` is the plain-text version used in the schema. Falls back to
// `a` when it is already a plain string.
export function SeoFaq({ title = "Frequently asked questions", faqs }) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.aText || (typeof f.a === "string" ? f.a : ""),
      },
    })),
  };

  return (
    <section className="mb-24">
      <JsonLd data={schema} />
      <h2 className="font-syne text-primary mb-8">{title}</h2>
      <div className="space-y-6">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-3xl border border-primary/15 bg-white p-8"
          >
            <h3 className="mb-2 text-lg font-semibold text-primary">{f.q}</h3>
            <p className="leading-relaxed text-neutral-700">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
