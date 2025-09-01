import InputField from "@/components/reusable/inputField";
import SelectField from "@/components/reusable/selectField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = () => {
  return (
    <section className="mb-40">
      <div className="bg-primary text-primary-foreground gap-10 flex mb-8 rounded-4xl px-20 max-md:px-10 py-16 max-lg:justify-center">
        <div className="max-w-[570px] max-md:max-w-full w-full flex flex-col">
          {/* <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mb-4 h-[2px] w-full" /> */}
          <div className="mb-4 inline-block">
            <p className="mb-4">Got a Bone Problem?</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
            Find the Right Orthopedic Specialist
          </h1>
          <div className="hidden max-lg:flex max-lg:justify-center max-lg:mx-auto max-h-[352px] w-full max-w-[348px] h-full mb-6">
            <Image
              src="/about/intro.png"
              alt="hero"
              width={500}
              height={500}
              quality={100}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-4">
            Get online or in-person consultations. Choose the best doctor based
            on ratings, experience, and detailed profiles. Expert care is just a
            click away.
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Link href="/surgeons">
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Find Your Doctor
            </Button>
            </Link>
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Need Help?
            </Button>
          </div>
          <div className="flex items-center flex-wrap gap-4 ">
            <Image
              src="/home/doctors.png"
              alt="logo"
              width={172}
              height={42}
              quality={100}
              className="flex-shrink-0 w-[172px] h-[42px]"
            />
            <div>
              <p>More than 52k</p>
              <p>Patients reviews</p>
            </div>
          </div>
        </div>
        <div className="mt-[-79px] h-full max-h-[600px] max-w-[579px] w-full max-lg:hidden mb-[-59px] max-[1367px]:mb-0 max-[1367px]:mt-0">
          <Image
            src="/about/intro.png"
            alt="hero"
            width={500}
            height={500}
            quality={100}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
