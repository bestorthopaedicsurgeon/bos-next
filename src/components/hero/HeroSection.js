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
import { auCities } from "@/lib/constants/auCities";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  const subspecialities = [
    { value: "UPPER_LIMB", label: "Upper Limb" },
    { value: "LOWER_LIMB", label: "Lower Limb" },
    { value: "SPINE", label: "Spine" },
    { value: "PEDIATRICS", label: "Paediatrics" },
    { value: "ONCOLOGY", label: "Oncology" },
    { value: "TRAUMA", label: "Trauma" },
    { value: "SPORTS", label: "Sports" },
    { value: "ARTHROPLASTY", label: "Arthroplasty" },
  ];

  return (
    <section className="mb-40">
      <div className="bg-primary text-primary-foreground mb-8 flex gap-10 rounded-4xl px-20 py-16 max-lg:justify-center max-md:px-10">
        <div className="flex w-full max-w-[570px] flex-col max-md:max-w-full">
          {/* <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mb-4 h-[2px] w-full" /> */}
          <div className="mb-4 inline-block">
            <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
            Unlocking Your Body For Optimal Wellness
          </h1>
          <div className="hidden h-[352px] w-[308px] max-lg:mx-auto max-lg:flex max-lg:justify-center">
            <Image
              src="/home/hero-skeleton-image.png"
              alt="hero"
              width={500}
              height={500}
              className="h-full w-full"
            />
          </div>
          <p className="mb-4">
            At our hospital, we are dedicated to providing exceptional medical
            care to our patients and their families. Our experienced team of
            medical professionalsh make us a leader in the healthcare industry
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Find Your Doctor
            </Button>
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Learn More
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src="/home/doctors.png"
              alt="logo"
              width={172}
              height={42}
              className="flex-shrink-0"
            />
            <div>
              <p>More than 52k</p>
              <p>Patients reviews</p>
            </div>
          </div>
        </div>
        <div className="mt-[-120px] max-h-[607px] w-full max-w-[456px] max-lg:hidden">
          <Image
            src="/home/hero-skeleton-image.png"
            alt="hero"
            width={607}
            height={456}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="rounded-4xl bg-white px-20 py-8">
        <h1 className="font-syne text-primary">Find A Surgeon</h1>
        <div className="flex gap-4 max-md:flex-wrap">
          <input
            className="border-primary min-h-[56px] w-full rounded-md border px-4 py-3.5"
            placeholder="Email"
          />
          <Select>
            <SelectTrigger className="border-primary h-[52px] min-h-[56px] w-full rounded-md border px-4 py-3.5">
              <SelectValue placeholder="Subspecialty" />
            </SelectTrigger>
            <SelectContent>
              {subspecialities.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
              {/* <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem> */}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="border-primary h-[52px] min-h-[56px] w-full rounded-md border px-4 py-3.5">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectContent>
                {auCities.map((item, index) => (
                  <SelectItem key={index} value={item.city}>
                    {item.city}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectContent>
          </Select>
          <Button className={"w-36"} variant={"primary"} size={"primary"}>
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
