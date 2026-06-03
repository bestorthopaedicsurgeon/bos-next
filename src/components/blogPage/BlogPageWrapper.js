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
    let scroll = params.get("scroll");

    if (!scroll) {
      scroll = sessionStorage.getItem("scroll_to_surgeons");
      if (scroll) {
        sessionStorage.removeItem("scroll_to_surgeons");
      }
    }

    if (scroll !== "section") return;

    const t = setTimeout(() => {
      blogsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      // Clean up URL if it came from query parameter
      if (params.get("scroll")) {
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
