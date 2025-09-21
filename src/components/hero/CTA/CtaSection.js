import { CtaCard } from "@/components/hero/CTA/CtaCard";
import React from "react";

export const CtaSection = () => {
  const ctaCards = [
    {
      icon: "/icons/CtaCard-1.png",
      title: "Rate & Review Your Experience",
      description:
        "We believe that patient feedback matters — and it helps others make more informed choices about their healthcare.",
      button: "Rate Now",
    },
    {
      icon: "/icons/CtaCard-2.png",
      title: "Leave a Review",
      description:
        "After your appointment, you can rate your Orthopaedic surgeon based on your experience, including professionalism, bedside manner, clarity of diagnosis, wait times, and overall satisfaction.",
      button: "Leave Review",
    },
    {
      icon: "/icons/CtaCard-3.png",
      title: "Help Others Find the Right Surgeon",
      description:
        "Your honest feedback provides valuable insights for other patients in WA who are seeking trusted care.",
      button: "Find Now",
    },
  ];
  return (
    <section className="mb-40">
      <div className="mb-24 grid grid-cols-[1.1fr_1fr] gap-4 max-md:grid-cols-1">
        <h2 className="font-syne text-primary w-full">
        Experience Exceptional Healthcare In The Australia With Best Orthopedic Surgeon
        </h2>
        <p className="w-full">
          Discover the pinnacle of healthcare services in the Australia,
          where advancements, quality, cutting edge research, expert doctors and
          a commitment to patient success, combine to provide an unparalleled
          medical tourism experience. Omnicure Australia is your dedicated partner,
          guiding you towards improved health and wellness.
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
          />
        ))}
        {/* Additional CtaCards for demonstration */}
      </div>
    </section>
  );
};
