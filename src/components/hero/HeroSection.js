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
import { redirect } from "next/navigation";
import React, { useState, useCallback, useMemo } from "react";

export const HeroSection = ({ onSearchResults, onSearchStateChange }) => {
  const [searchForm, setSearchForm] = useState({
    email: "",
    subspecialty: "",
    location: ""
  });
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const subspecialities = useMemo(() => [
    { value: "UPPER_LIMB", label: "Upper Limb" },
    { value: "LOWER_LIMB", label: "Lower Limb" },
    { value: "SPINE", label: "Spine" },
    { value: "PEDIATRICS", label: "Paediatrics" },
    { value: "ONCOLOGY", label: "Oncology" },
    { value: "TRAUMA", label: "Trauma" },
    { value: "SPORTS", label: "Sports" },
    { value: "ARTHROPLASTY", label: "Arthroplasty" },
  ], []);

  const locationOptions = useMemo(() => auCities.map((city) => ({
    value: city.city,
    label: city.city,
  })), []);

  const handleSearch = useCallback(async () => {
    setIsSearching(true);
    onSearchStateChange?.(true);
    try {
      const allDoctors = await getAllDoctors();
      if (!allDoctors) {
        onSearchResults([]);
        return;
      }

      // Filter doctors based on search criteria
      let filteredDoctors = allDoctors;

      // Filter by email if provided
      if (searchForm.email.trim()) {
        filteredDoctors = filteredDoctors.filter((doctor) =>
          doctor.user?.email?.toLowerCase().includes(searchForm.email.toLowerCase())
        );
      }

      // Filter by subspecialty if provided
      if (searchForm.subspecialty.trim()) {
        filteredDoctors = filteredDoctors.filter((doctor) => {
          if (!doctor.subspecialities || !Array.isArray(doctor.subspecialities)) {
            return false;
          }
          return doctor.subspecialities.some((subspecialty) =>
            subspecialty.toLowerCase().includes(searchForm.subspecialty.toLowerCase()) ||
            subspecialities.find(sub => 
              sub.value.toLowerCase() === searchForm.subspecialty.toLowerCase() &&
              subspecialty.toLowerCase().includes(sub.label.toLowerCase())
            )
          );
        });
      }

      // Filter by location if provided
      if (searchForm.location.trim()) {
        filteredDoctors = filteredDoctors.filter((doctor) =>
          doctor.location?.toLowerCase().includes(searchForm.location.toLowerCase())
        );
      }

      onSearchResults(filteredDoctors);
      setHasSearched(true);
    } catch (error) {
      console.error("Search error:", error);
      onSearchResults([]);
      setHasSearched(true);
    } finally {
      setIsSearching(false);
      onSearchStateChange?.(false);
    }
  }, [searchForm, onSearchResults, onSearchStateChange, subspecialities]);

  const handleClearSearch = useCallback(() => {
    setSearchForm({
      email: "",
      subspecialty: "",
      location: ""
    });
    setHasSearched(false);
    onSearchResults(null); // null indicates show featured doctors
    onSearchStateChange?.(false);
  }, [onSearchResults, onSearchStateChange]);

  return (
    <section className="mb-40">
      <div className="bg-primary text-primary-foreground mb-8 flex items-center gap-10 rounded-4xl px-20 py-16 max-lg:justify-center max-md:px-10">
        <div className="flex w-full max-w-[570px] flex-col max-md:max-w-full">
          {/* <p className="mb-4">Find your surgeon!</p>
            <div className="bg-primary-foreground mb-4 h-[2px] w-full" /> */}
          <div className="mb-4 inline-block">
            <p className="mb-4">Welcome to Best Orthopaedic Surgeon (BOS) – Your Trusted Orthopaedic Surgeon Directory</p>
            <div className="bg-primary-foreground mx-auto h-[2px] w-full" />
          </div>
          <h1 className="font-syne mb-4">
          Built for Orthopaedic Surgeons. Trusted by Patients!
          </h1>
          <div className="hidden h-[352px] w-[308px] max-lg:mx-auto max-lg:flex max-lg:justify-center">
            <Image
              src="/home/hero.png"
              alt="hero"
              width={500}
              height={500}
              className="h-full w-full"
              fluid
            />
          </div>
          <p className="mb-4">
          Find the Right Orthopaedic Specialist, Fast
BOS is the one and only online directory dedicated exclusively to Orthopaedic surgeons throughout Perth, Fremantle, Bunbury, Geraldton, and beyond.
          </p>
          <div className="mb-4 flex flex-wrap gap-4">
            <Button variant={"primaryForeground"} size={"primaryForeground"}>
              Find Your Doctor
            </Button>
            <div
              onClick={() => {
                redirect("/about");
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
              className="flex-shrink-0"
            />
            <div>
              <p>More than 52k</p>
              <p>Patients reviews</p>
            </div>
          </div>
        </div>
        <div className="max-h-[367px] w-full max-w-[488px] scale-125 max-lg:hidden">
          <Image
            src="/home/hero.png"
            alt="hero"
            width={488}
            height={367}
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
            placeholder="Doctor Email"
            value={searchForm.email}
            onChange={(e) =>
              setSearchForm({ ...searchForm, email: e.target.value })
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
            disabled={isSearching}
          >
            {isSearching ? "Searching..." : hasSearched ? "Clear Search" : "Search"}
          </Button>
        </div>
      </div>
    </section>
  );
};
