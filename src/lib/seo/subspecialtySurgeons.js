import { prisma } from "@/lib/prisma";
import { matchesSubspecialty, sortSurgeons, SURGEON_SELECT } from "./match";

// Returns the surgeons whose subspecialities match a given SEO subspecialty.
// Direct Prisma, fully guarded — returns [] on error.
export async function getSurgeonsBySubspecialty(subspecialty) {
  if (!subspecialty) return [];
  try {
    const docs = await prisma.doctorProfile.findMany({
      where: { hidden: false },
      select: SURGEON_SELECT,
    });
    return sortSurgeons(docs.filter((d) => matchesSubspecialty(d, subspecialty)));
  } catch (e) {
    console.error("getSurgeonsBySubspecialty failed:", e?.message);
    return [];
  }
}
