"use client";

import { BlogCard } from "@/components/blogPage/BlogCard";
import { Button } from "@/components/ui/button";
import { getAllBlogsApi } from "@/lib/apiCalls/client/blogs";
import React, { useState, useEffect } from "react";

export const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const BLOGS_PER_PAGE = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogs = await getAllBlogsApi();
        setAllBlogs(blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setAllBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    // Simulate a small delay for better UX
    setTimeout(() => {
      setVisibleCount(prev => prev + BLOGS_PER_PAGE);
      setLoadingMore(false);
    }, 300);
  };

  const visibleBlogs = allBlogs.slice(0, visibleCount);
  const hasMoreBlogs = visibleCount < allBlogs.length;

  if (loading) {
    return (
      <section id="blogs">
        <h1 className="font-syne text-primary text-center mb-8">Types Of Orthopaedic Surgeons</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Loading skeleton */}
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-300 h-48 rounded-lg mb-4"></div>
              <div className="bg-gray-300 h-4 rounded mb-2"></div>
              <div className="bg-gray-300 h-4 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="blogs">
      <h1 className="font-syne text-primary text-center mb-8">Types Of Orthopaedic Surgeons</h1>
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
