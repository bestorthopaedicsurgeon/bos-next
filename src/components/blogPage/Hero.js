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
import React from "react";

export const HeroSection = () => {
  return (
    <section className="mb-40">
      <div className="bg-primary text-primary-foreground relative mb-8 rounded-4xl px-20 py-16">
        <div className="max-w-[570px]">
          {/* <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mb-4 h-[2px] w-full" /> */}
          <div className="mb-4 inline-block">
            <p className="mb-4">Got a Bone Problem?</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
            Find the Right Orthopedic Specialist
          </h1>
          <p className="mb-4">
            Get online or in-person consultations. Choose the best doctor based
            on ratings, experience, and detailed profiles. Expert care is just a
            click away.
          </p>
          <div className="mb-4 flex gap-4">
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Find Your Doctor
            </Button>
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Need Help?
            </Button>
          </div>
          <div className="flex items-center gap-4">
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
        <div className="absolute right-4 bottom-24">
          <Image
            src="/blog/blog-image.png"
            alt="hero"
            width={595}
            height={414}
          />
        </div>
      </div>
    </section>
  );
};
