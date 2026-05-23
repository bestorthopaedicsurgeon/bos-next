import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const FindAnotherSurgeonCTA = () => {
  return (
    <div className="w-full mt-10 mb-16">
      <div className="bg-white text-foreground rounded-xl p-6 sm:p-8 md:p-10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 transition-all duration-300 hover:shadow-md">
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-syne text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            Looking for a Different Orthopaedic Specialist?
          </h2>
          <p className="font-dm-sans text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Compare and choose from top-rated orthopaedic surgeons in Western Australia. Finding the perfect specialist for your specific joint, bone, or sports injury is just a click away.
          </p>
        </div>
        <Button 
          variant="primary" 
          size="primary" 
          className="whitespace-nowrap px-8 py-5 rounded-full text-sm md:text-base shadow-sm hover:shadow transition-all duration-300 shrink-0 cursor-pointer w-full sm:w-auto"
          asChild
        >
          <Link href="/surgeons?scroll=section">
            Find Another Surgeon
          </Link>
        </Button>
      </div>
    </div>
  );
};
