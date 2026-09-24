import Link from "next/link";

// A compact, crawlable index of every surgeon profile. Pills would run to
// thousands of pixels at this count, so the names are laid out in columns of
// plain links instead.
//
// links: [{ href, label }]
export function SurgeonIndexSection({ title, subtitle, links }) {
  if (!links || links.length === 0) return null;
  return (
    <section className="my-12">
      <div className="border-primary/10 rounded-4xl border bg-white p-8 shadow-sm md:p-10">
        <h2 className="font-syne text-primary mb-2">{title}</h2>
        {subtitle && (
          <p className="mb-2 max-w-2xl text-neutral-600">{subtitle}</p>
        )}
        <ul className="mt-6 columns-1 gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
          {links.map((l) => (
            <li key={l.href} className="mb-2 break-inside-avoid">
              <Link
                href={l.href}
                className="text-primary/90 hover:text-primary text-sm hover:underline"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
