import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id || session.user.role !== "ADMIN") {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 403 }
      );
    }

    const [
      totalUsers,
      totalDoctors,
      activeDoctors,
      totalReviews,
      contactCount,
      questionCount,
      blogCount,
      claimCount,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.doctorProfile.count(),
      prisma.doctorProfile.count({ where: { hidden: false } }),
      prisma.doctorReview.count(),
      prisma.contactUs.count(),
      prisma.question.count(),
      prisma.blog.count(),
      prisma.doctorClaimRequest.count(),
    ]);

    const reviews = await prisma.doctorReview.findMany({
      select: {
        professionalism: true,
        punctuality: true,
        helpfulness: true,
        knowledge: true,
      },
    });
    const averageRating =
      reviews.length > 0
        ? Number(
            (
              reviews.reduce(
                (sum, r) =>
                  sum +
                  (r.professionalism + r.punctuality + r.helpfulness + r.knowledge) / 4,
                0
              ) / reviews.length
            ).toFixed(1)
          )
        : 0;

    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const [usersThisMonth, contactsThisMonth] = await Promise.all([
      prisma.user.count({ where: { createdAt: { gte: startOfMonth } } }),
      prisma.contactUs.count({ where: { createdAt: { gte: startOfMonth } } }),
    ]);

    const recentContacts = await prisma.contactUs.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: { firstName: true, createdAt: true },
    });
    const recentClaims = await prisma.doctorClaimRequest.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: { name: true, status: true, createdAt: true },
    });
    const recentReviews = await prisma.doctorReview.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        doctorId: true,
        createdAt: true,
        doctor: { select: { name: true } },
      },
    });

    const recentActivities = [
      ...recentContacts.map((c) => ({
        action: `Contact from ${c.firstName}`,
        time: c.createdAt,
        type: "contact" as const,
      })),
      ...recentClaims.map((c) => ({
        action: `Claim request: ${c.name} (${c.status})`,
        time: c.createdAt,
        type: "claim" as const,
      })),
      ...recentReviews.map((r) => ({
        action: `Review for ${r.doctor?.name ?? "Doctor"}`,
        time: r.createdAt,
        type: "review" as const,
      })),
    ]
      .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
      .slice(0, 10)
      .map((a) => ({
        ...a,
        time: formatTimeAgo(new Date(a.time)),
      }));

    const doctorsWithReviewCount = await prisma.doctorProfile.findMany({
      where: { hidden: false },
      select: {
        id: true,
        name: true,
        reviews: {
          select: {
            professionalism: true,
            punctuality: true,
            helpfulness: true,
            knowledge: true,
          },
        },
      },
    });

    const topDoctors = doctorsWithReviewCount
      .map((d) => {
        const revs = d.reviews;
        const count = revs.length;
        const avg =
          count > 0
            ? revs.reduce(
                (s, r) =>
                  s +
                  (r.professionalism + r.punctuality + r.helpfulness + r.knowledge) / 4,
                0
              ) / count
            : 0;
        return {
          name: d.name ?? "Unknown",
          reviewCount: count,
          rating: Number(avg.toFixed(1)),
        };
      })
      .filter((d) => d.reviewCount > 0)
      .sort((a, b) => b.reviewCount - a.reviewCount)
      .slice(0, 5);

    return NextResponse.json({
      success: true,
      data: {
        totalUsers,
        totalDoctors,
        activeDoctors,
        totalReviews,
        averageRating,
        contactCount,
        questionCount,
        blogCount,
        claimCount,
        usersThisMonth,
        contactsThisMonth,
        recentActivities,
        topDoctors,
      },
    });
  } catch (error) {
    console.error("Analytics API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load analytics" },
      { status: 500 }
    );
  }
}

function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)} min ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  return date.toLocaleDateString();
}
