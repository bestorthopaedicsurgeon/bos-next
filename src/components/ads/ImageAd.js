"use client";

import AdFrame from "@/components/ads/AdFrame";

export default function ImageAd({ creative, className }) {
  return (
    <AdFrame creative={creative} className={className}>
      <a
        href={creative.clickUrl}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="focus-visible:ring-primary block w-full focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset"
        aria-label={`View advertisement from ${creative.advertiserName} (opens in a new tab)`}
      >
        <picture>
          {creative.mobileImageUrl && (
            <source
              media="(max-width: 639px)"
              srcSet={creative.mobileImageUrl}
            />
          )}
          <img
            src={creative.desktopImageUrl}
            alt={creative.altText}
            className="block max-h-[220px] min-h-[90px] w-full object-cover sm:max-h-[250px]"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </a>
    </AdFrame>
  );
}
