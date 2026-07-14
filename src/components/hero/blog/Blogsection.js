import { BlogCarousel } from "@/components/hero/blog/BlogCarousel";
import { Button } from "@/components/ui/button";
import { getAllBlogs } from "@/lib/data/publicData";
import ScrollLink from "@/components/reusable/ScrollLink";
import React from "react";

export const Blogsection = async () => {
  const fetchedBlogs = await getAllBlogs();

  // Get first 5 blogs for the carousel (limit for performance)
  const blogs = fetchedBlogs?.slice(0, 5) || [];
  return (
    <section className="mb-40">
      <div className="bg-primary relative right-1/2 left-1/2 -mx-[50vw] flex w-screen flex-col items-center justify-center py-16">
        <div className="container mx-auto flex flex-col items-center">
          <h1 className="font-syne text-primary-foreground mb-4 text-center">
            Blogs & Health Tips
          </h1>
          <p className="text-primary-foreground mb-8 text-center">
          Explore insightful blogs and practical health tips designed to help you live a healthier, happier life. From nutrition and fitness to mental well-being, we share everything you need to stay on track.
          </p>
          <BlogCarousel blogs={blogs} />
            <Button
              variant={"primaryForeground"}
              size={"primaryForeground"}
              className="mt-8 flex items-center gap-2"
              asChild
            >
              <ScrollLink href="/blog" scrollTarget="section">
              Read More Blogs
              </ScrollLink>
            </Button>
        </div>
      </div>
    </section>
  );
};
