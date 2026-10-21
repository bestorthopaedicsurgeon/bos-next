// Page context for ad targeting, limited to BOS's own specialty and location
// taxonomies. Free text (such as a visitor's search) is reduced to a known slug
// or dropped, so it never reaches the ad server's matching or logs as typed.
import { seoSubspecialties } from "@/lib/constants/seoSubspecialties";
import { seoLocations } from "@/lib/constants/seoLocations";

const clean = (value) =>
  String(value ?? "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

export const AD_TARGET_SPECIALTIES = seoSubspecialties.map(({ slug, name }) => ({ slug, name }));
export const AD_TARGET_LOCATIONS = seoLocations.map(({ slug, name }) => ({ slug, name }));

const SPECIALTY_SLUGS = new Set(AD_TARGET_SPECIALTIES.map((item) => item.slug));
const LOCATION_SLUGS = new Set(AD_TARGET_LOCATIONS.map((item) => item.slug));

export function toSpecialtySlug(value) {
  const text = clean(value);
  if (!text) return undefined;
  const exact = seoSubspecialties.find(
    (item) => clean(item.slug) === text || clean(item.name) === text,
  );
  if (exact) return exact.slug;
  const words = ` ${text} `;
  const byTerm = seoSubspecialties.find((item) =>
    item.matchTerms.some((term) => words.includes(` ${clean(term)} `)),
  );
  return byTerm?.slug;
}

export function toLocationSlug(value) {
  const text = clean(value);
  if (!text) return undefined;
  const exact = seoLocations.find(
    (item) => clean(item.slug) === text || clean(item.name) === text,
  );
  if (exact) return exact.slug;
  const bySuburb = seoLocations.find((item) =>
    (item.suburbs || []).some((suburb) => clean(suburb) === text),
  );
  return bySuburb?.slug;
}

export function normalizeAdContext({ specialty, location } = {}) {
  const context = {};
  const specialtySlug = toSpecialtySlug(specialty);
  const locationSlug = toLocationSlug(location);
  if (specialtySlug) context.specialty = specialtySlug;
  if (locationSlug) context.location = locationSlug;
  return context;
}

// Admin targeting values, kept to known slugs.
export function normalizeTargeting(targeting = {}) {
  const pick = (values, allowed) =>
    Array.from(new Set((Array.isArray(values) ? values : []).filter((value) => allowed.has(value))));
  return {
    specialties: pick(targeting.specialties, SPECIALTY_SLUGS),
    locations: pick(targeting.locations, LOCATION_SLUGS),
  };
}
