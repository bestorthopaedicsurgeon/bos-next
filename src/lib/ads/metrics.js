import { prisma } from "@/lib/prisma";
import { isAdPlacementKey } from "@/lib/ads/placements";

// Event type -> AdDailyMetric column. Only these fixed names ever reach SQL.
const METRIC_COLUMNS = {
  impression: "impressions",
  click: "clicks",
  videoStart: "videoStarts",
  videoComplete: "videoCompletes",
};

// Today's date in Perth as YYYY-MM-DD (reporting days follow Perth time).
export function getPerthDay(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Perth",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

// Adds one to today's aggregate count for a campaign and placement. A single
// INSERT ... ON CONFLICT statement, so simultaneous first events of the day
// cannot collide on the unique key. Nothing about the visitor is stored.
export async function recordAdMetric(campaignId, placementKey, eventType) {
  const column = METRIC_COLUMNS[eventType];
  if (!column || !isAdPlacementKey(placementKey) || !campaignId) return false;

  await prisma.$executeRawUnsafe(
    `INSERT INTO "AdDailyMetric" ("id", "campaignId", "placementKey", "date", "${column}", "createdAt", "updatedAt")
     VALUES (gen_random_uuid()::text, $1, $2, $3::date, 1, NOW(), NOW())
     ON CONFLICT ("campaignId", "placementKey", "date")
     DO UPDATE SET "${column}" = "AdDailyMetric"."${column}" + 1, "updatedAt" = NOW()`,
    campaignId,
    placementKey,
    getPerthDay(),
  );
  return true;
}

// Requests from crawlers and link previewers are not people seeing an ad.
const BOT_PATTERN =
  /bot|crawl|spider|slurp|preview|fetch|monitor|lighthouse|headless|python|curl|wget|httpclient|axios|node-fetch|facebookexternalhit|embedly|whatsapp|telegram/i;

export function isLikelyBot(request) {
  const agent = request.headers.get("user-agent") || "";
  return !agent || BOT_PATTERN.test(agent);
}
