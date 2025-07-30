"use client";
import DoctorCard from "@/components/reusable/doctorCard";
import { Button } from "@/components/ui/button";
import { allDoctors, featuredDoctors } from "@/data/doctors";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export const AllSurgeons = ({ searchResults = null, isSearching = false }) => {
  const [allDoctorsApi, setAllDoctorsApi] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllDoctors = async () => {
      try {
        // Ensure minimum loading time for skeleton visibility
        const [response] = await Promise.all([
          fetch("/api/doctors/all"),
          new Promise(resolve => setTimeout(resolve, 800)) // Minimum 800ms loading
        ]);
        const res = await response.json();
        setAllDoctorsApi(res?.success ? res.data : null);
      } catch (error) {
        console.error("Error fetching all doctors:", error);
        setAllDoctorsApi(null);
      } finally {
        setLoading(false);
      }
    };

    // Only fetch all doctors if we're not in search mode
    if (searchResults === null) {
      setLoading(true); // Ensure loading state is set
      fetchAllDoctors();
    }
    // Don't set loading to false here - let the fetch complete
  }, [searchResults]);

  // Determine which doctors to display
  const displayDoctors = searchResults !== null ? searchResults : allDoctorsApi;
  const isSearchMode = searchResults !== null;
  const hasResults = displayDoctors && displayDoctors.length > 0;

  // Show loading skeleton for initial load
  if (loading && !isSearchMode) {
    return (
      <section className="mb-40" id="all_surgeons">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-syne text-primary">Loading All Surgeons...</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border-primary flex max-sm:flex-col-reverse w-full items-center max-sm:justify-center max-sm:items-start justify-evenly gap-7 rounded-3xl border px-11 py-10 animate-pulse">
              <div className="flex flex-col gap-3.5 max-sm:w-full flex-1">
                <div className="h-6 w-3/4 rounded bg-white"></div>
                <div className="h-4 w-1/2 rounded bg-white"></div>
                <div className="h-4 w-2/3 rounded bg-white"></div>
                <div className="h-4 w-1/2 rounded bg-white"></div>
                <div className="h-4 w-3/5 rounded bg-white"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-20 rounded bg-white"></div>
                  <div className="h-8 w-24 rounded bg-white"></div>
                </div>
              </div>
              <div className="relative h-[120px] w-[120px] rounded-full bg-white"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Show loading skeleton during search
  if (isSearching) {
    return (
      <section className="mb-40" id="all_surgeons">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-syne text-primary">Searching...</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border-primary flex max-sm:flex-col-reverse w-full items-center max-sm:justify-center max-sm:items-start justify-evenly gap-7 rounded-3xl border px-11 py-10 animate-pulse">
              <div className="flex flex-col gap-3.5 max-sm:w-full flex-1">
                <div className="h-6 w-3/4 rounded bg-white"></div>
                <div className="h-4 w-1/2 rounded bg-white"></div>
                <div className="h-4 w-2/3 rounded bg-white"></div>
                <div className="h-4 w-1/2 rounded bg-white"></div>
                <div className="h-4 w-3/5 rounded bg-white"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-20 rounded bg-white"></div>
                  <div className="h-8 w-24 rounded bg-white"></div>
                </div>
              </div>
              <div className="relative h-[120px] w-[120px] rounded-full bg-white"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mb-40" id="all_surgeons">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-syne text-primary">
          {isSearchMode ? 
            `Search Results ${displayDoctors?.length ? `(${displayDoctors.length})` : ''}` : 
            "All Orthopaedic Surgeons"
          }
        </h1>
      </div>
      
      {!hasResults && isSearchMode ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-600">No doctors found</h3>
          <p className="text-gray-500">
            Try adjusting your search criteria or clear the search to see all doctors.
          </p>
        </div>
      ) : !hasResults && !isSearchMode ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 text-6xl">👨‍⚕️</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-600">No doctors available</h3>
          <p className="text-gray-500">
            Please check back later or contact support.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {displayDoctors?.map((doctor, index) => (
            <DoctorCard key={doctor.id || index} {...doctor} reviewButton={true} />
          ))}
        </div>
      )}
    </section>
  );
};
