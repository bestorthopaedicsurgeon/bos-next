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

    // Get counts for dashboard stats
    const [totalCount, activeCount, pendingCount, featuredCount, hiddenCount] = await Promise.all([
      prisma.doctorProfile.count({ where }),
      prisma.doctorProfile.count({ where: { ...where, registrationCompleted: true } }),
      prisma.doctorProfile.count({ where: { ...where, registrationCompleted: false } }),
      prisma.doctorProfile.count({ where: { ...where, featured: true } }),
      prisma.doctorProfile.count({ where: { ...where, hidden: true } }),
    ]);

    const doctors = await prisma.doctorProfile.findMany({
      where,
      skip,
      take: limit,
      include: {
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
      },
      orderBy: {
        id: 'desc'
      }
    });

    return NextResponse.json(
      {
        success: true,
        data: doctors,
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
