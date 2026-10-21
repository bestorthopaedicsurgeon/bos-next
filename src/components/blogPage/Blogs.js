"use client";

import { BlogCard } from "@/components/blogPage/BlogCard";

export const Blogs = ({ initialBlogs = [] }) => {
  if (!initialBlogs || initialBlogs.length === 0) {
    return (
      <section id="blogs">
        <h2 className="as-h1 font-syne text-primary mb-8 text-center">
          Western Australia Orthopaedic Surgeon Insights
        </h2>
        <div className="py-8 text-center text-gray-500">
          No blog posts available yet. Check back soon!
        </div>
      </section>
    );
  }

  return (
    <section id="blogs">
      <h2 className="as-h1 font-syne text-primary mb-8 text-center">
        Western Australia Orthopaedic Surgeon Insights
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {initialBlogs.map((card, index) => (
          <BlogCard key={card.id || index} {...card} />
        ))}
      </div>
    </section>
  );
};
