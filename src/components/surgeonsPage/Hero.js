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
import React, { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { debounce } from "lodash";

export const HeroSection = ({ onSearch, initialParams }) => {
  const [searchForm, setSearchForm] = useState(initialParams || {
    name: "",
    subspecialty: "",
    location: "",
  });

  const isFirstMount = useRef(true);
  const [hasSearched, setHasSearched] = useState(false);

  // Keep local form in sync with props (e.g. if URL changes from homepage search)
  useEffect(() => {
    if (initialParams) {
      setSearchForm(initialParams);
    }
  }, [initialParams]);

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

  // Stable debounced search function
  const debouncedSearch = useMemo(
    () => debounce((params) => onSearch(params), 500),
    [onSearch]
  );

  // Trigger search whenever searchForm changes
  useEffect(() => {
    const isFiltered = Object.values(searchForm).some((val) => val !== "");
    setHasSearched(isFiltered);

    // Skip initial search call (wrapper already handles initial data fetch)
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return; 
    }

    debouncedSearch(searchForm);

    // Cleanup
    return () => debouncedSearch.cancel();
  }, [searchForm, debouncedSearch]);

  const handleClearSearch = useCallback(() => {
    const emptyForm = {
      name: "",
      subspecialty: "",
      location: "",
    };
    setSearchForm(emptyForm);
  }, []);
  return (
    <section className="mb-20">
      <div className="bg-primary text-primary-foreground mb-8 flex items-center justify-between gap-10 rounded-4xl px-20 py-16 max-lg:justify-center max-md:px-10">
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
          <div className="hidden h-[352px] w-[308px] max-lg:mx-auto max-lg:flex max-lg:justify-center max-sm:h-full max-sm:w-full">
            <Image
              src="/surgeons/surgeons.png"
              alt="hero"
              width={600}
              height={600}
              quality={100}
              priority
              className="h-auto w-full object-contain"
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
              <p className="font-bold text-xl leading-tight">Trusted by 100+ Orthopaedic Surgeons</p>
              <p className="text-sm opacity-90">Across Western Australia</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[500px] items-center justify-center max-lg:hidden">
          <Image
            src="/surgeons/surgeons.png"
            alt="hero"
            width={600}
            height={600}
            quality={100}
            priority
            className="h-auto w-full object-contain"
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
          {hasSearched && (
            <Button
              className={"w-36"}
              variant={"primary"}
              size={"primary"}
              onClick={handleClearSearch}
            >
              Reset Filters
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
