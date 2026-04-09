"use client";
import DoctorCard from "@/components/reusable/doctorCard";
import { Button } from "@/components/ui/button";
import { getAllDoctors } from "@/lib/apiCalls/client/allDoctor";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

const DOCTORS_PER_PAGE = 12;

export const AllSurgeons = ({ searchParams = {} }) => {
  const [doctorsResponse, setDoctorsResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchDoctors = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getAllDoctors({
        page: currentPage,
        limit: DOCTORS_PER_PAGE,
        name: searchParams.name,
        subspecialty: searchParams.subspecialty,
        location: searchParams.location,
      });

      if (res?.success) {
        setDoctorsResponse(res);
      } else {
        setDoctorsResponse(null);
      }
    } catch (error) {
      console.error("Error fetching surgeons:", error);
      setDoctorsResponse(null);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchParams]);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]);

  // Reset to page 1 when search filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchParams]);

  const displayDoctors = doctorsResponse?.data || [];
  const pagination = doctorsResponse?.pagination || { totalPages: 0, totalCount: 0 };
  const totalDoctors = pagination.totalCount;
  const totalPages = pagination.totalPages;
  const hasResults = displayDoctors.length > 0;
  const isSearchMode = Object.keys(searchParams).length > 0;

  // Pagination calculations for display info
  const startIndex = (currentPage - 1) * DOCTORS_PER_PAGE;
  const endIndex = startIndex + displayDoctors.length;

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    // Smooth scroll to results section
    document.getElementById('all_surgeons')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first page, last page, current page, and nearby pages
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Show loading skeleton
  if (loading) {
    return (
      <section className="mb-40" id="all_surgeons">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-syne text-primary">
            {isSearchMode ? "Searching..." : "Loading All Surgeons..."}
          </h1>
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
            `Search Results ${totalDoctors ? `(${totalDoctors})` : ''}` : 
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
        <>
          {/* Results count */}
          <div className="mb-4 text-sm text-gray-600">
            Showing {startIndex + 1}-{Math.min(endIndex, totalDoctors)} of {totalDoctors} surgeons
          </div>

          {/* Doctors grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
            {displayDoctors?.map((doctor, index) => (
              <DoctorCard key={doctor.id || index} {...doctor} reviewButton={true} />
            ))}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {/* Previous button */}
              <Button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                variant="outline"
                className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="ml-1">Previous</span>
              </Button>

              {/* Page numbers */}
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="px-2 text-gray-500">...</span>
                ) : (
                  <Button
                    key={page}
                    onClick={() => goToPage(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    className={`px-4 py-2 min-w-[40px] ${
                      currentPage === page 
                        ? 'bg-primary text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </Button>
                )
              ))}

              {/* Next button */}
              <Button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                variant="outline"
                className="px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="mr-1">Next</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
};
