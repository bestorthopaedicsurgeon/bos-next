"use client";

import { useEffect, useMemo, useState } from "react";
import { Monitor, Smartphone } from "lucide-react";
import AdSlot from "@/components/ads/AdSlot";

function useObjectUrl(file) {
  return useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
}

const VIEWS = [
  { key: "desktop", label: "Desktop", icon: Monitor },
  { key: "mobile", label: "Mobile", icon: Smartphone },
];

// The real public ad component, fed with the form's current values. Mobile
// view renders at phone width with the mobile image when one is provided.
export default function AdPreview({ form, files, mediaUrls }) {
  const [view, setView] = useState("desktop");
  const desktopUrl = useObjectUrl(files.desktopImage);
  const mobileUrl = useObjectUrl(files.mobileImage);
  const videoUrl = useObjectUrl(files.video);
  const posterUrl = useObjectUrl(files.poster);
  const captionsUrl = useObjectUrl(files.captions);

  useEffect(
    () => () => {
      [desktopUrl, mobileUrl, videoUrl, posterUrl, captionsUrl]
        .filter(Boolean)
        .forEach((url) => URL.revokeObjectURL(url));
    }, [desktopUrl, mobileUrl, videoUrl, posterUrl, captionsUrl],
  );

  const desktopImage = desktopUrl || mediaUrls.desktopImage;
  const mobileImage = mobileUrl || mediaUrls.mobileImage;

  const creative = {
    id: "preview",
    placementKey: "PREVIEW",
    mediaType: form.mediaType,
    advertiserName: form.advertiserName || "Advertiser name",
    destinationHost: (() => {
      try {
        return new URL(form.destinationUrl).hostname.replace(/^www\./, "");
      } catch {
        return "advertiser.com.au";
      }
    })(),
    altText: form.altText || "Advertisement preview",
    ctaLabel: form.ctaLabel || "Learn more",
    loopVideo: form.loopVideo,
    // In mobile view the phone image is shown directly, whatever the window size.
    desktopImageUrl: view === "mobile" ? mobileImage || desktopImage : desktopImage,
    mobileImageUrl: view === "mobile" ? null : mobileImage || null,
    videoUrl: videoUrl || mediaUrls.video || null,
    posterUrl: posterUrl || mediaUrls.poster || null,
    captionsUrl: captionsUrl || mediaUrls.captions || null,
    clickUrl: "#",
  };

  const canPreview =
    form.mediaType === "IMAGE" ? Boolean(desktopImage) : Boolean(videoUrl || mediaUrls.video);

  return (
    <div className="rounded-lg border border-primary/20 bg-[#f7faf9] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-syne text-lg font-semibold text-neutral-800">Live preview</h3>
          <p className="mt-1 font-dm-sans text-sm text-neutral-600">
            The same component visitors will see.
          </p>
        </div>
        <div className="inline-flex rounded-md border border-neutral-200 bg-white p-0.5" role="group" aria-label="Preview size">
          {VIEWS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              aria-pressed={view === key}
              onClick={() => setView(key)}
              className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 font-dm-sans text-xs font-semibold transition ${
                view === key ? "bg-primary text-primary-foreground" : "text-neutral-600 hover:text-primary"
              }`}
            >
              <Icon aria-hidden="true" className="size-3.5" /> {label}
            </button>
          ))}
        </div>
      </div>
      {canPreview ? (
        <div className={view === "mobile" ? "mx-auto w-full max-w-[360px]" : "w-full"}>
          <div className="[&_a]:pointer-events-none">
            <AdSlot key={view} placement="PREVIEW" previewCreative={creative} />
          </div>
          {view === "mobile" && form.mediaType === "IMAGE" && !mobileImage && (
            <p className="mt-3 font-dm-sans text-xs text-neutral-500">
              No mobile image yet, so phones will show the desktop image scaled down.
            </p>
          )}
        </div>
      ) : (
        <div className="grid min-h-44 place-items-center rounded-lg border border-dashed border-primary/30 bg-white px-6 text-center">
          <p className="font-dm-sans text-sm text-neutral-500">
            Add the required creative to see the preview.
          </p>
        </div>
      )}
    </div>
  );
}
