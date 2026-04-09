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
import Link from "next/link";
import React, { useState, useCallback, useMemo } from "react";

export const HeroSection = ({ onSearch }) => {
  const [searchForm, setSearchForm] = useState({
    name: "",
    subspecialty: "",
    location: "",
  });
  const [hasSearched, setHasSearched] = useState(false);

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
    onSearch(searchForm);
    setHasSearched(true);
  }, [searchForm, onSearch]);

  const handleClearSearch = useCallback(() => {
    const emptyForm = {
      name: "",
      subspecialty: "",
      location: "",
    };
    setSearchForm(emptyForm);
    setHasSearched(false);
    onSearch(emptyForm);
  }, [onSearch]);
  return (
    <section className="mb-20">
      <div className="bg-primary text-primary-foreground mb-8 flex gap-10 rounded-4xl px-20 py-16 max-lg:justify-center max-md:px-10">
        <div className="flex w-full max-w-[570px] flex-col max-md:max-w-full">
          {/* <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mb-4 h-[2px] w-full" /> */}
          <div className="mb-4 inline-block">
            <p className="mb-4">Got a Bone Problem?</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
            Find the Right Orthopedic Specialist
          </h1>
          <div className="hidden h-[352px] w-full max-w-[308px] max-lg:mx-auto max-lg:flex max-lg:justify-center">
            <Image
              src="/surgeons/surgeons.png"
              alt="hero"
              width={500}
              height={500}
              quality={100}
              priority
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mb-4">
            Review and choose the best doctor based on ratings, experience, and
            detailed profiles. Expert care is just a click away.
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Link href="#all_surgeons">
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
          <div className="flex flex-wrap items-center gap-4">
            <Image
              src="/home/doctors.png"
              alt="logo"
              width={172}
              height={42}
              quality={100}
              className="h-[42px] w-[172px] flex-shrink-0"
            />
            <div>
              <p>More than 52k</p>
              <p>Patients reviews</p>
            </div>
          </div>
        </div>
        <div className="mb-[-64px] max-h-[607px] w-full max-w-[596px] max-lg:hidden">
          <Image
            src="/surgeons/surgeons.png"
            alt="hero"
            width={500}
            height={500}
            quality={100}
            priority
            className="h-full w-full object-contain"
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
            onClick={hasSearched ? handleClearSearch : handleSearch}
          >
            {hasSearched ? "Clear Search" : "Search"}
          </Button>
        </div>
      </div>
    </section>
  );
};
