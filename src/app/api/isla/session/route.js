import { NextResponse } from "next/server";
import { AnamError, createSessionToken, islaAvatarId } from "@/lib/isla/anam";
import { buildIslaPersona } from "@/lib/isla/persona";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// Every session spends Anam minutes, so only BOS pages may start one, and each
// visitor at most a few in ten minutes.
const ALLOWED_ORIGINS = [
  /^https:\/\/(www\.)?bestorthopaedicsurgeon\.com\.au$/,
  /^https:\/\/bos-next[a-z0-9-]*\.vercel\.app$/,
  /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/,
];
const WINDOW_MS = 10 * 60 * 1000;
const MAX_CALLS = 6;
const recent = new Map();

function tooMany(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  if (recent.size > 5000) recent.clear();
  recent.set(ip, hits);
  return hits.length > MAX_CALLS;
}

// Starts an Isla call: returns a one hour Anam session token for the browser.
export async function POST(req) {
  const origin = req.headers.get("origin") || "";
  if (!ALLOWED_ORIGINS.some((re) => re.test(origin))) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (tooMany(ip)) {
    return NextResponse.json({ error: "Too many calls. Please try again in a few minutes." }, { status: 429 });
  }
  const body = await req.json().catch(() => ({}));
  try {
    const avatarId = await islaAvatarId();
    const personaConfig = await buildIslaPersona({ path: body?.path, avatarId });
    const sessionToken = await createSessionToken(personaConfig);
    return NextResponse.json({ sessionToken }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error("Isla session failed:", e.message);
    const status = e instanceof AnamError && e.status === 503 ? 503 : 502;
    return NextResponse.json({ error: "Isla is unavailable right now." }, { status });
  }
}
