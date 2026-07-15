import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


// Homepage featured lineup: pinned profiles first (in this order), then the
// remaining slots filled from the featured pool in a stable order so the
// same six always appear. Keep in sync with getFeaturedDoctors() in
// src/lib/data/publicData.js.
const HOMEPAGE_PINNED_IDS = [20, 104]; // Rhys Clark, Riaz JK Khan

export async function GET() {
  try {
    // 1. Pinned doctors, in pinned order, skipping any that are hidden
    const pinnedDocs = await prisma.doctorProfile.findMany({
      where: { id: { in: HOMEPAGE_PINNED_IDS }, hidden: false },
      include: { reviews: true },
    });
    const pinned = HOMEPAGE_PINNED_IDS.map((id) =>
      pinnedDocs.find((d) => d.id === id)
    ).filter((d): d is NonNullable<typeof d> => Boolean(d));

    // 2. Fill the remaining slots from the featured pool, deterministically
    let featuredDoctors = pinned;
    const fillCount = 6 - pinned.length;
    if (fillCount > 0) {
      const fill = await prisma.doctorProfile.findMany({
        where: {
          featured: true,
          hidden: false,
          id: { notIn: HOMEPAGE_PINNED_IDS },
        },
        include: { reviews: true },
        orderBy: { id: "asc" },
        take: fillCount,
      });
      featuredDoctors = [...pinned, ...fill];
    }

    const featuredIds = featuredDoctors.map((d) => d.id);

    // 3. If fewer than 6, get top-rated doctors to fill the rest
    if (featuredDoctors.length < 6) {
      const remaining = 6 - featuredDoctors.length;

      const allDoctors = await prisma.doctorProfile.findMany({
        where: {
          id: {
            notIn: featuredIds,
          },
        },
        include: { reviews: true },
      });

      // Compute average rating
      const doctorsWithRating = allDoctors.map((doc) => {
        const count = doc.reviews.length;
        const avgRating =
          count === 0
            ? 0
            : doc.reviews.reduce(
                (sum, r) =>
                  sum +
                  (r.professionalism +
                    r.punctuality +
                    r.helpfulness +
                    r.knowledge) /
                    4,
                0,
              ) / count;

        return { ...doc, avgRating };
      });

      // Sort by highest average rating
      const topRated = doctorsWithRating
        .sort((a, b) => b.avgRating - a.avgRating)
        .slice(0, remaining);

      // Merge with manually featured
      featuredDoctors = [...featuredDoctors, ...topRated];
    }

    console.log("Final Featured Doctors:", featuredDoctors);

    // 3. Return response
    return NextResponse.json(
      {
        success: true,
        data: featuredDoctors.map((doc) => ({
          id: doc.id,
          title: doc.title,
          name: doc.name,
          image: doc.image,
          featured: doc.featured,
          designation: doc.designation, 
          location: doc.location,
          avgRating:
            doc.reviews.length === 0
              ? null
              : doc.reviews.reduce(
                  (sum, r) =>
                    sum +
                    (r.professionalism +
                      r.punctuality +
                      r.helpfulness +
                      r.knowledge) /
                      4,
                  0,
                ) / doc.reviews.length,
          subspecialities: doc.subspecialities,
          slug: doc.slug,
        })),
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching featured doctors:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch featured doctors" },
      { status: 500 },
    );
  }
}
