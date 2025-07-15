import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import StarRating from "@/components/reusable/StarRating";
import { ArrowRight } from "lucide-react";
export function BlogCarousel({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return <div className="text-center">No blogs available</div>;
  }
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full flex items-center justify-center gap-5 "
    >
      <CarouselPrevious />
      <CarouselContent>
        {Array.from(blogs).map((blog, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-white p-7">
              <Image
                src={blog.image || "/home/doctor-1.png"}
                alt="Blog"
                width={343}
                height={220}
                className="mb-4 rounded-md object-cover w-full"
              />
              <h3 className="font-dm-sans text-primary mb-2 text-[20px]">
                {blog.title}
              </h3>
              <p className="text-[16px] text-neutral-700">{blog.description}</p>
              <div className="mt-4 flex items-center gap-4 cursor-pointer">
                <p className="font-dm-sans text-[16px] font-bold text-[#3A506B]">
                  Read More
                </p>
                <ArrowRight className="text-primary h-4 w-4" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselNext />
    </Carousel>
  );
}
