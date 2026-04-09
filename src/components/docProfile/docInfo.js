"use client";
import React, { useState } from "react";
import { MapPin, ChevronLeft, ChevronRight, Phone, Printer, Building2 } from "lucide-react";


const DocInfo = ({ docProfile_Details, showLocation = true }) => {
  const data = docProfile_Details;
  const doctorProfile = data || {};

  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

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

      {/* ── Clinic Location — practices slider ──────────────────────── */}
      {showLocation && hasPractices && (
        <div className={`${box_style} flex flex-col min-md:flex-row items-stretch justify-between p-2`}>
          <div className="px-3 py-4 min-md:px-11 min-md:flex-1">
            <p className={`${main_heading}`}>Clinic Location</p>

            {/* Pagination */}
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

            {/* Clinic Name */}
            {activePractice?.clinicName && (
              <div className="mb-3 flex items-start gap-3">
                <Building2 className="text-primary mt-[2px] h-4 w-4 shrink-0" />
                <div>
                  <p className={heading_style}>Clinic Name</p>
                  <p className={info_style}>{activePractice.clinicName}</p>
                </div>
              </div>
            )}

            {/* Address */}
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

            {/* Phone Number */}
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

            {/* Fax Number */}
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

          {/* Map */}
          <div className="w-full min-md:w-[350px] lg:w-[400px] p-2 flex">
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
            ></iframe>
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
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default DocInfo;