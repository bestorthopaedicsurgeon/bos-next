"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import ImageAd from "@/components/ads/ImageAd";
import VideoAd from "@/components/ads/VideoAd";
import {
  SITE_WIDE_PLACEMENT_KEY,
  allowsSiteWideAd,
} from "@/lib/ads/placements";
import { cn } from "@/lib/utils";

function sendMetric(creative, eventType) {
  if (!creative?.id || !creative?.placementKey) return;
  const body = JSON.stringify({
    campaignId: creative.id,
    placementKey: creative.placementKey,
    eventType,
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/ads/impression",
      new Blob([body], { type: "application/json" }),
    );
    return;
  }

  fetch("/api/ads/impression", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

function AdUnit({ creative, preview }) {
  const wrapperRef = useRef(null);
  const impressionSent = useRef(Boolean(preview));
  const videoStarted = useRef(false);
  const videoCompleted = useRef(false);

  // One impression per campaign and page view, once at least half of that
  // individual creative has been visible for a continuous second.
  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || preview || impressionSent.current) return;

    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          timer = window.setTimeout(() => {
            if (impressionSent.current) return;
            impressionSent.current = true;
            sendMetric(creative, "impression");
            observer.disconnect();
          }, 1000);
        }
      },
      { threshold: [0, 0.5, 1] },
    );
    observer.observe(element);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [creative, preview]);

  return (
    <div ref={wrapperRef} className="min-w-0" data-ad-campaign-id={creative.id}>
      {creative.mediaType === "VIDEO" ? (
        <VideoAd
          creative={creative}
          onVideoStart={() => {
            if (preview || videoStarted.current) return;
            videoStarted.current = true;
            sendMetric(creative, "videoStart");
          }}
          onVideoComplete={() => {
            if (preview || videoCompleted.current) return;
            videoCompleted.current = true;
            sendMetric(creative, "videoComplete");
          }}
        />
      ) : (
        <ImageAd creative={creative} />
      )}
    </div>
  );
}

// A first party ad position. The page renders without it; after hydration it
// asks /api/ads/serve for up to two eligible campaigns and renders nothing at
// all when there are none. `className` carries the slot's spacing so an empty
// slot leaves the layout exactly as it was.
export default function AdSlot({
  placement,
  context = {},
  className,
  previewCreative = null,
}) {
  const pathname = usePathname();
  const blocked =
    placement === SITE_WIDE_PLACEMENT_KEY && !allowsSiteWideAd(pathname);
  const [creatives, setCreatives] = useState(
    previewCreative ? [previewCreative] : [],
  );
  const contextKey = useMemo(() => JSON.stringify(context || {}), [context]);

  useEffect(() => {
    if (previewCreative) {
      setCreatives([previewCreative]);
      return;
    }
    if (blocked) {
      setCreatives([]);
      return;
    }

    const controller = new AbortController();
    const query = new URLSearchParams({ placement });
    for (const [key, value] of Object.entries(JSON.parse(contextKey))) {
      if (value) query.set(key, String(value));
    }

    fetch(`/api/ads/serve?${query.toString()}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (response) => {
        if (response.status === 204) return null;
        if (!response.ok) throw new Error("Unable to load advertisement");
        const result = await response.json();
        if (Array.isArray(result?.data)) return result.data;
        // Accept the earlier single-creative response during a rolling deploy.
        return result?.data ? [result.data] : [];
      })
      .then((data) => {
        setCreatives(data.slice(0, 2));
      })
      .catch((error) => {
        if (error.name !== "AbortError") setCreatives([]);
      });

    return () => controller.abort();
    // `pathname` is listed so the footer slot, which lives in the shared layout
    // and stays mounted across client navigation, asks again on every page view.
  }, [placement, contextKey, previewCreative, blocked, pathname]);

  if (!creatives.length) return null;

  return (
    <div
      className={cn("w-full", className)}
      data-ad-placement={placement}
      data-ad-count={creatives.length}
    >
      <div
        className={cn(
          "grid grid-cols-1 gap-3 sm:gap-4",
          creatives.length > 1 && "md:grid-cols-2",
        )}
      >
        {creatives.map((creative) => (
          <AdUnit
            key={creative.id}
            creative={creative}
            preview={Boolean(previewCreative)}
          />
        ))}
      </div>
    </div>
  );
}
