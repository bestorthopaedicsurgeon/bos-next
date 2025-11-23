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
            <p className="mb-4">Health tips and blogs</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
          Read Expert Blogs & Stay Informed
          </h1>
          <div className="hidden max-lg:flex max-lg:justify-center max-lg:mx-auto h-full max-h-[352px] max-w-[308px] w-full">
            <Image
              src="/blog/blog-image.png"
              alt="hero"
              width={500}
              height={500}
              className="h-full w-full"
            />
          </div>
          <p className="mb-4 max-lg:mt-10">
          Explore tips, insights, and research-backed advice from medical professionals. Stay ahead with trusted health knowledge for a better you.
          New posts updated regularly!
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Link href="#blogs">
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Read Blogs
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
              className="flex-shrink-0"
            />
            <div>
              <p>More than 52k</p>
              <p>Patients reviews</p>
            </div>
          </div>
        </div>
        <div className="max-h-[487px] max-w-[596px] w-full max-lg:hidden">
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
