import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/ads/admin";
import {
  AD_MEDIA_FIELDS as MEDIA_FIELDS,
  AdMediaKind,
  removeAdMedia,
  uploadAdMedia,
} from "@/lib/supabase/adUpload";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
  }

  try {
    const { id } = await params;
    const formData = await request.formData();
    const kind = String(formData.get("kind") || "") as AdMediaKind;
    const file = formData.get("file");
    if (!(kind in MEDIA_FIELDS) || !(file instanceof File)) {
      throw new Error("Choose a valid advertising file.");
    }

    const campaign = await prisma.adCampaign.findUnique({ where: { id } });
    if (!campaign) {
      return NextResponse.json({ success: false, error: "Campaign not found." }, { status: 404 });
    }

    const field = MEDIA_FIELDS[kind];
    const oldPath = campaign[field as keyof typeof campaign] as string | null;
    const uploaded = await uploadAdMedia({
      file,
      advertiserId: campaign.advertiserId,
      campaignId: id,
      kind,
    });

    try {
      await prisma.adCampaign.update({
        where: { id },
        data: {
          [field]: uploaded.path,
          ...(kind === "desktopImage" || kind === "video"
            ? { originalFileName: uploaded.originalFileName }
            : {}),
        },
      });
    } catch (error) {
      await removeAdMedia(uploaded.path);
      throw error;
    }

    await removeAdMedia(oldPath);
    revalidateTag("ads");
    return NextResponse.json({ success: true, data: uploaded });
  } catch (error) {
    console.error("Advertising media upload error:", error);
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unable to upload media." },
      { status: 400 },
    );
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 403 });
  }

  const { id } = await params;
  const kind = new URL(request.url).searchParams.get("kind") as AdMediaKind;
  if (!(kind in MEDIA_FIELDS)) {
    return NextResponse.json({ success: false, error: "Invalid media type." }, { status: 400 });
  }

  const campaign = await prisma.adCampaign.findUnique({ where: { id } });
  if (!campaign) {
    return NextResponse.json({ success: false, error: "Campaign not found." }, { status: 404 });
  }

  const field = MEDIA_FIELDS[kind];
  const oldPath = campaign[field as keyof typeof campaign] as string | null;
  await prisma.adCampaign.update({ where: { id }, data: { [field]: null } });
  await removeAdMedia(oldPath);
  revalidateTag("ads");
  return NextResponse.json({ success: true });
}
