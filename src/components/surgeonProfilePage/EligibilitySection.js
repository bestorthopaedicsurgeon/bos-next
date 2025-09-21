import React from "react";
import { Shield, Award, MapPin, Lock } from "lucide-react";

export const EligibilitySection = () => {
  const requirements = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "FRACS (Orthopaedics) accredited surgeons",
      description: "Must hold Fellowship of the Royal Australasian College of Surgeons in Orthopaedics"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Registered medical practitioners with AHPRA",
      description: "Current registration with Australian Health Practitioner Regulation Agency"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Surgeons actively practicing in Western Australia",
      description: "Currently providing orthopaedic services within WA"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-syne mb-4">Who Can Join?</h2>
            <p className="text-lg text-gray-600">
              To maintain the quality and integrity of our platform, we only list qualified professionals:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {requirements.map((requirement, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md border-2 border-gray-100">
                <div className="mb-4 flex justify-center">
                  {requirement.icon}
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-800">
                  {requirement.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {requirement.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <div className="flex justify-center mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-4">Your Data, Your Control</h3>
            <p className="mb-4 max-w-2xl mx-auto">
              You maintain full control over your profile and contact preferences. We do not share or sell your data, 
              and your professional reputation is our priority.
            </p>
            <div className="text-sm opacity-90">
              <p>Secure • Private • Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
