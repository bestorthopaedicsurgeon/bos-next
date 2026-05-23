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
      <div className="bg-primary text-primary-foreground gap-10 flex items-center mb-8 rounded-4xl px-20 max-md:px-10 py-16 max-lg:justify-center overflow-hidden">
        <div className="max-w-[570px] max-md:max-w-full w-full flex flex-col">
          {/* <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mb-4 h-[2px] w-full" /> */}
          <div className="mb-4 inline-block">
            <p className="mb-4">About Us</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
            We Help Discover a Pain Free Path

          </h1>
          <div className="hidden max-lg:flex max-lg:justify-center max-lg:mx-auto max-h-[352px] w-full max-w-[348px] h-full mb-6">
            <Image
              src="/about/about.png"
              alt="hero"
              width={500}
              height={500}
              quality={100}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
          <p className="mb-4">
            Helping patients find the right orthopaedic surgeons with ease. Our platform lets you discover, review, and rate healthcare professionals based on real patient experiences.
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Link href="/surgeons?scroll=section">
              <Button variant={"primaryForeground"} size={"primaryForeground"}>
                Find Your Doctor
              </Button>
            </Link>
            <Link href="/contactUs">
              <Button variant={"primaryForeground"} size={"primaryForeground"}>
                Need Help?
              </Button>
            </Link>
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
              <p className="font-bold text-xl leading-tight">Trusted by 100+ Orthopaedic Surgeons</p>
              <p className="text-sm opacity-90">Across Western Australia</p>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-center max-w-[579px] w-full max-lg:hidden overflow-visible">
          <div className="relative w-full aspect-square scale-[1.45]">
            <Image
              src="/about/about.png"
              alt="hero"
              fill
              quality={100}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
