import { BlogPageWrapper } from "@/components/blogPage/BlogPageWrapper";
import { getAllBlogsApi } from "@/lib/apiCalls/server/blogs";
import React from "react";

export const metadata = {
  title: "Orthopaedic Blogs & Health Tips | Best Orthopaedic Surgeon",
  description:
    "Read expert orthopaedic blogs covering surgical procedures, recovery tips, and health insights from top orthopaedic surgeons across Western Australia.",
};

const BlogPage = async () => {
  const blogsResponse = await getAllBlogsApi();
  const blogs = blogsResponse?.data || [];

  return (
    <div className="container">
      <BlogPageWrapper initialBlogs={blogs} />
    </div>
  );
};

export default BlogPage;
