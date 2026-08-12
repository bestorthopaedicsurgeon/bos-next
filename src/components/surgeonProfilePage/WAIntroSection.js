import React from "react";
import { CheckCircle } from "lucide-react";
import { TutorialVideo } from "@/components/reusable/TutorialVideo";

export const WAIntroSection = () => {
  const benefits = [
    "Grow your online visibility",
    "Attract new patients",
    "Strengthen your local presence",
    "Be part of a trusted, surgeon-only platform",
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-syne mb-4 max-w-2xl mx-auto">
            Are You an Orthopaedic Surgeon Practicing in WA?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the only directory in Western Australia dedicated solely to Orthopaedic professionals.
            Claim your profile or join and list your profile today to showcase your expertise.
          </p>
        </div>

        <TutorialVideo
          src="/videos/create-doctor-profile.webm"
          title="Watch Tutorial"
        />

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-primary">
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xl text-primary font-semibold text-center">
              Boost visibility. Build trust. Grow your practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

