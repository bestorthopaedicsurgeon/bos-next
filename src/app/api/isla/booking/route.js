import { NextResponse } from "next/server";
import { bookingPage } from "@/lib/isla/knowledge";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Isla's open_booking_page tool: the booking page path for one surgeon.
export async function GET(req) {
  const slug = (req.nextUrl.searchParams.get("slug") || "").slice(0, 120);
  try {
    const { path, text } = await bookingPage(slug);
    return NextResponse.json({ path, text }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("Isla booking page failed:", e.message);
    return NextResponse.json(
      { path: null, text: "The booking page could not be opened just now. Suggest the Book Appointment button on the surgeon's profile." },
      { status: 500 },
    );
  }
}
