"use client";
import InputField from "@/components/reusable/inputField";
import SelectField from "@/components/reusable/selectField";
import { SearchableSelect } from "@/components/reusable/SearchableSelect";
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
import { getAllDoctors } from "@/lib/apiCalls/client/allDoctor";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useCallback, useMemo } from "react";
import Link from "next/link";

export const HeroSection = () => {
  const router = useRouter();  
  const [searchForm, setSearchForm] = useState({
    name: "",
    subspecialty: "",
    location: "",
  });

  const subspecialities = useMemo(
    () => [
      { value: "UPPER_LIMB", label: "Upper Limb" },
      { value: "LOWER_LIMB", label: "Lower Limb" },
      { value: "SPINE", label: "Spine" },
      { value: "PEDIATRICS", label: "Paediatrics" },
      { value: "ONCOLOGY", label: "Oncology" },
      { value: "TRAUMA", label: "Trauma" },
      { value: "SPORTS", label: "Sports" },
      { value: "ARTHROPLASTY", label: "Arthroplasty" },
    ],
    [],
  );

  const locationOptions = useMemo(
    () =>
      auCities.map((city) => ({
        value: city.city,
        label: city.city,
      })),
    [],
  );

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams();
    if (searchForm.name.trim()) params.append("name", searchForm.name.trim());
    if (searchForm.subspecialty.trim()) params.append("subspecialty", searchForm.subspecialty.trim());
    if (searchForm.location.trim()) params.append("location", searchForm.location.trim());
    
    router.push(`/surgeons?${params.toString()}`);
  }, [searchForm, router]);

  return (
    <section className="mb-40">
      <div className="bg-primary text-primary-foreground mb-8 flex items-center justify-between gap-10 rounded-4xl px-20 py-16 max-lg:justify-center max-md:px-10">
        <div className="flex w-full max-w-[570px] flex-col max-md:max-w-full">
          {/* <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mb-4 h-[2px] w-full" /> */}
          <div className="mb-4 inline-block">
            <p className="mb-4">Welcome to Best Orthopaedic Surgeon (BOS)</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
            Built for Orthopaedic Surgeons. Trusted by Patients!
          </h1>
          <div className="hidden h-[352px] w-[308px] max-lg:mx-auto max-lg:flex max-lg:justify-center max-sm:h-full max-sm:w-full">
            <Image
              src="/home/bones.png"
              alt="hero"
              width={500}
              height={500}
              quality={100}
              className="h-full w-full"
              fluid
            />
          </div>
          <p className="mb-4">
            Welcome to BOS, Western Australia’s dedicated platform for finding,
            contacting, booking, rating and reviewing orthopaedic surgeons. Our
            online directory is dedicated exclusively to Orthopaedic surgeons
            throughout Perth, Fremantle, Bunbury, Geraldton, and beyond.
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Link href="/surgeons?scroll=section">
              <Button variant={"primaryForeground"} size={"primaryForeground"}>
                Find Your Doctor
              </Button>
            </Link>
            <div
              onClick={() => {
                router.push("/about");
              }}
              className="cursor-pointer"
            >
              <Button variant={"primaryForeground"} size={"primaryForeground"}>
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src="/home/doctors.png"
              alt="logo"
              width={172}
              height={42}
              quality={100}
              className="flex-shrink-0"
            />
            <div>
              <p>More than 52k</p>
              <p>Patients reviews</p>
            </div>
          </div>
        </div>
        <div className="max-h-[507px] w-full max-w-[350px] scale-125 max-lg:hidden">
          <Image
            src="/home/bones.png"
            alt="hero"
            width={1000}
            height={1000}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="rounded-4xl bg-white px-20 py-8">
        <div className="mb-4">
          <h1 className="font-syne text-primary">Find A Surgeon</h1>
        </div>
        <div className="flex gap-4 max-md:flex-wrap">
          <input
            className="border-primary min-h-[56px] w-full rounded-md border px-4 py-3.5"
            placeholder="Doctor Name"
            value={searchForm.name}
            onChange={(e) =>
              setSearchForm({ ...searchForm, name: e.target.value })
            }
          />
          <SearchableSelect
            options={subspecialities}
            placeholder="Subspecialty"
            value={searchForm.subspecialty}
            onChange={(value) =>
              setSearchForm({ ...searchForm, subspecialty: value })
            }
            className="w-full"
          />
          <SearchableSelect
            options={locationOptions}
            placeholder="Location"
            value={searchForm.location}
            onChange={(value) =>
              setSearchForm({ ...searchForm, location: value })
            }
            className="w-full"
          />
          <Button
            className={"w-36"}
            variant={"primary"}
            size={"primary"}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
