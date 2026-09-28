import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TutorialVideo } from "@/components/reusable/TutorialVideo";

export const ReviewSteps = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Search for Your Surgeon",
      description: "Use the search bar to find your orthopaedic surgeon by name, location or specialty."
    },
    {
      step: "Step 2", 
      title: "Open Their Profile",
      description: "Click on their profile to view detailed information including qualifications, specialties, and clinic details."
    },
    {
      step: "Step 3",
      title: 'Go to "Rate & Review"',
      description: "You'll find the Rate & Review section near the bottom of the profile, or click \"Write a Review\" on the surgeon's card to jump straight there. You will need to log in, which keeps every review genuine."
    },
    {
      step: "Step 4",
      title: "Share Your Experience",
      description: "Rate your doctor on professionalism, punctuality, helpfulness and knowledge. Then write a short, helpful summary of your visit: what went well and what other patients should know."
    },
    {
      step: "Step 5",
      title: "Submit",
      description: "Click Submit. Your review will be moderated and published shortly."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-syne mb-4">Simple Steps to Leave Your Review</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Doctor reviews help other patients in Western Australia choose the right orthopaedic surgeon. Leaving one is quick and easy. Here&apos;s how it works:
          </p>
        </div>

        <TutorialVideo
          src="/videos/doctor-review.webm"
          title="How to leave a review"
        />

        <div className=" mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-8 bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{step.step}: {step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/surgeons">
            <Button variant="primary" size="lg" className="mr-4">
              Find a Surgeon to Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
