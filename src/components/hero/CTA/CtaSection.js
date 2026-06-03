import { CtaCard } from "@/components/hero/CTA/CtaCard";
import React from "react";

export const CtaSection = () => {
  const ctaCards = [
    {
      icon: "/icons/CtaCard-3.png",
      title: "Find the Right Surgeon",
      description:
        "Search verified orthopaedic surgeons across Perth and regional WA by subspecialty, location, and conditions treated.",
      button: "Find Now",
      href: "/surgeons",
      scrollTarget: "section_high",
    },
    {
      icon: "/icons/CtaCard-2.png",
      title: "Contact Surgeon and Book Appointment",
      description:
        "You can access clinic locations, contact details with options for direct appointment booking through us (requires referral from your GP).",
      button: "Book An Appointment",
      href: "/surgeons",
      scrollTarget: "section",
    },
    {
      icon: "/icons/CtaCard-1.png",
      title: "Rate & Review Your Experience",
      description:
        "We believe that patient feedback matters — and it helps others make more informed choices about their healthcare.",
      button: "Rate Now",
      href: "/surgeons",
      scrollTarget: "section",
    },
  ];
  return (
    <section className="mb-40">
      <div className="mb-24 grid grid-cols-[1.1fr_1fr] gap-4 max-md:grid-cols-1">
        <h2 className="font-syne text-primary w-full">
          WA’s Trusted Directory for Orthopaedic Specialists. Find the Right
          Orthopaedic Surgeon. Make Informed Choices.
        </h2>
        <p className="w-full">
          Discover top-rated orthopaedic specialists in Western Australia (Perth
          and Regional) for hip, knee, shoulder, wrist/ hands, spine, sports
          injuries, trauma, and foot & ankle conditions including orthopaedic
          oncology and paediatric orthopaedics. Read real patient experiences,
          verified surgeon’s profiles, choose and contact orthopaedic surgeons
          with confidence and access their information on a single platform. We
          do have an option for patients to directly Q&A with the surgeons,
          through their secure profiles.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 max-lg:gap-14 md:grid-cols-2 lg:grid-cols-3">
        {ctaCards.map((card, index) => (
          <CtaCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            button={card.button}
            href={card.href}
            scrollTarget={card.scrollTarget}
          />
        ))}
        {/* Additional CtaCards for demonstration */}
      </div>
    </section>
  );
};
