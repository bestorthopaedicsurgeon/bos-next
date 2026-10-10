// What Isla, the BOS patient navigator, knows: every public surgeon profile
// on the platform, read straight from the database. Used to build her prompt
// and to answer her tool calls (search and profile details). Server only.

import { prisma } from "@/lib/prisma";
import { formatDoctorName, doctorSpecialtyLabel } from "@/lib/utils";
import { googleReviews } from "@/data/googleReviews";
import wa from "@/data/waLocalities.json";

const SITE = "https://www.bestorthopaedicsurgeon.com.au";
const CACHE_MS = 10 * 60 * 1000; // profiles are re-read at most every 10 minutes

let cached = { at: 0, promise: null };

const clean = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
const norm = (s) =>
  clean(s)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9/ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const asArray = (v) => (Array.isArray(v) ? v : []);
const uniq = (arr) => {
  const seen = new Set();
  return arr.filter((x) => {
    const k = norm(x);
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
};

// Suburb name for a postcode, for addresses that do not name one.
let postcodeNames = null;
function postcodeName(pc) {
  if (!postcodeNames) {
    postcodeNames = {};
    for (const [name, [, , code]] of Object.entries(wa.localities)) postcodeNames[code] ||= name;
  }
  const name = postcodeNames[pc];
  return name ? name.replace(/\b\w/g, (c) => c.toUpperCase()) : "";
}

// "Suite 10, 100 Murdoch Drive, Murdoch WA" + "6150" -> { suburb: "Murdoch", postcode: 6150 }
function placeFromAddress(address, postCode) {
  const text = clean(address);
  const pc =
    Number(String(postCode || "").replace(/\D/g, "").slice(-4)) ||
    Number(text.match(/\bWA\.?\s*(6\d{3})\b/i)?.[1]) ||
    null;
  // The last "<suburb> WA" segment (some addresses are pasted twice).
  const segments = [...text.matchAll(/(?:^|,)\s*([^,]*?)\s+WA\b/gi)].map((m) => clean(m[1])).reverse();
  let suburb = "";
  for (const seg of segments) {
    const words = seg.split(" ");
    // "221 Willmott Drive Waikiki" -> try "Drive Waikiki"... then "Waikiki".
    for (let n = Math.min(3, words.length); n >= 1 && !suburb; n--) {
      const candidate = words.slice(-n).join(" ");
      if (wa.localities[norm(candidate)]) suburb = candidate;
    }
    if (suburb) break;
  }
  return { suburb: suburb || postcodeName(pc), postcode: pc };
}

function coordsFor(suburb, postcode) {
  const hit = suburb && wa.localities[norm(suburb)];
  if (hit) return [hit[0], hit[1]];
  const pc = postcode && wa.postcodes[String(postcode)];
  return pc ? [pc[0], pc[1]] : null;
}

function km([lat1, lng1], [lat2, lng2]) {
  const r = (d) => (d * Math.PI) / 180;
  const a =
    Math.sin(r(lat2 - lat1) / 2) ** 2 +
    Math.cos(r(lat1)) * Math.cos(r(lat2)) * Math.sin(r(lng2 - lng1) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(a));
}

// The visitor's suburb, town, region or postcode -> coordinates.
const AREA_ALIASES = {
  "perth cbd": "perth",
  "perth city": "perth",
  "the city": "perth",
  "south west": "bunbury",
  "peel": "mandurah",
  "great southern": "albany",
  "goldfields": "kalgoorlie",
  "mid west": "geraldton",
  "wheatbelt": "northam",
  "pilbara": "karratha",
  "kimberley": "broome",
};
export function geocode(place) {
  const q = norm(place)
    .replace(/\b(western australia|wa|australia|area|region|suburb)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!q) return null;
  const pc = q.match(/\b6\d{3}\b/);
  if (pc && wa.postcodes[pc[0]]) return { name: pc[0], coords: wa.postcodes[pc[0]] };
  const tries = [q, AREA_ALIASES[q], q.replace(/^(north|south|east|west)\s+/, ""), q.split(" ").slice(-2).join(" "), q.split(" ").pop()];
  for (const t of tries) {
    const hit = t && wa.localities[t];
    if (hit) return { name: t.replace(/\b\w/g, (c) => c.toUpperCase()), coords: [hit[0], hit[1]] };
  }
  return null;
}

function ratingOf(reviews) {
  if (!reviews.length) return null;
  const avg =
    reviews.reduce((a, r) => a + (r.professionalism + r.punctuality + r.helpfulness + r.knowledge) / 4, 0) /
    reviews.length;
  return { rating: Number(avg.toFixed(1)), count: reviews.length };
}

function googleOf(slug) {
  const g = googleReviews[slug];
  if (!g?.reviews?.length) return null;
  const primary = g.listings.find((l) => l.primary) || g.listings[0];
  const quotes = g.reviews
    .filter((r) => r.rating >= 4 && r.text.length > 60)
    .slice(0, 2)
    .map((r) => clean(r.text).slice(0, 220));
  return { rating: primary.rating, count: primary.reviewCount, quotes };
}

function shape(d) {
  const name = formatDoctorName(d.title, d.name);
  const practices = asArray(d.practices).map((p) => {
    const { suburb, postcode } = placeFromAddress(p?.clinicAddress, p?.postCode);
    return {
      name: clean(p?.practiceName || p?.clinicName),
      clinic: clean(p?.clinicName),
      address: clean(p?.clinicAddress),
      phone: clean(p?.phone),
      suburb,
      coords: coordsFor(suburb, postcode),
    };
  });
  const places = uniq([...practices.map((p) => p.suburb), clean(d.location)].filter(Boolean));
  const coords = practices.map((p) => p.coords).filter(Boolean);
  const own = coordsFor(d.location, null);
  if (own) coords.push(own);
  return {
    id: d.id,
    slug: d.slug,
    name,
    specialty: doctorSpecialtyLabel(d.designation),
    rank: /prof/i.test(d.designation || "") ? clean(d.designation) : "",
    experience: d.experience || null,
    group: clean(d.groupName),
    location: clean(d.location),
    places,
    coords,
    practices,
    hospitals: asArray(d.hospitalAffiliations).map((h) => ({ name: clean(h?.name), phone: clean(h?.phone), address: clean(h?.address) })).filter((h) => h.name),
    focus: uniq(asArray(d.subspecialities).map(clean)),
    qualifications: uniq(asArray(d.qualifications).map(clean)),
    registrations: uniq(asArray(d.registrationsAssociations).map(clean)),
    awards: uniq(asArray(d.awardsPublications).map(clean)),
    about: clean(d.about),
    days: asArray(d.DoctorAvailabilityDays).map(clean).filter(Boolean),
    availability: asArray(d.DoctorAvailability).map((a) => `${a.dayOfWeek.toLowerCase()} ${a.startTime} to ${a.endTime}${a.clinicName ? ` at ${clean(a.clinicName)}` : ""}`),
    bos: ratingOf(asArray(d.reviews)),
    google: googleOf(d.slug),
    url: `${SITE}/doctor/${d.slug}`,
    path: `/doctor/${d.slug}`,
  };
}

// Every public profile, refreshed at most every CACHE_MS.
export function getSurgeons() {
  if (cached.promise && Date.now() - cached.at < CACHE_MS) return cached.promise;
  const promise = prisma.doctorProfile
    .findMany({
      where: { hidden: false, slug: { not: null } },
      include: {
        reviews: { select: { professionalism: true, punctuality: true, helpfulness: true, knowledge: true } },
        DoctorAvailability: { select: { dayOfWeek: true, startTime: true, endTime: true, clinicName: true } },
      },
      orderBy: [{ featured: "desc" }, { name: "asc" }],
    })
    .then((rows) => rows.map(shape));
  cached = { at: Date.now(), promise };
  promise.catch(() => {
    if (cached.promise === promise) cached = { at: 0, promise: null };
  });
  return promise;
}

const short = (list, n, len = 48) => list.slice(0, n).map((s) => (s.length > len ? `${s.slice(0, len - 1)}…` : s));

// One line per surgeon for Isla's prompt, so she knows everyone on BOS.
export function directoryLine(s) {
  const bits = [
    `${s.slug}: ${s.name}`,
    [s.specialty, s.rank, s.experience ? `${s.experience} yrs` : ""].filter(Boolean).join(", "),
    s.places.length ? `practises in ${s.places.slice(0, 4).join(", ")}` : "",
    s.focus.length ? `focus: ${short(s.focus, 6).join("; ")}` : "",
    s.bos ? `BOS ${s.bos.rating} from ${s.bos.count}` : "",
    s.google ? `Google ${s.google.rating} from ${s.google.count}` : "",
  ];
  return bits.filter(Boolean).join(" | ");
}

// Plain words a patient might use, mapped to words found in profiles.
const NEEDS = [
  { says: ["knee", "acl", "menisc", "cartilage", "patell", "kneecap"], finds: ["knee", "acl", "menisc", "patell", "cartilage"] },
  { says: ["hip"], finds: ["hip"] },
  { says: ["shoulder", "rotator", "dislocat", "frozen"], finds: ["shoulder", "rotator"] },
  { says: ["elbow"], finds: ["elbow"] },
  { says: ["hand", "wrist", "finger", "carpal", "thumb"], finds: ["hand", "wrist", "carpal", "finger"] },
  { says: ["foot", "feet", "ankle", "bunion", "achilles", "toe", "heel"], finds: ["foot", "ankle", "achilles", "bunion"] },
  { says: ["spine", "spinal", "back", "neck", "disc", "sciatica", "scoliosis", "lumbar", "cervical", "vertebra"], finds: ["spine", "spinal", "back", "neck", "scoliosis", "disc"] },
  { says: ["sport", "athlete", "ligament", "arthroscop"], finds: ["sport", "arthroscop", "ligament"] },
  { says: ["fracture", "broken", "trauma", "injur", "accident"], finds: ["trauma", "fracture"] },
  { says: ["child", "kid", "paediatric", "pediatric", "baby", "teen", "son", "daughter"], finds: ["paediatric", "pediatric", "child"] },
  { says: ["tumour", "tumor", "cancer", "sarcoma", "oncolog", "lump"], finds: ["tumour", "tumor", "oncolog", "sarcoma"] },
  { says: ["replacement", "arthroplasty", "arthritis", "worn"], finds: ["replacement", "arthroplasty", "arthritis"] },
  { says: ["revision", "redo"], finds: ["revision"] },
  { says: ["robot", "mako"], finds: ["robot"] },
  { says: ["upper limb", "arm"], finds: ["upper limb", "shoulder", "elbow", "hand", "wrist"] },
  { says: ["lower limb", "leg"], finds: ["lower limb", "hip", "knee", "foot", "ankle"] },
  { says: ["no gap", "gap", "insurance", "health fund", "bulk bill"], finds: ["no gap", "gap", "health fund"] },
];

function needScore(s, need) {
  const q = norm(need);
  if (!q) return 0;
  const focus = norm(`${s.focus.join(" ; ")} ${s.specialty} ${s.rank}`);
  const about = norm(s.about);
  const groups = NEEDS.filter((g) => g.says.some((w) => q.includes(w)));
  const lists = groups.length
    ? groups.map((g) => g.finds)
    : [q.split(" ").filter((w) => w.length >= 4)].filter((l) => l.length);
  let score = 0;
  for (const finds of lists) {
    if (finds.some((f) => focus.includes(f))) score += 3;
    else if (finds.some((f) => about.includes(f))) score += 1;
  }
  return score;
}

function nameScore(s, name) {
  const q = norm(name).replace(/\b(dr|doctor|prof|professor|mr|mrs|ms|a\/prof|associate)\b/g, "").trim();
  if (!q) return 0;
  const n = norm(s.name);
  if (n.includes(q)) return 3;
  const words = q.split(" ").filter((w) => w.length >= 3);
  return words.filter((w) => n.includes(w)).length;
}

// Ranked matches for Isla's find_surgeons tool, as speakable text.
export async function findSurgeons({ need = "", location = "", name = "", limit = 5 } = {}) {
  const all = await getSurgeons();
  const place = location ? geocode(location) : null;
  let rows = all.map((s) => {
    const dist = place && s.coords.length ? Math.min(...s.coords.map((c) => km(place.coords, c))) : null;
    const nearest =
      place && s.practices.length
        ? s.practices.filter((p) => p.coords).sort((a, b) => km(place.coords, a.coords) - km(place.coords, b.coords))[0]
        : null;
    return { s, need: needScore(s, need), name: nameScore(s, name), dist, nearest };
  });
  if (name) rows = rows.filter((r) => r.name > 0).sort((a, b) => b.name - a.name);
  if (need) rows = rows.filter((r) => r.need > 0);
  rows.sort((a, b) => {
    if (name && b.name !== a.name) return b.name - a.name;
    const strong = (r) => (r.need >= 3 ? 1 : 0);
    if (strong(b) !== strong(a)) return strong(b) - strong(a);
    if (a.dist != null && b.dist != null && Math.abs(a.dist - b.dist) > 1) return a.dist - b.dist;
    return b.need - a.need;
  });
  const top = rows.slice(0, Math.min(Math.max(Number(limit) || 5, 1), 8));
  const head = [];
  if (location && !place) head.push(`Could not place "${location}" in Western Australia, so results are not sorted by distance. Ask for their suburb or town.`);
  if (place) head.push(`Distances are from ${place.name}.`);
  if (!top.length) {
    head.push(`No surgeon on BOS matches${need ? ` "${need}"` : ""}${name ? ` named "${name}"` : ""}. Say so honestly and offer a broader search.`);
    return head.join(" ");
  }
  const lines = top.map(({ s, dist, nearest }, i) =>
    [
      `${i + 1}. ${s.name} (slug ${s.slug})`,
      s.specialty,
      nearest ? `nearest rooms ${nearest.suburb}${dist != null ? `, about ${Math.round(dist)} km away` : ""}` : s.places.length ? `practises in ${s.places.slice(0, 3).join(", ")}` : "",
      s.focus.length ? `focus: ${short(s.focus, 5, 60).join("; ")}` : "",
      s.bos ? `BOS rating ${s.bos.rating} from ${s.bos.count} reviews` : "",
      s.google ? `Google ${s.google.rating} from ${s.google.count} reviews` : "",
    ]
      .filter(Boolean)
      .join(". "),
  );
  return [...head, ...lines, `There are ${rows.length} matching surgeons on BOS in total.`].join("\n");
}

// Everything BOS shows on one profile, for Isla's get_surgeon_details tool.
export async function surgeonDetails(slug) {
  const all = await getSurgeons();
  const key = norm(slug).replace(/ /g, "-");
  const s = all.find((x) => x.slug === key) || all.find((x) => nameScore(x, slug) >= 3);
  if (!s) return `No BOS profile found for "${slug}". Use find_surgeons to look them up by name.`;
  const out = [
    `${s.name}, ${s.specialty}${s.rank ? `, ${s.rank}` : ""}${s.experience ? `, ${s.experience} years of experience` : ""}.`,
    s.group ? `Group: ${s.group}.` : "",
    s.practices.length ? `Rooms: ${s.practices.map((p) => `${p.name}${p.address ? `, ${p.address}` : ""}${p.phone ? `, phone ${p.phone}` : ""}`).join(" | ")}.` : "",
    s.hospitals.length ? `Hospitals: ${s.hospitals.map((h) => h.name).join("; ")}.` : "",
    s.focus.length ? `Areas of practice: ${s.focus.join("; ")}.` : "",
    s.qualifications.length ? `Qualifications: ${s.qualifications.join("; ")}.` : "",
    s.registrations.length ? `Memberships: ${s.registrations.slice(0, 8).join("; ")}.` : "",
    s.awards.length ? `Publications and awards (${s.awards.length}), for example: ${s.awards.slice(0, 3).join("; ")}.` : "",
    s.days.length ? `Consulting days listed: ${s.days.join(", ")}.` : "",
    s.availability.length ? `Listed availability: ${s.availability.join("; ")}.` : "",
    s.bos ? `BOS patient rating ${s.bos.rating} out of 5 from ${s.bos.count} reviews.` : "No BOS patient reviews yet.",
    s.google ? `Google rating ${s.google.rating} from ${s.google.count} reviews. Patients wrote: ${s.google.quotes.map((q) => `"${q}"`).join(" ")}` : "",
    s.about ? `About: ${s.about.slice(0, 1600)}` : "",
    `Profile page: ${s.path}.`,
  ];
  return out.filter(Boolean).join("\n");
}

export async function surgeonBySlug(slug) {
  const all = await getSurgeons();
  return all.find((s) => s.slug === slug) || null;
}

// The BOS website itself: main pages, blog posts and landing pages, so Isla
// can answer support questions about any of it.
let blogCache = { at: 0, promise: null };
function getBlogs() {
  if (blogCache.promise && Date.now() - blogCache.at < CACHE_MS) return blogCache.promise;
  const promise = prisma.blog.findMany({ select: { slug: true, title: true }, orderBy: { title: "asc" } });
  blogCache = { at: Date.now(), promise };
  promise.catch(() => {
    if (blogCache.promise === promise) blogCache = { at: 0, promise: null };
  });
  return promise;
}

const MAIN_PAGES = [
  ["/", "Home: search surgeons by name, subspecialty and location, featured surgeons, how BOS works"],
  ["/surgeons", "Surgeons directory with search and filters"],
  ["/doctor/<slug>", "A surgeon's profile, with Reviews, About and Q and A tabs, rooms, hospitals and Google reviews"],
  ["/about", "About BOS"],
  ["/faq", "Frequently asked questions"],
  ["/blog", "Blog: patient guides"],
  ["/how-to-leave-review", "How to leave a review"],
  ["/how-to-make-surgeons-profile", "How surgeons create a profile on BOS"],
  ["/contactUs", "Contact the BOS team"],
  ["/review-policy", "Review policy"],
  ["/privacy-policy", "Privacy policy"],
  ["/terms-of-use", "Terms of use"],
  ["/legal-disclaimer", "Legal disclaimer"],
  ["/login", "Log in"],
  ["/signup", "Create a patient account"],
];

export async function siteMapText({ locations = [], specialties = [] } = {}) {
  const blogs = await getBlogs().catch(() => []);
  return [
    "Main pages:",
    ...MAIN_PAGES.map(([path, what]) => `${path}: ${what}`),
    locations.length ? `Surgeons by location: ${locations.map((l) => `/best-orthopaedic-surgeons/${l.slug} (${l.name})`).join(", ")}` : "",
    specialties.length ? `Surgeons by subspecialty: ${specialties.map((s) => `/${s.slug} (${s.name})`).join(", ")}` : "",
    blogs.length ? `Blog posts (${blogs.length}):\n${blogs.map((b) => `/blog/${b.slug}: ${clean(b.title)}`).join("\n")}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", rsquo: "’", lsquo: "‘", ldquo: "“", rdquo: "”", ndash: "-", mdash: "-", hellip: "…" };
function htmlToText(html) {
  return html
    .replace(/<(script|style|noscript|svg|template|header|footer|nav|aside|form)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|h[1-6]|li|div|section|article|tr|dt|dd)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(#\d+|#x[0-9a-f]+|[a-z]+);/gi, (m, e) =>
      e[0] === "#" ? String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : Number(e.slice(1))) : ENTITIES[e.toLowerCase()] ?? m,
    )
    .replace(/[ \t\f\v]+/g, " ")
    .replace(/\s*\n\s*/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

const BLOCKED_PATHS = /^\/(api|admin|profile|doctor\/edit|doctor\/registration|doctor-profile|edit-appointment|login|signup|patient-registration|unauthorized|_next)(\/|$)/;

// The visible text of one BOS page, for Isla's read_site_page tool.
export async function readSitePage(origin, path) {
  const p = String(path || "").trim().split(/[?#]/)[0];
  if (!/^\/[a-z0-9\-/]*$/i.test(p) || p.includes("//") || BLOCKED_PATHS.test(p)) {
    return `"${path}" is not a public BOS page Isla can read.`;
  }
  const slug = p.match(/^\/doctor\/([a-z0-9-]+)\/?$/)?.[1];
  if (slug) return surgeonDetails(slug);
  const res = await fetch(`${origin}${p}`, { headers: { "User-Agent": "BOS-Isla" }, cache: "no-store" });
  if (!res.ok) return `The page ${p} could not be found on BOS.`;
  const text = htmlToText(await res.text());
  return text ? `Text of ${p}:\n${text.slice(0, 6000)}` : `The page ${p} has no readable text.`;
}
