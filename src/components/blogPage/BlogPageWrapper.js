"use client";

import { useRef, useEffect } from "react";
import { HeroSection } from "./Hero";
import { Blogs } from "./Blogs";

export const BlogPageWrapper = ({ initialBlogs = [] }) => {
  const heroRef = useRef(null);
  const blogsRef = useRef(null);

  // When landing: check sessionStorage or URL params (backward compat) and scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const urlScroll = params.get("scroll");
    // Read but do NOT consume sessionStorage here — React Strict Mode in dev
    // double-invokes effects, and consuming it on the first pass left nothing
    // for the second pass. We remove it inside the timeout, after the scroll.
    const scroll = urlScroll || sessionStorage.getItem("scroll_to_surgeons");

    if (scroll !== "section") return;

    const t = setTimeout(() => {
      blogsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      // Consume the flag only after the scroll has run.
      sessionStorage.removeItem("scroll_to_surgeons");
      // Clean up URL if it came from query parameter
      if (urlScroll) {
        window.history.replaceState({}, "", "/blog");
      }
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={blogsRef}>
        <Blogs initialBlogs={initialBlogs} />
      </div>
    </>
  );
};
