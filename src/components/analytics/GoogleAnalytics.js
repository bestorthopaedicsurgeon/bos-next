"use client";

import Script from "next/script";
import { useEffect } from "react";
import { GA_ID, LIVE_HOST, track } from "@/lib/analytics";

// Loads Google Analytics on the live domain only. Page views, including
// client side navigation, come from GA4 enhanced measurement.
export default function GoogleAnalytics() {
  // One listener covers phone and email links on every page, plus any element
  // marked with data-track="event_name" (and optional data-track-label).
  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest?.("[data-track], a[href^='tel:'], a[href^='mailto:']");
      if (!el) return;
      const page_path = window.location.pathname;
      if (el.dataset.track) {
        track(el.dataset.track, {
          page_path,
          ...(el.dataset.trackLabel ? { label: el.dataset.trackLabel } : {}),
        });
        return;
      }
      const href = el.getAttribute("href") || "";
      track(href.startsWith("tel:") ? "phone_click" : "email_click", { page_path });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <Script id="ga4" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
window.gtag = function () { window.dataLayer.push(arguments); };
if (${LIVE_HOST}.test(window.location.hostname)) {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=${GA_ID}";
  document.head.appendChild(s);
  gtag("js", new Date());
  gtag("config", "${GA_ID}");
}`}
    </Script>
  );
}
