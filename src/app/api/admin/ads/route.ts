import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/ads/admin";
import { buildAssignments } from "@/lib/ads/assignments";
import { effectiveStatus } from "@/lib/ads/selection";
import { validateCampaignPayload } from "@/lib/ads/validation";

const emptyMetrics = () => ({ impressions: 0, clicks: 0, videoStarts: 0, videoCompletes: 0 });
const ctr = (clicks: number, impressions: number) =>
  impressions ? Number(((clicks / impressions) * 100).toFixed(2)) : 0;

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
  }

  try {
    const [campaigns, advertisers] = await Promise.all([
      prisma.adCampaign.findMany({
        include: {
          advertiser: {
            select: { id: true, name: true, websiteUrl: true, isActive: true },
          },
          assignments: {
            select: { placementKey: true, isActive: true, context: true },
          },
          dailyMetrics: {
            select: {
              impressions: true,
              clicks: true,
              videoStarts: true,
              videoCompletes: true,
            },
          },
        },
        orderBy: { updatedAt: "desc" },
      }),
      prisma.advertiser.findMany({
        where: { isActive: true },
        select: {
          id: true,
          name: true,
          websiteUrl: true,
          contactName: true,
          contactEmail: true,
          abn: true,
        },
        orderBy: { name: "asc" },
      }),
    ]);

    const now = new Date();
    const totals = emptyMetrics();
    const normalizedCampaigns = campaigns.map(({ dailyMetrics, ...campaign }) => {
      const metrics = emptyMetrics();
      for (const item of dailyMetrics) {
        metrics.impressions += item.impressions;
        metrics.clicks += item.clicks;
        metrics.videoStarts += item.videoStarts;
        metrics.videoCompletes += item.videoCompletes;
      }
      totals.impressions += metrics.impressions;
      totals.clicks += metrics.clicks;
      totals.videoStarts += metrics.videoStarts;
      totals.videoCompletes += metrics.videoCompletes;
      return {
        ...campaign,
        // What is true right now: an ended campaign shows as Ended even if its
        // stored status still says Active.
        displayStatus: effectiveStatus(campaign, now),
        hasMetrics: dailyMetrics.length > 0,
        metrics: { ...metrics, ctr: ctr(metrics.clicks, metrics.impressions) },
      };
    });

    return NextResponse.json({
      success: true,
      data: {
        campaigns: normalizedCampaigns,
        advertisers,
        summary: {
          activeCampaigns: normalizedCampaigns.filter((item) => item.displayStatus === "ACTIVE").length,
          scheduledCampaigns: normalizedCampaigns.filter((item) => item.displayStatus === "SCHEDULED").length,
          ...totals,
          ctr: ctr(totals.clicks, totals.impressions),
        },
      },
    });
  } catch (error) {
    console.error("Advertising dashboard API error:", error);
    return NextResponse.json(
      { success: false, error: "Unable to load advertising data." },
      { status: 500 },
    );
  }
}

// Creates a draft. Media is uploaded next, then the editor publishes with PATCH.
export async function POST(request: Request) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
  }

  try {
    const payload = await request.json();
    const validated = validateCampaignPayload({ ...payload, status: "DRAFT" });

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

      return tx.adCampaign.create({
        data: {
          ...validated.campaign,
          status: "DRAFT",
          advertiserId,
          createdById: session.user.id,
          complianceAcceptedAt: payload.complianceAccepted ? new Date() : null,
          assignments: {
            create: buildAssignments(validated.placementKeys, payload.targeting),
          },
        },
        include: { advertiser: true, assignments: true },
      });
    });

    revalidateTag("ads");
    return NextResponse.json({ success: true, data: campaign }, { status: 201 });
  } catch (error) {
    console.error("Create advertising campaign error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unable to create campaign." },
      { status: 400 },
    );
  }
}
