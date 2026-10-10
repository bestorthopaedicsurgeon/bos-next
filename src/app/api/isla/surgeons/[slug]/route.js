import { NextResponse } from "next/server";
import { surgeonDetails } from "@/lib/isla/knowledge";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Isla's get_surgeon_details tool: everything BOS lists for one surgeon.
export async function GET(req, { params }) {
  const { slug } = await params;
  try {
    const text = await surgeonDetails(String(slug).slice(0, 120));
    return NextResponse.json({ text }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("Isla surgeon details failed:", e.message);
    return NextResponse.json({ text: "That profile could not be loaded just now. Apologise and offer to open their profile page." }, { status: 500 });
  }
}
