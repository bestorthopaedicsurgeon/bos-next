// SEO location taxonomy for /best-orthopaedic-surgeons/[location] landing pages.
// Only locations with a real surgeon presence are listed (avoids thin pages).
// `suburbs` matches a doctor's `location` field or any practice address.
// `postcodeRange` (optional) rolls a whole metro/region up by practice postcode.
// Slugs use hyphens (URL convention, consistent with existing routes); visible
// copy never does.

export const seoLocations = [
  {
    slug: "perth",
    name: "Perth",
    type: "city",
    postcodeRange: [6000, 6199],
    suburbs: [
      "Perth",
      "West Perth",
      "East Perth",
      "Murdoch",
      "Nedlands",
      "Claremont",
      "Subiaco",
      "Joondalup",
      "Mount Lawley",
      "Palmyra",
      "Osborne Park",
      "Belmont",
      "Midland",
      "Wembley",
      "Cottesloe",
      "Applecross",
      "Booragoon",
      "Mount Hawthorn",
    ],
    intro:
      "Perth is home to the largest concentration of orthopaedic surgeons in Western Australia, with specialists practising across leading hospitals and clinics in Murdoch, Nedlands, Subiaco, West Perth and the wider metropolitan area. Browse trusted Perth orthopaedic surgeons below, compare their subspecialties, qualifications and hospital affiliations, and book an appointment with the right specialist for your care.",
  },
  {
    slug: "murdoch",
    name: "Murdoch",
    type: "suburb",
    suburbs: ["Murdoch"],
    intro:
      "Murdoch is one of Perth's busiest medical precincts, anchored by St John of God Murdoch Hospital and Murdoch Surgicentre. It is home to many of Western Australia's leading orthopaedic surgeons across hip, knee, shoulder, spine and sports specialties. Find an orthopaedic surgeon practising in Murdoch below and book directly.",
  },
  {
    slug: "nedlands",
    name: "Nedlands",
    type: "suburb",
    suburbs: ["Nedlands"],
    intro:
      "Nedlands is a major medical hub in Perth, home to Sir Charles Gairdner Hospital and Perth Children's Hospital. A number of highly experienced orthopaedic surgeons consult and operate in Nedlands. Browse orthopaedic surgeons practising in Nedlands below and book an appointment.",
  },
  {
    slug: "claremont",
    name: "Claremont",
    type: "suburb",
    suburbs: ["Claremont"],
    intro:
      "Claremont is a well established consulting location for orthopaedic specialists in Perth's western suburbs. Find experienced orthopaedic surgeons practising in Claremont below, compare their areas of expertise and book directly.",
  },
  {
    slug: "subiaco",
    name: "Subiaco",
    type: "suburb",
    suburbs: ["Subiaco"],
    intro:
      "Subiaco is a leading private medical precinct in Perth, with St John of God Subiaco Hospital and many specialist consulting suites. Browse trusted orthopaedic surgeons practising in Subiaco below and book an appointment with the right specialist.",
  },
  {
    slug: "west-perth",
    name: "West Perth",
    type: "suburb",
    suburbs: ["West Perth"],
    intro:
      "West Perth is a central consulting location for many of Perth's orthopaedic surgeons, within easy reach of the city's major hospitals. Find an orthopaedic surgeon in West Perth below and book your appointment.",
  },
  {
    slug: "joondalup",
    name: "Joondalup",
    type: "suburb",
    suburbs: ["Joondalup"],
    intro:
      "Joondalup serves Perth's northern suburbs, with Joondalup Health Campus providing comprehensive orthopaedic care. Browse orthopaedic surgeons practising in Joondalup below and book an appointment close to home.",
  },
  {
    slug: "bunbury",
    name: "Bunbury",
    type: "city",
    postcodeRange: [6230, 6231],
    suburbs: ["Bunbury", "South Bunbury"],
    intro:
      "Bunbury is the largest city in regional Western Australia's South West and the main centre for orthopaedic care in the region. Find orthopaedic surgeons practising in Bunbury below, so patients in the South West can access specialist care closer to home.",
  },
  {
    slug: "geraldton",
    name: "Geraldton",
    type: "city",
    postcodeRange: [6530, 6531],
    suburbs: ["Geraldton"],
    intro:
      "Geraldton is the major regional centre of Western Australia's Mid West. Find orthopaedic surgeons consulting in Geraldton below, helping patients across the Mid West access specialist orthopaedic care without travelling to Perth.",
  },
];

export const getLocationBySlug = (slug) =>
  seoLocations.find((l) => l.slug === slug) || null;
