// Server side validation for advertising campaigns. Relative imports only, so
// the rules can be unit tested without the Next.js module resolver.
import {
  AD_COVERAGE,
  SELECTABLE_AD_PLACEMENTS,
  isSelectableAdPlacementKey,
} from "./placements.js";

export const AD_MEDIA_TYPES = ["IMAGE", "VIDEO"];
export const AD_STATUSES = [
  "DRAFT",
  "PENDING_REVIEW",
  "SCHEDULED",
  "ACTIVE",
  "PAUSED",
  "ENDED",
  "REJECTED",
  "ARCHIVED",
];

const PUBLISHABLE_STATUSES = new Set(["SCHEDULED", "ACTIVE"]);

const text = (value, max = 500) => String(value ?? "").trim().slice(0, max);

export function normalizeHttpsUrl(value, fieldName = "URL") {
  const raw = text(value, 2048);
  if (!raw) throw new Error(`${fieldName} is required.`);

  let url;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`${fieldName} must be a valid web address.`);
  }

  if (url.protocol !== "https:") {
    throw new Error(`${fieldName} must use https://.`);
  }

  if (url.username || url.password) {
    throw new Error(`${fieldName} cannot contain embedded credentials.`);
  }

  return url.toString();
}

function optionalHttpsUrl(value, fieldName) {
  if (!text(value)) return null;
  return normalizeHttpsUrl(value, fieldName);
}

function dateOrNull(value, fieldName) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${fieldName} is not a valid date and time.`);
  }
  return date;
}

export function derivePublishedStatus(startsAt, endsAt, now = new Date()) {
  if (endsAt && endsAt <= now) return "ENDED";
  if (startsAt && startsAt > now) return "SCHEDULED";
  return "ACTIVE";
}

export function validateCampaignPayload(payload, options = {}) {
  const requestedStatus = AD_STATUSES.includes(payload?.status)
    ? payload.status
    : "DRAFT";
  const mediaType = AD_MEDIA_TYPES.includes(payload?.mediaType)
    ? payload.mediaType
    : "IMAGE";
  const coverage = Object.values(AD_COVERAGE).includes(payload?.coverage)
    ? payload.coverage
    : AD_COVERAGE.SELECTED_PLACEMENTS;
  const startsAt = dateOrNull(payload?.startsAt, "Start time");
  const endsAt = dateOrNull(payload?.endsAt, "End time");
  const placementKeys = Array.from(
    new Set(
      Array.isArray(payload?.placementKeys)
        ? payload.placementKeys.filter(isSelectableAdPlacementKey)
        : [],
    ),
  );

  if (startsAt && endsAt && startsAt >= endsAt) {
    throw new Error("The end time must be after the start time.");
  }

  if (
    coverage === AD_COVERAGE.SELECTED_PLACEMENTS &&
    placementKeys.length === 0 &&
    (options.requirePublishReady || PUBLISHABLE_STATUSES.has(requestedStatus))
  ) {
    throw new Error("Choose at least one page or position for this campaign.");
  }

  const advertiserId = text(payload?.advertiserId, 100) || null;
  const advertiserName = text(payload?.advertiserName, 140);
  const advertiserWebsiteUrl = optionalHttpsUrl(
    payload?.advertiserWebsiteUrl || payload?.websiteUrl,
    "Advertiser website",
  );

  if (!advertiserId && !advertiserName) {
    throw new Error("Choose an advertiser or create a new advertiser.");
  }
  if (!advertiserId && !advertiserWebsiteUrl) {
    throw new Error("The advertiser website is required.");
  }
  const contactEmail = text(payload?.contactEmail, 254);
  if (!advertiserId && contactEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    throw new Error("Enter a valid contact email for the advertiser.");
  }

  const name = text(payload?.name, 160);
  const altText = text(payload?.altText, 240);
  const destinationUrl = normalizeHttpsUrl(
    payload?.destinationUrl,
    "Destination URL",
  );
  const ctaLabel = text(payload?.ctaLabel || "Learn more", 50);

  if (!name) throw new Error("Campaign name is required.");
  if (!altText) throw new Error("Accessible creative description is required.");
  if (!ctaLabel) throw new Error("CTA label is required.");

  const priority = Math.max(-100, Math.min(100, Number(payload?.priority) || 0));
  const weight = Math.max(1, Math.min(100, Number(payload?.weight) || 1));

  return {
    advertiserId,
    advertiser: advertiserId
      ? null
      : {
          name: advertiserName,
          contactName: text(payload?.contactName, 140) || null,
          contactEmail: contactEmail || null,
          websiteUrl: advertiserWebsiteUrl,
          abn: text(payload?.abn, 32) || null,
        },
    campaign: {
      name,
      mediaType,
      coverage,
      altText,
      destinationUrl,
      ctaLabel,
      status: requestedStatus,
      startsAt,
      endsAt,
      timezone: "Australia/Perth",
      priority,
      weight,
      loopVideo: payload?.loopVideo !== false,
      complianceNotes: text(payload?.complianceNotes, 2000) || null,
    },
    placementKeys:
      coverage === AD_COVERAGE.SITE_WIDE ? [] : placementKeys,
  };
}

export function validatePublishReady(campaign, placementKeys = []) {
  if (campaign.mediaType === "IMAGE" && !campaign.desktopImagePath) {
    throw new Error("Upload a desktop image before publishing.");
  }
  if (campaign.mediaType === "VIDEO" && !campaign.videoPath) {
    throw new Error("Upload a video before publishing.");
  }
  if (campaign.mediaType === "VIDEO" && !campaign.posterPath) {
    throw new Error("Upload a video poster before publishing.");
  }
  if (!campaign.complianceAcceptedAt) {
    throw new Error("Complete the advertising compliance confirmation first.");
  }
  if (
    campaign.coverage === AD_COVERAGE.SELECTED_PLACEMENTS &&
    placementKeys.length === 0
  ) {
    throw new Error("Choose at least one page or position before publishing.");
  }
}

export const DEFAULT_SELECTED_PLACEMENT =
  SELECTABLE_AD_PLACEMENTS[0]?.key || "HOME_AFTER_TESTIMONIALS";
