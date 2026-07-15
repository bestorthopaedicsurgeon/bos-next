import { cache } from "react";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

// Direct-Prisma data helpers for the public (statically rendered) pages.
// These replace the old self-HTTP fetches so pages can be prerendered and
// served from cache instead of querying the database per request.

// One query per render, shared between generateMetadata and the page via
// React cache(). Accepts a slug or a numeric id (legacy URLs).
export const getDoctorPageData = cache(async (slugOrId) => {
  const numericId = Number(slugOrId);
  const isNumeric = !isNaN(numericId);
  try {
    const doctor = await prisma.doctorProfile.findUnique({
      where: isNumeric ? { id: numericId } : { slug: String(slugOrId) },
      include: {
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
    if (!doctor) return null;

    const { reviews, ...data } = doctor;

    let aggregateRating = null;
    if (reviews.length > 0) {
      const avg =
        reviews.reduce(
          (sum, r) =>
            sum +
            (r.professionalism + r.punctuality + r.helpfulness + r.knowledge) /
              4,
          0
        ) / reviews.length;
      aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: Number(avg.toFixed(1)),
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1,
      };
    }

    return { data, aggregateRating };
  } catch (e) {
    console.error("getDoctorPageData failed:", e?.message);
    return null;
  }
});

export async function getPublicDoctorSlugs() {
  try {
    const docs = await prisma.doctorProfile.findMany({
      where: { hidden: false, slug: { not: null } },
      select: { slug: true },
    });
    return docs.map((d) => d.slug).filter(Boolean);
  } catch (e) {
    console.error("getPublicDoctorSlugs failed:", e?.message);
    return [];
  }
}

// Homepage featured lineup: pinned profiles first (in this order), then the
// remaining slots filled from the featured pool in a stable order so the
// same six always appear. All featured doctors still rank first on the
// surgeons page regardless of whether they make the homepage six.
const HOMEPAGE_PINNED_IDS = [20, 104]; // Rhys Clark, Riaz JK Khan

// Homepage featured surgeons; mirrors /api/doctors/featured.
export async function getFeaturedDoctors() {
  try {
    const pinnedDocs = await prisma.doctorProfile.findMany({
      where: { id: { in: HOMEPAGE_PINNED_IDS }, hidden: false },
      include: { reviews: true },
    });
    const pinned = HOMEPAGE_PINNED_IDS.map((id) =>
      pinnedDocs.find((d) => d.id === id)
    ).filter(Boolean);

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

    if (featuredDoctors.length < 6) {
      const remaining = 6 - featuredDoctors.length;
      const featuredIds = featuredDoctors.map((d) => d.id);

      const allDoctors = await prisma.doctorProfile.findMany({
        where: { id: { notIn: featuredIds }, hidden: false },
        include: { reviews: true },
      });

      const topRated = allDoctors
        .map((doc) => {
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
                  0
                ) / count;
          return { ...doc, avgRating };
        })
        .sort((a, b) => b.avgRating - a.avgRating)
        .slice(0, remaining);

      featuredDoctors = [...featuredDoctors, ...topRated];
    }

    return featuredDoctors.map((doc) => ({
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
              0
            ) / doc.reviews.length,
      subspecialities: doc.subspecialities,
      slug: doc.slug,
    }));
  } catch (e) {
    console.error("getFeaturedDoctors failed:", e?.message);
    return [];
  }
}

export async function getAllBlogs() {
  try {
    return await prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.error("getAllBlogs failed:", e?.message);
    return [];
  }
}

export const getBlogBySlug = cache(async (slug) => {
  try {
    return await prisma.blog.findUnique({ where: { slug } });
  } catch (e) {
    console.error("getBlogBySlug failed:", e?.message);
    return null;
  }
});

export async function getPublicBlogSlugs() {
  try {
    const blogs = await prisma.blog.findMany({ select: { slug: true } });
    return blogs.map((b) => b.slug).filter(Boolean);
  } catch (e) {
    console.error("getPublicBlogSlugs failed:", e?.message);
    return [];
  }
}

// ── Cache invalidation, called from the mutation API routes ──
// Doctor data feeds the doctor pages, the homepage (featured) and the SEO
// listing pages, so a doctor change marks all of them stale; each page only
// regenerates when it is next requested.

export function revalidateDoctorContent(slug) {
  try {
    revalidatePath("/");
    if (slug) {
      revalidatePath(`/doctor/${slug}`);
    } else {
      revalidatePath("/doctor/[slug]", "page");
    }
    revalidatePath("/best-orthopaedic-surgeons/[location]", "page");
    revalidatePath("/[specialty]", "page");
    revalidatePath("/[specialty]/[location]", "page");
  } catch (e) {
    console.error("revalidateDoctorContent failed:", e?.message);
  }
}

export function revalidateBlogContent(slug) {
  try {
    revalidatePath("/");
    revalidatePath("/blog");
    if (slug) {
      revalidatePath(`/blog/${slug}`);
    } else {
      revalidatePath("/blog/[slug]", "page");
    }
  } catch (e) {
    console.error("revalidateBlogContent failed:", e?.message);
  }
}
