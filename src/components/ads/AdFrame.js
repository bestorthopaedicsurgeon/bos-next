"use client";

import Link from "next/link";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Keep the disclosure visible without adding a separate header or footer to
// the creative. The media itself remains the ad and its click target.
export default function AdFrame({ creative, children, className }) {
  return (
    <aside
      className={cn(
        "not-prose relative isolate overflow-hidden rounded-lg bg-transparent",
        className,
      )}
      aria-label={`Sponsored advertisement from ${creative.advertiserName}`}
    >
      <span className="bg-primary/90 font-dm-sans pointer-events-none absolute top-1 left-1 z-30 rounded-sm px-1.5 py-0.5 text-[7px] leading-none font-semibold text-white uppercase shadow-sm sm:text-[8px]">
        Sponsored
      </span>
      <Link
        href="/advertising-policy"
        title="About our ads"
        aria-label="About our ads"
        className="bg-primary/90 hover:bg-primary absolute top-1 right-1 z-30 grid size-5 place-items-center rounded-full text-white shadow-sm transition focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
      >
        <Info aria-hidden="true" className="size-3" strokeWidth={2.25} />
        <span className="sr-only">About our ads</span>
      </Link>

      {children}
    </aside>
  );
}
