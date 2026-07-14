import { BlogPageWrapper } from "@/components/blogPage/BlogPageWrapper";
import { getAllBlogs } from "@/lib/data/publicData";
import React from "react";

// Prerendered with hourly refresh; blog mutations revalidate this page
// directly via revalidateBlogContent().
export const revalidate = 3600;

export const metadata = {
  title: "Orthopaedic Blogs & Health Tips",
  description:
    "Read expert orthopaedic blogs covering surgical procedures, recovery tips, and health insights from top orthopaedic surgeons across Western Australia.",
  alternates: { canonical: "/blog" },
};

const BlogPage = async () => {
  const blogs = (await getAllBlogs()) || [];

  return (
    <div className="container">
      <BlogPageWrapper initialBlogs={blogs} />
    </div>
  );
};

export default BlogPage;
