import { NextResponse } from "next/server";
import { readSitePage } from "@/lib/isla/knowledge";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Isla's read_site_page tool: the visible text of a public BOS page.
export async function GET(req) {
  const path = (req.nextUrl.searchParams.get("path") || "").slice(0, 200);
  try {
    const text = await readSitePage(req.nextUrl.origin, path);
    return NextResponse.json({ text }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("Isla page read failed:", e.message);
    return NextResponse.json({ text: "That page could not be read just now. Offer to open it on screen instead." }, { status: 500 });
  }
}
