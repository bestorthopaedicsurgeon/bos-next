export const AD_COVERAGE = {
  SITE_WIDE: "SITE_WIDE",
  SELECTED_PLACEMENTS: "SELECTED_PLACEMENTS",
};

export const SITE_WIDE_PLACEMENT_KEY = "SITE_WIDE_FOOTER";

// Every approved ad position. `contextKeys` lists the page facts a placement
// passes to the ad server (a specialty and/or location slug), which is what an
// optional campaign targeting rule can be matched against.
export const AD_PLACEMENTS = {
  SITE_WIDE_FOOTER: {
    key: "SITE_WIDE_FOOTER",
    label: "Every public page",
    shortLabel: "Above the footer",
    description:
      "Fallback position above the footer on public pages without a dedicated ad position.",
    group: "Site wide",
    selectable: false,
    format: "wide",
    contextKeys: [],
  },
  HOME_AFTER_TESTIMONIALS: {
    key: "HOME_AFTER_TESTIMONIALS",
    label: "Homepage",
    shortLabel: "After featured surgeons",
    description:
      "A wide placement after the featured surgeon profiles and before patient reviews.",
    group: "Homepage",
    selectable: true,
    format: "wide",
    contextKeys: [],
  },
  SURGEON_RESULTS_INLINE: {
    key: "SURGEON_RESULTS_INLINE",
    label: "Surgeon directory",
    shortLabel: "After surgeon results",
    description:
      "Appears after the surgeon profiles and pagination on the Surgeons page and its filtered searches.",
    group: "Surgeon directory",
    selectable: true,
    format: "wide",
    contextKeys: ["specialty", "location"],
  },
  SPECIALTY_RESULTS_INLINE: {
    key: "SPECIALTY_RESULTS_INLINE",
    label: "Specialty pages",
    shortLabel: "Before specialty results",
    description:
      "Appears before the results heading on pages such as Best Knee Surgeons.",
    group: "Surgeon directory",
    selectable: true,
    format: "wide",
    contextKeys: ["specialty"],
  },
  SPECIALTY_LOCATION_RESULTS_INLINE: {
    key: "SPECIALTY_LOCATION_RESULTS_INLINE",
    label: "Specialty pages in a location",
    shortLabel: "Before local specialty results",
    description:
      "Appears before the results heading on pages such as Best Knee Surgeons in Perth.",
    group: "Surgeon directory",
    selectable: true,
    format: "wide",
    contextKeys: ["specialty", "location"],
  },
  LOCATION_RESULTS_INLINE: {
    key: "LOCATION_RESULTS_INLINE",
    label: "Location pages",
    shortLabel: "Before local surgeon results",
    description:
      "Appears before the results heading on pages such as Best Orthopaedic Surgeons in Perth.",
    group: "Surgeon directory",
    selectable: true,
    format: "wide",
    contextKeys: ["location"],
  },
  BLOG_INDEX_INLINE: {
    key: "BLOG_INDEX_INLINE",
    label: "Blog listing",
    shortLabel: "Below the blog banner",
    description:
      "Appears below the blog banner and before the article listing heading.",
    group: "Blog",
    selectable: true,
    format: "wide",
    contextKeys: [],
  },
  BLOG_ARTICLE_INLINE: {
    key: "BLOG_ARTICLE_INLINE",
    label: "Blog articles",
    shortLabel: "Inside long articles",
    description:
      "Appears between sections of longer articles, after the second section.",
    group: "Blog",
    selectable: true,
    format: "wide",
    contextKeys: [],
  },
};

export const SELECTABLE_AD_PLACEMENTS = Object.values(AD_PLACEMENTS).filter(
  (placement) => placement.selectable,
);

export const AD_PLACEMENT_KEYS = Object.keys(AD_PLACEMENTS);

export function isAdPlacementKey(value) {
  return typeof value === "string" && Object.hasOwn(AD_PLACEMENTS, value);
}

export function isSelectableAdPlacementKey(value) {
  return isAdPlacementKey(value) && AD_PLACEMENTS[value].selectable;
}

export function getAdPlacement(value) {
  return isAdPlacementKey(value) ? AD_PLACEMENTS[value] : null;
}

export function getPlacementLabel(value) {
  return getAdPlacement(value)?.label || value;
}

// The footer is a fallback for site-wide campaigns. Pages with a dedicated ad
// slot use that position instead, which keeps a site-wide campaign to one ad
// per page. Surgeon profiles and private pages remain ad free.
const FOOTER_FALLBACK_EXCLUDED_PATHS = [
  /^\/$/,
  /^\/surgeons\/?$/,
  /^\/blog(?:\/[^/]+)?\/?$/,
  /^\/best-[^/]+-surgeons(?:\/[^/]+)?\/?$/,
  /^\/doctor(\/|$)/,
  /^\/profile(\/|$)/,
  /^\/unauthorized(\/|$)/,
];

export function allowsSiteWideAd(pathname = "") {
  return !FOOTER_FALLBACK_EXCLUDED_PATHS.some((pattern) =>
    pattern.test(pathname || "/"),
  );
}
