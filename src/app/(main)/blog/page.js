import { BlogPageWrapper } from "@/components/blogPage/BlogPageWrapper";
import { getAllBlogsApi } from "@/lib/apiCalls/server/blogs";
import React from "react";

export const metadata = {
  title: "Orthopaedic Blogs & Health Tips",
  description:
    "Read expert orthopaedic blogs covering surgical procedures, recovery tips, and health insights from top orthopaedic surgeons across Western Australia.",
  alternates: { canonical: "/blog" },
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
