// Pure campaign selection rules shared by the ad server, the admin dashboard
// and the tests. No database or framework imports.
import {
  AD_COVERAGE,
  SITE_WIDE_PLACEMENT_KEY,
  getAdPlacement,
} from "./placements.js";

const PUBLISHED = new Set(["ACTIVE", "SCHEDULED"]);

// Campaign rows can reach these functions with ISO strings instead of Date
// objects (Next's data cache stores results as JSON), so every date goes
// through toDate before it is compared.
export const toDate = (value) => (value ? new Date(value) : null);

export function isWithinSchedule(campaign, now = new Date()) {
  const startsAt = toDate(campaign.startsAt);
  const endsAt = toDate(campaign.endsAt);
  return (!startsAt || startsAt <= now) && (!endsAt || endsAt > now);
}

// The status an administrator should see. A published campaign reads as
// Scheduled before it starts and Ended once it finishes, whatever is stored.
export function effectiveStatus(campaign, now = new Date()) {
  if (!PUBLISHED.has(campaign.status)) return campaign.status;
  const startsAt = toDate(campaign.startsAt);
  const endsAt = toDate(campaign.endsAt);
  if (endsAt && endsAt <= now) return "ENDED";
  if (startsAt && startsAt > now) return "SCHEDULED";
  return "ACTIVE";
}

export function campaignMatchesPlacement(campaign, placementKey) {
  if (campaign.coverage === AD_COVERAGE.SITE_WIDE) {
    return true;
  }
  if (placementKey === SITE_WIDE_PLACEMENT_KEY) return false;
  return (campaign.assignments || []).some(
    (assignment) =>
      assignment.placementKey === placementKey && assignment.isActive !== false,
  );
}

const list = (value) => (Array.isArray(value) ? value.filter(Boolean) : []);

// Optional targeting stored on an assignment, e.g.
// { specialties: ["best-knee-surgeons"], locations: ["perth"] }. A rule only
// applies when the placement passes that kind of page fact; when it does, the
// page must match one of the listed values.
export function assignmentMatchesContext(campaign, placementKey, context = {}) {
  if (campaign.coverage === AD_COVERAGE.SITE_WIDE) return true;
  const assignment = (campaign.assignments || []).find(
    (item) => item.placementKey === placementKey,
  );
  const rules = assignment?.context;
  if (!rules || typeof rules !== "object" || Array.isArray(rules)) return true;

  const provides = new Set(getAdPlacement(placementKey)?.contextKeys || []);
  const specialties = list(rules.specialties);
  const locations = list(rules.locations);
  if (
    provides.has("specialty") &&
    specialties.length &&
    !specialties.includes(context.specialty)
  ) {
    return false;
  }
  if (
    provides.has("location") &&
    locations.length &&
    !locations.includes(context.location)
  ) {
    return false;
  }
  return true;
}

export function hasRequiredMedia(campaign) {
  if (campaign.mediaType === "IMAGE") return Boolean(campaign.desktopImagePath);
  if (campaign.mediaType === "VIDEO")
    return Boolean(campaign.videoPath && campaign.posterPath);
  return false;
}

// Everything a campaign needs to be shown in a placement right now.
export function isServable(
  campaign,
  placementKey,
  context = {},
  now = new Date(),
) {
  return (
    PUBLISHED.has(campaign.status) &&
    Boolean(campaign.approvedAt) &&
    campaign.advertiser?.isActive !== false &&
    isWithinSchedule(campaign, now) &&
    campaignMatchesPlacement(campaign, placementKey) &&
    assignmentMatchesContext(campaign, placementKey, context) &&
    hasRequiredMedia(campaign)
  );
}

// Highest priority wins; equal priorities share delivery by weight. Never
// based on who the visitor is.
export function chooseWeighted(campaigns, random = Math.random) {
  if (!campaigns.length) return null;
  const highestPriority = Math.max(
    ...campaigns.map((item) => item.priority || 0),
  );
  const pool = campaigns.filter(
    (item) => (item.priority || 0) === highestPriority,
  );
  const total = pool.reduce(
    (sum, item) => sum + Math.max(1, item.weight || 1),
    0,
  );
  let cursor = random() * total;
  for (const item of pool) {
    cursor -= Math.max(1, item.weight || 1);
    if (cursor < 0) return item;
  }
  return pool[pool.length - 1];
}

export function selectCampaign(
  campaigns,
  placementKey,
  context = {},
  { now = new Date(), random = Math.random } = {},
) {
  return (
    selectCampaigns(campaigns, placementKey, context, {
      now,
      random,
      limit: 1,
    })[0] || null
  );
}

// A public placement can show a small rail of campaigns. Selection happens
// without replacement, so the same campaign can never occupy both positions.
// Priority is reconsidered after each pick: the strongest campaign is always
// included first, then the next position is filled from the remaining pool.
export function selectCampaigns(
  campaigns,
  placementKey,
  context = {},
  { now = new Date(), random = Math.random, limit = 2 } = {},
) {
  const remaining = campaigns.filter((campaign) =>
    isServable(campaign, placementKey, context, now),
  );
  const selected = [];
  const count = Math.max(0, Math.floor(Number(limit) || 0));

  while (remaining.length && selected.length < count) {
    const campaign = chooseWeighted(remaining, random);
    if (!campaign) break;
    selected.push(campaign);
    remaining.splice(remaining.indexOf(campaign), 1);
  }

  return selected;
}
