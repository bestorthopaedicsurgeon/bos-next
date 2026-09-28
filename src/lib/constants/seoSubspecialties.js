// SEO subspecialty taxonomy for /best-<subspecialty>-surgeons landing pages.
// These target high-intent, body-part-specific searches ("best knee surgeon",
// "best hip surgeon", etc.) rather than clinical groupings. `matchTerms` are
// matched (case-insensitive, any term) against a surgeon's subspecialities.
// Counts (visible surgeons matching) are noted for reference.

export const seoSubspecialties = [
  {
    slug: "best-knee-surgeons",
    name: "Knee", // ~89
    heading: "Best Knee Surgeons",
    keyword: "knee surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "knee surgeon",
    localKeyword: "knee surgeon",
    matchTerms: ["knee", "acl", "patella"],
    intro:
      "Knee conditions are among the most common reasons people see an orthopaedic surgeon in Western Australia, from knee replacement and ACL reconstruction to arthroscopy and sports injuries. A knee surgeon can assess whether your knee needs surgery or a non surgical plan first. Browse trusted knee surgeons below, compare their experience and subspecialties, and book an appointment with the right specialist for your care.",
  },
  {
    slug: "best-hip-surgeons",
    name: "Hip", // ~70
    heading: "Best Hip Surgeons",
    keyword: "hip surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "hip surgeon",
    localKeyword: "hip surgeon",
    matchTerms: ["hip"],
    intro:
      "Hip surgeons in Western Australia treat everything from hip replacement and resurfacing to hip arthroscopy and complex revision surgery. Seeing a hip surgeon early helps you understand every option, including the anterior and posterior approaches to hip replacement. Find experienced hip surgeons below, compare their qualifications and hospital affiliations, and book an appointment close to home.",
  },
  {
    slug: "best-shoulder-surgeons",
    name: "Shoulder", // ~48
    heading: "Best Shoulder Surgeons",
    keyword: "shoulder surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "shoulder surgeon",
    localKeyword: "shoulder surgeon",
    matchTerms: ["shoulder", "rotator cuff"],
    intro:
      "Shoulder surgeons in Western Australia manage rotator cuff repairs, shoulder replacement, instability and sports injuries. A shoulder surgeon can tell you whether a tear or injury needs surgery or is likely to settle with physiotherapy. Browse the best shoulder surgeons below, compare their areas of expertise and patient reviews, and book directly.",
  },
  {
    slug: "best-spine-surgeons",
    name: "Spine", // ~10
    heading: "Best Spine Surgeons",
    keyword: "spine surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "spine surgeon",
    localKeyword: "spine surgeon",
    matchTerms: ["spine", "spinal"],
    intro:
      "Spine surgeons in Western Australia treat back and neck conditions including disc problems, sciatica, scoliosis and spinal stenosis. Most back pain settles without an operation, so a spine surgeon will usually confirm the diagnosis with imaging before recommending surgery. Find experienced spine surgeons below and book an appointment with a specialist suited to your condition.",
  },
  {
    slug: "best-foot-and-ankle-surgeons",
    name: "Foot & Ankle", // ~21
    heading: "Best Foot & Ankle Surgeons",
    keyword: "foot and ankle surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "foot and ankle surgeon",
    localKeyword: "foot and ankle surgeon",
    matchTerms: ["foot", "ankle"],
    intro:
      "Foot and ankle surgeons in Western Australia treat bunions, ankle injuries, arthritis, tendon problems and sports injuries. A foot and ankle surgeon can help when pain or instability stops you walking comfortably. Browse trusted foot and ankle surgeons below and book an appointment with the right specialist.",
  },
  {
    slug: "best-hand-and-wrist-surgeons",
    name: "Hand & Wrist", // ~23
    heading: "Best Hand & Wrist Surgeons",
    keyword: "hand and wrist surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "hand surgeon",
    localKeyword: "hand doctor",
    matchTerms: ["hand", "wrist", "carpal"],
    intro:
      "Hand and wrist surgeons in Western Australia treat carpal tunnel syndrome, fractures, arthritis, tendon injuries and nerve conditions. Many patients search for a hand doctor, and a hand surgeon is the specialist who treats these conditions, with or without surgery. Find experienced hand and wrist surgeons below and book an appointment.",
  },
  {
    slug: "best-sports-surgeons",
    name: "Sports", // ~60
    heading: "Best Sports Orthopaedic Surgeons",
    keyword: "sports orthopaedic surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "sports orthopaedic surgeon",
    localKeyword: "sports injury doctor",
    matchTerms: ["sport"],
    intro:
      "Sports orthopaedic surgeons in Western Australia treat injuries to athletes and active people, including ACL reconstruction, arthroscopy, cartilage repair and tendon injuries. A sports orthopaedic surgeon works alongside your physiotherapist to plan the safest return to sport. Browse the best sports surgeons below and book an appointment to get back to doing what you love.",
  },
  {
    slug: "best-elbow-surgeons",
    name: "Elbow", // ~15
    heading: "Best Elbow Surgeons",
    keyword: "elbow surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "elbow surgeon",
    localKeyword: "elbow surgeon",
    matchTerms: ["elbow"],
    intro:
      "Elbow surgeons in Western Australia treat tennis elbow, fractures, arthritis, instability and nerve problems. An elbow surgeon can advise when injections, bracing or surgery make sense for your elbow. Find experienced elbow surgeons below and book an appointment with the right specialist.",
  },
  {
    slug: "best-trauma-surgeons",
    name: "Trauma", // ~59
    heading: "Best Orthopaedic Trauma Surgeons",
    keyword: "orthopaedic trauma surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "orthopaedic trauma surgeon",
    localKeyword: "orthopaedic trauma surgeon",
    matchTerms: ["trauma", "fracture"],
    intro:
      "Orthopaedic trauma surgeons in Western Australia manage fractures and complex injuries from accidents, falls and sport. An orthopaedic trauma surgeon repairs broken bones and damaged joints, then oversees your recovery. Browse trusted trauma surgeons below, compare their experience and hospital affiliations, and book an appointment.",
  },
  {
    slug: "best-paediatric-orthopaedic-surgeons",
    name: "Paediatric", // ~16
    heading: "Best Paediatric Orthopaedic Surgeons",
    keyword: "paediatric orthopaedic surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "paediatric orthopaedic surgeon",
    localKeyword: "paediatric orthopaedic surgeon",
    matchTerms: ["paediatric", "pediatric", "children"],
    intro:
      "Paediatric orthopaedic surgeons in Western Australia care for children with bone, joint and growth conditions, fractures and congenital differences. A paediatric orthopaedic surgeon is trained to treat growing bones, which heal differently from adult bones. Find experienced paediatric orthopaedic surgeons below and book an appointment for your child.",
  },
  {
    slug: "best-orthopaedic-oncology-surgeons",
    name: "Orthopaedic Oncology", // ~3
    heading: "Best Orthopaedic Oncology Surgeons",
    keyword: "orthopaedic oncology surgeons",
    // Keyword map: hub page target, and the phrase used with a location.
    primaryKeyword: "orthopaedic oncologist",
    localKeyword: "orthopaedic oncologist",
    matchTerms: ["oncology", "tumour", "tumor", "sarcoma"],
    intro:
      "Orthopaedic oncology surgeons in Western Australia specialise in bone and soft tissue tumours, including sarcoma and limb preserving surgery. An orthopaedic oncologist works within a specialist cancer team to plan your treatment. Find experienced orthopaedic oncology surgeons below and book an appointment with a specialist in this field.",
  },
];

export const getSubspecialtyBySlug = (slug) =>
  seoSubspecialties.find((s) => s.slug === slug) || null;
