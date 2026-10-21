"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BarChart3, Download, Eye, MousePointerClick, Play, Trophy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdStatusBadge from "@/components/admin/ads/AdStatusBadge";
import { getPlacementLabel } from "@/lib/ads/placements";
import { downloadCsv } from "@/components/admin/ads/csv";

const number = (value) => new Intl.NumberFormat("en-AU").format(value || 0);
const date = (value) =>
  new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Perth",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
const percent = (part, whole) => (whole ? Number(((part / whole) * 100).toFixed(2)) : 0);
// Metric rows are stored per Perth calendar day as YYYY-MM-DD.
const dayOf = (value) => String(value).slice(0, 10);

export default function AdAnalytics({ campaignId }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/admin/ads/${campaignId}/analytics`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Unable to load reporting.");
        return result.data;
      })
      .then(setData)
      .catch((error) => {
        if (error.name !== "AbortError") toast.error(error.message);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [campaignId]);

  const rows = useMemo(() => {
    if (!data) return [];
    return data.daily.filter((row) => {
      const day = dayOf(row.date);
      return (!from || day >= from) && (!to || day <= to);
    });
  }, [data, from, to]);

  const totals = useMemo(() => {
    const sum = { impressions: 0, clicks: 0, videoStarts: 0, videoCompletes: 0 };
    for (const row of rows) {
      sum.impressions += row.impressions;
      sum.clicks += row.clicks;
      sum.videoStarts += row.videoStarts;
      sum.videoCompletes += row.videoCompletes;
    }
    return {
      ...sum,
      ctr: percent(sum.clicks, sum.impressions),
      completionRate: percent(sum.videoCompletes, sum.videoStarts),
    };
  }, [rows]);

  const placementTotals = useMemo(() => {
    const map = new Map();
    for (const row of rows) {
      const current = map.get(row.placementKey) || {
        placementKey: row.placementKey,
        impressions: 0,
        clicks: 0,
        videoStarts: 0,
        videoCompletes: 0,
      };
      current.impressions += row.impressions;
      current.clicks += row.clicks;
      current.videoStarts += row.videoStarts;
      current.videoCompletes += row.videoCompletes;
      map.set(row.placementKey, current);
    }
    return [...map.values()].sort((a, b) => b.impressions - a.impressions);
  }, [rows]);

  if (loading) {
    return <div className="grid min-h-80 place-items-center font-dm-sans text-sm text-neutral-500">Loading reporting...</div>;
  }
  if (!data) return null;

  const exportCsv = () => {
    downloadCsv(
      `${data.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-daily-${from || "start"}-to-${to || "today"}.csv`,
      ["Date (Perth)", "Position", "Impressions", "Clicks", "CTR %", "Video starts", "Video completions"],
      [...rows].reverse().map((row) => [
        dayOf(row.date),
        getPlacementLabel(row.placementKey),
        row.impressions,
        row.clicks,
        percent(row.clicks, row.impressions),
        row.videoStarts,
        row.videoCompletes,
      ]),
    );
  };

  const cards = [
    { label: "Impressions", value: number(totals.impressions), icon: Eye },
    { label: "Clicks", value: number(totals.clicks), icon: MousePointerClick },
    { label: "Click through rate", value: `${totals.ctr}%`, icon: Trophy },
    {
      label: data.mediaType === "VIDEO" ? "Video starts" : "Video engagement",
      value: data.mediaType === "VIDEO" ? number(totals.videoStarts) : "Not applicable",
      icon: Play,
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      <div>
        <Button asChild variant="ghost" size="sm" className="mb-2 -ml-3 text-neutral-600">
          <Link href="/admin/ads"><ArrowLeft className="size-4" /> Advertising</Link>
        </Button>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-syne text-3xl font-bold text-neutral-900">{data.name}</h1>
            <p className="mt-2 font-dm-sans text-sm text-neutral-600">{data.advertiserName} · Aggregate first party reporting</p>
          </div>
          <AdStatusBadge status={data.status} />
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-sm sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="space-y-1">
            <span className="block font-dm-sans text-xs font-semibold text-neutral-600">From (Perth)</span>
            <Input type="date" value={from} max={to || undefined} onChange={(event) => setFrom(event.target.value)} className="h-10 font-dm-sans text-sm" />
          </label>
          <label className="space-y-1">
            <span className="block font-dm-sans text-xs font-semibold text-neutral-600">To (Perth)</span>
            <Input type="date" value={to} min={from || undefined} onChange={(event) => setTo(event.target.value)} className="h-10 font-dm-sans text-sm" />
          </label>
          {(from || to) && (
            <Button type="button" variant="ghost" className="h-10 text-neutral-600" onClick={() => { setFrom(""); setTo(""); }}>
              Show all time
            </Button>
          )}
        </div>
        <Button type="button" variant="outline" className="h-10" onClick={exportCsv} disabled={!rows.length}>
          <Download className="size-4" /> Export CSV
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-lg border border-primary/15 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between"><span className="font-dm-sans text-sm text-neutral-600">{label}</span><span className="grid size-9 place-items-center rounded-md bg-primary/10 text-primary"><Icon className="size-4" /></span></div>
            <p className="font-syne text-2xl font-bold text-neutral-900">{value}</p>
          </div>
        ))}
      </div>

      {data.mediaType === "VIDEO" && (
        <div className="rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <p className="font-syne text-lg font-semibold text-neutral-900">Video completion rate</p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-100"><div className="h-full rounded-full bg-primary" style={{ width: `${Math.min(100, totals.completionRate)}%` }} /></div>
          <p className="mt-2 font-dm-sans text-sm text-neutral-600">{totals.completionRate}% · {number(totals.videoCompletes)} completed plays</p>
        </div>
      )}

      <section className="rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="border-b border-neutral-200 p-5"><h2 className="font-syne text-xl font-semibold text-neutral-900">Performance by position</h2><p className="mt-1 font-dm-sans text-sm text-neutral-500">No visitor identities, search terms or health information are collected.</p></div>
        <div className="overflow-x-auto">
          <table className="!m-0 !rounded-none !border-0 !shadow-none">
            <thead><tr><th>Position</th><th>Impressions</th><th>Clicks</th><th>CTR</th><th>Video starts</th></tr></thead>
            <tbody>
              {placementTotals.length ? placementTotals.map((row) => (
                <tr key={row.placementKey}>
                  <td className="font-medium">{getPlacementLabel(row.placementKey)}</td>
                  <td>{number(row.impressions)}</td>
                  <td>{number(row.clicks)}</td>
                  <td>{percent(row.clicks, row.impressions).toFixed(2)}%</td>
                  <td>{number(row.videoStarts)}</td>
                </tr>
              )) : <tr><td colSpan={5} className="py-12 text-center text-neutral-500">No delivery data for this period.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-neutral-200 p-5"><BarChart3 className="size-5 text-primary" /><div><h2 className="font-syne text-xl font-semibold text-neutral-900">Daily activity</h2><p className="font-dm-sans text-sm text-neutral-500">Days are counted in Perth time.</p></div></div>
        <div className="overflow-x-auto">
          <table className="!m-0 !rounded-none !border-0 !shadow-none">
            <thead><tr><th>Date</th><th>Position</th><th>Impressions</th><th>Clicks</th><th>Starts</th><th>Completions</th></tr></thead>
            <tbody>
              {rows.length ? [...rows].reverse().map((row) => (
                <tr key={row.id}><td>{date(row.date)}</td><td>{getPlacementLabel(row.placementKey)}</td><td>{number(row.impressions)}</td><td>{number(row.clicks)}</td><td>{number(row.videoStarts)}</td><td>{number(row.videoCompletes)}</td></tr>
              )) : <tr><td colSpan={6} className="py-12 text-center text-neutral-500">{data.daily.length ? "No activity in this period." : "Reporting begins after the first eligible view."}</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
