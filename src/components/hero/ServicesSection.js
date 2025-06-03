import Image from "next/image";
import React from "react";

export const ServicesSection = () => {
  return (
    <section className="mb-40 flex flex-col items-center justify-center">
      <h1 className="mb-8 text-center">Easy Steps To Get Our Services</h1>
      <p className="mb-12">
        Consectetur adipiscing elit sed do eiusmod tempor incididunt labore et
        dolore magna aliqua enim minim veniam.
      </p>
      <Image
        src="/home/services-steps.png"
        alt="Services Steps"
        width={1140}
        height={300}
      />
    </section>
  );
};
