"use client";
import { useState, useRef, useEffect } from "react";
import { HeroSection } from "./Hero";
import { AllSurgeons } from "./AllSurgeons";

export const SearchableSurgeonsWrapper = () => {
  const [searchParams, setSearchParams] = useState({
    name: "",
    subspecialty: "",
    location: "",
  });
  const heroRef = useRef(null);

  // When landing with ?scroll=section (+100) or ?scroll=section_high (-100): scroll then clean URL
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const scroll = params.get("scroll");
    if (scroll !== "section" && scroll !== "section_high") return;

    const baseHeight = heroRef.current?.offsetHeight ?? 0;
    const offset = scroll === "section" ? 100 : -180;
    const scrollTop = Math.max(0, baseHeight + offset);

    const scrollToPosition = () => {
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    };
    const cleanUrl = () => {
      window.history.replaceState({}, "", "/surgeons");
    };

    const t = setTimeout(() => {
      scrollToPosition();
      cleanUrl();
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div >
        <HeroSection
          onSearch={(params) => setSearchParams(params)}
        />
      </div>
      <div ref={heroRef}>
        <AllSurgeons
          searchParams={searchParams}
        />
      </div>
    </>
  );
};