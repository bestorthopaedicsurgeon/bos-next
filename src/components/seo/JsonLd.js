// Renders a JSON-LD <script> tag. Pure markup — safe to use in both server and
// client component trees. Used for SEO/AEO/GEO structured data. Additive only:
// it does not affect layout, styling, or any application behaviour.
export function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
