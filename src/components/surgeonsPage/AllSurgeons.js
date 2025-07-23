import DoctorCard from "@/components/reusable/doctorCard";
import { Button } from "@/components/ui/button";
import { allDoctors, featuredDoctors } from "@/data/doctors";
import { getFeaturedDoctors } from "@/lib/apiCalls/doctor";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

export const AllSurgeons = async () => {
    const res = await getFeaturedDoctors();
    const AllDoctorsApi = res.success ? res.data : null;
    console.log("All Doctors:", AllDoctorsApi);
  return (
    <section className="mb-40">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-syne text-primary">
          Featured Orthopaedic Surgeons
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {AllDoctorsApi.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} reviewButton={true} />
        ))}
      </div>
    </section>
  );
};
