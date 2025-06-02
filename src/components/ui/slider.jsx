"use client";

import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react";
import { forwardRef, SVGProps, useState } from "react";

export default function UsePresenceData() {
  const items = [1, 2, 3, 4, 5, 6];
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState(1);
  const currentYear = new Date().getFullYear();
  function setSlide(newDirection) {
    const nextItem = wrap(0, slideContent.length, selectedItem + newDirection);
    setSelectedItem(nextItem);
    setDirection(newDirection);
  }
  const slideContent = [
    <>
      <p>March {currentYear}</p>
    </>,
    <>
      <p>April {currentYear}</p>
    </>,
  ];
  const color = `transparent`;

  return (
    <div style={container}>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide key={selectedItem} color={color}>
          {slideContent[selectedItem]}
        </Slide>
      </AnimatePresence>
      <motion.button
        initial={false}
        // animate={{ backgroundColor: color }}
        aria-label="Previous"
        style={button}
        onClick={() => setSlide(-1)}
        whileFocus={{ outline: `2px solid ${color}` }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowLeft />
      </motion.button>
      <motion.button
        initial={false}
        // animate={{ backgroundColor: color }}
        aria-label="Next"
        style={button}
        onClick={() => setSlide(1)}
        whileFocus={{ outline: `2px solid ${color}` }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  );
}

const Slide = forwardRef(function Slide({ color, children }, ref) {
  const direction = usePresenceData();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.2,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      style={{ ...box, backgroundColor: color }}
    >
      {children}
    </motion.div>
  );
});

/**
 * ==============   Icons   ================
 */
const iconsProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12.85",
  height: "15",
  viewBox: "0 0 24 24",
  //   fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function ArrowLeft() {
  return (
    <svg
      {...iconsProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      {...iconsProps}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  );
}

/**
 * ==============   Styles   ================
 */

const container = {
  display: "flex",
  position: "relative",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: 10,
};

const box = {
  width: 110,
  height: 30,
  // backgroundColor: "blue",
  // borderRadius: "10px",
};

const button = {
  backgroundColor: "transparent",
  // width: 40,
  // height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
  cursor: "pointer",
};
