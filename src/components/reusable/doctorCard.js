"use client";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const DoctorCard = ({
  id,
  image,
  title,
  name,
  subspecialities,
  location,
  avgRating,
  designation,
  reviewButton = false,
}) => {
  const router = useRouter();
  return (
    <div className="border-primary flex max-sm:flex-col-reverse w-full items-center max-sm:justify-center max-sm:items-start justify-evenly gap-7 rounded-3xl border px-11 py-10">
      <div className="flex flex-col gap-3.5 max-sm:w-full">
        <h2 className="font-syne text-neutral-800">{`${title} ${name}`}</h2>
        <h4 className="text-primary">{designation}</h4>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/location.png"
            alt="Star icon"
            width={24}
            height={24}
          />
          <p className="text-lg text-neutral-800">{`${location}, Australia`}</p>
        </div>
        <div className="flex items-center gap-2 max-sm:w-full">
          <Image
            src="/icons/firstAid.png"
            alt="Star icon"
            width={24}
            height={24}
          />
          <p className="text-lg text-neutral-800 max-w-64 max-sm:w-full max-sm:max-w-full">
            {subspecialities?.[0]?.split(", ")[0] || "Not specified"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/icons/star.png" alt="Star icon" width={24} height={24} />
          <p className="text-lg text-neutral-800 max-sm:w-full">{avgRating}</p>
        </div>
        <div className="flex items-center gap-2 max-sm:flex-col">
          <div
            onClick={() => {
              router.push(`/doctor/${id}`);
            }}
            className="curssor-pointer max-sm:w-full"
          >
            <Button className="w-fit max-sm:w-full" variant={"primary"} size={"primary"}>
              View Profile
            </Button>
          </div>
          {reviewButton && (
            <Button className="w-fit max-sm:w-full" variant={"primary"} size={"primary"}>
              Write a Review
            </Button>
          )}
        </div>
      </div>
      <div className="relative h-[221px]  w-[195px] overflow-hidden rounded-md">
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
