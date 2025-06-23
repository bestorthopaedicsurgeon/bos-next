import Image from "next/image";
import React from "react";

export const BlogCard = (card) => {
  return (
    <div className="flex flex-col items-start rounded-lg border bg-white p-10">
      <Image
        src={"/blog/blog-preview.png"}
        alt={card.title}
        width={343}
        height={220}
        className="mb-4 rounded-lg"
      />
      <h3 className="text-primary">{card.title}</h3>
      <p className="mb-4 text-sm text-[#515151]">
        April 14, 2025 • 11 min read
      </p>
      <p className="mb-4 line-clamp-3">{card.description}</p>
      <button className="text-primary text-lg font-bold cursor-pointer">Read More →</button>
    </div>
  );
};
