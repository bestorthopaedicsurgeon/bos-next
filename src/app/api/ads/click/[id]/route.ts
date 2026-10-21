import { NextResponse } from "next/server";
import { isAdPlacementKey } from "@/lib/ads/placements";
import { isLikelyBot, recordAdMetric } from "@/lib/ads/metrics";
import { getAdDestination } from "@/lib/ads/serve";

// Sponsored links go through here: count one aggregate click, then send the
// visitor to the campaign's approved HTTPS destination (looked up by id, never
// read from the request). Crawlers are redirected without being counted.
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const placement = new URL(request.url).searchParams.get("placement") || "";
  const destination = await getAdDestination(id);

  if (!destination) {
    return NextResponse.redirect(new URL("/", request.url), 302);
  }

  if (isAdPlacementKey(placement) && !isLikelyBot(request)) {
    try {
      await recordAdMetric(id, placement, "click");
    } catch (error) {
      console.error("Ad click metric error:", error);
    }
  }

  const response = NextResponse.redirect(destination, 302);
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}
