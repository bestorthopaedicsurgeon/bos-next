"use client";

import { BlogCard } from "@/components/blogPage/BlogCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export const Blogs = ({ initialBlogs = [] }) => {
  const [allBlogs] = useState(initialBlogs);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    // Simulate a small delay for better UX
    setTimeout(() => {
      // Load all remaining blogs at once
      setVisibleCount(allBlogs.length);
      setLoadingMore(false);
    }, 300);
  };

  const visibleBlogs = allBlogs.slice(0, visibleCount);
  const hasMoreBlogs = visibleCount < allBlogs.length;

  if (!allBlogs || allBlogs.length === 0) {
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
        {visibleBlogs.map((card, index) => (
          <BlogCard key={card.id || index} {...card} />
        ))}
      </div>
      {hasMoreBlogs && (
        <Button 
          className="mt-8 mb-20 mx-auto block" 
          variant="primary" 
          size="primary"
          onClick={handleLoadMore}
          disabled={loadingMore}
        >
          {loadingMore ? "Loading..." : "Load More Blogs"}
        </Button>
      )}
    </section>
  );
};
