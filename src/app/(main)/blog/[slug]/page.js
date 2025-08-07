import ProfileHeader from "@/components/reusable/profileHeader";
import { getBlogBySlugApi } from "@/lib/apiCalls/server/blogs";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";

export async function generateMetadata({ params }) {
  return {
    title: `Read Blog: ${params.slug}`,
  };
}

const Page = async ({ params }) => {
  const { slug } = params;
  const response = await getBlogBySlugApi(slug);
  const blog = response?.data;

  if (!blog) {
    return <div className="container">Blog not found.</div>;
  }

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
    <div className="container">
      <ProfileHeader heading={"Read Blog"} step1={"blog"} step2={slug} />
      
      {/* Blog Title */}
      <div className="mb-8 max-w-4xl">
        <h1 className="font-syne text-primary text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          {blog.title}
        </h1>
      </div>

      {/* Hero Image */}
      {blog?.image && (
        <div
          className="mb-8 h-[300px] w-full rounded-xl bg-contain bg-center bg-no-repeat sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
          style={{
            backgroundImage: `url(${blog?.image}?v=${Date.now()})`,
          }}
          role="img"
          aria-label={blog.title}
        />
      )}

      {/* Author and Date Section */}
      <div className="mb-8 flex items-center gap-4 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
        <Image
          src="/profile.png"
          width={60}
          height={60}
          alt="profile"
          className="h-14 w-14 rounded-full border-2 border-primary/20"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {blog.authorName || "Author"}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Published on {formatDate(blog.createdAt)}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <article className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:font-syne prose-a:text-primary prose-strong:text-gray-900 dark:prose-invert dark:prose-headings:text-primary dark:prose-a:text-primary">
        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </article>
    </div>
  );
};

export default Page;
