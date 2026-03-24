"use client";

import { useRef, useEffect } from "react";
import { HeroSection } from "./Hero";
import { Blogs } from "./Blogs";

export const BlogPageWrapper = () => {
  const heroRef = useRef(null);

  // When landing with ?scroll=section: scroll to hero height + 100, then clean URL
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("scroll") !== "section") return;

    const scrollToPosition = () => {
      const heroHeight = (heroRef.current?.offsetHeight ?? 0) + 300;
      window.scrollTo({ top: heroHeight, behavior: "smooth" });
    };
    const cleanUrl = () => {
      window.history.replaceState({}, "", "/blog");
    };

    const t = setTimeout(() => {
      scrollToPosition();
      cleanUrl();
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <Blogs />
    </>
  );
};
