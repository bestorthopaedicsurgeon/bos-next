import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const DoctorCard = () => {
  return (
    <div className="border-primary flex items-center gap-7 rounded-3xl border px-11 py-10 w-fit">
      <div className="flex flex-col gap-3.5">
        <h2 className="text-primary font-syne">Dr. John Doe</h2>
        <h4> Orthopaedic Surgeon</h4>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/location.png"
            alt="Star icon"
            width={24}
            height={24}
          />
          <p className="text-lg text-neutral-800"> Sydney, Australia</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/firstAid.png"
            alt="Star icon"
            width={24}
            height={24}
          />
          <p className="text-lg text-neutral-800"> Feet & ankle</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/star.png" alt="Star icon" width={24} height={24} />
          <p className="text-lg text-neutral-800"> 5.0</p>
        </div>
        <Button className="w-fit" variant={"primary"} size={"primary"}>
          View Profile
        </Button>
      </div>
      <div className="relative h-[221px] w-[195px] overflow-hidden rounded-md">
        <Image
          src="/home/doctor-1.jpg"
          alt="Doctor"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default DoctorCard;
