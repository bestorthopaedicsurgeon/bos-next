// Self-contained, data-driven summary paragraph rendered near the top of SEO
// landing pages. Written to be liftable as a direct answer by search engines
// and AI assistants, so keep the copy factual and complete in one paragraph.
export function AnswerSummary({ children }) {
  return (
    <section className="mx-auto mb-14 max-w-3xl rounded-3xl border border-primary/15 bg-primary/5 px-8 py-6">
      <p className="text-base leading-relaxed text-neutral-800">{children}</p>
    </section>
  );
}
