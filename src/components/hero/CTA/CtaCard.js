import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollLink from "@/components/reusable/ScrollLink";
import React from "react";

export const CtaCard = ({ icon, title, description, button, href = "/surgeons", scrollTarget = "section" }) => {
  return (
    <div className="relative flex flex-col items-center justify-center rounded-4xl bg-white px-8 py-24">
      <Image
        src={icon}
        alt="cta-card"
        width={68}
        height={64}
        className="mb-8"
      />
      <h2 className="font-dm-sans mb-2 text-[20px] text-center">{title}</h2>
      <p className="text-center text-[16px]">{description}</p>

      <Button
        className="absolute bottom-[-28px]"
        variant="primary"
        size="primary"
        asChild
      >
        <ScrollLink href={href} scrollTarget={scrollTarget}>{button}</ScrollLink>
      </Button>
    </div>
  );
};
