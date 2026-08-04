"use client";

import { BlogCard } from "@/components/blogPage/BlogCard";
import React from "react";

export const Blogs = ({ initialBlogs = [] }) => {
  if (!initialBlogs || initialBlogs.length === 0) {
    return (
      <section id="blogs">
        <h1 className="font-syne text-primary text-center mb-8">Western Australia Orthopaedic Surgeon Insights</h1>
        <div className="text-center text-gray-500 py-8">
          No blog posts available yet. Check back soon!
        </div>
      </section>
    );
  }

  return (
    <section id="blogs">
      <h1 className="font-syne text-primary text-center mb-8">Western Australia Orthopaedic Surgeon Insights</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {initialBlogs.map((card, index) => (
          <BlogCard key={card.id || index} {...card} />
        ))}
      </div>
    </section>
  );
};
