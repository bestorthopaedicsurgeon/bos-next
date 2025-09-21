import React from "react";
import { Target, Star, Search, Settings, Users, CheckCircle } from "lucide-react";

export const WhyJoinBOS = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Targeted Exposure",
      description: "Unlike general medical directories, BOS WA is 100% focused on Orthopaedics. That means your profile is seen by patients specifically searching for the care you provide."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Build Credibility Through Verified Reviews",
      description: "Encourage patients to leave ratings and reviews that reflect your quality of care. Positive feedback boosts trust and positions you as a leading provider in your field."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Appear in Local Search Results",
      description: "Our platform is optimized for search engines, helping your profile rank higher when patients search for Orthopaedic surgeons in Perth, Bunbury, Fremantle, and other WA locations."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Full Control of Your Profile",
      description: "Easily manage your professional profile with up-to-date details including subspecialties, clinic locations, appointment procedures, credentials, and contact info."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Connect Directly with Patients",
      description: "Enable direct inquiries or appointment bookings, helping you streamline new patient acquisition and reduce referral delays."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-syne mb-4">Why Join BOS WA?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with patients across Western Australia and grow your practice with our specialist-focused platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary">
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8  mx-auto">
          <h3 className="font-bold text-2xl mb-6 text-center">Profile Management Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Subspecialties (spine, sports injuries, trauma, joint replacement)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Multiple clinic locations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Appointment procedures</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Credentials and affiliations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Professional photo upload</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Contact information management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
