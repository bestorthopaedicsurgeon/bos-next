import { BlogCarousel } from "@/components/hero/blog/BlogCarousel";
import { Button } from "@/components/ui/button";
import React from "react";

export const Blogsection = () => {
  const blogs = [
    {
      id: 1,
      title: "Dental treatments",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
      image: "/home/blog-image.png",
    },
    {
      id: 2,
      title: "Dental treatments",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
      image: "/home/blog-image.png",
    },
    {
      id: 3,
      title: "Dental treatments",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
      image: "/home/blog-image.png",
    },
    {
      id: 4,
      title: "Dental treatments",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
      image: "/home/blog-image.png",
    },
    {
      id: 5,
      title: "Dental treatments",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.",
      image: "/home/blog-image.png",
    },
  ];
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
          <Button
            variant={"primaryForeground"}
            size={"primaryForeground"}
            className="mt-8 flex items-center gap-2"
          >
            Rate your doctor
          </Button>
        </div>
      </div>
    </section>
  );
};
