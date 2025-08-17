"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { format } from "date-fns";

export const BlogCard = (card) => {
  // Format the date from API
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    try {
      return format(new Date(dateString), "MMMM dd, yyyy");
    } catch (error) {
      return "Date not available";
    }
  };

  return (
    <div className="flex flex-col items-start rounded-lg border bg-white">
      {card?.image && (
        <div
          className="mb-4 h-[200px] w-full rounded-t-lg bg-cover bg-center bg-no-repeat sm:h-[220px] md:h-[240px]"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
          role="img"
          aria-label={card.title}
        />
      )}
      <h3 className="text-primary p-5">{card.title}</h3>
      <p className="mb-4 text-sm text-[#515151] px-5">
        {formatDate(card.createdAt)} • 11 min read
      </p>
      <Link
          // onClick={() => {
          //   redirect(`/blog/${card.slug}`);
          // }}
        href={`/blog/${card.slug}`}
        className="text-primary cursor-pointer text-lg font-bold px-5 pb-10"
        target="_blank"

      >
        Read More →
      </Link>
    </div>
  );
};
