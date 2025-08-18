import React from "react";
import { Search, Calendar, Upload, UserCheck } from "lucide-react";

export const ServicesSection = () => {
  const steps = [
    {
      number: "01",
      title: "Find A Surgeon",
      description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam.",
      icon: Search,
      bgColor: "bg-[#0D9488]", // Teal-600
      iconColor: "text-white"
    },
    {
      number: "02", 
      title: "Make Appointment",
      description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam.",
      icon: Calendar,
      bgColor: "bg-[#83C5BE]", // Light blue
      iconColor: "text-white"
    },
    {
      number: "03",
      title: "Upload History", 
      description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam.",
      icon: Upload,
      bgColor: "bg-[#0D9488]", // Teal-600
      iconColor: "text-white"
    },
    {
      number: "04",
      title: "Get Consultation",
      description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt labore et dolore magna aliqua enim minim veniam.",
      icon: UserCheck,
      bgColor: "bg-[#83C5BE]", // Light blue
      iconColor: "text-white"
    }
  ];

  return (
    <section className="mb-40 flex flex-col items-center justify-center px-4">
      <h1 className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
        Easy Steps To Get Our Services
      </h1>
      <p className="mb-12 text-center text-gray-600 max-w-2xl">
        Consectetur adipiscing elit sed do eiusmod tempor incididunt labore et
        dolore magna aliqua enim minim veniam.
      </p>
      
      {/* Mobile Layout - Clean Vertical Stack */}
      <div className="block md:hidden w-full max-w-md">
        {steps.map((step, index) => (
          <div key={step.number} className="mb-8 text-center">
            {/* Step Number */}
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-300">{step.number}</span>
            </div>
            
            {/* Icon Circle */}
            <div className={`inline-flex items-center justify-center w-20 h-20 ${step.bgColor} rounded-full mb-4`}>
              <step.icon className={`w-10 h-10 ${step.iconColor}`} strokeWidth={1.5} />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {step.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Tablet Layout - Clean 2x2 Grid */}
      <div className="hidden md:block lg:hidden w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              {/* Step Number */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-300">{step.number}</span>
              </div>
              
              {/* Icon Circle */}
              <div className={`inline-flex items-center justify-center w-24 h-24 ${step.bgColor} rounded-full mb-6`}>
                <step.icon className={`w-12 h-12 ${step.iconColor}`} strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - Horizontal Grid with Connecting Line */}
      <div className="hidden lg:block w-full max-w-6xl">
        <div className="relative">
          {/* Background connecting line */}
          <div className="absolute top-[calc(3.5rem+3rem)] left-[12.5%] right-[12.5%] h-0.5 bg-gray-300 lg:top-[calc(4rem+3.5rem)]"></div>
          
          {/* Steps Grid */}
          <div className="relative md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                {/* Step Number */}
                <div className="mb-6">
                  <span className="text-2xl lg:text-3xl font-bold text-gray-300">{step.number}</span>
                </div>
                
                {/* Icon Circle */}
                <div className={`relative inline-flex items-center justify-center w-24 h-24 lg:w-28 lg:h-28 ${step.bgColor} rounded-full mb-6 z-10`}>
                  <step.icon className={`w-12 h-12 lg:w-14 lg:h-14 ${step.iconColor}`} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
