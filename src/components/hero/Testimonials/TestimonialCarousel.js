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
export function TestimonialCarousel({ testimonials }) {
  if (!testimonials || testimonials.length === 0) {
    return <div className="text-center">No testimonials available</div>;
  }
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-[1200px] flex justify-center items-center gap-5"
    >
      <CarouselPrevious />
      <CarouselContent>
        {Array.from(testimonials).map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-white p-7">
              <div className="flex items-center gap-1">
                <StarRating stars={testimonial.stars} />
              </div>
              <p className="mt-4 text-gray-700">{testimonial.text}</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="relative h-12 w-12">
                  <Image
                    src={testimonial.image || "/home/doctor-1.png"}
                    alt="Doctor"
                    fill
                    className="rounded-full object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">{testimonial.name}</h3>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselNext />
    </Carousel>
  );
}
