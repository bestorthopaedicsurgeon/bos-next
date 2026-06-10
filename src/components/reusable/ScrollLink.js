"use client";
import React, { forwardRef } from "react";
import Link from "next/link";

const ScrollLink = forwardRef(({ href, scrollTarget, onClick, children, ...props }, ref) => {
  const handleClick = (e) => {
    if (scrollTarget && typeof window !== "undefined") {
      sessionStorage.setItem("scroll_to_surgeons", scrollTarget);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link href={href} onClick={handleClick} ref={ref} {...props}>
      {children}
    </Link>
  );
});

ScrollLink.displayName = "ScrollLink";

export default ScrollLink;
