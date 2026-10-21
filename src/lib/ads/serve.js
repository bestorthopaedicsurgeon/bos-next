import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
import { isAdPlacementKey } from "@/lib/ads/placements";
import {
  isServable,
  selectCampaign,
  selectCampaigns,
} from "@/lib/ads/selection";
import { getAdMediaPublicUrl } from "@/lib/supabase/adUpload";

export const MAX_ADS_PER_PLACEMENT = 2;

// Published campaigns, cached for a minute and refreshed immediately when an
// administrator changes a campaign (revalidateTag("ads")). The cache stores
// JSON, so dates come back as strings; the selection rules handle that.
const loadCampaigns = unstable_cache(
  async () =>
    prisma.adCampaign.findMany({
      where: {
        status: { in: ["ACTIVE", "SCHEDULED"] },
        approvedAt: { not: null },
        advertiser: { isActive: true },
      },
      include: {
        advertiser: { select: { id: true, name: true, isActive: true } },
        assignments: {
          where: { isActive: true },
          select: { placementKey: true, context: true, isActive: true },
        },
      },
      orderBy: [{ priority: "desc" }, { createdAt: "asc" }],
    }),
  ["bos-active-ad-campaigns"],
  { revalidate: 60, tags: ["ads"] },
);

export async function getServableCampaign(placementKey, context = {}) {
  if (!isAdPlacementKey(placementKey)) return null;
  return selectCampaign(await loadCampaigns(), placementKey, context);
}

function publicCreative(campaign, placementKey) {
  let destinationHost = "";
  try {
    destinationHost = new URL(campaign.destinationUrl).hostname.replace(
      /^www\./,
      "",
    );
  } catch {
    return null;
  }

  return {
    id: campaign.id,
    placementKey,
    mediaType: campaign.mediaType,
    advertiserName: campaign.advertiser.name,
    destinationHost,
    altText: campaign.altText,
    ctaLabel: campaign.ctaLabel,
    loopVideo: campaign.loopVideo,
    desktopImageUrl: getAdMediaPublicUrl(campaign.desktopImagePath),
    mobileImageUrl: getAdMediaPublicUrl(campaign.mobileImagePath),
    videoUrl: getAdMediaPublicUrl(campaign.videoPath),
    posterUrl: getAdMediaPublicUrl(campaign.posterPath),
    captionsUrl: getAdMediaPublicUrl(campaign.captionsPath),
    clickUrl: `/api/ads/click/${campaign.id}?placement=${encodeURIComponent(placementKey)}`,
  };
}

export async function getServableCampaigns(placementKey, context = {}) {
  if (!isAdPlacementKey(placementKey)) return [];
  return selectCampaigns(await loadCampaigns(), placementKey, context, {
    limit: MAX_ADS_PER_PLACEMENT,
  });
}

// The public view contains only what visitors need. Advertiser contacts,
// compliance notes and internal identifiers never leave the server.
export async function getAdCreatives(placementKey, context = {}) {
  return (await getServableCampaigns(placementKey, context))
    .map((campaign) => publicCreative(campaign, placementKey))
    .filter(Boolean);
}

// Kept for callers that need a single campaign, such as a focused preview.
export async function getAdCreative(placementKey, context = {}) {
  return (await getAdCreatives(placementKey, context))[0] || null;
}

// Whether a reported impression or video event could genuinely have come
// from this placement right now. Used to ignore made up metric requests.
export async function isCampaignLiveInPlacement(campaignId, placementKey) {
  if (!isAdPlacementKey(placementKey)) return false;
  const campaign = (await loadCampaigns()).find(
    (item) => item.id === campaignId,
  );
  if (!campaign) return false;
  // Targeting decides which pages show a campaign; for counting it is enough
  // that the campaign is live in this placement, so targeting is set aside.
  const untargeted = {
    ...campaign,
    assignments: campaign.assignments.map((assignment) => ({
      ...assignment,
      context: null,
    })),
  };
  return isServable(untargeted, placementKey);
}

// The approved destination for a click. Never taken from the request, so the
// click endpoint cannot be used as an open redirect.
export async function getAdDestination(campaignId) {
  const campaign = await prisma.adCampaign.findUnique({
    where: { id: campaignId },
    select: {
      destinationUrl: true,
      status: true,
      advertiser: { select: { isActive: true } },
    },
  });
  if (
    !campaign ||
    campaign.status === "ARCHIVED" ||
    !campaign.advertiser.isActive
  ) {
    return null;
  }
  try {
    const url = new URL(campaign.destinationUrl);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}
