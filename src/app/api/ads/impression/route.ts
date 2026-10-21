import { NextResponse } from "next/server";
import { isAdPlacementKey } from "@/lib/ads/placements";
import { isLikelyBot, recordAdMetric } from "@/lib/ads/metrics";
import { isCampaignLiveInPlacement } from "@/lib/ads/serve";

const EVENTS = new Set(["impression", "videoStart", "videoComplete"]);

// Aggregate impression and video events from AdSlot. Counts are kept only for
// campaigns that are live in the reported placement, and crawler requests are
// ignored. Nothing about the visitor is stored.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const campaignId = String(body?.campaignId || "").slice(0, 64);
    const placementKey = String(body?.placementKey || "");
    const eventType = String(body?.eventType || "impression");

    if (!campaignId || !isAdPlacementKey(placementKey) || !EVENTS.has(eventType)) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
    if (isLikelyBot(request)) {
      return new NextResponse(null, { status: 204 });
    }
    if (!(await isCampaignLiveInPlacement(campaignId, placementKey))) {
      return new NextResponse(null, { status: 204 });
    }

    await recordAdMetric(campaignId, placementKey, eventType);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("Ad metric error:", error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
