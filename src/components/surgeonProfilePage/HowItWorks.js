import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus, Edit, Globe } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-12 h-12 text-primary" />,
      title: "Claim or Create Your Profile",
      description: "If you're already listed, claim your profile. If not, create a new one in minutes."
    },
    {
      icon: <Edit className="w-12 h-12 text-primary" />,
      title: "Customize Your Listing",
      description: "Add your areas of expertise, credentials, clinic details, and professional photo."
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Start Connecting",
      description: "Once published, your profile is live and discoverable by thousands of patients across WA."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-syne mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started with your professional profile in just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-8 shadow-md">
              <div className="mb-6 flex justify-center">
                {step.icon}
              </div>
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/doctor/registration">
            <Button variant="primary" size="lg">
              Create Your Profile Now
            </Button>
          </Link>
          <Link href="/contactUs">
            <Button variant="secondary" size="lg">
              Get Support
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
