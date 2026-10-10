import { NextResponse } from "next/server";
import { findSurgeons } from "@/lib/isla/knowledge";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Isla's find_surgeons tool: ranked BOS surgeons for a need and location.
export async function GET(req) {
  const q = req.nextUrl.searchParams;
  const arg = (k) => (q.get(k) || "").slice(0, 120);
  try {
    const text = await findSurgeons({ need: arg("need"), location: arg("location"), name: arg("name"), limit: q.get("limit") });
    return NextResponse.json({ text }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("Isla surgeon search failed:", e.message);
    return NextResponse.json({ text: "The BOS directory could not be searched just now. Apologise and suggest the Surgeons page." }, { status: 500 });
  }
}
