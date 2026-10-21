"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  CalendarClock,
  CirclePause,
  CirclePlay,
  Copy,
  Download,
  Eye,
  Megaphone,
  MousePointerClick,
  Pencil,
  Plus,
  Search,
  Trash2,
  Archive,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AdStatusBadge from "@/components/admin/ads/AdStatusBadge";
import { SELECTABLE_AD_PLACEMENTS, getPlacementLabel } from "@/lib/ads/placements";
import { downloadCsv } from "@/components/admin/ads/csv";

const EMPTY_DATA = {
  campaigns: [],
  advertisers: [],
  summary: { activeCampaigns: 0, scheduledCampaigns: 0, impressions: 0, clicks: 0, ctr: 0 },
};

const formatNumber = (value) => new Intl.NumberFormat("en-AU").format(value || 0);
const formatDate = (value) =>
  value
    ? new Intl.DateTimeFormat("en-AU", {
        timeZone: "Australia/Perth",
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(value))
    : "No limit";

const coverageLabel = (campaign) =>
  campaign.coverage === "SITE_WIDE"
    ? "Across BOS"
    : campaign.assignments.map((item) => getPlacementLabel(item.placementKey)).join(", ") || "No position";

export default function AdsDashboard() {
  const [data, setData] = useState(EMPTY_DATA);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");
  const [advertiser, setAdvertiser] = useState("ALL");
  const [placement, setPlacement] = useState("ALL");
  const [mediaType, setMediaType] = useState("ALL");
  const [busyId, setBusyId] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/admin/ads", { cache: "no-store" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to load campaigns.");
      setData(result.data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const advertiserOptions = useMemo(() => {
    const map = new Map();
    data.campaigns.forEach((campaign) => map.set(campaign.advertiser.id, campaign.advertiser.name));
    return [...map.entries()].sort((a, b) => a[1].localeCompare(b[1]));
  }, [data.campaigns]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return data.campaigns.filter((campaign) => {
      const shownStatus = campaign.displayStatus || campaign.status;
      const matchesPlacement =
        placement === "ALL" ||
        (placement === "SITE_WIDE"
          ? campaign.coverage === "SITE_WIDE"
          : campaign.coverage !== "SITE_WIDE" && campaign.assignments.some((item) => item.placementKey === placement));
      return (
        (status === "ALL" || shownStatus === status) &&
        (advertiser === "ALL" || campaign.advertiser.id === advertiser) &&
        (mediaType === "ALL" || campaign.mediaType === mediaType) &&
        matchesPlacement &&
        (!query ||
          campaign.name.toLowerCase().includes(query) ||
          campaign.advertiser.name.toLowerCase().includes(query))
      );
    });
  }, [data.campaigns, search, status, advertiser, placement, mediaType]);

  const runAction = async (campaign, action) => {
    const messages = {
      archive: `Archive “${campaign.name}”? It stops showing immediately and keeps its reporting.`,
      delete: `Delete the draft “${campaign.name}” and its uploaded files? This cannot be undone.`,
    };
    if (messages[action] && !window.confirm(messages[action])) return;

    setBusyId(campaign.id);
    try {
      const isDelete = action === "archive" || action === "delete";
      const response = await fetch(
        `/api/admin/ads/${campaign.id}${action === "delete" ? "?permanent=1" : ""}`,
        {
          method: isDelete ? "DELETE" : "PATCH",
          headers: { "Content-Type": "application/json" },
          ...(!isDelete && { body: JSON.stringify({ action }) }),
        },
      );
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || `Unable to ${action} the campaign.`);
      const done = {
        pause: "Campaign paused.",
        resume: "Campaign resumed.",
        archive: "Campaign archived.",
        delete: "Draft deleted.",
        duplicate: "Copy created as a draft.",
      };
      toast.success(done[action]);
      await load();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setBusyId(null);
    }
  };

  const exportCsv = () => {
    downloadCsv(
      `bos-advertising-campaigns-${new Date().toISOString().slice(0, 10)}.csv`,
      ["Campaign", "Advertiser", "Status", "Media", "Where it appears", "Starts (Perth)", "Ends (Perth)", "Impressions", "Clicks", "CTR %", "Video starts", "Video completions"],
      filtered.map((campaign) => [
        campaign.name,
        campaign.advertiser.name,
        campaign.displayStatus || campaign.status,
        campaign.mediaType,
        coverageLabel(campaign),
        formatDate(campaign.startsAt),
        formatDate(campaign.endsAt),
        campaign.metrics.impressions,
        campaign.metrics.clicks,
        campaign.metrics.ctr,
        campaign.metrics.videoStarts,
        campaign.metrics.videoCompletes,
      ]),
    );
  };

  const summaryCards = [
    { label: "Active campaigns", value: data.summary.activeCampaigns, icon: Megaphone },
    { label: "Scheduled", value: data.summary.scheduledCampaigns, icon: CalendarClock },
    { label: "Impressions", value: formatNumber(data.summary.impressions), icon: Eye },
    { label: "Clicks", value: formatNumber(data.summary.clicks), icon: MousePointerClick },
    { label: "Average CTR", value: `${data.summary.ctr || 0}%`, icon: BarChart3 },
  ];

  const filterTrigger = "w-full sm:w-44";

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 font-dm-sans text-sm font-semibold text-primary">Content and partnerships</p>
          <h1 className="font-syne text-3xl font-bold text-neutral-900">Advertising</h1>
          <p className="mt-2 max-w-2xl font-dm-sans text-sm text-neutral-600">
            Publish trustworthy, clearly labelled campaigns without changing organic surgeon rankings.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" className="h-10" onClick={exportCsv} disabled={!filtered.length}>
            <Download className="size-4" /> Export CSV
          </Button>
          <Button asChild className="h-10">
            <Link href="/admin/ads/create">
              <Plus className="size-4" /> New campaign
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {summaryCards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-lg border border-primary/15 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-dm-sans text-sm text-neutral-600">{label}</span>
              <span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary">
                <Icon className="size-4" />
              </span>
            </div>
            <p className="font-syne text-2xl font-bold text-neutral-900">{value}</p>
          </div>
        ))}
      </div>

      <section className="rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-neutral-200 p-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="relative w-full xl:max-w-xs">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search campaigns or advertisers"
              className="pl-9"
            />
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className={filterTrigger} aria-label="Filter by status"><SelectValue placeholder="All statuses" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All statuses</SelectItem>
                {["ACTIVE", "SCHEDULED", "DRAFT", "PAUSED", "ENDED", "ARCHIVED"].map((value) => (
                  <SelectItem key={value} value={value}>{value.charAt(0) + value.slice(1).toLowerCase()}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={advertiser} onValueChange={setAdvertiser}>
              <SelectTrigger className={filterTrigger} aria-label="Filter by advertiser"><SelectValue placeholder="All advertisers" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All advertisers</SelectItem>
                {advertiserOptions.map(([id, name]) => <SelectItem key={id} value={id}>{name}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={placement} onValueChange={setPlacement}>
              <SelectTrigger className={filterTrigger} aria-label="Filter by position"><SelectValue placeholder="All positions" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All positions</SelectItem>
                <SelectItem value="SITE_WIDE">Across BOS</SelectItem>
                {SELECTABLE_AD_PLACEMENTS.map((item) => <SelectItem key={item.key} value={item.key}>{item.label}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={mediaType} onValueChange={setMediaType}>
              <SelectTrigger className={filterTrigger} aria-label="Filter by media type"><SelectValue placeholder="Images and videos" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">Images and videos</SelectItem>
                <SelectItem value="IMAGE">Images</SelectItem>
                <SelectItem value="VIDEO">Videos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="!m-0 !rounded-none !border-0 !shadow-none">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Where it appears</th>
                <th>Schedule</th>
                <th>Performance</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} className="py-12 text-center text-neutral-500">Loading campaigns...</td></tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-14 text-center">
                    <Megaphone className="mx-auto mb-3 size-7 text-primary/60" />
                    <p className="font-dm-sans text-sm text-neutral-600">
                      {data.campaigns.length ? "No campaigns match these filters." : "No campaigns yet. Create the first one to get started."}
                    </p>
                  </td>
                </tr>
              ) : (
                filtered.map((campaign) => {
                  const shownStatus = campaign.displayStatus || campaign.status;
                  const busy = busyId === campaign.id;
                  return (
                    <tr key={campaign.id}>
                      <td>
                        <p className="font-dm-sans text-sm font-semibold text-neutral-900">{campaign.name}</p>
                        <p className="mt-1 font-dm-sans text-xs text-neutral-500">
                          {campaign.advertiser.name} · {campaign.mediaType === "VIDEO" ? "Video" : "Image"}
                        </p>
                      </td>
                      <td>
                        <p className="max-w-56 truncate font-dm-sans text-sm text-neutral-700" title={coverageLabel(campaign)}>
                          {coverageLabel(campaign)}
                        </p>
                      </td>
                      <td>
                        <p className="font-dm-sans text-xs text-neutral-600">{formatDate(campaign.startsAt)}</p>
                        <p className="mt-1 font-dm-sans text-xs text-neutral-500">to {formatDate(campaign.endsAt)}</p>
                      </td>
                      <td>
                        <p className="font-dm-sans text-sm font-semibold text-neutral-800">
                          {formatNumber(campaign.metrics.impressions)} views
                        </p>
                        <p className="mt-1 font-dm-sans text-xs text-neutral-500">
                          {formatNumber(campaign.metrics.clicks)} clicks · {campaign.metrics.ctr}% CTR
                        </p>
                      </td>
                      <td><AdStatusBadge status={shownStatus} /></td>
                      <td>
                        <div className="flex items-center justify-end gap-1">
                          <Button asChild variant="ghost" size="icon" title="View reporting" aria-label={`View reporting for ${campaign.name}`}>
                            <Link href={`/admin/ads/${campaign.id}/analytics`}><BarChart3 className="size-4" /></Link>
                          </Button>
                          <Button asChild variant="ghost" size="icon" title="Edit and preview" aria-label={`Edit ${campaign.name}`}>
                            <Link href={`/admin/ads/${campaign.id}`}><Pencil className="size-4" /></Link>
                          </Button>
                          <Button variant="ghost" size="icon" disabled={busy} onClick={() => runAction(campaign, "duplicate")} title="Duplicate as a draft" aria-label={`Duplicate ${campaign.name}`}>
                            <Copy className="size-4" />
                          </Button>
                          {shownStatus === "ACTIVE" || shownStatus === "SCHEDULED" ? (
                            <Button variant="ghost" size="icon" disabled={busy} onClick={() => runAction(campaign, "pause")} title="Pause" aria-label={`Pause ${campaign.name}`}>
                              <CirclePause className="size-4" />
                            </Button>
                          ) : campaign.status === "PAUSED" ? (
                            <Button variant="ghost" size="icon" disabled={busy} onClick={() => runAction(campaign, "resume")} title="Resume" aria-label={`Resume ${campaign.name}`}>
                              <CirclePlay className="size-4" />
                            </Button>
                          ) : null}
                          {campaign.status === "DRAFT" && !campaign.hasMetrics ? (
                            <Button variant="ghost" size="icon" disabled={busy} onClick={() => runAction(campaign, "delete")} title="Delete draft" aria-label={`Delete draft ${campaign.name}`} className="text-red-600 hover:text-red-700">
                              <Trash2 className="size-4" />
                            </Button>
                          ) : campaign.status !== "ARCHIVED" ? (
                            <Button variant="ghost" size="icon" disabled={busy} onClick={() => runAction(campaign, "archive")} title="Archive" aria-label={`Archive ${campaign.name}`} className="text-red-600 hover:text-red-700">
                              <Archive className="size-4" />
                            </Button>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
