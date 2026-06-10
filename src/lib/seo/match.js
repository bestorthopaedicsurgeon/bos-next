// Shared surgeon-matching helpers used by location, subspecialty, and the
// subspecialty x location matrix pages, so filtering is identical everywhere.

export const norm = (s) =>
  String(s || "").toLowerCase().replace(/\s+/g, " ").trim();

// Does this doctor practise in the given SEO location?
// Matches the doctor's `location` field, any practice clinic address, or
// (for city rollups) any practice postcode within `postcodeRange`.
export function matchesLocation(doctor, location) {
  if (!doctor || !location) return false;
  const wantedSuburbs = (location.suburbs || []).map(norm);
  const [minPc, maxPc] = location.postcodeRange || [];

  const docLoc = norm(doctor.location);
  if (docLoc && wantedSuburbs.includes(docLoc)) return true;

  const practices = Array.isArray(doctor.practices) ? doctor.practices : [];
  for (const p of practices) {
    if (!p) continue;
    const addr = norm(p.clinicAddress);
    if (addr && wantedSuburbs.some((s) => s && addr.includes(s))) return true;
    if (minPc != null) {
      const m = String(p.postCode || p.clinicAddress || "").match(/\b\d{4}\b/);
      if (m) {
        const pc = Number(m[0]);
        if (pc >= minPc && pc <= maxPc) return true;
      }
    }
  }
  return false;
}

// Does this doctor's subspecialities match the given SEO subspecialty?
export function matchesSubspecialty(doctor, sub) {
  if (!doctor || !sub) return false;
  const terms = (sub.matchTerms || []).map(norm).filter(Boolean);
  if (!terms.length) return false;
  const blob = norm(
    Array.isArray(doctor.subspecialities) ? doctor.subspecialities.join(" ") : ""
  );
  return terms.some((t) => blob.includes(t));
}

// Featured first, then most experienced, then alphabetical.
export function sortSurgeons(list) {
  return [...list].sort((a, b) => {
    if (!!b.featured !== !!a.featured) return b.featured ? 1 : -1;
    if ((b.experience || 0) !== (a.experience || 0))
      return (b.experience || 0) - (a.experience || 0);
    return norm(a.name).localeCompare(norm(b.name));
  });
}

// Fields every surgeon card needs (+ practices for location matching).
export const SURGEON_SELECT = {
  id: true,
  slug: true,
  title: true,
  name: true,
  designation: true,
  location: true,
  subspecialities: true,
  featuredQualifications: true,
  image: true,
  experience: true,
  featured: true,
  practices: true,
};
