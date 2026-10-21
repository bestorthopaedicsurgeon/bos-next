import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/ads/admin";
import { buildAssignments, targetingFromAssignments } from "@/lib/ads/assignments";
import { effectiveStatus } from "@/lib/ads/selection";
import {
  derivePublishedStatus,
  validateCampaignPayload,
  validatePublishReady,
} from "@/lib/ads/validation";
import {
  AD_MEDIA_FIELDS,
  copyAdMedia,
  getAdMediaPublicUrl,
  removeAdMedia,
} from "@/lib/supabase/adUpload";

const unauthorized = () =>
  NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
const notFound = () =>
  NextResponse.json({ success: false, error: "Campaign not found." }, { status: 404 });

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return unauthorized();

  const { id } = await params;
  const campaign = await prisma.adCampaign.findUnique({
    where: { id },
    include: {
      advertiser: true,
      assignments: { orderBy: { placementKey: "asc" } },
      _count: { select: { dailyMetrics: true } },
    },
  });
  if (!campaign) return notFound();

  return NextResponse.json({
    success: true,
    data: {
      ...campaign,
      displayStatus: effectiveStatus(campaign),
      targeting: targetingFromAssignments(campaign.assignments),
      mediaUrls: {
        desktopImage: getAdMediaPublicUrl(campaign.desktopImagePath),
        mobileImage: getAdMediaPublicUrl(campaign.mobileImagePath),
        video: getAdMediaPublicUrl(campaign.videoPath),
        poster: getAdMediaPublicUrl(campaign.posterPath),
        captions: getAdMediaPublicUrl(campaign.captionsPath),
      },
    },
  });
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return unauthorized();

  try {
    const { id } = await params;
    const payload = await request.json();
    const existing = await prisma.adCampaign.findUnique({
      where: { id },
      include: { assignments: true },
    });
    if (!existing) return notFound();

    if (payload.action === "pause") {
      const campaign = await prisma.adCampaign.update({
        where: { id },
        data: { status: "PAUSED" },
      });
      revalidateTag("ads");
      return NextResponse.json({ success: true, data: campaign });
    }

    if (payload.action === "resume") {
      const placementKeys = existing.assignments
        .filter((item) => item.isActive)
        .map((item) => item.placementKey);
      validatePublishReady(existing, placementKeys);
      const status = derivePublishedStatus(existing.startsAt, existing.endsAt);
      if (status === "ENDED") {
        throw new Error("This campaign's end time has passed. Edit the schedule before resuming it.");
      }
      const campaign = await prisma.adCampaign.update({
        where: { id },
        data: { status, approvedAt: existing.approvedAt || new Date(), reviewedById: session.user.id },
      });
      revalidateTag("ads");
      return NextResponse.json({ success: true, data: campaign });
    }

    if (payload.action === "duplicate") {
      const copy = await prisma.adCampaign.create({
        data: {
          advertiserId: existing.advertiserId,
          name: `${existing.name} (copy)`.slice(0, 160),
          mediaType: existing.mediaType,
          coverage: existing.coverage,
          altText: existing.altText,
          destinationUrl: existing.destinationUrl,
          ctaLabel: existing.ctaLabel,
          status: "DRAFT",
          startsAt: existing.startsAt,
          endsAt: existing.endsAt,
          timezone: existing.timezone,
          priority: existing.priority,
          weight: existing.weight,
          loopVideo: existing.loopVideo,
          complianceNotes: existing.complianceNotes,
          createdById: session.user.id,
          assignments: {
            create: existing.assignments.map(({ placementKey, context, isActive }) => ({
              placementKey,
              isActive,
              ...(context ? { context } : {}),
            })),
          },
        },
      });
      // Copy each creative into the new campaign's own storage folder.
      const media: Record<string, string> = {};
      for (const field of Object.values(AD_MEDIA_FIELDS)) {
        const path = existing[field as keyof typeof existing] as string | null;
        if (path) media[field] = await copyAdMedia(path, existing.advertiserId, copy.id);
      }
      const campaign = await prisma.adCampaign.update({
        where: { id: copy.id },
        data: { ...media, originalFileName: existing.originalFileName },
      });
      return NextResponse.json({ success: true, data: campaign }, { status: 201 });
    }

    const validated = validateCampaignPayload(payload, {
      requirePublishReady: Boolean(payload.publish),
    });
    const complianceAcceptedAt = payload.complianceAccepted
      ? existing.complianceAcceptedAt || new Date()
      : null;
    const requestedPublish = Boolean(payload.publish);

    if (requestedPublish) {
      validatePublishReady(
        { ...existing, ...validated.campaign, complianceAcceptedAt },
        validated.placementKeys,
      );
    }

    const finalStatus = requestedPublish
      ? derivePublishedStatus(validated.campaign.startsAt, validated.campaign.endsAt)
      : "DRAFT";
    if (finalStatus === "ENDED") {
      throw new Error("The end time has already passed. Choose a later end time to publish.");
    }

    const campaign = await prisma.$transaction(async (tx) => {
      let advertiserId = validated.advertiserId;
      if (advertiserId) {
        const advertiser = await tx.advertiser.findFirst({
          where: { id: advertiserId, isActive: true },
          select: { id: true },
        });
        if (!advertiser) throw new Error("The selected advertiser is unavailable.");
      } else {
        const advertiserData = validated.advertiser;
        if (!advertiserData?.websiteUrl) {
          throw new Error("The advertiser website is required.");
        }
        advertiserId = (
          await tx.advertiser.create({
            data: { ...advertiserData, websiteUrl: advertiserData.websiteUrl },
          })
        ).id;
      }

      await tx.adAssignment.deleteMany({ where: { campaignId: id } });
      return tx.adCampaign.update({
        where: { id },
        data: {
          ...validated.campaign,
          advertiserId,
          status: finalStatus,
          complianceAcceptedAt,
          approvedAt: requestedPublish ? new Date() : null,
          reviewedById: requestedPublish ? session.user.id : null,
          assignments: {
            create: buildAssignments(validated.placementKeys, payload.targeting),
          },
        },
        include: { advertiser: true, assignments: true },
      });
    });

    revalidateTag("ads");
    return NextResponse.json({ success: true, data: campaign });
  } catch (error) {
    console.error("Update advertising campaign error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unable to update campaign." },
      { status: 400 },
    );
  }
}

// Archives a campaign (it stops serving immediately and keeps its reporting).
// With ?permanent=1, a draft that has never recorded any activity is deleted
// outright together with its stored media.
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) return unauthorized();

  const { id } = await params;
  const permanent = new URL(request.url).searchParams.get("permanent") === "1";
  const campaign = await prisma.adCampaign.findUnique({
    where: { id },
    include: { _count: { select: { dailyMetrics: true } } },
  });
  if (!campaign) return notFound();

  if (permanent) {
    if (campaign.status !== "DRAFT" || campaign._count.dailyMetrics > 0) {
      return NextResponse.json(
        { success: false, error: "Only drafts with no recorded activity can be deleted. Archive this campaign instead." },
        { status: 400 },
      );
    }
    await prisma.adCampaign.delete({ where: { id } });
    for (const field of Object.values(AD_MEDIA_FIELDS)) {
      await removeAdMedia(campaign[field as keyof typeof campaign] as string | null);
    }
    revalidateTag("ads");
    return NextResponse.json({ success: true });
  }

  const archived = await prisma.adCampaign.update({
    where: { id },
    data: { status: "ARCHIVED" },
  });
  revalidateTag("ads");
  return NextResponse.json({ success: true, data: archived });
}
