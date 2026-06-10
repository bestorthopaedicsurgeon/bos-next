"use client";
import { useEffect } from "react";

// On the doctor profile page: if the visitor arrived via a "Write a Review"
// button (sessionStorage flag) or ?review=1, scroll to the review section.
// StrictMode-safe: the flag is only cleared inside the timeout, after the
// scroll runs, so dev's double-invoked effect still works.
export default function ReviewScroller() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const urlReview = params.get("review") === "1";
    const wants =
      urlReview || sessionStorage.getItem("scroll_to_review") === "1";
    if (!wants) return;

    const t = setTimeout(() => {
      const el = document.getElementById("write-review");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      sessionStorage.removeItem("scroll_to_review");
      if (urlReview) {
        window.history.replaceState({}, "", window.location.pathname);
      }
    }, 300);

    return () => clearTimeout(t);
  }, []);

  return null;
}
