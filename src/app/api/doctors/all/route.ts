import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "1000"); // Standard high limit if not specified
    const skip = (page - 1) * limit;

    const name = searchParams.get("name") || "";
    const subspecialty = searchParams.get("subspecialty") || "";
    const location = searchParams.get("location") || "";

    // Construct the where clause
    const where: any = {};

    // Filter by name
    if (name) {
      where.name = { contains: name, mode: 'insensitive' };
    }

    // Filter by subspecialty
    if (subspecialty) {
      const rawResult = await prisma.$queryRaw<{id: number}[]>`
        SELECT id FROM "DoctorProfile"
        WHERE EXISTS (
          SELECT 1 FROM unnest(subspecialities) as sub
          WHERE sub ILIKE ${'%' + subspecialty + '%'}
        )
      `;
      where.id = {
        in: rawResult.map(r => r.id)
      };
    }

    // Filter by location
    if (location) {
      where.location = {
        contains: location,
        mode: 'insensitive'
      };
    }

    const topDoctorId = 20;
    const filter = searchParams.get("filter") || "all";
    if (filter === "featured") {
      where.featured = true;
    } else if (filter === "hidden") {
      where.hidden = true;
    }

    // Get counts for dashboard stats
    const [totalCount, activeCount, pendingCount, featuredCount, hiddenCount] = await Promise.all([
      prisma.doctorProfile.count({ where }),
      prisma.doctorProfile.count({ where: { ...where, registrationCompleted: true } }),
      prisma.doctorProfile.count({ where: { ...where, registrationCompleted: false } }),
      prisma.doctorProfile.count({ where: { ...where, featured: true } }),
      prisma.doctorProfile.count({ where: { ...where, hidden: true } }),
    ]);

    // Define inclusion criteria once for reuse
    const includeQuery = {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          role: true,
        },
      },
      reviews: {
        select: {
          id: true,
          professionalism: true,
          punctuality: true,
          helpfulness: true,
          knowledge: true,
          review: true,
          user: {
            select: {
              name: true,
            },
          },
        },
      },
    };

    // 1. Check if we should pin the specific doctor to the top (on page 1)
    let topDoctor = null;
    if (page === 1) {
      topDoctor = await prisma.doctorProfile.findFirst({
        where: { ...where, id: topDoctorId },
        include: includeQuery,
      });
    }

    // 2. Fetch the rest of the doctors, excluding the pinned one if found
    const doctors = await prisma.doctorProfile.findMany({
      where: {
        ...where,
        ...(topDoctor ? { id: { not: topDoctorId } } : {})
      },
      skip: page === 1 ? 0 : skip - (topDoctor ? 1 : 0),
      take: topDoctor && page === 1 ? limit - 1 : limit,
      include: includeQuery,
      orderBy: [
        { featured: 'desc' },
        { id: 'desc' }
      ]
    });

    // 3. Combine results
    const finalDoctors = topDoctor && page === 1 ? [topDoctor, ...doctors] : doctors;

    return NextResponse.json(
      {
        success: true,
        data: finalDoctors,
        pagination: {
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
          currentPage: page,
          limit
        },
        stats: {
          total: totalCount,
          active: activeCount,
          pending: pendingCount,
          featured: featuredCount,
          hidden: hiddenCount
        },
        message: "Doctors fetched successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching doctors data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch doctors data." },
      { status: 500 },
    );
  }
}
