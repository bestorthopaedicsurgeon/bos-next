"use client";

import React, { useEffect, useRef, useState } from "react";
import { Search, Calendar, Star, UserCheck } from "lucide-react";

export const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Find A Surgeon",
      description: "Quickly connect with the right surgeon for your needs.",
      icon: Search,
    },
    {
      number: "02", 
      title: "Book Appointment",
      description: "Book your appointment in just a few clicks.",
      icon: Calendar,
    },
    {
      number: "03",
      title: "Get Consultation",
      description: "Talk to experts and get the right guidance.",
      icon: UserCheck,
    },
    {
      number: "04",
      title: "Rate and Review", 
      description: "Share your experience and help others find the best care.",
      icon: Star,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section (0 to 1)
      // Start when section is 50% visible, complete while section is still on screen
      const startOffset = windowHeight * 0.5; // Start animation when 50% visible
      
      // Animation should complete within 50% of the section height
      // This ensures it finishes while section is still fully visible
      const animationDistance = sectionHeight * 0.5;
      
      const scrollProgress = Math.min(
        Math.max(
          (startOffset - sectionTop) / animationDistance,
          0
        ),
        1
      );

      // Determine which step should be active based on scroll progress
      const stepProgress = scrollProgress * steps.length;
      const currentStep = Math.min(Math.floor(stepProgress) + 1, steps.length);
      
      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  const getStepStyles = (index) => {
    const isActive = index < activeStep;
    const isCurrent = index === activeStep - 1;
    
    return {
      bgColor: isActive 
        ? "bg-[#0D9488]" // Dark teal when active
        : "bg-[#0d94887d]", // Gray when inactive
      iconColor: isActive ? "text-white" : "text-white",
      scale: isCurrent ? "scale-110" : "scale-100",
      numberColor: isActive ? "text-[#0D9488]" : "text-gray-300",
    };
  };

  return (
    <section ref={sectionRef} className="mb-30 flex flex-col items-center justify-center px-4 py-16">
      <h1 className="mb-8 text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
        Easy Steps To Get Our Services
      </h1>
      <p className="mb-12 text-center text-gray-600 max-w-2xl">
        We believe in making things simple for you. With just a few easy steps, you can access our services and start experiencing the value we bring.
      </p>
      
      {/* Mobile Layout - Clean Vertical Stack */}
      <div className="block md:hidden w-full max-w-md">
        {steps.map((step, index) => {
          const styles = getStepStyles(index);
          return (
            <div key={step.number} className="mb-8 text-center">
              {/* Step Number */}
              <div className="mb-4">
                <span className={`text-4xl font-bold transition-colors duration-500 ${styles.numberColor}`}>
                  {step.number}
                </span>
              </div>
              
              {/* Icon Circle */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 transition-all duration-500 ease-out ${styles.bgColor} ${styles.scale}`}>
                <step.icon className={`w-10 h-10 transition-colors duration-500 ${styles.iconColor}`} strokeWidth={1.5} />
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
          );
        })}
      </div>

      {/* Tablet Layout - Clean 2x2 Grid */}
      <div className="hidden md:block lg:hidden w-full max-w-4xl">
        <div className="grid grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const styles = getStepStyles(index);
            return (
              <div key={step.number} className="text-center">
                {/* Step Number */}
                <div className="mb-6">
                  <span className={`text-5xl font-bold transition-colors duration-500 ${styles.numberColor}`}>
                    {step.number}
                  </span>
                </div>
                
                {/* Icon Circle */}
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 transition-all duration-500 ease-out ${styles.bgColor} ${styles.scale}`}>
                  <step.icon className={`w-12 h-12 transition-colors duration-500 ${styles.iconColor}`} strokeWidth={1.5} />
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
            );
          })}
        </div>
      </div>

      {/* Desktop Layout - Horizontal Grid with Connecting Line */}
      <div className="hidden lg:block w-full max-w-6xl">
        <div className="relative">
          {/* Background connecting line (gray) */}
          <div className="absolute top-[calc(4rem+3.5rem)] left-[12.5%] right-[12.5%] h-1 bg-gray-200 rounded-full"></div>
          
          {/* Progress line (teal) - animates based on active step */}
          <div 
            className="absolute top-[calc(4rem+3.5rem)] left-[12.5%] h-1 bg-[#0D9488] rounded-full transition-all duration-500 ease-out"
            style={{ 
              width: `${Math.max(0, ((activeStep - 1) / (steps.length - 1)) * 75)}%`,
            }}
          ></div>
          
          {/* Steps Grid */}
          <div className="relative md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const styles = getStepStyles(index);
              return (
                <div key={step.number} className="text-center">
                  {/* Step Number */}
                  <div className="mb-6">
                    <span className={`text-2xl lg:text-3xl font-bold transition-colors duration-500 ${styles.numberColor}`}>
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Icon Circle */}
                  <div className={`relative inline-flex items-center justify-center w-24 h-24 lg:w-28 lg:h-28 rounded-full mb-6 z-10 transition-all duration-500 ease-out ${styles.bgColor} ${styles.scale}`}>
                    <step.icon className={`w-12 h-12 lg:w-14 lg:h-14 transition-colors duration-500 ${styles.iconColor}`} strokeWidth={1.5} />
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
