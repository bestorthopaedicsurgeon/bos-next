import assert from "node:assert/strict";
import test from "node:test";

import { allowsSiteWideAd, isSelectableAdPlacementKey } from "./placements.js";
import {
  assignmentMatchesContext,
  campaignMatchesPlacement,
  chooseWeighted,
  effectiveStatus,
  hasRequiredMedia,
  isServable,
  isWithinSchedule,
  selectCampaign,
  selectCampaigns,
} from "./selection.js";
import {
  derivePublishedStatus,
  normalizeHttpsUrl,
  validateCampaignPayload,
  validatePublishReady,
} from "./validation.js";

const NOW = new Date("2026-10-21T04:00:00.000Z"); // 12:00 in Perth

const campaign = (overrides = {}) => ({
  id: "c1",
  status: "ACTIVE",
  approvedAt: "2026-10-01T00:00:00.000Z",
  advertiser: { isActive: true, name: "Clinic" },
  coverage: "SELECTED_PLACEMENTS",
  mediaType: "IMAGE",
  desktopImagePath: "advertisers/a/campaigns/c1/desktop/x.png",
  startsAt: null,
  endsAt: null,
  priority: 0,
  weight: 1,
  assignments: [
    { placementKey: "SPECIALTY_RESULTS_INLINE", context: null, isActive: true },
  ],
  ...overrides,
});

test("schedule checks work with Date objects and with cached ISO strings", () => {
  const window = {
    startsAt: "2026-10-20T00:00:00.000Z",
    endsAt: "2026-10-22T00:00:00.000Z",
  };
  assert.equal(isWithinSchedule(window, NOW), true);
  assert.equal(
    isWithinSchedule(
      { startsAt: new Date(window.startsAt), endsAt: new Date(window.endsAt) },
      NOW,
    ),
    true,
  );
  assert.equal(
    isWithinSchedule({ startsAt: "2026-10-22T00:00:00.000Z" }, NOW),
    false,
  );
  assert.equal(
    isWithinSchedule({ endsAt: "2026-10-21T04:00:00.000Z" }, NOW),
    false,
  );
  assert.equal(isWithinSchedule({}, NOW), true);
});

test("effective status reflects the schedule for published campaigns only", () => {
  assert.equal(
    effectiveStatus({ status: "ACTIVE", endsAt: "2026-10-20T00:00:00Z" }, NOW),
    "ENDED",
  );
  assert.equal(
    effectiveStatus(
      { status: "ACTIVE", startsAt: "2026-11-01T00:00:00Z" },
      NOW,
    ),
    "SCHEDULED",
  );
  assert.equal(
    effectiveStatus(
      { status: "SCHEDULED", startsAt: "2026-10-01T00:00:00Z" },
      NOW,
    ),
    "ACTIVE",
  );
  assert.equal(
    effectiveStatus({ status: "PAUSED", endsAt: "2026-10-20T00:00:00Z" }, NOW),
    "PAUSED",
  );
  assert.equal(effectiveStatus({ status: "DRAFT" }, NOW), "DRAFT");
});

test("site wide campaigns fill the page slot while selected campaigns only fill their positions", () => {
  const siteWide = campaign({ coverage: "SITE_WIDE", assignments: [] });
  assert.equal(campaignMatchesPlacement(siteWide, "SITE_WIDE_FOOTER"), true);
  assert.equal(campaignMatchesPlacement(siteWide, "BLOG_INDEX_INLINE"), true);
  assert.equal(
    campaignMatchesPlacement(siteWide, "LOCATION_RESULTS_INLINE"),
    true,
  );

  const selected = campaign();
  assert.equal(
    campaignMatchesPlacement(selected, "SPECIALTY_RESULTS_INLINE"),
    true,
  );
  assert.equal(
    campaignMatchesPlacement(selected, "LOCATION_RESULTS_INLINE"),
    false,
  );
  assert.equal(campaignMatchesPlacement(selected, "SITE_WIDE_FOOTER"), false);
});

test("targeting applies only where the placement passes that page fact", () => {
  const knee = campaign({
    assignments: [
      {
        placementKey: "SPECIALTY_RESULTS_INLINE",
        context: { specialties: ["best-knee-surgeons"] },
        isActive: true,
      },
      {
        placementKey: "LOCATION_RESULTS_INLINE",
        context: { specialties: ["best-knee-surgeons"] },
        isActive: true,
      },
      {
        placementKey: "SURGEON_RESULTS_INLINE",
        context: { specialties: ["best-knee-surgeons"], locations: ["perth"] },
        isActive: true,
      },
    ],
  });
  assert.equal(
    assignmentMatchesContext(knee, "SPECIALTY_RESULTS_INLINE", {
      specialty: "best-knee-surgeons",
    }),
    true,
  );
  assert.equal(
    assignmentMatchesContext(knee, "SPECIALTY_RESULTS_INLINE", {
      specialty: "best-hip-surgeons",
    }),
    false,
  );
  // Location pages carry no specialty, so a specialty rule does not block them.
  assert.equal(
    assignmentMatchesContext(knee, "LOCATION_RESULTS_INLINE", {
      location: "perth",
    }),
    true,
  );
  // The directory passes both facts, so both rules must match.
  assert.equal(
    assignmentMatchesContext(knee, "SURGEON_RESULTS_INLINE", {
      specialty: "best-knee-surgeons",
      location: "perth",
    }),
    true,
  );
  assert.equal(
    assignmentMatchesContext(knee, "SURGEON_RESULTS_INLINE", {
      specialty: "best-knee-surgeons",
    }),
    false,
  );
  assert.equal(
    assignmentMatchesContext(campaign(), "SPECIALTY_RESULTS_INLINE", {}),
    true,
  );
});

test("required media depends on the creative type", () => {
  assert.equal(hasRequiredMedia(campaign()), true);
  assert.equal(hasRequiredMedia(campaign({ desktopImagePath: null })), false);
  assert.equal(
    hasRequiredMedia(
      campaign({ mediaType: "VIDEO", videoPath: "v.mp4", posterPath: null }),
    ),
    false,
  );
  assert.equal(
    hasRequiredMedia(
      campaign({ mediaType: "VIDEO", videoPath: "v.mp4", posterPath: "p.jpg" }),
    ),
    true,
  );
});

test("only approved, published, scheduled campaigns from active advertisers are served", () => {
  const key = "SPECIALTY_RESULTS_INLINE";
  assert.equal(isServable(campaign(), key, {}, NOW), true);
  assert.equal(isServable(campaign({ status: "PAUSED" }), key, {}, NOW), false);
  assert.equal(isServable(campaign({ status: "DRAFT" }), key, {}, NOW), false);
  assert.equal(isServable(campaign({ approvedAt: null }), key, {}, NOW), false);
  assert.equal(
    isServable(campaign({ advertiser: { isActive: false } }), key, {}, NOW),
    false,
  );
  assert.equal(
    isServable(campaign({ endsAt: "2026-10-20T00:00:00Z" }), key, {}, NOW),
    false,
  );
  assert.equal(
    isServable(
      campaign({ status: "SCHEDULED", startsAt: "2026-10-20T00:00:00Z" }),
      key,
      {},
      NOW,
    ),
    true,
  );
});

test("highest priority wins and equal priorities share by weight", () => {
  const low = campaign({ id: "low", priority: 0 });
  const high = campaign({ id: "high", priority: 5 });
  assert.equal(chooseWeighted([low, high], () => 0.99).id, "high");

  const a = campaign({ id: "a", weight: 1 });
  const b = campaign({ id: "b", weight: 3 });
  assert.equal(chooseWeighted([a, b], () => 0.0).id, "a");
  assert.equal(chooseWeighted([a, b], () => 0.24).id, "a");
  assert.equal(chooseWeighted([a, b], () => 0.26).id, "b");
  assert.equal(chooseWeighted([a, b], () => 0.999).id, "b");
  assert.equal(
    chooseWeighted([], () => 0.5),
    null,
  );

  assert.equal(
    selectCampaign(
      [campaign({ status: "PAUSED" })],
      "SPECIALTY_RESULTS_INLINE",
      {},
      { now: NOW },
    ),
    null,
  );
});

test("a placement receives at most two distinct eligible campaigns", () => {
  const a = campaign({ id: "a", priority: 5 });
  const b = campaign({ id: "b", priority: 5 });
  const c = campaign({ id: "c", priority: 0 });
  const paused = campaign({ id: "paused", priority: 10, status: "PAUSED" });

  assert.deepEqual(
    selectCampaigns(
      [a, b, c, paused],
      "SPECIALTY_RESULTS_INLINE",
      {},
      { now: NOW, random: () => 0, limit: 2 },
    ).map((item) => item.id),
    ["a", "b"],
  );
  assert.deepEqual(
    selectCampaigns(
      [a, c],
      "SPECIALTY_RESULTS_INLINE",
      {},
      { now: NOW, random: () => 0, limit: 5 },
    ).map((item) => item.id),
    ["a", "c"],
  );
  assert.deepEqual(
    selectCampaigns(
      [a, b, c],
      "SPECIALTY_RESULTS_INLINE",
      {},
      { now: NOW, random: () => 0, limit: 0 },
    ),
    [],
  );
});

test("the footer fallback stays off pages with a dedicated slot and private pages", () => {
  assert.equal(allowsSiteWideAd("/"), false);
  assert.equal(allowsSiteWideAd("/surgeons"), false);
  assert.equal(allowsSiteWideAd("/blog/knee-replacement-recovery"), false);
  assert.equal(allowsSiteWideAd("/best-knee-surgeons/perth"), false);
  assert.equal(allowsSiteWideAd("/doctor/rhys-clark"), false);
  assert.equal(allowsSiteWideAd("/doctor/registration"), false);
  assert.equal(allowsSiteWideAd("/profile"), false);
  assert.equal(allowsSiteWideAd("/doctors-guide"), true);
  assert.equal(isSelectableAdPlacementKey("SITE_WIDE_FOOTER"), false);
  assert.equal(isSelectableAdPlacementKey("constructor"), false);
});

test("destinations must be clean https URLs", () => {
  assert.equal(
    normalizeHttpsUrl("https://clinic.com.au/knee"),
    "https://clinic.com.au/knee",
  );
  for (const bad of [
    "http://clinic.com.au",
    "javascript:alert(1)",
    "data:text/html,hi",
    "not a url",
    "https://user:pass@clinic.com.au",
    "",
  ]) {
    assert.throws(() => normalizeHttpsUrl(bad), Error, bad);
  }
});

test("campaign validation keeps only approved positions and checks the schedule", () => {
  const base = {
    name: "Spring",
    advertiserName: "Clinic",
    advertiserWebsiteUrl: "https://clinic.com.au",
    altText: "Clinic logo",
    destinationUrl: "https://clinic.com.au/knee",
  };
  const result = validateCampaignPayload({
    ...base,
    coverage: "SELECTED_PLACEMENTS",
    placementKeys: [
      "SPECIALTY_RESULTS_INLINE",
      "SITE_WIDE_FOOTER",
      "MADE_UP",
      "SPECIALTY_RESULTS_INLINE",
    ],
  });
  assert.deepEqual(result.placementKeys, ["SPECIALTY_RESULTS_INLINE"]);

  assert.throws(
    () =>
      validateCampaignPayload({
        ...base,
        startsAt: "2026-10-22T00:00:00Z",
        endsAt: "2026-10-21T00:00:00Z",
      }),
    /end time must be after the start time/,
  );
  assert.throws(
    () =>
      validateCampaignPayload(
        { ...base, coverage: "SELECTED_PLACEMENTS", placementKeys: [] },
        { requirePublishReady: true },
      ),
    /at least one page or position/,
  );
  assert.throws(
    () => validateCampaignPayload({ ...base, contactEmail: "nope" }),
    /valid contact email/,
  );
  assert.deepEqual(
    validateCampaignPayload({
      ...base,
      coverage: "SITE_WIDE",
      placementKeys: ["HOME_AFTER_TESTIMONIALS"],
    }).placementKeys,
    [],
  );
});

test("publishing needs media, compliance and a position", () => {
  const ready = {
    mediaType: "IMAGE",
    desktopImagePath: "x.png",
    complianceAcceptedAt: new Date(),
    coverage: "SITE_WIDE",
  };
  assert.doesNotThrow(() => validatePublishReady(ready, []));
  assert.throws(
    () => validatePublishReady({ ...ready, desktopImagePath: null }, []),
    /desktop image/,
  );
  assert.throws(
    () => validatePublishReady({ ...ready, complianceAcceptedAt: null }, []),
    /compliance/,
  );
  assert.throws(
    () =>
      validatePublishReady({ ...ready, coverage: "SELECTED_PLACEMENTS" }, []),
    /page or position/,
  );
  assert.throws(
    () =>
      validatePublishReady(
        { ...ready, mediaType: "VIDEO", videoPath: "v.mp4" },
        [],
      ),
    /poster/,
  );

  assert.equal(derivePublishedStatus(null, null, NOW), "ACTIVE");
  assert.equal(
    derivePublishedStatus(new Date("2026-11-01"), null, NOW),
    "SCHEDULED",
  );
  assert.equal(
    derivePublishedStatus(null, new Date("2026-10-01"), NOW),
    "ENDED",
  );
});
