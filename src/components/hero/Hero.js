import { Button } from "@/components/ui/button";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground px-20 py-16">
      <div className="flex">
        <div>
          <p className="mb-4">Find your surgeon!</p>
          <div className="bg-primary-foreground mb-4 h-[2px] w-full" />
          <h1 className="font-syne">
            Unlocking Your Body For Optimal Wellness
          </h1>
          <p>
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionalsh make us a leader in the healthcare industry
          </p>
          <Button className="mt-4">Get Started</Button>
          <Button className="mt-4">Get Started</Button>
        </div>
        <div></div>
      </div>
    </section>
  );
};
