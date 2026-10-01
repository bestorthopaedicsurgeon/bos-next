// Google Analytics 4 (property "bestorthopaedicsurgeon.com.au", account
// "Best Orthopaedic Surgeon", owned by support@bestorthopaedicsurgeon.com.au).
export const GA_ID = "G-4YFE1E58K0";

// Only the live site reports. Local and Vercel preview builds still record
// events in window.dataLayer, which is handy for testing, but never send them.
export const LIVE_HOST = /(^|\.)bestorthopaedicsurgeon\.com\.au$/;

// Sends a GA4 event. Safe to call anywhere: it does nothing on the server or
// before the tag has loaded, and never throws into the calling code.
export function track(event, params = {}) {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", event, params);
    }
  } catch {
    // Analytics must never break the page.
  }
}
