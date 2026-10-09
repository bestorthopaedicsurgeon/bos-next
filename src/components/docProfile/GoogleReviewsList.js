"use client";

import { useState } from "react";
import { GoogleG, Stars } from "./googleReviewParts";

const INITIAL = 6; // cards visible before "Show all"
const LONG = 320; // characters before a review is clamped behind "Read more"

function ReviewCard({ review, hidden }) {
  const [open, setOpen] = useState(false);
  const long = review.text.length > LONG;
  return (
    <li className={`${hidden ? "hidden" : "flex"} h-full flex-col rounded-lg bg-white p-6 shadow-sm`}>
      <div className="flex items-start gap-3">
        <span
          aria-hidden="true"
          className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[16px] font-[600] text-white uppercase"
        >
          {review.author.trim().charAt(0)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-[600] text-[#232323]">{review.author}</p>
          <p className="text-[13px] text-[#737373]">{review.age}</p>
        </div>
        <span title="Posted on Google" className="mt-1">
          <GoogleG className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Stars rating={review.rating} />
        {review.source && (
          <span className="text-[12px] text-[#737373]">
            on{" "}
            <a href={review.source.url} target="_blank" rel="noopener noreferrer" className="text-primary text-[12px] underline underline-offset-2">
              {review.source.name}
            </a>
          </span>
        )}
      </div>
      <p
        className={`mt-3 text-[14px] leading-relaxed font-[500] whitespace-pre-line text-[#3a3a3a] ${long && !open ? "line-clamp-6" : ""}`}
      >
        {review.text}
      </p>
      {long && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-primary mt-2 self-start text-[13px] font-[600] hover:underline"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
    </li>
  );
}

// Every review is in the HTML from the server; extra cards are only hidden
// until "Show all" is pressed.
export default function GoogleReviewsList({ items }) {
  const [all, setAll] = useState(false);
  return (
    <>
      <ul className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((review, i) => (
          <ReviewCard key={review.id} review={review} hidden={!all && i >= INITIAL} />
        ))}
      </ul>
      {items.length > INITIAL && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setAll((v) => !v)}
            aria-expanded={all}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary bg-white px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            {all ? "Show fewer reviews" : `Show all ${items.length} Google reviews`}
          </button>
        </div>
      )}
    </>
  );
}
