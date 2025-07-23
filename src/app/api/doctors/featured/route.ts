import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { title } from "process";

export async function GET() {
  try {
    // 1. Get manually featured doctors
    let featuredDoctors = await prisma.doctorProfile.findMany({
      where: { featured: true },
      include: { reviews: true },
      take: 4,
    });

    console.log("Featured Doctors backend:", featuredDoctors);

    const featuredIds = featuredDoctors.map((d) => d.id);

    // 2. If fewer than 4, get top-rated doctors to fill the rest
    if (featuredDoctors.length < 4) {
      const remaining = 4 - featuredDoctors.length;

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
