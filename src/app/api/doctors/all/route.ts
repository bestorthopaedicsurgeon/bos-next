import { prisma } from "@/lib/prisma";
import { getSubspecialtyMatch } from "@/lib/search/surgeonSubspecialty";
import { NextRequest, NextResponse } from "next/server";

const TOP_DOCTOR_ID = 20;

const parsePositiveInteger = (value: string | null, fallback: number) => {
  const parsed = Number.parseInt(value || "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parsePositiveInteger(searchParams.get("page"), 1);
    const limit = Math.min(
      parsePositiveInteger(searchParams.get("limit"), 100),
      100,
    );
    const skip = (page - 1) * limit;
    const withStats = searchParams.get("stats") === "true";

    const name = (searchParams.get("name") || "").trim();
    const subspecialty = (searchParams.get("subspecialty") || "").trim();
    const location = (searchParams.get("location") || "").trim();
    const filter = searchParams.get("filter") || "all";

    const where: any = {};

    if (name) {
      where.name = { contains: name, mode: "insensitive" };
    }

    if (location) {
      where.location = { contains: location, mode: "insensitive" };
    }

    if (filter === "featured") {
      where.featured = true;
    } else if (filter === "hidden") {
      where.hidden = true;
    }

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
          user: { select: { name: true } },
        },
      },
    };

    let finalDoctors: any[] = [];
    let totalCount = 0;
    let activeCount = 0;
    let pendingCount = 0;
    let featuredCount = 0;
    let hiddenCount = 0;

    if (subspecialty) {
      // Subspeciality values are free text, so exact array filters are not
      // sufficient. Rank lightweight candidates, then fetch the requested page.
      const candidates = await prisma.doctorProfile.findMany({
        where,
        select: {
          id: true,
          name: true,
          subspecialities: true,
          featured: true,
          experience: true,
          registrationCompleted: true,
          hidden: true,
        },
      });

      const rankedCandidates = candidates
        .map((doctor) => ({
          ...doctor,
          match: getSubspecialtyMatch(doctor.subspecialities, subspecialty),
        }))
        .filter((doctor) => doctor.match !== null)
        .sort((a, b) => {
          if (b.match!.score !== a.match!.score) {
            return b.match!.score - a.match!.score;
          }
          if (b.featured !== a.featured) return b.featured ? 1 : -1;
          if ((b.experience || 0) !== (a.experience || 0)) {
            return (b.experience || 0) - (a.experience || 0);
          }
          return (a.name || "").localeCompare(b.name || "");
        });

      totalCount = rankedCandidates.length;
      if (withStats) {
        activeCount = rankedCandidates.filter(
          (doctor) => doctor.registrationCompleted,
        ).length;
        pendingCount = rankedCandidates.filter(
          (doctor) => !doctor.registrationCompleted,
        ).length;
        featuredCount = rankedCandidates.filter(
          (doctor) => doctor.featured,
        ).length;
        hiddenCount = rankedCandidates.filter((doctor) => doctor.hidden).length;
      }

      const pageCandidates = rankedCandidates.slice(skip, skip + limit);
      const pageIds = pageCandidates.map((doctor) => doctor.id);
      const pageDoctors = pageIds.length
        ? await prisma.doctorProfile.findMany({
            where: { id: { in: pageIds } },
            include: includeQuery,
          })
        : [];
      const doctorsById = new Map(
        pageDoctors.map((doctor) => [doctor.id, doctor]),
      );

      finalDoctors = pageCandidates.flatMap((candidate) => {
        const doctor = doctorsById.get(candidate.id);
        return doctor
          ? [{ ...doctor, matchedSubspecialty: candidate.match!.matchedValue }]
          : [];
      });
    } else {
      [totalCount, activeCount, pendingCount, featuredCount, hiddenCount] =
        await Promise.all([
          prisma.doctorProfile.count({ where }),
          withStats
            ? prisma.doctorProfile.count({
                where: { ...where, registrationCompleted: true },
              })
            : Promise.resolve(0),
          withStats
            ? prisma.doctorProfile.count({
                where: { ...where, registrationCompleted: false },
              })
            : Promise.resolve(0),
          withStats
            ? prisma.doctorProfile.count({
                where: { ...where, featured: true },
              })
            : Promise.resolve(0),
          withStats
            ? prisma.doctorProfile.count({ where: { ...where, hidden: true } })
            : Promise.resolve(0),
        ]);

      // Keep the existing promoted doctor first, while accounting for that row
      // on later pages so pagination never skips or duplicates a surgeon.
      const pinnedDoctor = await prisma.doctorProfile.findFirst({
        where: { ...where, id: TOP_DOCTOR_ID },
        include: includeQuery,
      });
      const remainingWhere = pinnedDoctor
        ? { AND: [where, { id: { not: TOP_DOCTOR_ID } }] }
        : where;
      const remainingSkip = Math.max(0, skip - (pinnedDoctor ? 1 : 0));
      const doctors = await prisma.doctorProfile.findMany({
        where: remainingWhere,
        skip: page === 1 ? 0 : remainingSkip,
        take: pinnedDoctor && page === 1 ? limit - 1 : limit,
        include: includeQuery,
        orderBy: [{ featured: "desc" }, { id: "desc" }],
      });

      finalDoctors =
        pinnedDoctor && page === 1 ? [pinnedDoctor, ...doctors] : doctors;
    }

    return NextResponse.json(
      {
        success: true,
        data: finalDoctors,
        pagination: {
          totalCount,
          totalPages: Math.ceil(totalCount / limit),
          currentPage: page,
          limit,
        },
        ...(withStats && {
          stats: {
            total: totalCount,
            active: activeCount,
            pending: pendingCount,
            featured: featuredCount,
            hidden: hiddenCount,
          },
        }),
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
