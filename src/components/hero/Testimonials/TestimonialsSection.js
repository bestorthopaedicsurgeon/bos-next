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
      text: "I’ve had knee pain on and off for years from playing footy. This site helped me finally understand what might be going on and which specialists actually deal with sports injuries. Really clear info, very handy.",
      name: "Liam Carter",
      image: "/home/doctor-4.jpg",
      stars: 5,
    },
    {
      id: 2,
      text: "Moving to Australia from Spain, it was hard to figure out the healthcare options here. The explanations on this site made it much easier to understand my shoulder issue and who the top surgeons are. Super useful for someone new to the system.",
      name: "María González",
      image: "/home/doctor-5.jpg",
      stars: 5,
    },
    {
      id: 3,
      text: "I was looking up information for my mum who’s been struggling with arthritis. The articles were easy to read and actually made sense, unlike most medical websites. We both felt more confident about what steps to take next.",
      name: "Ayesha Khan",
      image: "/home/doctor-6.jpg",
      stars: 4,
    },
    {
      id: 4,
      text: "I’m originally from Brazil and didn’t know much about orthopaedic specialists here. The surgeon profiles were detailed and helped me compare experience levels and specialties. Really glad I found this website.",
      name: "Gabriel Santos",
      image: "/home/doctor-7.jpg",
      stars: 5,
    },
    {
      id: 5,
      text: "After a fall during hiking, I wanted to understand my ankle injury better. The recovery guides here were straightforward and actually practical. It helped me avoid unnecessary stress while waiting for my GP appointment.",
      name: "Hannah O’Connor",
      image: "/home/doctor-8.jpg",
      stars: 4,
    },
    {
      id: 6,
      text: "As someone from the Philippines, I love that this site keeps things simple and easy to follow. I used it to learn more about hip pain and it helped me understand what questions to ask at my next check-up.",
      name: "Jerome Dela Cruz",
      image: "/home/doctor-9.jpg",
      stars: 5,
    },
  ];

  return (
    <section className="mb-40">
      <div className="bg-primary flex flex-col items-center justify-center px-5 py-16">
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
