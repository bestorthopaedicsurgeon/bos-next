import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollLink from "@/components/reusable/ScrollLink";
import React from "react";

export const CtaSectionAbout = () => {
  return (
    <section className="mb-40">
      <div className="bg-primary flex flex-col items-center justify-center py-16 px-8">
        <h1 className="font-syne text-primary-foreground">
          Feel Something Wrong With Your Bones?
        </h1>
        <p className="text-primary-foreground text-center">
        Bone pain, stiffness, or unusual swelling could be early warning signs of an underlying condition. Don’t delay—consult a specialist today and protect your mobility.
        </p>
        <Button className="mt-8" variant="primaryForeground" size="primaryForeground" asChild>
          <ScrollLink href="/surgeons" scrollTarget="section">
            Get Consultation
          </ScrollLink>
        </Button>
      </div>
    </section>
  );
};
