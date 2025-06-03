import DoctorCard from "@/components/reusable/doctorCard";
import { Button } from "@/components/ui/button";
import { allDoctors, featuredDoctors } from "@/data/doctors";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

export const AllSurgeons = () => {
  return (
    <section className="mb-40">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-syne text-primary">
          Featured Orthopaedic Surgeons
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {allDoctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} reviewButton={true} />
        ))}
      </div>
    </section>
  );
};
