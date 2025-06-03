import { TestimonialCarousel } from "@/components/hero/Testimonials/TestimonialCarousel";
import { CarouselCustom } from "@/components/reusable/CarouselCustom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "This is the best service I've ever used!",
      name: "John Doe",
      image: "/home/doctor-1.jpg",
      stars: 3,
    },
    {
      id: 2,
      text: "I was so impressed with the quality of the service!",
      name: "Jane Doe",
      image: "/home/doctor-2.jpg",
      stars: 5,
    },
    {
      id: 3,
      text: "I couldn't be happier with the results!",
      name: "Bob Smith",
      image: "/home/doctor-3.jpg",
      stars: 4,
    },
    {
      id: 4,
      text: "The staff was really friendly and helpful!",
      name: "Alice Johnson",
      image: "/home/doctor-2.jpg",
      stars: 4,
    },
    {
      id: 5,
      text: "I was so impressed with the quality of the service!",
      name: "Jane Doe",
      image: "/home/doctor-2.jpg",
      stars: 5,
    },
    {
      id: 6,
      text: "I couldn't be happier with the results!",
      name: "Bob Smith",
      image: "/home/doctor-3.jpg",
      stars: 4,
    },
  ];

  return (
    <section className="mb-40">
      <div className="bg-primary relative right-1/2 left-1/2 -mx-[50vw] flex w-screen flex-col items-center justify-center py-16">
        <h1 className="font-syne text-primary-foreground">Testimonials</h1>
        <p className="text-primary-foreground mb-8 text-center">
          Hear from our satisfied patients and their experiences with our
          services.
        </p>
        <TestimonialCarousel testimonials={testimonials} />
        <Button
          variant={"primaryForeground"}
          size={"primaryForeground"}
          className="mt-8 flex items-center gap-2"
        >
          Rate your doctor
        </Button>
      </div>
    </section>
  );
};
