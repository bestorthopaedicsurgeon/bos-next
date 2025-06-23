import { Button } from "@/components/ui/button";
import Image from "next/image";

import React from "react";

export const WhoWeAre = () => {
  return (
    <section className="">
      <div className="bg-primary relative right-1/2 left-1/2 -mx-[50vw] flex w-screen flex-col items-center justify-center py-16">
        <h1 className="font-syne text-primary-foreground">Who we are</h1>
        <p className="text-primary-foreground text-center">
          We are a healthcare-driven platform designed to simplify your search
          for expert medical care.
        </p>
        <Image
          src="/about/who-we-are.jpg"
          alt="About Us"
          width={1238}
          height={640}
          className="mt-8 mb-8 rounded-lg"
        />
        <div className="text-primary-foreground container grid grid-cols-1 gap-8 lg:grid-cols-3">
          <p className="">
            Whether you&apos;re dealing with a condition, looking for preventive
            advice, or seeking specialized treatment, we offer access to a
            community of highly rated doctors. Our listings are not just names
            and addresses they&apos;re real doctors reviewed by real patients.
            Through honest ratings and detailed profiles, we aim to empower you
            to choose health professionals who meet your expectations
          </p>
          <div>
            <h3 className="mb-4">Our Mission</h3>
            <p>
              To make healthcare access easy, transparent, and patient-friendly
              by connecting people with qualified, top-rated doctors. We aim to
              empower every individual to take control of their health journey
              with confidence and trust.
            </p>
          </div>
          <div>
            <h3 className="mb-4">Our Vision</h3>
            <p>
              We envision a future where quality healthcare is accessible to
              all, driven by trust, transparency, and exceptional patient
              experiences. In this future, individuals can easily navigate their
              healthcare choices, with the assurance and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
