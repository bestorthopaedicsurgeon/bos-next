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
          <div className="hidden max-lg:flex max-lg:justify-center max-lg:mx-auto h-[352px] max-w-[308px] w-full">
            <Image
              src="/blog/blog-image.png"
              alt="hero"
              width={500}
              height={500}
              className="h-full w-full"
            />
          </div>
          <p className="mb-4">
          At BOS, we're committed to helping you stay informed, empowered, and connected when it comes to your bone, joint, and muscle health. Our blog is your go-to resource for expert advice, the latest orthopaedic news, patient stories, recovery tips, and guides to finding the right specialists near you.
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Link href="#blogs">
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Read Blogs
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
              className="flex-shrink-0"
            />
            <div>
              <p>More than 52k</p>
              <p>Patients reviews</p>
            </div>
          </div>
        </div>
        <div className="max-h-[487px] max-w-[456px] w-full max-lg:hidden">
          <Image
            src="/blog/blog-image.png"
            alt="hero"
            width={500}
            height={500}
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};
