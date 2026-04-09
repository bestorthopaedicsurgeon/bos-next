"use client";
import React, { useState, useEffect } from "react";
import { MapPin, ChevronLeft, ChevronRight, Phone, Printer, Building2 } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const DocInfo = ({ docProfile_Details, showLocation = true }) => {
  const data = docProfile_Details;
  const doctorProfile = data || {};

  // ── Desktop pagination ───────────────────────────────────────────────────
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  // ── Embla (mobile swiper) ────────────────────────────────────────────────
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const heading_style = "text-[14px] text-gray-500";
  const info_style = "text-[13px] font-[600] mt-2";
  const main_heading = "text-[20px] font-[600] text-primary mb-5";
  const box_style = "bg-secondary rounded-xl w-full shadow-sm";

  const practices = doctorProfile?.practices || [];
  const hasPractices = practices.length > 0;

  const formatTitle = (title) => {
    if (!title) return "";
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };
  const formattedTitle = formatTitle(doctorProfile?.title);

  const nextLocation = () => {
    setCurrentLocationIndex((prev) => (prev === practices.length - 1 ? 0 : prev + 1));
  };
  const prevLocation = () => {
    setCurrentLocationIndex((prev) => (prev === 0 ? practices.length - 1 : prev - 1));
  };

  const activePractice = hasPractices ? practices[currentLocationIndex] : null;

  // ── Reusable practice card content ──────────────────────────────────────
  const PracticeCard = ({ practice }) => (
    <div className="flex flex-col">
      {practice?.clinicName && (
        <div className="mb-3 flex items-start gap-3">
          <Building2 className="text-primary mt-[2px] h-4 w-4 shrink-0" />
          <div>
            <p className={heading_style}>Clinic Name</p>
            <p className={info_style}>{practice.clinicName}</p>
          </div>
        </div>
      )}

      <div className="mb-3 flex items-start gap-3">
        <MapPin className="text-primary mt-[2px] h-4 w-4 shrink-0" />
        <div>
          <p className={heading_style}>Address</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${practice?.clinicAddress || ""}${practice?.postCode ? ` ${practice.postCode}` : ""}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${info_style} block hover:text-primary underline-offset-2 hover:underline transition-colors`}
          >
            {practice?.clinicAddress}
            {practice?.postCode ? `, ${practice.postCode}` : ""}
          </a>
        </div>
      </div>

      {practice?.phone && (
        <div className="mb-3 flex items-start gap-3">
          <Phone className="text-primary mt-[2px] h-4 w-4 shrink-0" />
          <div>
            <p className={heading_style}>Phone Number</p>
            <a
              href={`tel:${practice.phone}`}
              className={`${info_style} block hover:text-primary hover:underline underline-offset-2 transition-colors`}
            >
              {practice.phone}
            </a>
          </div>
        </div>
      )}

      {practice?.fax && (
        <div className="mb-3 flex items-start gap-3">
          <Printer className="text-primary mt-[2px] h-4 w-4 shrink-0" />
          <div>
            <p className={heading_style}>Fax Number</p>
            <a
              href={`tel:${practice.fax}`}
              className={`${info_style} block hover:text-primary hover:underline underline-offset-2 transition-colors`}
            >
              {practice.fax}
            </a>
          </div>
        </div>
      )}

      {/* Map inline for mobile cards */}
      <div className="w-full mt-2 h-[200px] rounded-lg overflow-hidden border">
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            `${practice?.clinicName ? practice.clinicName + " " : ""}${practice?.practiceName ? practice.practiceName + " " : ""}${practice?.clinicAddress || ""}${practice?.postCode ? " " + practice.postCode : ""}`
          )}&output=embed&z=15&t=m`}
          className="w-full h-full"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );

  return (
    <>
      {/* ── Doctor's Information ─────────────────────────────────────── */}
      <div className={`${box_style} px-8 py-5`}>
        <p className={`${main_heading}`}>Doctor&apos;s Information</p>
        <div
          className="grid w-full items-center justify-center gap-y-5 max-md:grid-cols-2 max-sm:grid-cols-1 min-md:grid-cols-3"
          key={data.id}
        >
          <div>
            <p className={`${heading_style}`}>Name</p>
            <p className={`${info_style}`}>{`${formattedTitle ? `${formattedTitle}. ` : ""}${data.name}`}</p>
          </div>
          <div>
            <p className={`${heading_style}`}>Subspeciality</p>
            <p className={`${info_style} max-w-52`}>
              {doctorProfile?.subspecialities?.[0]?.split(",")[0] || "Not specified"}
            </p>
          </div>
          <div>
            <p className={`${heading_style}`}>Group Name</p>
            <p className={`${info_style}`}>{doctorProfile?.groupName}</p>
          </div>
          <div>
            <p className={`${heading_style}`}>Designation</p>
            <p className={`${info_style}`}>{formatTitle(doctorProfile?.designation)}</p>
          </div>
          <div>
            <p className={`${heading_style}`}>Qualification</p>
            <p className={`${info_style}`}>
              {doctorProfile?.featuredQualifications?.length > 0
                ? doctorProfile.featuredQualifications.join(", ")
                : doctorProfile?.qualifications?.[0] || "Not specified"}
            </p>
          </div>
        </div>
      </div>

      {/* ── Clinic Location ──────────────────────────────────────────── */}
      {showLocation && hasPractices && (
        <div className={`${box_style} p-2`}>

          {/* ── MOBILE: Embla swiper ──────────────────────────────────── */}
          <div className="md:hidden px-3 py-4">
            <div className="flex items-center justify-between mb-4">
              <p className={main_heading}>Clinic Location</p>
              {practices.length > 1 && (
                <div className="flex items-center gap-1 mb-5">
                  <button
                    onClick={() => emblaApi?.scrollPrev()}
                    disabled={selectedIndex === 0}
                    className={`rounded-full p-1 ${selectedIndex === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200"}`}
                  >
                    <ChevronLeft size={18} className="text-primary"/>
                  </button>
                  <button
                    onClick={() => emblaApi?.scrollNext()}
                    disabled={selectedIndex === practices.length - 1}
                    className={`rounded-full p-1 ${selectedIndex === practices.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-200"}`}
                  >
                    <ChevronRight size={18}  className="text-primary"/>
                  </button>
                </div>
              )}
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {practices.map((practice, i) => (
                  <div key={i} className="flex-[0_0_100%] min-w-0">
                    <PracticeCard practice={practice} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            {practices.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-4">
                {practices.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => emblaApi?.scrollTo(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === selectedIndex ? "w-4 bg-primary" : "w-1.5 bg-gray-300"
                    }`}
                    aria-label={`Go to location ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── DESKTOP: side-by-side info + map ─────────────────────── */}
          <div className="hidden md:flex flex-row items-stretch justify-between">
            <div className="px-11 py-4 flex-1">
              <p className={`${main_heading}`}>Clinic Location</p>

              {practices.length > 1 && (
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={prevLocation}
                    className="p-1 border rounded-md hover:bg-gray-200 flex items-center justify-center bg-white text-gray-500 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="text-sm font-medium text-gray-700">
                    {currentLocationIndex + 1} of {practices.length} locations
                  </span>
                  <button
                    onClick={nextLocation}
                    className="p-1 border rounded-md hover:bg-gray-200 flex items-center justify-center bg-white text-gray-800 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              {activePractice?.clinicName && (
                <div className="mb-3 flex items-start gap-3">
                  <Building2 className="text-primary mt-[2px] h-4 w-4 shrink-0" />
                  <div>
                    <p className={heading_style}>Clinic Name</p>
                    <p className={info_style}>{activePractice.clinicName}</p>
                  </div>
                </div>
              )}

              <div className="mb-3 flex items-start gap-3">
                <MapPin className="text-primary mt-[2px] h-4 w-4 shrink-0" />
                <div>
                  <p className={heading_style}>Address</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${activePractice?.clinicAddress || ""}${activePractice?.postCode ? ` ${activePractice.postCode}` : ""}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${info_style} block hover:text-primary underline-offset-2 hover:underline transition-colors`}
                  >
                    {activePractice?.clinicAddress}
                    {activePractice?.postCode ? `, ${activePractice.postCode}` : ""}
                  </a>
                </div>
              </div>

              {activePractice?.phone && (
                <div className="mb-3 flex items-start gap-3">
                  <Phone className="text-primary mt-[2px] h-4 w-4 shrink-0" />
                  <div>
                    <p className={heading_style}>Phone Number</p>
                    <a
                      href={`tel:${activePractice.phone}`}
                      className={`${info_style} block hover:text-primary hover:underline underline-offset-2 transition-colors`}
                    >
                      {activePractice.phone}
                    </a>
                  </div>
                </div>
              )}

              {activePractice?.fax && (
                <div className="mb-3 flex items-start gap-3">
                  <Printer className="text-primary mt-[2px] h-4 w-4 shrink-0" />
                  <div>
                    <p className={heading_style}>Fax Number</p>
                    <a
                      href={`tel:${activePractice.fax}`}
                      className={`${info_style} block hover:text-primary hover:underline underline-offset-2 transition-colors`}
                    >
                      {activePractice.fax}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop map */}
            <div className="w-[350px] lg:w-[400px] p-2 flex">
              <iframe
                key={currentLocationIndex}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${activePractice?.clinicName ? activePractice.clinicName + " " : ""}${activePractice?.practiceName ? activePractice.practiceName + " " : ""}${activePractice?.clinicAddress || ""}${activePractice?.postCode ? " " + activePractice.postCode : ""}`
                )}&output=embed&z=15&t=m`}
                className="w-full h-full min-h-[250px]"
                style={{ border: "0", borderRadius: "9px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── Fallback — hospital affiliations if no practices ─────────── */}
      {showLocation && !hasPractices && doctorProfile?.hospitalAffiliations?.[0]?.address && (
        <div className={`${box_style} flex flex-col min-md:flex-row items-stretch justify-between p-2`}>
          <div className="px-3 py-4 min-md:px-11 min-md:flex-1">
            <p className={`${main_heading}`}>Clinic Location</p>

            <div className="mb-3 flex items-start gap-3">
              <MapPin className="text-primary mt-[2px] h-4 w-4 shrink-0" />
              <div>
                <p className={heading_style}>Address</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    doctorProfile?.hospitalAffiliations?.[0]?.address || ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${info_style} block hover:text-primary underline-offset-2 hover:underline transition-colors`}
                >
                  {doctorProfile?.hospitalAffiliations?.[0]?.address}
                </a>
              </div>
            </div>

            {doctorProfile?.hospitalAffiliations?.[0]?.phone && (
              <div className="mb-3 flex items-start gap-3">
                <Phone className="text-primary mt-[2px] h-4 w-4 shrink-0" />
                <div>
                  <p className={heading_style}>Phone Number</p>
                  <a
                    href={`tel:${doctorProfile.hospitalAffiliations[0].phone}`}
                    className={`${info_style} block hover:text-primary hover:underline underline-offset-2 transition-colors`}
                  >
                    {doctorProfile.hospitalAffiliations[0].phone}
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="w-full min-md:w-[350px] lg:w-[400px] p-2 flex">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                doctorProfile?.hospitalAffiliations?.[0]?.address
              )}&output=embed&z=15&t=m`}
              className="w-full h-full min-h-[250px]"
              style={{ border: "0", borderRadius: "9px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DocInfo;