import { CtaCard } from "@/components/hero/CTA/CtaCard";
import React from "react";

export const CtaSection = () => {
  const ctaCards = [
    {
      icon: "/icons/CtaCard-1.png",
      title: "Rate Your Surgeon",
      description:
        "When facing a serious, life-changing illness, we understand the critical importance of obtaining expert advice.",
      button: "Rate Now",
    },
    {
      icon: "/icons/CtaCard-2.png",
      title: "Get Consultation",
      description:
        "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.",
      button: "Find Your Suegeon",
    },
    {
      icon: "/icons/CtaCard-3.png",
      title: "Book Appointments",
      description:
        "Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.",
      button: "Book Now",
    },
  ];
  return (
    <section className="mb-40">
      <div className="mb-24 grid grid-cols-[1.1fr_1fr] gap-4">
        <h2 className="font-syne text-primary w-full">
          Experience Exceptional Healthcare In The Australia With Best
          Orthopedic Surgeon
        </h2>
        <p className="w-full">
          Discover the pinnacle of healthcare services in the United States,
          where advancements, quality, cutting edge research, expert doctors and
          a commitment to patient success, combine to provide an unparalleled
          medical tourism experience. Omnicure USA is your dedicated partner,
          guiding you towards improved health and wellness.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
