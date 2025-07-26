import { Button } from "@/components/ui/button";
import Image from "next/image";

import React from "react";

export const CtaSectionAbout = () => {
  return (
    <section className="mb-40">
      <div className="bg-primary flex flex-col items-center justify-center py-16 px-8">
        <h1 className="font-syne text-primary-foreground">
          Feel Something Wrong With Your Bones?
        </h1>
        <p className="text-primary-foreground text-center">
          Maecenas dictum fringilla nisi ac malesuada. Donec ac quam non diam
          elementum ultricies. In hac habitasse platea dictumst. Nullam eu elit
          sed metus convallis lobortis.
        </p>
        <Button className="mt-8" variant="primaryForeground" size="primaryForeground">
          Get Consultation
        </Button>
      </div>
    </section>
  );
};
