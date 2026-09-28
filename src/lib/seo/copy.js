// Shared copy helpers for the directory landing pages (locations,
// subspecialties and their combinations) and doctor profiles.
import { seoSubspecialties } from "@/lib/constants/seoSubspecialties";
import { matchesSubspecialty } from "@/lib/seo/match";

const TITLE_MAX = 60;

// First candidate that fits in the length Google shows, else the shortest.
export function fitTitle(candidates) {
  const list = candidates.filter(Boolean);
  return (
    list.find((t) => t.length <= TITLE_MAX) ||
    list.reduce((a, b) => (b.length < a.length ? b : a))
  );
}

export function withArticle(phrase) {
  return `${/^[aeiou]/i.test(phrase) ? "an" : "a"} ${phrase}`;
}

const SMALL_WORDS = new Set(["and", "of", "in", "the", "for"]);

export function titleCase(phrase) {
  return phrase
    .split(" ")
    .map((w, i) =>
      i > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1),
    )
    .join(" ");
}

// "Hollywood Private Hospital (Nedlands, WA)" -> "Hollywood Private Hospital".
// About 100 stored names carry a leading "undefined " from an old import.
export const hospitalName = (h) =>
  String((h && (h.name || h)) || "")
    .replace(/^\s*(undefined|null)\s+/i, "")
    .replace(/\s*\(.*\)\s*$/, "")
    .replace(/\s+/g, " ")
    .trim();

export function hospitalNames(affiliations) {
  return [
    ...new Set(
      (Array.isArray(affiliations) ? affiliations : [])
        .map(hospitalName)
        .filter(Boolean),
    ),
  ];
}

// Hospitals the listed surgeons most often operate at, most common first.
export function topHospitals(surgeons, limit = 3) {
  const counts = new Map();
  for (const s of surgeons) {
    const names = new Set(
      (Array.isArray(s.hospitalAffiliations) ? s.hospitalAffiliations : [])
        .map(hospitalName)
        .filter(Boolean),
    );
    for (const n of names) counts.set(n, (counts.get(n) || 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([n]) => n);
}

// Subspecialty fields are free text full of typos, slashes and billing notes,
// so sentences describe a surgeon by the directory areas they match instead.
const AREA_LABELS = {
  "best-knee-surgeons": "knee",
  "best-hip-surgeons": "hip",
  "best-shoulder-surgeons": "shoulder",
  "best-spine-surgeons": "spine",
  "best-foot-and-ankle-surgeons": "foot and ankle",
  "best-hand-and-wrist-surgeons": "hand and wrist",
  "best-sports-surgeons": "sports injury",
  "best-elbow-surgeons": "elbow",
  "best-trauma-surgeons": "trauma",
  "best-paediatric-orthopaedic-surgeons": "children's orthopaedic",
  "best-orthopaedic-oncology-surgeons": "bone tumour",
};

export function practiceAreas(doctor) {
  return seoSubspecialties
    .filter((s) => AREA_LABELS[s.slug] && matchesSubspecialty(doctor, s))
    .map((s) => ({ label: AREA_LABELS[s.slug], href: `/${s.slug}` }));
}

export function listJoin(items) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

// Short description, trimmed at a word boundary if needed.
export function fitDescription(text, max = 160) {
  if (text.length <= max) return text;
  // Drop the closing call to action before cutting words mid sentence.
  const shorter = text.replace(/, then book online\.$/, ".");
  if (shorter.length <= max) return shorter;
  const cut = shorter.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "")}.`;
}
