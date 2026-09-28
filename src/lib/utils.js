import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Titles are stored in capitals ("DR", "PROF", "MR") and some names carry
// double spaces; show them as "Dr Rhys Clark".
export function formatDoctorTitle(title) {
  if (!title) return "";
  return title
    .trim()
    .toLowerCase()
    .replace(/(^|[\s/])([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase());
}

export function formatDoctorName(title, name) {
  const cleanName = (name || "").replace(/\s+/g, " ").trim();
  return [formatDoctorTitle(title), cleanName].filter(Boolean).join(" ");
}

// "Professor" and "A/ Professor" are academic ranks, not specialties.
export function doctorSpecialtyLabel(designation) {
  return /spinal/i.test(designation || "") ? "Spinal Surgeon" : "Orthopaedic Surgeon";
}

export function slugify(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}
