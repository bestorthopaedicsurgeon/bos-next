import { Button } from "@/components/ui/button";
import Image from "next/image";

import React from "react";

export const WhoWeAre = () => {
  return (
    <section className="">
      <div className="bg-primary relative right-1/2 left-1/2 -mx-[50vw] flex w-screen flex-col items-center justify-center py-16">
        <h2 className="as-h1 font-syne text-primary-foreground">Who we are</h2>
        <p className="text-primary-foreground text-center max-w-[1200px] mx-auto">
          We are an independent directory built to make expert orthopaedic care
          easier to find. Whether you have a new injury, ongoing joint pain or need
          specialised surgery, you can compare highly rated orthopaedic surgeons in
          one place. Our listings are not just names and addresses: they are real
          surgeons reviewed by real patients. With honest ratings and detailed
          profiles, we help you choose the best orthopaedic surgeon for your
          condition and your location.
        </p>
        {/* <p className="max-w-[1200px] mx-auto text-white">
         
          </p> */}
        <Image
          src="/about/who-we-are.jpg"
          alt="About Us"
          width={1238}
          height={640}
          className="mt-8 mb-8 rounded-lg"
        />
        <div className="text-primary-foreground mx-auto max-w-[1200px] grid grid-cols-1 gap-8 lg:grid-cols-2">
        
          <div>
            <h3 className="mb-4">Our Mission</h3>
            <p>
              To make it simple for every patient in Western Australia to find the best
              orthopaedic surgeon for their needs, with clear profiles, honest reviews
              and easy access to care.
            </p>
          </div>
          <div>
            <h3 className="mb-4">Our Vision</h3>
            <p>
              We envision a future where quality orthopaedic care is accessible to all,
              driven by trust, transparency and exceptional patient experiences, and
              where anyone can find the best orthopaedic surgeon near them with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
