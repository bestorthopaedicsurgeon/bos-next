"use client";
import DoctorCard from "@/components/reusable/doctorCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Featured surgeons arrive as a prop from the server-rendered homepage
// (see getFeaturedDoctors), so this renders in the initial HTML with no
// client fetch, no loading skeleton and no extra API/database hit.
export const FeaturedSurgeonsSection = ({ doctors }) => {
  const hasResults = doctors && doctors.length > 0;

  return (
    <section className="mb-40">
      <div className="mb-8 flex max-sm:flex-wrap items-center justify-between">
        <h1 className="font-syne text-primary">
          Featured Orthopaedic Surgeons
        </h1>
        <Link href="/surgeons">
            <Button variant={"primary"} size={"primary"}>
              <div className="flex items-center gap-2">
                <p className="inline-flex items-center text-lg">See all</p>
                <Image
                  src="/icons/ArrowTopRight.svg"
                  alt="External link icon"
                  width={30}
                  height={30}
                />
              </div>
            </Button>
          </Link>
      </div>

      {!hasResults ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 text-6xl">👨‍⚕️</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-600">No featured doctors available</h3>
          <p className="text-gray-500">
            Please check back later or contact support.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {doctors?.map((doctor, index) => (
            <DoctorCard key={doctor.id || index} {...doctor} reviewButton={true} />
          ))}
        </div>
      )}
    </section>
  );
};
