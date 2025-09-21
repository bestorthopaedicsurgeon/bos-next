import React from "react";
import { CheckCircle, Users, Award, Heart, Building } from "lucide-react";

export const WhyReviewMatters = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Helps other patients choose with confidence",
      description: "Your honest feedback guides fellow patients in making informed healthcare decisions."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Recognizes excellent care",
      description: "Acknowledge outstanding surgeons and their dedication to patient care and recovery."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Encourages transparency in healthcare",
      description: "Promote open communication and accountability in the medical community."
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Supports the local WA medical community",
      description: "Help strengthen Western Australia's orthopaedic healthcare network and reputation."
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-syne mb-4">Why Your Review Matters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every review you leave makes a meaningful impact on the healthcare community and future patients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg mb-3 text-center text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8 text-center mx-auto">
          <h3 className="font-bold text-xl mb-4">Ready to Share Your Experience?</h3>
          <p className="mb-6">
            Your feedback helps build a stronger, more transparent healthcare community in Western Australia.
          </p>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Quick and Easy Process</span>
          </div>
        </div>
      </div>
    </section>
  );
};
