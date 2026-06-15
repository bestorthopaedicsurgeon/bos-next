import { prisma } from "@/lib/prisma";
import { seoSubspecialties } from "@/lib/constants/seoSubspecialties";
import { seoLocations } from "@/lib/constants/seoLocations";
import {
  matchesLocation,
  matchesSubspecialty,
  sortSurgeons,
  SURGEON_SELECT,
} from "./match";

// Minimum surgeons for a subspecialty x location page to be worth generating
// (avoids thin / low-value pages).
export const COMBO_THRESHOLD = 5;

// All valid subspecialty x location combos (count >= threshold). Used by
// generateStaticParams and the sitemap. One DB read.
export async function getValidSubLocCombos(threshold = COMBO_THRESHOLD) {
  try {
    const docs = await prisma.doctorProfile.findMany({
      where: { hidden: false },
      select: { location: true, practices: true, subspecialities: true },
    });
    const combos = [];
    for (const sub of seoSubspecialties) {
      for (const loc of seoLocations) {
        const count = docs.filter(
          (d) => matchesSubspecialty(d, sub) && matchesLocation(d, loc)
        ).length;
        if (count >= threshold) {
          combos.push({ subSlug: sub.slug, locSlug: loc.slug, count });
        }
      }
    }
    return combos;
  } catch (e) {
    console.error("getValidSubLocCombos failed:", e?.message);
    return [];
  }
}

// Surgeons matching BOTH a subspecialty and a location.
export async function getSurgeonsBySubAndLoc(sub, loc) {
  if (!sub || !loc) return [];
  try {
    const docs = await prisma.doctorProfile.findMany({
      where: { hidden: false },
      select: SURGEON_SELECT,
    });
    return sortSurgeons(
      docs.filter((d) => matchesSubspecialty(d, sub) && matchesLocation(d, loc))
    );
  } catch (e) {
    console.error("getSurgeonsBySubAndLoc failed:", e?.message);
    return [];
  }
}
