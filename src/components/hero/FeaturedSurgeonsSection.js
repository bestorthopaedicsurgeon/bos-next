import DoctorCard from "@/components/reusable/doctorCard";
import { Button } from "@/components/ui/button";
import { featuredDoctors } from "@/data/doctors";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const FeaturedSurgeonsSection = () => {
  return (
    <section className="mb-40">
      <div className="mb-8 flex items-center justify-between">
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
        {/* <div className="bg-primary text-primary-foreground flex cursor-pointer items-center gap-2 rounded-full px-10 py-5 text-sm"></div> */}
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {featuredDoctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </section>
  );
};
