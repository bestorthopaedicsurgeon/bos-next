import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const DoctorCard = ({
  image,
  name,
  specialty,
  location,
  expertise,
  rating,
  reviewButton = false,
}) => {
  return (
    <div className="border-primary flex w-full items-center justify-evenly gap-7 rounded-3xl border px-11 py-10">
      <div className="flex flex-col gap-3.5">
        <h2 className="font-syne text-neutral-800">{name}</h2>
        <h4 className="text-primary">{specialty}</h4>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/location.png"
            alt="Star icon"
            width={24}
            height={24}
          />
          <p className="text-lg text-neutral-800">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/firstAid.png"
            alt="Star icon"
            width={24}
            height={24}
          />
          <p className="text-lg text-neutral-800">{expertise}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/star.png" alt="Star icon" width={24} height={24} />
          <p className="text-lg text-neutral-800">{rating}</p>
        </div>
<div className="flex items-center gap-2">
          <Button className="w-fit" variant={"primary"} size={"primary"}>
            View Profile
          </Button>
          {reviewButton && (
            <Button className="w-fit" variant={"primary"} size={"primary"}>
              Write a Review
            </Button>
          )}
</div>
      </div>
      <div className="relative h-[221px] w-[195px] overflow-hidden rounded-md">
        <Image
          src={image || "/home/doctor-1.png"}
          alt="Doctor"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default DoctorCard;
