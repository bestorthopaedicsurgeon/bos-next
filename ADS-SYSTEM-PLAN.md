# BOS Direct Advertising Module Plan

## Document status

- Status: Built and ready for local testing (21 October 2026). Not yet deployed. See section 0 for what was built and the decisions taken.
- Product: Best Orthopaedic Surgeon (BOS)
- Delivery model: Direct-sold advertising managed by BOS administrators
- Media storage: Supabase Storage
- Campaign data and reporting: Existing Neon PostgreSQL database through Prisma
- Scheduling timezone: `Australia/Perth`
- Primary goal: Add controlled image and video advertising without weakening organic search, surgeon search quality, privacy, accessibility, or the existing BOS design

## 0. Implementation status and decisions (21 October 2026)

### Database state

- The additive migration `prisma/migrations/20261021120000_add_advertising_module` was already applied to the production Neon database on 21 October 2026 (13:19 UTC) during the first build session. It only adds the four advertising tables and three enums. Local development uses the same database, so anything created in the local admin is real data.
- The live site does not render ads until this code is deployed.
- A QA advertiser (`BOS Advertising QA`) and an active, site wide QA campaign (`BOS advertising QA campaign`, BOS logo linking to `/about`) were left in the database and Supabase from that session. They must be removed, or paused, before deploying, or the logo banner will appear above the footer on the live site.

### Coverage wording in admin

- `Show across BOS`: one ad per public page. It uses that page's dedicated position on the homepage, directory, blog, specialty and location pages, then falls back above the footer on public pages without a dedicated position. Never shown on surgeon profiles, sign in, registration, booking or admin pages. Stored as `coverage = SITE_WIDE`.
- `Choose where it appears`: the administrator ticks the pages and positions. Stored as `AdAssignment` rows.
- Optional `Limit to matching pages`: specialty and location chips. Saved on the assignments whose pages carry that fact, using the same slugs as the public URLs (for example `best-knee-surgeons`, `perth`). A specialty limit does not block location only pages, which have no specialty.

### Public behaviour

- Every ad is an edge-to-edge image or video creative with no surrounding border, white header/footer, advertiser heading, destination text, or CTA button. A compact teal overlay at the top always shows `Sponsored advertisement` and an `About our ads` link to `/advertising-policy`.
- Links go through `/api/ads/click/[id]`, open in a new tab and carry `rel="sponsored noopener noreferrer"`. The click route redirects only to the stored https destination, is `no-store` and `noindex`, and `/api/ads/` is disallowed in `robots.txt`.
- An empty slot renders nothing at all (no wrapper, no spacing), so pages without a campaign are unchanged. Slots are inserted after hydration and every inline position sits below the first screen, so the insertion happens off screen. Images fill the available width without distortion; videos fill the 16:9 media area without black side bars.
- The site-wide footer fallback is skipped on pages with a dedicated ad position, as well as `/doctor/*`, `/profile` and `/unauthorized`, so a campaign never appears twice on one page.
- Video: no `autoPlay` attribute and no native controls. Playback is driven by visibility (plays muted with `playsInline` while 45% visible, pauses when it leaves). No play icon shows during autoplay; small pause and mute buttons appear once it has played. A play button is shown only after the visitor pauses it, or when it cannot play by itself (reduced motion, or the browser blocks autoplay).
- Blog articles: the slot goes before the third `h2` (after the second section) when at least 600 characters of text follow. Most posts wrap their body in one `<article>`; the split looks inside that wrapper and closes and reopens it so both halves stay valid HTML. Logic lives in `src/lib/ads/articleSplit.js`. 36 of the 37 current posts qualify.

### Delivery, reporting and statuses

- Campaigns are cached for 60 seconds (`unstable_cache`, tag `ads`) and every admin write calls `revalidateTag("ads")`.
- A campaign is served only when it is ACTIVE or SCHEDULED, approved, within its Perth schedule, from an active advertiser, assigned to the placement, matches the page context and has its required media. Highest priority wins; equal priorities share by weight.
- The displayed status is derived from the dates (`effectiveStatus`), so a campaign shows `Ended` or `Scheduled` without a background job.
- Metrics are one row per campaign, placement and Perth day (`AdDailyMetric`), written with a single atomic `INSERT ... ON CONFLICT DO UPDATE`. Bots and empty user agents are ignored, and an impression or click only counts when the campaign is live in that placement.
- A draft with no recorded metrics can be deleted permanently (its media is removed from Supabase). Anything with metrics is archived instead.
- Statuses in use: DRAFT, SCHEDULED, ACTIVE, PAUSED, ENDED, ARCHIVED. `PENDING_REVIEW` and `REJECTED` exist in the enum for a later review workflow but are not used, because only administrators create campaigns and publishing is the approval.

### Admin

- Dashboard: summary figures, filters (status, advertiser, position, media type), CSV export, and actions for reporting, edit, duplicate (copies media), pause, resume, delete draft or archive.
- Editor: advertiser, campaign, creative with upload checks (type sniffed from the file bytes, size, minimum dimensions, video length up to 60 seconds with a warning over 30), destination and CTA, coverage, schedule in Perth time, delivery priority and weight, six compliance confirmations, and a live desktop and mobile preview using the real public component.
- Reporting: Perth date range filter, totals, per position table, daily table and CSV export.

### Tests

- `node --test src/lib/ads/ads.test.mjs src/lib/ads/articleSplit.test.mjs` covers scheduling with cached ISO dates, effective status, placement and targeting rules, servability, weighted choice, site wide exclusions, URL validation, campaign validation, publish readiness and the blog split.

## 1. Non-negotiable product rules

1. Ads must never alter the organic order of surgeons or search results.
2. Sponsored content must always be clearly labelled `Sponsored advertisement`.
3. Ads must not imitate a surgeon card, review, clinical recommendation, or BOS endorsement.
4. The first release must use first-party delivery and aggregate reporting only.
5. No third-party tracking pixels, retargeting scripts, health-interest profiling, or user-level advertising identifiers are allowed.
6. Search terms, symptoms, doctor searches, user IDs, IP addresses, and full referring URLs must not be stored in ad analytics.
7. All administrative pages, components, and APIs must follow the existing repository structure and authentication patterns.
8. Existing `User`, `Doctor`, `Blog`, booking, authentication, and search models must not be changed for the advertising module.
9. Database work must be additive. Existing production columns and relationships must remain untouched.
10. Doctor profile pages will not contain advertising in the first release.

## 2. Recommended MVP placements

The first release should use a small number of predictable, non-disruptive placements.

| Placement key                       | Page                           | Position                                                    | Recommended format         |
| ----------------------------------- | ------------------------------ | ----------------------------------------------------------- | -------------------------- |
| `SITE_WIDE_FOOTER`                  | Every public page              | Consistent banner immediately above the BOS footer          | Wide image or video        |
| `HOME_AFTER_TESTIMONIALS`           | Home page                      | After featured surgeon profiles and before testimonials     | Wide image or video        |
| `SURGEON_RESULTS_INLINE`            | All surgeons                   | After surgeon profiles and pagination                       | Wide image or video        |
| `SPECIALTY_RESULTS_INLINE`          | Specialty results              | Before the surgeon-results heading                          | Wide image or video        |
| `SPECIALTY_LOCATION_RESULTS_INLINE` | Specialty and location results | Before the surgeon-results heading                          | Wide image or video        |
| `LOCATION_RESULTS_INLINE`           | Location results               | Before the surgeon-results heading                          | Wide image or video        |
| `BLOG_INDEX_INLINE`                 | Blog listing                   | Below the blog banner and before the insights heading       | Wide image or video        |
| `BLOG_ARTICLE_INLINE`               | Blog article                   | After the second `h2`, only when the article is long enough | Wide image, MREC, or video |

### Placement limits

- Campaign coverage is configured as either `Across the public site` or `Selected pages and positions`.
- `Across the public site` serves through each page's dedicated position where one exists, then through `SITE_WIDE_FOOTER` as a fallback on other eligible public pages.
- `Selected pages and positions` requires the administrator to choose one or more approved inline placements.
- A site-wide campaign appears only once per page; the footer fallback is suppressed whenever that page has its own slot.
- Show no more than one paid ad on a short page.
- Show no more than one inline ad in a surgeon result list in the MVP.
- Show no more than one inline ad in a blog article in the MVP.
- Ads around result lists sit outside the organic surgeon grid and never consume or alter a surgeon's ranking position.
- Do not show an ad when no valid campaign matches the placement.
- A BOS house ad may be used as an optional fallback to preserve the reserved layout space.
- Site-wide placements are excluded from administration, authentication, registration, booking, and other private workflows because those pages do not use the public BOS footer.

### Placements excluded from the MVP

- Header, navigation, and homepage hero
- Inside surgeon cards
- Doctor profile clinical information, reviews, Q&A, or booking areas
- Authentication, booking, account, or administration workflows
- Popups, interstitials, sticky overlays, and auto-opening panels
- Any position that conflicts with the Isla patient navigator

## 3. Repository structure

The module must follow the current application structure. Advertising settings and management pages belong under the existing admin area.

### New admin pages

```text
src/app/admin/ads/page.js
src/app/admin/ads/create/page.js
src/app/admin/ads/[id]/page.js
src/app/admin/ads/[id]/analytics/page.js
```

### New admin components

```text
src/components/admin/ads/AdCampaignTable.jsx
src/components/admin/ads/AdCampaignForm.jsx
src/components/admin/ads/AdCreativeUploader.jsx
src/components/admin/ads/AdPlacementSelector.jsx
src/components/admin/ads/AdPreview.jsx
src/components/admin/ads/AdStatusBadge.jsx
src/components/admin/ads/AdAnalytics.jsx
```

The existing admin sidebar in `src/components/admin/admin-sidebar.jsx` should receive an `Advertising` item using the Lucide `Megaphone` icon.

### New public components

```text
src/components/ads/AdSlot.js
src/components/ads/ImageAd.js
src/components/ads/VideoAd.js
```

### New advertising utilities

```text
src/lib/ads/placements.js
src/lib/ads/serve.js
src/lib/ads/validation.js
src/lib/supabase/adUpload.ts
```

`src/lib/supabase/adUpload.ts` should reuse the current Supabase client conventions. If extending the existing upload helper produces a cleaner result, the ad-specific validation must still remain isolated from doctor and blog uploads.

### New API routes

```text
src/app/api/admin/ads/route.ts
src/app/api/admin/ads/[id]/route.ts
src/app/api/admin/ads/[id]/media/route.ts
src/app/api/admin/ads/[id]/analytics/route.ts
src/app/api/ads/serve/route.ts
src/app/api/ads/impression/route.ts
src/app/api/ads/click/[id]/route.ts
```

All routes under `src/app/api/admin/ads` must reuse the existing server-session `ADMIN` authorization pattern.

### New public policy page

```text
src/app/advertising-policy/page.js
```

This page should explain ad labelling, advertiser responsibility, BOS review, reporting, privacy, complaints, and prohibited claims.

## 4. Supabase Storage design

### Bucket

Create one bucket:

```text
bos-ad-media
```

Recommended configuration:

- Public read access because advertisement creatives are public website assets.
- No public upload, update, or delete permissions.
- Upload, replacement, and deletion must happen through authenticated server-side admin routes.
- Never expose the Supabase service-role key to the browser.
- Store the Supabase object path in Neon, not only the generated public URL.

### Object layout

```text
advertisers/{advertiserId}/campaigns/{campaignId}/desktop/{uuid}.{ext}
advertisers/{advertiserId}/campaigns/{campaignId}/mobile/{uuid}.{ext}
advertisers/{advertiserId}/campaigns/{campaignId}/video/{uuid}.{ext}
advertisers/{advertiserId}/campaigns/{campaignId}/poster/{uuid}.{ext}
advertisers/{advertiserId}/campaigns/{campaignId}/captions/{uuid}.vtt
```

Use generated object names rather than original filenames. The original filename may be retained as database metadata for administrators.

### Accepted media

| Asset         | Formats             | Maximum size | Notes                                   |
| ------------- | ------------------- | ------------ | --------------------------------------- |
| Desktop image | WebP, JPEG, PNG     | 2 MB         | Validate MIME type and dimensions       |
| Mobile image  | WebP, JPEG, PNG     | 1 MB         | Separate crop is strongly preferred     |
| Video         | MP4 (H.264) or WebM | 25 MB        | Maximum 30 seconds recommended          |
| Video poster  | WebP, JPEG, PNG     | 1 MB         | Required for every video campaign       |
| Captions      | WebVTT              | 250 KB       | Required when the video contains speech |

### Creative dimensions

- Desktop wide: `970x90` preferred; `728x90` accepted.
- Mobile wide: `320x100` preferred; `320x50` accepted.
- MREC: `300x250`.
- Video: `16:9`, ideally `960x540` or higher at the same aspect ratio.
- Images must render with `object-fit: contain`; BOS must not crop advertiser logos or mandatory text.

### Upload lifecycle

1. The administrator creates a draft campaign first.
2. The server validates authorization, MIME type, size, dimensions, and file extension.
3. The server uploads the asset to the campaign path.
4. The database is updated only after a successful upload.
5. When replacing media, the previous object is deleted only after the new database update succeeds.
6. When deleting a campaign, associated objects are removed by a controlled server operation.
7. A maintenance task should identify orphaned objects without automatically deleting them during the initial release.
8. Immutable assets should use a long browser cache lifetime because every replacement receives a new UUID.

No video transcoding is required for the MVP. Administrators must upload browser-compatible files.

## 5. Additive Prisma data model

The exact naming can be adjusted to match the schema style, but the first migration should add only advertising tables and enums.

### `Advertiser`

- `id`
- `name`
- `contactName`
- `contactEmail`
- `websiteUrl`
- `abn` (optional)
- `isActive`
- `createdAt`
- `updatedAt`

### `AdCampaign`

- `id`
- `advertiserId`
- `name`
- `mediaType`: `IMAGE` or `VIDEO`
- `coverage`: `SITE_WIDE` or `SELECTED_PLACEMENTS`
- `desktopAssetPath` (optional)
- `mobileAssetPath` (optional)
- `videoAssetPath` (optional)
- `posterAssetPath` (optional)
- `captionsAssetPath` (optional)
- `originalFileName` (optional)
- `altText`
- `destinationUrl`
- `ctaLabel` (optional)
- `status`: `DRAFT`, `PENDING_REVIEW`, `SCHEDULED`, `ACTIVE`, `PAUSED`, `ENDED`, `REJECTED`, or `ARCHIVED`
- `startsAt`
- `endsAt`
- `timezone`, defaulting to `Australia/Perth`
- `priority`, defaulting to `0`
- `weight`, defaulting to `1`
- `complianceNotes` (optional)
- `reviewedById` (optional)
- `approvedAt` (optional)
- `createdById`
- `createdAt`
- `updatedAt`

### `AdAssignment`

- `id`
- `campaignId`
- `placementKey`
- `context` as JSON (optional)
- `isActive`
- `createdAt`
- `updatedAt`

`placementKey` should remain a string validated against `src/lib/ads/placements.js`. It should not be a database enum, so a new placement does not require a production migration.

Example context values:

```json
{
  "specialties": ["hip", "knee"],
  "locations": ["perth"],
  "blogCategories": ["joint-replacement"]
}
```

Context applies to page subject matter only. It must never be based on a person's identity, browsing history, symptoms, or search terms.

### `AdDailyMetric`

- `id`
- `campaignId`
- `assignmentId`
- `date`
- `impressions`
- `clicks`
- `videoStarts`
- `videoCompletes`
- `createdAt`
- `updatedAt`

Add a unique compound index for `assignmentId + date` so metrics can be updated with a Prisma upsert. Add indexes for campaign status, campaign dates, placement keys, and metric dates.

## 6. Admin experience

### Advertising dashboard

`src/app/admin/ads/page.js` should contain:

- Summary figures for active campaigns, scheduled campaigns, impressions, clicks, and CTR.
- A searchable campaign table.
- Filters for status, advertiser, placement, and media type.
- Clear actions for create, preview, duplicate, pause, resume, edit, and archive.
- Date ranges and metrics displayed in `Australia/Perth` time.

### Campaign editor

Use one structured form with these sections:

1. Advertiser
2. Campaign details
3. Image or video creative
4. Destination and CTA
5. Campaign coverage and placement context
6. Schedule
7. Priority and delivery weight
8. Compliance review
9. Desktop and mobile preview

### Validation and status rules

- Drafts may be incomplete but cannot be served.
- A campaign cannot enter `PENDING_REVIEW` without valid media, alt text, destination, placement, start, and end values.
- Only an administrator can approve or activate a campaign.
- The start date must be earlier than the end date.
- Destination URLs must use `https://`.
- Reject `javascript:`, `data:`, malformed, and unsupported URL protocols.
- A video requires a poster image.
- A video containing speech requires a caption file.
- `Across the public site` campaigns use the universal above-footer position and do not require inline placement selection.
- `Selected pages and positions` campaigns require at least one selected placement.
- An expired campaign becomes ineligible immediately even if its stored status has not yet been changed to `ENDED`.
- Campaign deletion should be replaced by archiving once a campaign has recorded metrics.

## 7. Ad delivery architecture

Most BOS pages use server rendering or incremental static regeneration. Advertising must not make those pages fully dynamic.

### Client slot strategy

1. Server-render the normal BOS page and a fixed-size `AdSlot` placeholder.
2. After hydration, `AdSlot` requests `/api/ads/serve` with a validated placement key and non-sensitive page context.
3. The server returns one sanitized eligible creative or a no-ad response.
4. The reserved slot renders an image ad, video ad, house ad, or collapses according to the placement configuration.
5. Cache eligible campaign results briefly, for approximately 60 seconds, and invalidate the cache when an administrator changes a campaign.

This keeps the core pages cacheable, prevents advertising from changing organic page HTML meaning, and limits layout shift.

### Campaign selection

Eligibility must require all of the following:

- Campaign and assignment are active.
- Current Perth time is between `startsAt` and `endsAt`.
- The requested placement is allowed.
- The optional page context matches.
- Required media is available for the current viewport.
- Compliance approval exists.

When several campaigns are eligible:

1. Select from the highest priority value.
2. Use weighted random selection among campaigns with equal priority.
3. Do not rank by the current visitor's behavior.

## 8. Public component behavior

### Shared appearance

- Use BOS teal `#2F797B`, warm neutral `#EDE7E3`, white surfaces, Syne headings, and DM Sans body text.
- Keep the border radius at `8px` or less.
- Display `Sponsored advertisement` above every creative.
- Display the advertiser name and a clean destination hostname so visitors can understand who is behind the advertisement before following it.
- Include an external-link icon where a separate CTA is shown.
- Do not copy the layout, typography, badges, or border treatment of surgeon cards.
- Use BOS typography, colours, spacing, borders, card treatment, buttons, and dropdown components so the placement feels deliberately integrated while remaining visibly separate from editorial content.
- Avoid urgency devices, misleading system-message styling, flashing effects, suspicious URL text, fake download buttons, fake notifications, or any creative treatment associated with spam, phishing, malware, or deceptive advertising.
- Reserve responsive dimensions before media loads to prevent cumulative layout shift.
- Provide a visible keyboard focus state.

### Image ads

- The creative may be one accessible link.
- Use the campaign alt text; do not derive it from the filename.
- Prefer the mobile asset below the placement breakpoint.
- Use `object-fit: contain` and do not crop text or logos.
- Open external destinations in a new tab.
- Add `rel="sponsored noopener noreferrer"`.

### Video ads

- Videos autoplay when the placement enters the viewport, are muted by default, use `playsInline`, and have no central play button or native browser control bar.
- Pause playback when the placement leaves the viewport to avoid wasting bandwidth and attention.
- Loop short campaign videos unless the campaign is configured otherwise.
- Include discreet BOS-styled pause/resume and mute/unmute icon controls for accessibility without making the placement look like a generic video player.
- Respect `prefers-reduced-motion` by showing the poster until the visitor intentionally resumes playback.
- Use the uploaded WebVTT track when speech is present.
- The video controls must not be wrapped in a destination link.
- Provide a clear, separate CTA link beneath or beside the player, together with advertiser identity and destination hostname.
- Record a start only after playback begins and a completion only when playback reaches the end.

## 9. Page integration map

### Home

File: `src/app/(main)/page.js`

- Add `AdSlot` after the testimonials section and before the final CTA.
- Use `HOME_AFTER_TESTIMONIALS`.
- Keep the existing section rhythm and mobile padding.

### All surgeons

File: `src/components/surgeonsPage/AllSurgeons.js`

- Insert the slot after the fourth organic card without changing surgeon sorting or filtering.
- The slot should span all grid columns.
- Use `SURGEON_RESULTS_INLINE`.
- A hidden specialty may filter the results but must not become new card content.

### Specialty pages

Files:

```text
src/app/(main)/[specialty]/page.js
src/app/(main)/[specialty]/[location]/page.js
src/app/(main)/best-orthopaedic-surgeons/[location]/page.js
```

- Insert after the fourth organic result.
- Pass only the normalized page specialty and/or location as context.
- Use the matching placement key from section 2.
- Do not pass free-text search terms.

### Blog index

Files:

```text
src/app/(main)/blog/page.js
src/components/blogPage/BlogPageWrapper.js
src/components/blogPage/Blogs.js
```

- Insert a full-width slot after the first six organic blog cards.
- Use `BLOG_INDEX_INLINE`.
- Keep blog card order unchanged.

### Blog article

File: `src/app/(main)/blog/[slug]/page.js`

- Insert the slot after the second `h2` only when enough article content remains below it.
- Use a structured HTML parser for TinyMCE content; do not inject markup with regular expressions.
- If the article is too short or malformed, do not render the inline ad.
- Pass only the normalized blog category or cluster as context.

## 10. Analytics and privacy

### Impression definition

Count one impression when at least 50 percent of the creative is visible for at least one continuous second. Use `IntersectionObserver` and count a campaign-placement pair only once per page load.

### Click definition

- Public links go through `/api/ads/click/[id]`.
- The server loads the approved destination from the database, records an aggregate click, and redirects with `302`.
- Never accept a destination URL from the request.
- This prevents an open-redirect vulnerability.

### Stored reporting data

- Daily impressions
- Daily clicks
- CTR derived from clicks divided by impressions
- Video starts
- Video completions
- Campaign and placement totals

### Data that must not be stored

- IP addresses
- User IDs or account identifiers
- Search queries, symptoms, or form values
- Full page URLs when they may contain sensitive information
- Browser fingerprints
- Cross-site identifiers
- Third-party pixel identifiers

Basic bot and duplicate-request filtering may be applied without retaining identifiable event logs.

## 11. Compliance gates

Before a campaign is activated, an administrator must confirm:

- The advertiser is identifiable and has supplied valid contact details.
- The ad is clearly distinguishable from BOS editorial and directory content.
- Claims are not false, misleading, deceptive, or likely to create unreasonable expectations.
- Regulated health-service advertising does not use prohibited testimonials or endorsements.
- Offers and gifts display all applicable terms and conditions.
- The ad does not encourage unnecessary or indiscriminate use of health services.
- Therapeutic goods are permitted to be advertised to the Australian public and use compliant wording.
- The landing page matches the advertisement.
- BOS has written approval to use the supplied media, logos, and claims.
- The campaign includes the required `rel="sponsored"` link qualification.

BOS should obtain professional legal or regulatory advice for uncertain healthcare advertisements. The software can enforce workflow and evidence, but it cannot certify legal compliance.

## 12. Implementation sequence

### Phase 0: Protect current work

- [ ] Confirm the working tree and isolate existing user-owned changes.
- [ ] Implement only advertising files and intentional integration changes.
- [ ] Do not modify or stage unrelated SEO, review, Isla, booking, or doctor-profile work.

### Phase 1: Database foundation

- [ ] Add advertising enums and models to `prisma/schema.prisma`.
- [ ] Create and inspect an additive migration.
- [ ] Verify the migration does not alter existing tables.
- [ ] Add selection, scheduling, and validation unit tests.
- [ ] Apply to a non-production database before production.

### Phase 2: Supabase media storage

- [ ] Create the `bos-ad-media` bucket and access policies.
- [ ] Build the server-side upload helper.
- [ ] Validate file type, size, dimensions, duration, and campaign ownership.
- [ ] Implement replacement and archive cleanup behavior.
- [ ] Test public delivery and video range requests.

### Phase 3: Admin management

- [ ] Add Advertising to the admin sidebar.
- [ ] Build campaign listing and filters.
- [ ] Build advertiser and campaign forms.
- [ ] Add media upload, preview, status, schedule, placement, and compliance controls.
- [ ] Add `Across the public site` and `Selected pages and positions` coverage choices with plain-language descriptions.
- [ ] Add desktop and mobile creative previews.
- [ ] Confirm every mutation requires an `ADMIN` session.

### Phase 4: Delivery APIs

- [ ] Build sanitized campaign-serving logic.
- [ ] Add schedule, status, placement, context, priority, and weight checks.
- [ ] Add short caching and admin-triggered invalidation.
- [ ] Add aggregate impression and click endpoints.
- [ ] Add safe redirect validation.

### Phase 5: Public ad components

- [ ] Build `AdSlot`, `ImageAd`, and `VideoAd`.
- [ ] Add responsive assets and stable dimensions.
- [ ] Add visible sponsorship labels and sponsored link attributes.
- [ ] Add accessible video controls and captions.
- [ ] Verify keyboard, screen-reader, and reduced-motion behavior.

### Phase 6: Page placements

- [ ] Add the homepage slot.
- [ ] Add all surgeon-results slots without changing organic ranking.
- [ ] Add the blog index slot.
- [ ] Add parser-based blog article insertion.
- [ ] Test every placement with no campaign, an image campaign, and a video campaign.

### Phase 7: Reporting

- [ ] Add campaign and placement totals.
- [ ] Add date-range filtering in Perth time.
- [ ] Add impressions, clicks, CTR, video starts, and completions.
- [ ] Verify counts are aggregate and contain no visitor-level data.

### Phase 8: Policy, QA, and rollout

- [ ] Publish the advertising policy.
- [ ] Run unit, API, integration, and production-build checks.
- [ ] Capture desktop and mobile screenshots for every placement.
- [ ] Measure layout shift and page performance before and after ads.
- [ ] Test an internal house campaign first.
- [ ] Launch one paid campaign with a controlled date range.
- [ ] Monitor errors, delivery, performance, and counts for 48 hours before expanding.

## 13. Required testing

### Automated tests

- Campaign eligibility before, during, and after its schedule
- Perth timezone and daylight-independent date handling
- Status and approval enforcement
- Priority and weighted selection
- Placement and context matching
- Invalid URL and open-redirect rejection
- Admin authentication for every write operation
- MIME type, extension, size, and dimension validation
- Impression deduplication per page load
- Daily metric upserts under concurrent requests
- Public API response does not expose private advertiser or compliance fields

### Visual and interaction tests

- Desktop and mobile layouts for every placement
- No overlap with the Isla widget
- No ad that resembles an organic surgeon card
- Image loading, missing image, and mobile fallback behavior
- Muted video autoplay, viewport pause/resume, manual pause, mute, captions, reduced-motion, and completion behavior
- Keyboard navigation and focus visibility
- Long sponsorship labels and CTA text do not overflow
- Empty slots do not create unexpected gaps or page jumps

### SEO and performance tests

- Organic surgeon order is byte-for-byte equivalent before and after ad insertion.
- Paid links include `rel="sponsored noopener noreferrer"`.
- Ads do not add `Review`, `Physician`, or other misleading structured data.
- Ad loading does not block the main content or Largest Contentful Paint.
- Reserved dimensions keep cumulative layout shift within the current target.
- Blog insertion does not corrupt TinyMCE HTML or heading structure.
- Sitemap, canonical, robots, metadata, and existing structured data remain unchanged.

## 14. Production rollout checklist

- [ ] Back up the Neon production database.
- [ ] Review the generated Prisma migration manually.
- [ ] Apply the additive migration during a low-traffic window.
- [ ] Confirm Supabase bucket policies before the first upload.
- [ ] Create an internal BOS house campaign.
- [ ] Verify image and video delivery on the production domain.
- [ ] Verify click redirects and sponsored attributes.
- [ ] Compare Core Web Vitals and error logs with the pre-launch baseline.
- [ ] Activate the first client campaign only after the house campaign passes.
- [ ] Retain a one-click pause control for every active campaign.

## 15. Out of scope for the first release

- Advertiser self-service accounts
- Automated billing, Stripe, or invoicing
- Auctions, real-time bidding, or programmatic ad networks
- Third-party pixels and conversion scripts
- Retargeting or behavioral advertising
- User-level frequency tracking across sessions
- Sponsored surgeon ranking or paid placement inside organic doctor cards
- Automatic approval of healthcare advertising claims
- Multi-tenant advertiser dashboards
- Video transcoding and adaptive bitrate streaming

## 16. Definition of done

The MVP is complete when an authorized BOS administrator can create an advertiser, upload responsive image or video media to Supabase, configure placements and a Perth-time schedule, approve and activate a campaign, preview it, pause it immediately, and see aggregate impressions, clicks, CTR, and video engagement. The creative must appear only in approved placements, remain clearly labelled, preserve organic surgeon ordering, use sponsored links, collect no personal or health-related tracking data, and pass desktop, mobile, accessibility, SEO, security, performance, and production-build checks.

## 17. Research and policy references

- [AHPRA advertising guidelines](https://www.ahpra.gov.au/Resources/Advertising-hub/Advertising-guidelines-and-other-guidance/Advertising-guidelines.aspx)
- [TGA advertising rules for the general public](https://www.tga.gov.au/products/regulations-all-products/advertising/advertising-basics/what-can-and-cannot-be-advertised-general-public)
- [OAIC third-party tracking pixel investigation](https://www.oaic.gov.au/news/media-centre/privacy-commissioner-finds-privacy-breaches-in-third-party-tracking-pixel-investigation)
- [Google guidance for paid outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)
- [AANA Code of Ethics](https://aana.com.au/code-of-ethics/)
- [W3C guidance for moving and auto-updating content](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide)
- [Australian Doctor Group digital ad specifications](https://www.adg.com.au/ad-specs/)
- [HealthShare directory advertising example](https://www.healthshare.com.au/directory/find-a-health-professional/)
