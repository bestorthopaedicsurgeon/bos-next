"use client";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";

const DoctorCard = ({
  id,
  slug,
  image,
  title,
  name,
  subspecialities,
  location,
  avgRating: providedAvgRating,
  reviews = [],
  designation,
  featuredQualifications,
  reviewButton = false,
}) => {
  const router = useRouter();

  // Calculate average rating if not provided
  let displayRating = providedAvgRating;
  if (!displayRating && displayRating !== 0) {
    if (reviews && reviews.length > 0) {
      const totalScore = reviews.reduce((sum, review) => {
        return sum + ((review.professionalism || 0) + (review.punctuality || 0) + (review.helpfulness || 0) + (review.knowledge || 0)) / 4;
      }, 0);
      displayRating = (totalScore / reviews.length).toFixed(1);
    } else {
      displayRating = "0.0";
    }
  }

  const reviewCount = reviews?.length || 0;

  return (
    <div className="border-primary flex h-full w-full max-sm:flex-col-reverse items-center max-sm:items-start justify-between gap-4 xl:gap-7 rounded-3xl border p-6 xl:px-11 xl:py-10">
      <div className="flex h-full flex-1 flex-col max-sm:w-full">
        <div className="flex flex-col gap-3.5">
          <h2 className="font-syne text-neutral-800">{`${title} ${name}`}</h2>
          <h4 className="text-primary">{designation}</h4>
          <div className="flex items-center gap-2">
            <Image
              src="/icons/location.png"
              alt="Location icon"
              width={24}
              height={24}
            />
            <p className="text-lg text-neutral-800">{`${location}, Australia`}</p>
          </div>
          <div className="flex items-center gap-2 max-sm:w-full">
            <Image
              src="/icons/firstAid.png"
              alt="First Aid icon"
              width={24}
              height={24}
            />
            <p className="text-lg text-neutral-800 max-w-64 max-sm:w-full max-sm:max-w-full">
              {featuredQualifications && featuredQualifications.length > 0
                ? featuredQualifications.join(", ")
                : (subspecialities?.[0]?.split(", ")[0] || "Not specified")}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/star.png" alt="Star icon" width={24} height={24} />
            <p className="font-sans text-base text-gray-500 max-sm:w-full">
              {displayRating}/5.0 <span className="text-sm text-gray-400">({reviewCount})</span>
            </p>
          </div>
        </div>

        <div className="mt-auto pt-6 flex flex-wrap items-center gap-2 max-sm:flex-col">
          <div
            onClick={() => {
              router.push(`/doctor/${slug || id}`);
            }}
            className="cursor-pointer max-sm:w-full"
          >
            <Button className="w-fit max-sm:w-full" variant={"primary"} size={"primary"}>
              View Profile
            </Button>
          </div>
          {reviewButton && (
            <Button
              className="w-fit max-sm:w-full"
              variant={"primary"}
              size={"primary"}
              onClick={() => {
                router.push(`/doctor/${slug || id}?writeReview=true`);
              }}
            >
              Write a Review
            </Button>
          )}
        </div>
      </div>
      <div className="relative h-[160px] w-[130px] xl:h-[221px] xl:w-[195px] shrink-0 overflow-hidden rounded-md">
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
