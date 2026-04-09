"use client";
import { useState, useRef } from "react";
import { MapPin, Phone, Building2 } from "lucide-react";

export default function HospitalAffiliations({ hospitals, className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);   // live px offset while dragging
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const dragStartX = useRef(null);
  const dragStartY = useRef(null);
  const isHorizontal = useRef(null); // lock axis on first move

  if (!hospitals || hospitals.length === 0) return <div />;

  const total = hospitals.length;
  const canGoPrev = currentIndex > 0;
  const canGoNextMobile = currentIndex + 1 < total;
  const canGoNextDesktop = currentIndex + 2 < total;

  // ── Navigate ─────────────────────────────────────────────────────────────
  const go = (dir) => {
    if (dir === "next" && canGoNextMobile) setCurrentIndex((p) => p + 1);
    if (dir === "prev" && canGoPrev) setCurrentIndex((p) => p - 1);
  };

  // ── Touch handlers (mobile) ──────────────────────────────────────────────
  const onTouchStart = (e) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartY.current = e.touches[0].clientY;
    isHorizontal.current = null;
    setIsDragging(true);
    setDragOffset(0);
  };

  const onTouchMove = (e) => {
    if (dragStartX.current === null) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    const dy = e.touches[0].clientY - dragStartY.current;

    // Determine axis lock on first significant move
    if (isHorizontal.current === null && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }

    if (!isHorizontal.current) return; // vertical scroll — do nothing
    e.preventDefault(); // stop page scroll only when swiping horizontally

    // Add resistance at edges
    const atStart = currentIndex === 0 && dx > 0;
    const atEnd = currentIndex === total - 1 && dx < 0;
    const resistance = atStart || atEnd ? 0.25 : 1;
    setDragOffset(dx * resistance);
  };

  const onTouchEnd = () => {
    if (isHorizontal.current) {
      const threshold = (containerRef.current?.offsetWidth || 200) * 0.3;
      if (dragOffset < -threshold && canGoNextMobile) setCurrentIndex((p) => p + 1);
      else if (dragOffset > threshold && canGoPrev) setCurrentIndex((p) => p - 1);
    }
    setDragOffset(0);
    setIsDragging(false);
    dragStartX.current = null;
    isHorizontal.current = null;
  };

  // ── Arrow buttons ────────────────────────────────────────────────────────
  const ArrowLeft = ({ disabled }) => (
    <button onClick={() => !disabled && go("prev")} disabled={disabled}
      className={`rounded-full p-2 ${disabled ? "cursor-not-allowed opacity-30" : "hover:bg-gray-100"}`}
      aria-label="Previous">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M8.87744 17.5173C4.24882 17.5171 0.496582 13.7642 0.496582 9.1355C0.496825 4.50702 4.24897 0.754881 8.87744 0.754639C13.5061 0.754639 17.259 4.50687 17.2593 9.1355C17.2593 13.7643 13.5063 17.5173 8.87744 17.5173Z" stroke="#006D77" strokeWidth="0.728804"/>
        <path d="M10.295 6.22083L7.41968 9.0467L10.295 11.8726" stroke="#006D77" strokeWidth="0.728804" strokeLinecap="round"/>
      </svg>
    </button>
  );

  const ArrowRight = ({ disabled }) => (
    <button onClick={() => !disabled && go("next")} disabled={disabled}
      className={`rounded-full p-2 ${disabled ? "cursor-not-allowed opacity-30" : "hover:bg-gray-100"}`}
      aria-label="Next">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9.05298 0.482666C13.6816 0.482909 17.4338 4.23582 17.4338 8.8645C17.4336 13.493 13.6815 17.2451 9.05298 17.2454C4.4243 17.2454 0.671386 13.4931 0.671143 8.8645C0.671143 4.23567 4.42415 0.482666 9.05298 0.482666Z" stroke="#006D77" strokeWidth="0.728804"/>
        <path d="M7.63546 11.7792L10.5107 8.9533L7.63546 6.12742" stroke="#006D77" strokeWidth="0.728804" strokeLinecap="round"/>
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
              target="_blank" rel="noopener noreferrer"
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
              <a href={`tel:${hospital.phone}`}
                className="text-[13px] font-[600] text-gray-600 hover:text-primary hover:underline underline-offset-2 transition-colors block mt-1">
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
            className="w-full h-full" style={{ border: "0" }}
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );

  return (
    <div className={`mx-auto mt-10 w-full rounded-lg bg-white px-8 py-5 shadow min-md:p-6 ${className}`}>

      {/* ── Mobile header ──────────────────────────────────────────────── */}
      <div className="flex items-center justify-between md:hidden">
        <h2 className="text-primary text-lg font-bold">Hospital Affiliations</h2>
        {total > 1 && (
          <div className="flex items-center gap-1">
            <ArrowLeft disabled={!canGoPrev} />
            <ArrowRight disabled={!canGoNextMobile} />
          </div>
        )}
      </div>

      {/* ── Desktop header ─────────────────────────────────────────────── */}
      <div className="hidden md:flex items-center justify-between">
        <h2 className="text-primary text-lg font-bold min-lg:text-2xl">Hospital Affiliations</h2>
        {total > 2 && (
          <div className="flex items-center gap-1">
            <ArrowLeft disabled={!canGoPrev} />
            <ArrowRight disabled={!canGoNextDesktop} />
          </div>
        )}
      </div>

      {/* ── Mobile: CSS transform swiper ───────────────────────────────── */}
      <div
        ref={containerRef}
        className="md:hidden overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Track: all cards side-by-side, shifted by currentIndex + live drag */}
        <div
          className="flex"
          style={{
            width: `${total * 100}%`,
            transform: `translateX(calc(${-currentIndex * (100 / total)}% + ${dragOffset}px))`,
            transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            willChange: "transform",
          }}
        >
          {hospitals.map((hospital, i) => (
            <div key={i} style={{ width: `${100 / total}%` }} className="shrink-0 px-1">
              <HospitalCard hospital={hospital} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators — mobile only */}
      {total > 1 && (
        <div className="md:hidden flex justify-center gap-1.5 mt-2 pb-1">
          {hospitals.map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-4 bg-primary" : "w-1.5 bg-gray-300"
              }`}
              aria-label={`Go to hospital ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* ── Desktop: 2 at a time ────────────────────────────────────────── */}
      <div className="hidden md:flex overflow-hidden">
        {hospitals.slice(currentIndex, currentIndex + 2).map((hospital, index) => (
          <div key={hospital.name}
            className={`w-full flex-shrink-0 ${total === 1 ? "md:w-full" : "md:w-1/2"} ${index === 1 ? "md:pl-4" : "md:pr-4"}`}>
            <div className={`h-full w-full overflow-hidden ${total === 1 ? "" : "max-w-[800px]"}`}>
              <HospitalCard hospital={hospital} />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}