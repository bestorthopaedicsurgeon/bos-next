import { cache } from "react";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { pingIndexNow } from "@/lib/seo/indexNow";

// Direct-Prisma data helpers for the public (statically rendered) pages.
// These replace the old self-HTTP fetches so pages can be prerendered and
// served from cache instead of querying the database per request.

// Shared between generateMetadata and the page via React cache(). Accepts a
// slug or a numeric id (legacy URLs). Fetches the profile plus its full
// public reviews and Q&A so they render in the initial HTML, where search
// and AI crawlers (which do not run JS) can read them.
export const getDoctorPageData = cache(async (slugOrId) => {
  const numericId = Number(slugOrId);
  const isNumeric = !isNaN(numericId);
  try {
    const doctor = await prisma.doctorProfile.findUnique({
      where: isNumeric ? { id: numericId } : { slug: String(slugOrId) },
      include: {
        reviews: {
          include: { user: { select: { name: true, image: true } } },
          orderBy: { createdAt: "desc" },
        },
      },
    });
    if (!doctor) return null;

    const { reviews, ...data } = doctor;

    let aggregateRating = null;
    const averageRatings = {
      professionalism: 0,
      punctuality: 0,
      helpfulness: 0,
      knowledge: 0,
      overall: 0,
    };
    if (reviews.length > 0) {
      const sums = reviews.reduce(
        (acc, r) => ({
          professionalism: acc.professionalism + r.professionalism,
          punctuality: acc.punctuality + r.punctuality,
          helpfulness: acc.helpfulness + r.helpfulness,
          knowledge: acc.knowledge + r.knowledge,
        }),
        { professionalism: 0, punctuality: 0, helpfulness: 0, knowledge: 0 }
      );
      averageRatings.professionalism = Number((sums.professionalism / reviews.length).toFixed(1));
      averageRatings.punctuality = Number((sums.punctuality / reviews.length).toFixed(1));
      averageRatings.helpfulness = Number((sums.helpfulness / reviews.length).toFixed(1));
      averageRatings.knowledge = Number((sums.knowledge / reviews.length).toFixed(1));
      averageRatings.overall = Number(
        (
          (averageRatings.professionalism +
            averageRatings.punctuality +
            averageRatings.helpfulness +
            averageRatings.knowledge) /
          4
        ).toFixed(1)
      );
      aggregateRating = {
        "@type": "AggregateRating",
        ratingValue: averageRatings.overall,
        reviewCount: reviews.length,
        bestRating: 5,
        worstRating: 1,
      };
    }

    // Mirrors the /api/doctors/[id]/reviews response shape used by the
    // reviews tab, with dates serialised for client component props.
    const reviewsData = {
      totalReviews: reviews.length,
      averageRatings,
      reviews: reviews.map((r) => ({
        ...r,
        createdAt: r.createdAt.toISOString(),
        averageRating: Number(
          (
            (r.professionalism + r.punctuality + r.helpfulness + r.knowledge) /
            4
          ).toFixed(1)
        ),
      })),
    };

    // Public Q&A only: the static page is served to everyone, so confidential
    // questions must never be baked in. Logged in users refetch client side.
    const questionRows = await prisma.question.findMany({
      where: { doctorId: doctor.id, isConfidential: false },
      include: {
        patient: { select: { id: true, name: true, image: true } },
        answers: {
          include: {
            author: { select: { id: true, name: true, image: true } },
          },
          orderBy: { createdAt: "asc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    const questions = questionRows.map((q) => ({
      ...q,
      createdAt: q.createdAt.toISOString(),
      updatedAt: q.updatedAt ? q.updatedAt.toISOString() : null,
      answers: q.answers.map((a) => ({
        ...a,
        createdAt: a.createdAt.toISOString(),
        updatedAt: a.updatedAt ? a.updatedAt.toISOString() : null,
      })),
    }));

    return { data, aggregateRating, reviewsData, questions };
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

    // Tell Bing (and therefore ChatGPT search / Copilot) to recrawl now.
    pingIndexNow(["/", ...(slug ? [`/doctor/${slug}`] : [])]);
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

    // Tell Bing (and therefore ChatGPT search / Copilot) to recrawl now.
    pingIndexNow(["/", "/blog", ...(slug ? [`/blog/${slug}`] : [])]);
  } catch (e) {
    console.error("revalidateBlogContent failed:", e?.message);
  }
}
