"use client";
import BlogHeader from "@/components/blogPage/BlogHeader";
import ProfileHeader from "@/components/reusable/profileHeader";
import RichTextEditor from "@/components/reusable/RichTextEditor";
import { SearchableSelect } from "@/components/reusable/SearchableSelect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllBlogs } from "@/lib/apiCalls/client/blogs";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [blogs, setBlogs] = useState();
  const [editData, setEditData] = useState();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  // const blogs = [
  //   {
  //     title: "Blog 1",
  //     slug: "blog-1",
  //   },
  //   {
  //     title: "Blog 2",
  //     slug: "blog-2",
  //   },
  //   {
  //     title: "Blog 3",
  //     slug: "blog-3",
  //   },
  // ];

  return (
    <div className="">
      <SearchableSelect
        options={blogs.map((blog) => ({
          value: blog.slug,
          label: blog.title,
        }))}
        placeholder="Search by blog title"
        value={""}
        onChange={(value) => {
          console.log("Selected:", value);
        }}
        className="w-full"
      />
      <h1 className="font-syne text-primary my-20">Blog Name</h1>
      <Image
        src="/blog1.png"
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
        <p>Author</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: "" }}></div>
      <RichTextEditor
        value={blogs[0].content || ""}
        onChange={(content) => {
          setEditData({ ...editData, content: content });
        }}
      />
    </div>
  );
};

export default Page;
