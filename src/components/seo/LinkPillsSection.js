import Link from "next/link";

// Polished, on-brand internal-linking section: a white rounded card with a
// font-syne heading and a wrap of teal outline pills. Reused everywhere so the
// directory navigation looks consistent across the site.
//
// links: [{ href, label }]
export function LinkPillsSection({ title, subtitle, links }) {
  if (!links || links.length === 0) return null;
  return (
    <section className="my-12">
      <div className="border-primary/10 rounded-4xl border bg-white p-8 shadow-sm md:p-10">
        <h2 className="font-syne text-primary mb-2">{title}</h2>
        {subtitle && (
          <p className="mb-2 max-w-2xl text-neutral-600">{subtitle}</p>
        )}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground rounded-full border px-4 py-2.5 text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
