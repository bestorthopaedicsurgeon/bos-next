import { NextResponse } from "next/server";
import { getAdCreatives } from "@/lib/ads/serve";
import { isAdPlacementKey } from "@/lib/ads/placements";
import { normalizeAdContext } from "@/lib/ads/context";

export const dynamic = "force-dynamic";

// Up to two sanitised creatives for a placement, or 204 when none are eligible.
// Page context is reduced to known specialty and location slugs before use.
export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const placement = params.get("placement") || "";
  if (!isAdPlacementKey(placement)) {
    return NextResponse.json(
      { success: false, error: "Invalid placement." },
      { status: 400 },
    );
  }

  const context = normalizeAdContext({
    specialty: params.get("specialty"),
    location: params.get("location"),
  });

  try {
    const creatives = await getAdCreatives(placement, context);
    if (!creatives.length) {
      return new NextResponse(null, {
        status: 204,
        headers: { "Cache-Control": "private, no-store" },
      });
    }
    return NextResponse.json(
      { success: true, data: creatives },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  } catch (error) {
    console.error("Ad serving error:", error);
    return new NextResponse(null, { status: 204 });
  }
}
