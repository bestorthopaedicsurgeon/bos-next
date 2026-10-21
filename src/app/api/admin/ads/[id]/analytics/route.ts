import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/ads/admin";
import { effectiveStatus } from "@/lib/ads/selection";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
  }

  const { id } = await params;
  const campaign = await prisma.adCampaign.findUnique({
    where: { id },
    include: {
      advertiser: { select: { name: true } },
      dailyMetrics: { orderBy: [{ date: "asc" }, { placementKey: "asc" }] },
    },
  });
  if (!campaign) {
    return NextResponse.json({ success: false, error: "Campaign not found." }, { status: 404 });
  }

  const totals = campaign.dailyMetrics.reduce(
    (sum, metric) => ({
      impressions: sum.impressions + metric.impressions,
      clicks: sum.clicks + metric.clicks,
      videoStarts: sum.videoStarts + metric.videoStarts,
      videoCompletes: sum.videoCompletes + metric.videoCompletes,
    }),
    { impressions: 0, clicks: 0, videoStarts: 0, videoCompletes: 0 },
  );

  return NextResponse.json({
    success: true,
    data: {
      id: campaign.id,
      name: campaign.name,
      advertiserName: campaign.advertiser.name,
      mediaType: campaign.mediaType,
      status: effectiveStatus(campaign),
      totals: {
        ...totals,
        ctr: totals.impressions
          ? Number(((totals.clicks / totals.impressions) * 100).toFixed(2))
          : 0,
        completionRate: totals.videoStarts
          ? Number(((totals.videoCompletes / totals.videoStarts) * 100).toFixed(2))
          : 0,
      },
      daily: campaign.dailyMetrics,
    },
  });
}
