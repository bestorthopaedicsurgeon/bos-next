import ProfileHeader from "@/components/reusable/profileHeader";
import { getBlogBySlugApi } from "@/lib/apiCalls/server/blogs";
import Image from "next/image";
import React from "react";

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

  return (
    <div className="container">
      <ProfileHeader heading={"Read Blog"} step1={"blog"} step2={slug} />
      <h1 className="font-syne text-primary my-20">{blog.title}</h1>

      <Image
        src={blog.image + `?v=${Date.now()}`}
        width={1000}
        height={1000}
        alt="blog"
        className="w-full"
      />

      <div className="my-4 flex items-center gap-4">
        <Image
          src="/profile.png"
          width={50}
          height={50}
          alt="profile"
          className="h-12 w-12 rounded-full"
        />
        <p>{blog.authorName || "Author"}</p>
      </div>

      <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
};

export default Page;
