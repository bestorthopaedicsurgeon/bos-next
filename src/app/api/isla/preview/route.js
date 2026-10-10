import { NextResponse } from "next/server";
import { islaPreviewVideo } from "@/lib/isla/anam";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Isla's idle clip for the widget launcher (a signed URL, valid for an hour).
export async function GET() {
  try {
    const videoUrl = await islaPreviewVideo();
    return NextResponse.json({ videoUrl }, { headers: { "Cache-Control": "private, max-age=600" } });
  } catch (e) {
    console.error("Isla preview failed:", e.message);
    return NextResponse.json({ videoUrl: null }, { status: 200, headers: { "Cache-Control": "no-store" } });
  }
}
