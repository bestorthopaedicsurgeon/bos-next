import { Blogs } from "@/components/blogPage/Blogs";
import { HeroSection } from "@/components/blogPage/Hero";
import React from "react";

const BlogPage = () => {
  return (
    <div className="container">
      <HeroSection />
      <Blogs />
    </div>
  );
};

export default BlogPage;
