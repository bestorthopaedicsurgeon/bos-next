import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollLink from "@/components/reusable/ScrollLink";
import React from "react";

export const AboutUsSection = () => {
  return (
    <section className="mb-40">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center place-items-center">
        <Image
          src="/about/left-side.png"
          alt="About Us"
          width={643}
          height={564}
        />
        <div className="px-10">
          <h2 className="as-h1 font-syne text-primary mb-4 font-bold">About Us</h2>
          <p className="mb-6 font-bold text-neutral-700">
            Your Health, Your Choice, Made Simple.
          </p>
          <p className="text-neutral-700">
            At Best Orthopaedic Surgeon, we believe finding the best orthopaedic surgeon
            for your needs shouldn&apos;t be a challenge. Our directory brings together
            orthopaedic surgeons across Western Australia with verified profiles and
            real patient reviews, so you can make informed decisions about your care
            with confidence.
          </p>
          <Button className="mt-8" variant="primary" size="primary" asChild>
            <ScrollLink href="/surgeons" scrollTarget="section_high">
              Find Your Surgeon
            </ScrollLink>  
          </Button>
        </div>
      </div>
    </section>
  );
};
