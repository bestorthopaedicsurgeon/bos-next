import { getAdPlacement } from "@/lib/ads/placements";
import { normalizeTargeting } from "@/lib/ads/context";

// Assignment rows for the chosen placements. Targeting is stored only on
// placements that pass that kind of page fact (see `contextKeys`), and only
// when the administrator actually limited the campaign.
/** @returns {{ placementKey: string, context?: import("@prisma/client").Prisma.InputJsonObject }[]} */
export function buildAssignments(placementKeys = [], targeting = {}) {
  const { specialties, locations } = normalizeTargeting(targeting);
  return placementKeys.map((placementKey) => {
    const provides = new Set(getAdPlacement(placementKey)?.contextKeys || []);
    const context = {};
    if (provides.has("specialty") && specialties.length) context.specialties = specialties;
    if (provides.has("location") && locations.length) context.locations = locations;
    return Object.keys(context).length ? { placementKey, context } : { placementKey };
  });
}

// The targeting a campaign was saved with, read back from its assignments.
export function targetingFromAssignments(assignments = []) {
  const specialties = new Set();
  const locations = new Set();
  for (const { context } of assignments) {
    if (!context || typeof context !== "object") continue;
    (context.specialties || []).forEach((value) => specialties.add(value));
    (context.locations || []).forEach((value) => locations.add(value));
  }
  return { specialties: [...specialties], locations: [...locations] };
}
