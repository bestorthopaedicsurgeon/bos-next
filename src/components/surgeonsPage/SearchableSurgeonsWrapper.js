"use client";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HeroSection } from "./Hero";
import { AllSurgeons } from "./AllSurgeons";

export const SearchableSurgeonsWrapper = () => {
  const searchParamsHook = useSearchParams();
  const lastSyncedUrl = useRef("");
  const [searchParams, setSearchParams] = useState({
    name: searchParamsHook.get('name') || "",
    subspecialty: searchParamsHook.get('subspecialty') || "",
    location: searchParamsHook.get('location') || "",
  });

  // Keep local state in sync if URL changes outside this component (e.g. homepage search redirect)
  useEffect(() => {
    const currentUrlParams = searchParamsHook.toString();
    if (currentUrlParams === lastSyncedUrl.current) return;
    
    lastSyncedUrl.current = currentUrlParams;

    setSearchParams({
      name: searchParamsHook.get('name') || "",
      subspecialty: searchParamsHook.get('subspecialty') || "",
      location: searchParamsHook.get('location') || "",
    });
  }, [searchParamsHook]);
  const heroRef = useRef(null);
  const surgeonsRef = useRef(null);

  // When landing: check sessionStorage or URL params (for backward compatibility) and scroll
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const urlScroll = params.get("scroll");
    // Read but do NOT consume sessionStorage here. React Strict Mode in dev
    // double-invokes effects (setup -> cleanup -> setup); removing the value on
    // the first pass left nothing for the second pass, so the scroll never
    // fired in dev. We remove it inside the timeout, after the scroll runs.
    const scroll = urlScroll || sessionStorage.getItem("scroll_to_surgeons");

    if (scroll !== "section" && scroll !== "section_high") return;

    const t = setTimeout(() => {
      if (scroll === "section") {
        surgeonsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (scroll === "section_high") {
        const searchForm = heroRef.current?.querySelector("form") || heroRef.current?.querySelector(".rounded-4xl.bg-white");
        if (searchForm) {
          searchForm.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      // Consume the flag only after the scroll has run.
      sessionStorage.removeItem("scroll_to_surgeons");
      // Clean up URL if it came from query parameter
      if (urlScroll) {
        window.history.replaceState({}, "", "/surgeons");
      }
    }, 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div ref={heroRef}>
        <HeroSection
          onSearch={(params) => setSearchParams(params)}
          initialParams={searchParams}
        />
      </div>
      <div ref={surgeonsRef}>
        <AllSurgeons
          searchParams={searchParams}
        />
      </div>
    </>
  );
};