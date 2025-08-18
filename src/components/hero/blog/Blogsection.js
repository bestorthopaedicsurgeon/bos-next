import { BlogCarousel } from "@/components/hero/blog/BlogCarousel";
import { Button } from "@/components/ui/button";
import { getAllBlogsApi } from "@/lib/apiCalls/server/blogs";
import Link from "next/link";
import React from "react";

export const Blogsection = async () => {
  // Fetch real blog data from API
  const fetchedBlogs = await getAllBlogsApi();
  
  // Get first 5 blogs for the carousel (limit for performance)
  const blogs = fetchedBlogs?.data?.slice(0, 5) || [];
  return (
    <section className="mb-40">
      <div className="bg-primary relative right-1/2 left-1/2 -mx-[50vw] flex w-screen flex-col items-center justify-center py-16">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-syne text-primary-foreground mb-4 text-center">
            Blogs & Health Tips
          </h1>
          <p className="text-primary-foreground mb-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit
            amet consectetur adipiscing elit semper dalar elementum tempus hac
            tellus libero accumsan.
          </p>
          <BlogCarousel blogs={blogs} />
          <Link href="/blog">
            <Button
              variant={"primaryForeground"}
              size={"primaryForeground"}
              className="mt-8 flex items-center gap-2"
            >
              Read More Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
