import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const AboutUsSection = () => {
  return (
    <section className="mb-40">
      <div className="grid grid-cols-2 gap-8 items-center">
        <Image
          src="/about/left-side.png"
          alt="About Us"
          width={643}
          height={564}
        />
        <div className="px-10">
          <h1 className="font-syne text-primary mb-4 font-bold">About Us</h1>
          <p className="mb-6 font-bold text-neutral-700">
            Your Health, Your Choice — Made Simple.
          </p>
          <p className="text-neutral-700">
            At bestorthopedicsurgeon.com, we believe finding the right doctor
            shouldn’t be a challenge. Our platform connects patients with
            top-rated, trusted, and reviewed medical professionals across
            various specialties — helping you make informed decisions for your
            health with confidence and ease.
          </p>
          <Button className="mt-8" variant="primary" size="primary">
            Find Your Surgeon
          </Button>
        </div>
      </div>
    </section>
  );
};
