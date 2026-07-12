# Neon Usage Optimisation Plan (BOS)

Why the Neon free tier exhausts with 138 doctors and 10 human visitors, and how to fix it.

## Root cause

Neon free tier is limited by compute hours (about 191 per month), not query count.
The database suspends after 5 idle minutes; every query wakes it for at least 5
minutes. The site is an SEO/AEO project: sitemap submitted, robots.txt deliberately
welcomes every crawler (Google, Bing, GPTBot, ClaudeBot, Ahrefs, etc.). Crawlers hit
the ~200 public URLs hundreds of times a day, spread around the clock.

Because nearly every public page renders dynamically and queries the database on
every request, bot traffic keeps Neon compute awake most of the day.
8+ awake hours/day x 30 days > 191 hours = exhausted free tier. Humans are irrelevant
to this math; it would happen with zero visitors.

## Findings (ranked by impact)

1. Doctor profile pages (138 URLs, the bulk of the site) are fully dynamic and hit
   the DB 3 to 5 times per view:
   - lib/apiCalls/server/doctor.js uses headers() + cookie forwarding + cache no-store,
     which force-disables all Next.js caching for every page that calls it.
   - generateMetadata AND the page body EACH call getDoctorProfile (2 API calls,
     2+ DB queries, and on Vercel 2 extra function invocations).
   - The page also queries doctorReview directly for the schema aggregate.
   - Client tabs fetch reviews/Q&A APIs on mount; Googlebot renders JS so bots
     trigger these too.
   - No generateStaticParams, no revalidate.

2. /best-orthopaedic-surgeons/[location] pages: dynamic per request, full
   doctorProfile scan per hit. No revalidate/generateStaticParams (the
   [specialty] and [specialty]/[location] pages already have revalidate=3600 +
   generateStaticParams; the same pattern was never applied here).

3. Homepage featured surgeons: client fetch to /api/doctors/featured on every
   view; the route runs up to 3 queries including full-table include reviews,
   no Cache-Control header, so nothing is CDN cached. Homepage is the most
   crawled URL on the site.

4. Blog pages and blog section: same self-fetch + no-store pattern.

5. NextAuth session callback queries doctorProfile.findUnique on EVERY session
   read (every getServerSession call, every /api/auth/session poll from the
   browser, refetch on window focus). Affects logged-in users, i.e. mostly the
   admin while editing content.

6. No cache invalidation infrastructure at all: zero uses of revalidatePath,
   revalidateTag, or unstable_cache in the repo.

7. Minor: featured route over-fetches (include reviews on all rows), console.log
   of full payloads throughout, self-HTTP-fetch doubles serverless invocations.

## Fix plan

### Phase 1: make public pages static with ISR (biggest win)

1. doctor/[slug]/page.js
   - Add generateStaticParams (all slugs, one query at build).
   - Add export const revalidate = 86400 (daily safety net).
   - Replace both getDoctorProfile HTTP calls with one direct Prisma query
     wrapped in React cache() so metadata + page share a single fetch.
     Public data needs no cookies.
   - Fold the review aggregate into the same cached fetch.
2. Call revalidatePath('/doctor/<slug>') from the doctor update/create/hide APIs
   so edits appear instantly despite the long revalidate.
3. best-orthopaedic-surgeons/[location]: add generateStaticParams from
   seoLocations + revalidate = 3600 (mirrors the specialty pages).
4. Homepage featured: fetch server-side inside the page via unstable_cache
   (revalidate 3600) and pass as props; drop the client fetch and 800ms fake
   skeleton delay. revalidatePath('/') on feature toggle.
5. Blog listing + blog/[slug]: direct Prisma + generateStaticParams +
   revalidate, revalidatePath on blog save.
6. Public GET APIs that remain (reviews list, Q&A, doctors search): add
   Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400 response
   headers so the CDN absorbs repeat bot hits.

### Phase 2: auth economy

7. Store doctorId in the JWT at sign-in (jwt callback) instead of querying
   doctorProfile in the session callback on every session read.
8. Optional: SessionProvider refetchOnWindowFocus={false}.

### Phase 3: Neon dashboard (5 minutes, manual)

9. Confirm compute is 0.25 CU with scale to zero enabled (free tier default).
10. Watch Monitoring -> compute hours for a week after deploy; expect awake
    time to collapse to admin sessions + occasional ISR revalidations.

### What stays dynamic (correctly)

Auth flows, admin pages, appointment booking, review submission, profile pages
for logged-in users. These are human-triggered and rare at current traffic.

## Expected outcome

Bots get CDN/static responses; the DB wakes only for admin edits, signups,
reviews, and bounded ISR revalidations. Compute usage drops from ~continuous
to well under an hour a day. The free tier then survives real traffic growth
too, since crawler and visitor page views no longer touch Postgres at all.

## Status

- [x] Phase 1 implemented
  - doctor/[slug]: ISR (revalidate 86400) + generateStaticParams, one direct
    Prisma query shared by metadata + page via React cache(), review aggregate
    folded into the same query, writeReview scroll moved client side
  - best-orthopaedic-surgeons/[location]: ISR 3600 + generateStaticParams
  - homepage: ISR 3600, featured doctors + blog section fetched server side
    via direct Prisma (client fetch and fake skeleton delay removed)
  - blog + blog/[slug]: ISR + generateStaticParams, direct Prisma
  - revalidateDoctorContent()/revalidateBlogContent() wired into: doctor
    create, update, hide, feature, delete, bulk slug update, review submit,
    claim approve, blog create/update/delete
  - /api/doctors/all: dashboard stat counts now only run for the admin page
    (stats=true), default limit capped at 100
- [x] Phase 2 implemented
  - doctorId resolved once into the JWT; session callback no longer queries
  - SessionProvider refetchOnWindowFocus disabled
- [x] Phase 3: compute lowered to 0.25 CU min in Neon dashboard (user)
- [ ] Compute hours confirmed dropping after a week (watch Neon Monitoring)
