export const designationMap = {
  DOCTOR: "Doctor",
  SURGEON: "Surgeon",
  GENERAL: "General Physician",
};

export function slugify(title) {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes
}
