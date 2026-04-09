"use client";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MapPin, Phone, Building2 } from "lucide-react";

export default function HospitalAffiliations({ hospitals, className = "" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // ✅ useEffect correctly wires up the select listener once emblaApi is ready
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Desktop pagination (2-at-a-time, arrow buttons)
  const [desktopIndex, setDesktopIndex] = useState(0);

  if (!hospitals || hospitals.length === 0) return <div />;

  const total = hospitals.length;
  const canGoPrevDesktop = desktopIndex > 0;
  const canGoNextDesktop = desktopIndex + 2 < total;

  const goDesktop = (dir) => {
    setDesktopIndex((prev) => prev + (dir === "next" ? 1 : -1));
  };

  // ── Arrow buttons ────────────────────────────────────────────────────────
  const ArrowLeft = ({ onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full p-2 ${disabled ? "cursor-not-allowed opacity-30" : "hover:bg-gray-100"}`}
      aria-label="Previous"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M8.87744 17.5173C4.24882 17.5171 0.496582 13.7642 0.496582 9.1355C0.496825 4.50702 4.24897 0.754881 8.87744 0.754639C13.5061 0.754639 17.259 4.50687 17.2593 9.1355C17.2593 13.7643 13.5063 17.5173 8.87744 17.5173Z" stroke="#006D77" strokeWidth="0.728804" />
        <path d="M10.295 6.22083L7.41968 9.0467L10.295 11.8726" stroke="#006D77" strokeWidth="0.728804" strokeLinecap="round" />
      </svg>
    </button>
  );

  const ArrowRight = ({ onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full p-2 ${disabled ? "cursor-not-allowed opacity-30" : "hover:bg-gray-100"}`}
      aria-label="Next"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9.05298 0.482666C13.6816 0.482909 17.4338 4.23582 17.4338 8.8645C17.4336 13.493 13.6815 17.2451 9.05298 17.2454C4.4243 17.2454 0.671386 13.4931 0.671143 8.8645C0.671143 4.23567 4.42415 0.482666 9.05298 0.482666Z" stroke="#006D77" strokeWidth="0.728804" />
        <path d="M7.63546 11.7792L10.5107 8.9533L7.63546 6.12742" stroke="#006D77" strokeWidth="0.728804" strokeLinecap="round" />
      </svg>
    </button>
  );

  // ── Hospital card ────────────────────────────────────────────────────────
  const HospitalCard = ({ hospital }) => (
    <div className="w-full py-4 flex flex-col h-full">
      <div className="flex-1">
        <div className="mb-3 flex items-start gap-3">
          <Building2 className="text-primary mt-[2px] h-4 w-4 shrink-0" />
          <div>
            <p className="text-[14px] text-gray-500">Hospital Name</p>
            <h3 className="text-[13px] font-[600] text-[#82889C] mt-1">
              {hospital.name?.replace(/^undefined\s+/i, "")}
            </h3>
          </div>
        </div>

        <div className="mb-3 flex items-start gap-3">
          <MapPin className="text-primary mt-[2px] h-4 w-4 shrink-0" />
          <div>
            <p className="text-[14px] text-gray-500">Address</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hospital.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-[600] text-gray-600 hover:text-primary underline-offset-2 hover:underline transition-colors block mt-1"
            >
              {hospital.address}
            </a>
          </div>
        </div>

        {hospital.phone && (
          <div className="mb-3 flex items-start gap-3">
            <Phone className="text-primary mt-[2px] h-4 w-4 shrink-0" />
            <div>
              <p className="text-[14px] text-gray-500">Phone Number</p>
              <a
                href={`tel:${hospital.phone}`}
                className="text-[13px] font-[600] text-gray-600 hover:text-primary hover:underline underline-offset-2 transition-colors block mt-1"
              >
                {hospital.phone}
              </a>
            </div>
          </div>
        )}
      </div>

      {hospital.address && (
        <div className="w-full mt-4 h-[150px] sm:h-[170px] rounded-lg overflow-hidden border">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(hospital.address)}&output=embed&z=15&t=m`}
            className="w-full h-full"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );

  return (
    <div className={`mx-auto mt-10 w-full rounded-lg bg-white px-8 py-5 shadow min-md:p-6 ${className}`}>

      {/* ── Mobile header ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between md:hidden mb-2">
        <h2 className="text-primary text-lg font-bold">Hospital Affiliations</h2>
        {total > 1 && (
          <div className="flex items-center gap-1">
            <ArrowLeft
              onClick={() => emblaApi?.scrollPrev()}
              disabled={selectedIndex === 0}
            />
            <ArrowRight
              onClick={() => emblaApi?.scrollNext()}
              disabled={selectedIndex === total - 1}
            />
          </div>
        )}
      </div>

      {/* ── Mobile: Embla swiper ────────────────────────────────────────── */}
      <div className="md:hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {hospitals.map((hospital, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0">
                <HospitalCard hospital={hospital} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        {total > 1 && (
          <div className="flex justify-center gap-1.5 mt-3 pb-1">
            {hospitals.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex ? "w-4 bg-primary" : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Go to hospital ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Desktop header ─────────────────────────────────────────────── */}
      <div className="hidden md:flex items-center justify-between">
        <h2 className="text-primary text-lg font-bold min-lg:text-2xl">Hospital Affiliations</h2>
        {total > 2 && (
          <div className="flex items-center gap-1">
            <ArrowLeft onClick={() => goDesktop("prev")} disabled={!canGoPrevDesktop} />
            <ArrowRight onClick={() => goDesktop("next")} disabled={!canGoNextDesktop} />
          </div>
        )}
      </div>

      {/* ── Desktop: 2 at a time ────────────────────────────────────────── */}
      <div className="hidden md:flex overflow-hidden">
        {hospitals.slice(desktopIndex, desktopIndex + 2).map((hospital, index) => (
          <div
            key={hospital.name}
            className={`w-full flex-shrink-0 ${total === 1 ? "md:w-full" : "md:w-1/2"} ${index === 1 ? "md:pl-4" : "md:pr-4"}`}
          >
            <HospitalCard hospital={hospital} />
          </div>
        ))}
      </div>

    </div>
  );
}