import { prisma } from "@/lib/prisma";
import { matchesLocation, sortSurgeons, SURGEON_SELECT } from "./match";

// Returns the surgeons that practise in a given SEO location config.
// Direct Prisma, fully guarded — returns [] on error.
export async function getSurgeonsByLocation(location) {
  if (!location) return [];
  try {
    const docs = await prisma.doctorProfile.findMany({
      where: { hidden: false },
      select: SURGEON_SELECT,
    });
    return sortSurgeons(docs.filter((d) => matchesLocation(d, location)));
  } catch (e) {
    console.error("getSurgeonsByLocation failed:", e?.message);
    return [];
  }
}
