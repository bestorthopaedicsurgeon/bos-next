"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarClock,
  CheckCircle2,
  Crosshair,
  Globe2,
  Image as ImageIcon,
  LayoutGrid,
  Megaphone,
  Save,
  Send,
  ShieldCheck,
  Video,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import AdCreativeUploader from "@/components/admin/ads/AdCreativeUploader";
import AdPreview from "@/components/admin/ads/AdPreview";
import { AD_COVERAGE, SELECTABLE_AD_PLACEMENTS } from "@/lib/ads/placements";
import { AD_TARGET_LOCATIONS, AD_TARGET_SPECIALTIES } from "@/lib/ads/context";

const NEW_ADVERTISER = "__new__";

const EMPTY_FORM = {
  name: "",
  advertiserId: "",
  advertiserName: "",
  advertiserWebsiteUrl: "",
  contactName: "",
  contactEmail: "",
  abn: "",
  mediaType: "IMAGE",
  altText: "",
  destinationUrl: "",
  ctaLabel: "Learn more",
  coverage: AD_COVERAGE.SITE_WIDE,
  placementKeys: [],
  targeting: { specialties: [], locations: [] },
  startsAt: "",
  endsAt: "",
  priority: 0,
  weight: 1,
  loopVideo: true,
  videoHasSpeech: false,
  complianceNotes: "",
  status: "DRAFT",
};

const EMPTY_FILES = {
  desktopImage: null,
  mobileImage: null,
  video: null,
  poster: null,
  captions: null,
};

const EMPTY_URLS = {
  desktopImage: null,
  mobileImage: null,
  video: null,
  poster: null,
  captions: null,
};

// Confirmed by an administrator before every publish (BOS Advertising Policy,
// AHPRA advertising guidelines, TGA rules and the AANA Code of Ethics).
const COMPLIANCE_ITEMS = [
  {
    key: "identity",
    label: "The advertiser is a real, identifiable business and its contact details are on file.",
  },
  {
    key: "rights",
    label: "The advertiser has permission to use every image, video, logo and claim in the creative.",
  },
  {
    key: "accuracy",
    label: "The advertisement is accurate, does not promise outcomes, and does not create unreasonable expectations.",
  },
  {
    key: "testimonials",
    label: "It contains no patient testimonials or success stories about a regulated health service, and offers show their full terms.",
  },
  {
    key: "healthcare",
    label: "Any therapeutic goods may be advertised to the public, and the wording has been checked against AHPRA, TGA and AANA requirements.",
  },
  {
    key: "destination",
    label: "The landing page matches the advertisement and uses a secure HTTPS address.",
  },
];

const ALL_COMPLIANCE = Object.fromEntries(COMPLIANCE_ITEMS.map((item) => [item.key, true]));
const NO_COMPLIANCE = Object.fromEntries(COMPLIANCE_ITEMS.map((item) => [item.key, false]));

const LIVE_STATUSES = new Set(["ACTIVE", "SCHEDULED"]);

function toPerthInput(value) {
  if (!value) return "";
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Australia/Perth",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(value));
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}`;
}

// Perth has no daylight saving, so +08:00 is always correct.
function perthInputToIso(value) {
  return value ? new Date(`${value}:00+08:00`).toISOString() : null;
}

const UPLOAD_LIMITS = {
  desktopImage: 2 * 1024 * 1024,
  mobileImage: 1 * 1024 * 1024,
  video: 25 * 1024 * 1024,
  poster: 1 * 1024 * 1024,
  captions: 250 * 1024,
};
const RECOMMENDED_VIDEO_SECONDS = 30;
const MAX_VIDEO_SECONDS = 60;

function readVideoDuration(file) {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const video = document.createElement("video");
    video.preload = "metadata";
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(video.duration);
    };
    video.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };
    video.src = url;
  });
}

async function validateLocalFile(file, kind) {
  if (!file) return;
  if (file.size > UPLOAD_LIMITS[kind]) throw new Error(`${file.name} is larger than the allowed upload size.`);
  if (kind === "captions" && !file.name.toLowerCase().endsWith(".vtt")) {
    throw new Error("Captions must be a .vtt file.");
  }
  if (kind === "video") {
    const seconds = await readVideoDuration(file);
    if (seconds === null) throw new Error(`${file.name} could not be read as a video in this browser.`);
    if (seconds > MAX_VIDEO_SECONDS) {
      throw new Error(`${file.name} is ${Math.round(seconds)} seconds long. Advertising videos must be ${MAX_VIDEO_SECONDS} seconds or shorter.`);
    }
    if (seconds > RECOMMENDED_VIDEO_SECONDS) {
      toast.warning(`${file.name} is ${Math.round(seconds)} seconds long. ${RECOMMENDED_VIDEO_SECONDS} seconds or less is recommended.`);
    }
  }
}

export default function AdCampaignForm({ campaignId: initialCampaignId = null }) {
  const router = useRouter();
  // Set as soon as a new campaign's draft exists, so a retried publish
  // updates that draft instead of creating a second campaign.
  const [campaignId, setCampaignId] = useState(initialCampaignId);
  const [form, setForm] = useState(EMPTY_FORM);
  const [files, setFiles] = useState(EMPTY_FILES);
  const [mediaUrls, setMediaUrls] = useState(EMPTY_URLS);
  const [advertisers, setAdvertisers] = useState([]);
  const [advertiserChoice, setAdvertiserChoice] = useState(NEW_ADVERTISER);
  const [compliance, setCompliance] = useState(NO_COMPLIANCE);
  const [loading, setLoading] = useState(Boolean(initialCampaignId));
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setLoading(true);
      try {
        const [listResponse, campaignResponse] = await Promise.all([
          fetch("/api/admin/ads", { signal: controller.signal, cache: "no-store" }),
          initialCampaignId
            ? fetch(`/api/admin/ads/${initialCampaignId}`, { signal: controller.signal, cache: "no-store" })
            : Promise.resolve(null),
        ]);
        const listResult = await listResponse.json();
        if (!listResponse.ok) throw new Error(listResult.error || "Unable to load advertisers.");
        setAdvertisers(listResult.data.advertisers || []);

        if (campaignResponse) {
          const campaignResult = await campaignResponse.json();
          if (!campaignResponse.ok) throw new Error(campaignResult.error || "Unable to load campaign.");
          const campaign = campaignResult.data;
          setAdvertiserChoice(campaign.advertiserId);
          setForm({
            name: campaign.name || "",
            advertiserId: campaign.advertiserId,
            advertiserName: campaign.advertiser.name || "",
            advertiserWebsiteUrl: campaign.advertiser.websiteUrl || "",
            contactName: campaign.advertiser.contactName || "",
            contactEmail: campaign.advertiser.contactEmail || "",
            abn: campaign.advertiser.abn || "",
            mediaType: campaign.mediaType,
            altText: campaign.altText || "",
            destinationUrl: campaign.destinationUrl || "",
            ctaLabel: campaign.ctaLabel || "Learn more",
            coverage: campaign.coverage,
            placementKeys: campaign.assignments.filter((item) => item.isActive).map((item) => item.placementKey),
            targeting: campaign.targeting || { specialties: [], locations: [] },
            startsAt: toPerthInput(campaign.startsAt),
            endsAt: toPerthInput(campaign.endsAt),
            priority: campaign.priority,
            weight: campaign.weight,
            loopVideo: campaign.loopVideo,
            videoHasSpeech: Boolean(campaign.captionsPath),
            complianceNotes: campaign.complianceNotes || "",
            status: campaign.displayStatus || campaign.status,
          });
          setMediaUrls(campaign.mediaUrls || EMPTY_URLS);
          if (campaign.complianceAcceptedAt) setCompliance(ALL_COMPLIANCE);
        }
      } catch (error) {
        if (error.name !== "AbortError") toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, [initialCampaignId]);

  const complianceAccepted = useMemo(
    () => COMPLIANCE_ITEMS.every((item) => compliance[item.key]),
    [compliance],
  );

  // Which targeting choices make sense for the placements picked.
  const targetableKeys = useMemo(() => {
    const keys = new Set();
    if (form.coverage !== AD_COVERAGE.SELECTED_PLACEMENTS) return keys;
    for (const placement of SELECTABLE_AD_PLACEMENTS) {
      if (form.placementKeys.includes(placement.key)) {
        placement.contextKeys.forEach((key) => keys.add(key));
      }
    }
    return keys;
  }, [form.coverage, form.placementKeys]);

  const isLive = LIVE_STATUSES.has(form.status);

  const setValue = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const selectAdvertiser = (value) => {
    setAdvertiserChoice(value);
    if (value === NEW_ADVERTISER) {
      setForm((current) => ({
        ...current,
        advertiserId: "",
        advertiserName: "",
        advertiserWebsiteUrl: "",
        contactName: "",
        contactEmail: "",
        abn: "",
      }));
      return;
    }
    const advertiser = advertisers.find((item) => item.id === value);
    if (!advertiser) return;
    setForm((current) => ({
      ...current,
      advertiserId: advertiser.id,
      advertiserName: advertiser.name,
      advertiserWebsiteUrl: advertiser.websiteUrl,
      contactName: advertiser.contactName || "",
      contactEmail: advertiser.contactEmail || "",
      abn: advertiser.abn || "",
    }));
  };

  const togglePlacement = (placementKey) => {
    setForm((current) => ({
      ...current,
      placementKeys: current.placementKeys.includes(placementKey)
        ? current.placementKeys.filter((key) => key !== placementKey)
        : [...current.placementKeys, placementKey],
    }));
  };

  const toggleTarget = (dimension, slug) => {
    setForm((current) => {
      const values = current.targeting[dimension] || [];
      return {
        ...current,
        targeting: {
          ...current.targeting,
          [dimension]: values.includes(slug) ? values.filter((value) => value !== slug) : [...values, slug],
        },
      };
    });
  };

  const chooseFile = async (kind, file) => {
    try {
      await validateLocalFile(file, kind);
      setFiles((current) => ({ ...current, [kind]: file }));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeExisting = async (kind) => {
    if (!campaignId || !mediaUrls[kind]) {
      setMediaUrls((current) => ({ ...current, [kind]: null }));
      return;
    }
    try {
      const response = await fetch(`/api/admin/ads/${campaignId}/media?kind=${kind}`, { method: "DELETE" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to remove media.");
      setMediaUrls((current) => ({ ...current, [kind]: null }));
      toast.success("Media removed.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const buildPayload = (overrides = {}) => {
    const { videoHasSpeech, ...rest } = form;
    return {
      ...rest,
      startsAt: perthInputToIso(form.startsAt),
      endsAt: perthInputToIso(form.endsAt),
      targeting: {
        specialties: targetableKeys.has("specialty") ? form.targeting.specialties : [],
        locations: targetableKeys.has("location") ? form.targeting.locations : [],
      },
      complianceAccepted,
      ...overrides,
    };
  };

  const uploadFiles = async (id) => {
    const entries = Object.entries(files).filter(([, file]) => file);
    for (let index = 0; index < entries.length; index += 1) {
      const [kind, file] = entries[index];
      setProgress(`Uploading ${index + 1} of ${entries.length}: ${file.name}`);
      const body = new FormData();
      body.append("kind", kind);
      body.append("file", file);
      const response = await fetch(`/api/admin/ads/${id}/media`, { method: "POST", body });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || `Unable to upload ${file.name}.`);
      setMediaUrls((current) => ({ ...current, [kind]: result.data.publicUrl }));
      setFiles((current) => ({ ...current, [kind]: null }));
    }
  };

  const save = async (publish) => {
    if (publish && !complianceAccepted) {
      toast.error("Complete every compliance confirmation before publishing.");
      return;
    }
    if (form.coverage === AD_COVERAGE.SELECTED_PLACEMENTS && publish && form.placementKeys.length === 0) {
      toast.error("Choose at least one page or position before publishing.");
      return;
    }
    if (publish && form.mediaType === "VIDEO" && form.videoHasSpeech && !files.captions && !mediaUrls.captions) {
      toast.error("This video has speech, so a captions file is required before publishing.");
      return;
    }
    if (
      !publish &&
      isLive &&
      !window.confirm("Saving as a draft takes this campaign off the site until it is published again. Continue?")
    ) {
      return;
    }

    setSaving(true);
    setProgress("Saving campaign details...");
    try {
      let id = campaignId;
      let advertiserId = form.advertiserId;
      if (!id) {
        const createResponse = await fetch("/api/admin/ads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(buildPayload({ status: "DRAFT" })),
        });
        const createResult = await createResponse.json();
        if (!createResponse.ok) throw new Error(createResult.error || "Unable to create campaign.");
        id = createResult.data.id;
        advertiserId = createResult.data.advertiserId;
        // From here on this form edits the new draft, even if a later step fails.
        setCampaignId(id);
        setAdvertiserChoice(advertiserId);
        setForm((current) => ({ ...current, advertiserId }));
        window.history.replaceState(null, "", `/admin/ads/${id}`);
      }

      await uploadFiles(id);
      setProgress(publish ? "Publishing campaign..." : "Saving draft...");
      const updateResponse = await fetch(`/api/admin/ads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          buildPayload({
            advertiserId,
            publish,
            status: publish ? "ACTIVE" : "DRAFT",
          }),
        ),
      });
      const updateResult = await updateResponse.json();
      if (!updateResponse.ok) throw new Error(updateResult.error || "Unable to save campaign.");

      toast.success(publish ? "Campaign published." : "Draft saved.");
      router.push("/admin/ads");
      router.refresh();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSaving(false);
      setProgress("");
    }
  };

  if (loading) {
    return <div className="grid min-h-80 place-items-center font-dm-sans text-sm text-neutral-500">Loading campaign...</div>;
  }

  const inputClass = "h-10 rounded-md border-neutral-300 bg-white font-dm-sans text-sm";
  const labelClass = "font-dm-sans text-sm font-semibold text-neutral-800";
  const chipClass = (active) =>
    `rounded-full border px-3 py-1.5 font-dm-sans text-xs font-semibold transition ${
      active ? "border-primary bg-primary text-primary-foreground" : "border-neutral-300 bg-white text-neutral-700 hover:border-primary/50"
    }`;

  return (
    <div className="pb-12">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Button asChild variant="ghost" size="sm" className="mb-2 -ml-3 text-neutral-600">
            <Link href="/admin/ads"><ArrowLeft className="size-4" /> Advertising</Link>
          </Button>
          <h1 className="font-syne text-3xl font-bold text-neutral-900">
            {campaignId ? "Edit campaign" : "New advertising campaign"}
          </h1>
          <p className="mt-2 font-dm-sans text-sm text-neutral-600">
            Build a clearly labelled BOS placement with secure media and a transparent destination.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" disabled={saving} onClick={() => save(false)}>
            <Save className="size-4" /> Save draft
          </Button>
          <Button type="button" disabled={saving} onClick={() => save(true)}>
            <Send className="size-4" /> {isLive ? "Update campaign" : "Publish campaign"}
          </Button>
        </div>
      </div>

      {saving && (
        <div className="mb-5 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 font-dm-sans text-sm text-primary">
          {progress || "Saving..."}
        </div>
      )}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.72fr)]">
        <div className="space-y-6">
          <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><Megaphone className="size-4" /></span>
              <div><h2 className="font-syne text-xl font-semibold text-neutral-900">Campaign and advertiser</h2><p className="font-dm-sans text-sm text-neutral-500">Internal campaign details and the business shown to visitors.</p></div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label className={labelClass}>Campaign name</Label>
                <Input className={inputClass} value={form.name} onChange={(event) => setValue("name", event.target.value)} placeholder="Perth clinic spring campaign" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className={labelClass}>Advertiser</Label>
                <Select value={advertiserChoice} onValueChange={selectAdvertiser}>
                  <SelectTrigger className="h-10 w-full"><SelectValue placeholder="Choose an advertiser" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value={NEW_ADVERTISER}>Create a new advertiser</SelectItem>
                    {advertisers.map((advertiser) => <SelectItem key={advertiser.id} value={advertiser.id}>{advertiser.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className={labelClass}>Business name</Label>
                <Input className={inputClass} disabled={advertiserChoice !== NEW_ADVERTISER} value={form.advertiserName} onChange={(event) => setValue("advertiserName", event.target.value)} placeholder="Advertiser name" />
              </div>
              <div className="space-y-2">
                <Label className={labelClass}>Business website</Label>
                <Input className={inputClass} disabled={advertiserChoice !== NEW_ADVERTISER} type="url" value={form.advertiserWebsiteUrl} onChange={(event) => setValue("advertiserWebsiteUrl", event.target.value)} placeholder="https://example.com.au" />
              </div>
              {advertiserChoice === NEW_ADVERTISER && (
                <>
                  <div className="space-y-2"><Label className={labelClass}>Contact name</Label><Input className={inputClass} value={form.contactName} onChange={(event) => setValue("contactName", event.target.value)} /></div>
                  <div className="space-y-2"><Label className={labelClass}>Contact email</Label><Input className={inputClass} type="email" value={form.contactEmail} onChange={(event) => setValue("contactEmail", event.target.value)} /></div>
                  <div className="space-y-2"><Label className={labelClass}>ABN (optional)</Label><Input className={inputClass} value={form.abn} onChange={(event) => setValue("abn", event.target.value)} /></div>
                </>
              )}
            </div>
          </section>

          <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><ImageIcon className="size-4" /></span>
              <div><h2 className="font-syne text-xl font-semibold text-neutral-900">Creative</h2><p className="font-dm-sans text-sm text-neutral-500">Files are stored in Supabase; BOS controls how they are presented.</p></div>
            </div>
            <div className="mb-5 space-y-2">
              <Label className={labelClass}>Creative type</Label>
              <Select value={form.mediaType} onValueChange={(value) => setValue("mediaType", value)}>
                <SelectTrigger className="h-10 w-full"><SelectValue /></SelectTrigger>
                <SelectContent><SelectItem value="IMAGE"><span className="flex items-center gap-2"><ImageIcon className="size-4" /> Image</span></SelectItem><SelectItem value="VIDEO"><span className="flex items-center gap-2"><Video className="size-4" /> Autoplay video</span></SelectItem></SelectContent>
              </Select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {form.mediaType === "IMAGE" ? (
                <>
                  <AdCreativeUploader label="Desktop image" description="970x90 or 728x90 banner (300x250 also works), WebP, JPEG or PNG, maximum 2 MB. Upload at double size (for example 1940x180) so text stays sharp." accept="image/webp,image/jpeg,image/png" file={files.desktopImage} existingUrl={mediaUrls.desktopImage} required onChange={(file) => chooseFile("desktopImage", file)} onRemoveExisting={() => removeExisting("desktopImage")} />
                  <AdCreativeUploader label="Mobile image" description="320x100 preferred (640x200 for sharp phone screens), maximum 1 MB. A dedicated mobile version keeps text readable on phones." accept="image/webp,image/jpeg,image/png" file={files.mobileImage} existingUrl={mediaUrls.mobileImage} onChange={(file) => chooseFile("mobileImage", file)} onRemoveExisting={() => removeExisting("mobileImage")} />
                </>
              ) : (
                <>
                  <AdCreativeUploader label="Video" description={`MP4 (H.264) or WebM, 16:9, maximum 25 MB and ${MAX_VIDEO_SECONDS} seconds (${RECOMMENDED_VIDEO_SECONDS} or less recommended). Plays muted and automatically, with no play button.`} accept="video/mp4,video/webm" type="video" file={files.video} existingUrl={mediaUrls.video} required onChange={(file) => chooseFile("video", file)} onRemoveExisting={() => removeExisting("video")} />
                  <AdCreativeUploader label="Poster image" description="Shown while the video loads and to visitors who prefer reduced motion. Maximum 1 MB." accept="image/webp,image/jpeg,image/png" file={files.poster} existingUrl={mediaUrls.poster} required onChange={(file) => chooseFile("poster", file)} onRemoveExisting={() => removeExisting("poster")} />
                  <div className="space-y-3 md:col-span-2">
                    <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4"><div><Label className={labelClass}>This video contains speech</Label><p className="mt-1 font-dm-sans text-xs text-neutral-500">Speech needs captions so the message works with the sound off.</p></div><Switch checked={form.videoHasSpeech} onCheckedChange={(value) => setValue("videoHasSpeech", value)} /></div>
                  </div>
                  <AdCreativeUploader label="Captions" description={form.videoHasSpeech ? "WebVTT (.vtt) file. Required because the video contains speech." : "WebVTT (.vtt) file, only needed when the video contains speech."} accept=".vtt,text/vtt" type="captions" file={files.captions} existingUrl={mediaUrls.captions} required={form.videoHasSpeech} onChange={(file) => chooseFile("captions", file)} onRemoveExisting={() => removeExisting("captions")} />
                  <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4"><div><Label className={labelClass}>Loop video</Label><p className="mt-1 font-dm-sans text-xs text-neutral-500">Restart short videos automatically while visible.</p></div><Switch checked={form.loopVideo} onCheckedChange={(value) => setValue("loopVideo", value)} /></div>
                </>
              )}
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2"><Label className={labelClass}>Accessible creative description</Label><Input className={inputClass} value={form.altText} onChange={(event) => setValue("altText", event.target.value)} placeholder="Describe the visible creative accurately" /><p className="font-dm-sans text-xs text-neutral-500">Read aloud by screen readers. Describe what is shown; do not add claims that are not in the creative.</p></div>
              <div className="space-y-2"><Label className={labelClass}>Secure destination URL</Label><Input className={inputClass} type="url" value={form.destinationUrl} onChange={(event) => setValue("destinationUrl", event.target.value)} placeholder="https://advertiser.com.au/service" /></div>
              <div className="space-y-2"><Label className={labelClass}>Button label</Label><Input className={inputClass} value={form.ctaLabel} onChange={(event) => setValue("ctaLabel", event.target.value)} placeholder="Learn more" maxLength={50} /></div>
            </div>
          </section>

          <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><Globe2 className="size-4" /></span>
              <div><h2 className="font-syne text-xl font-semibold text-neutral-900">Where the ad appears</h2><p className="font-dm-sans text-sm text-neutral-500">Show it across BOS, or pick the exact pages and positions.</p></div>
            </div>
            <RadioGroup value={form.coverage} onValueChange={(value) => setValue("coverage", value)} className="grid gap-3 md:grid-cols-2">
              <label className={`flex cursor-pointer gap-3 rounded-lg border p-4 transition ${form.coverage === AD_COVERAGE.SITE_WIDE ? "border-primary bg-primary/5" : "border-neutral-200 hover:border-primary/40"}`}>
                <RadioGroupItem value={AD_COVERAGE.SITE_WIDE} className="mt-1" />
                <span><span className="flex items-center gap-2 font-syne text-base font-semibold text-neutral-900"><Globe2 className="size-4 text-primary" /> Show across BOS</span><span className="mt-2 block font-dm-sans text-sm leading-5 text-neutral-600">One banner above the footer on public pages. Never on surgeon profiles, sign in, registration, booking or admin pages.</span></span>
              </label>
              <label className={`flex cursor-pointer gap-3 rounded-lg border p-4 transition ${form.coverage === AD_COVERAGE.SELECTED_PLACEMENTS ? "border-primary bg-primary/5" : "border-neutral-200 hover:border-primary/40"}`}>
                <RadioGroupItem value={AD_COVERAGE.SELECTED_PLACEMENTS} className="mt-1" />
                <span><span className="flex items-center gap-2 font-syne text-base font-semibold text-neutral-900"><LayoutGrid className="size-4 text-primary" /> Choose where it appears</span><span className="mt-2 block font-dm-sans text-sm leading-5 text-neutral-600">Pick specific pages and positions, and optionally limit it to certain specialties or locations.</span></span>
              </label>
            </RadioGroup>
            {form.coverage === AD_COVERAGE.SELECTED_PLACEMENTS && (
              <>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {SELECTABLE_AD_PLACEMENTS.map((placement) => (
                    <label key={placement.key} className="flex cursor-pointer items-start gap-3 rounded-lg border border-neutral-200 p-4 hover:border-primary/40">
                      <Checkbox checked={form.placementKeys.includes(placement.key)} onCheckedChange={() => togglePlacement(placement.key)} />
                      <span><span className="block font-dm-sans text-sm font-semibold text-neutral-800">{placement.label}</span><span className="mt-1 block font-dm-sans text-xs leading-5 text-neutral-500">{placement.description}</span></span>
                    </label>
                  ))}
                </div>

                {targetableKeys.size > 0 && (
                  <div className="mt-5 rounded-lg border border-neutral-200 p-4">
                    <div className="mb-3 flex items-start gap-2">
                      <Crosshair className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div>
                        <p className={labelClass}>Limit to matching pages (optional)</p>
                        <p className="mt-1 font-dm-sans text-xs leading-5 text-neutral-500">Leave everything unselected to show on every page of the chosen positions. Selecting a value shows the ad only on pages about it, for example only knee pages in Perth.</p>
                      </div>
                    </div>
                    {targetableKeys.has("specialty") && (
                      <div className="mt-3">
                        <p className="mb-2 font-dm-sans text-xs font-semibold text-neutral-600 uppercase">Specialties</p>
                        <div className="flex flex-wrap gap-2">
                          {AD_TARGET_SPECIALTIES.map((item) => (
                            <button key={item.slug} type="button" aria-pressed={form.targeting.specialties.includes(item.slug)} className={chipClass(form.targeting.specialties.includes(item.slug))} onClick={() => toggleTarget("specialties", item.slug)}>{item.name}</button>
                          ))}
                        </div>
                      </div>
                    )}
                    {targetableKeys.has("location") && (
                      <div className="mt-4">
                        <p className="mb-2 font-dm-sans text-xs font-semibold text-neutral-600 uppercase">Locations</p>
                        <div className="flex flex-wrap gap-2">
                          {AD_TARGET_LOCATIONS.map((item) => (
                            <button key={item.slug} type="button" aria-pressed={form.targeting.locations.includes(item.slug)} className={chipClass(form.targeting.locations.includes(item.slug))} onClick={() => toggleTarget("locations", item.slug)}>{item.name}</button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </section>

          <section className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><CalendarClock className="size-4" /></span><div><h2 className="font-syne text-xl font-semibold text-neutral-900">Schedule and delivery</h2><p className="font-dm-sans text-sm text-neutral-500">All campaign times are in Perth time. Leave both empty to run until paused.</p></div></div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2"><Label className={labelClass}>Start time</Label><Input className={inputClass} type="datetime-local" value={form.startsAt} onChange={(event) => setValue("startsAt", event.target.value)} /></div>
              <div className="space-y-2"><Label className={labelClass}>End time</Label><Input className={inputClass} type="datetime-local" value={form.endsAt} onChange={(event) => setValue("endsAt", event.target.value)} /></div>
              <div className="space-y-2"><Label className={labelClass}>Priority</Label><Input className={inputClass} type="number" min="-100" max="100" value={form.priority} onChange={(event) => setValue("priority", Number(event.target.value))} /><p className="font-dm-sans text-xs text-neutral-500">Higher priority campaigns are shown first in the same position.</p></div>
              <div className="space-y-2"><Label className={labelClass}>Rotation weight</Label><Input className={inputClass} type="number" min="1" max="100" value={form.weight} onChange={(event) => setValue("weight", Number(event.target.value))} /><p className="font-dm-sans text-xs text-neutral-500">Shares views between campaigns with equal priority (2 shows twice as often as 1).</p></div>
            </div>
          </section>

          <section className="rounded-lg border border-primary/20 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3"><span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><ShieldCheck className="size-4" /></span><div><h2 className="font-syne text-xl font-semibold text-neutral-900">Compliance review</h2><p className="font-dm-sans text-sm text-neutral-500">Every item is required before the campaign can be published.</p></div></div>
            <div className="space-y-3">
              {COMPLIANCE_ITEMS.map((item) => (
                <label key={item.key} className="flex cursor-pointer items-start gap-3 rounded-md border border-neutral-200 p-3 hover:border-primary/40">
                  <Checkbox checked={compliance[item.key]} onCheckedChange={(value) => setCompliance((current) => ({ ...current, [item.key]: Boolean(value) }))} />
                  <span className="font-dm-sans text-sm leading-6 text-neutral-700">{item.label}</span>
                </label>
              ))}
            </div>
            <div className="mt-5 space-y-2"><Label className={labelClass}>Review notes (optional)</Label><Textarea value={form.complianceNotes} onChange={(event) => setValue("complianceNotes", event.target.value)} placeholder="Record claim checks, approvals or campaign conditions." className="min-h-24 rounded-md border-neutral-300 font-dm-sans text-sm" /></div>
            {complianceAccepted && <p className="mt-4 flex items-center gap-2 font-dm-sans text-sm font-semibold text-emerald-700"><CheckCircle2 className="size-4" /> Ready to publish</p>}
          </section>
        </div>

        <aside className="xl:sticky xl:top-4 xl:self-start">
          <AdPreview form={form} files={files} mediaUrls={mediaUrls} />
          <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-4">
            <p className="font-syne text-base font-semibold text-neutral-800">How visitors see it</p>
            <ul className="mt-3 space-y-2 font-dm-sans text-sm text-neutral-600">
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> A clear Sponsored advertisement label and the advertiser&apos;s name</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> The website a click leads to, shown before clicking</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> Links marked as sponsored, opening in a new tab</li>
              <li className="flex gap-2"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" /> No third party tracking or visitor profiling</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
