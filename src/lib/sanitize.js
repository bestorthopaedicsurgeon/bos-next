/**
 * Shared form sanitization and validation utilities.
 * Use across all forms for consistent, scalable input safety.
 */

/**
 * Sanitize a string input: strip harmful chars, collapse excess spaces, limit length.
 * Safe for text, email, phone, names, messages. Non-strings return empty string.
 */
export function sanitizeInput(input) {
  if (input == null) return "";
  if (typeof input !== "string") return String(input);
  return input
    .replace(/[<>"'&]/g, "")
    .replace(/\s{3,}/g, "  ")
    .substring(0, 500);
}

/**
 * Sanitize a value for form state: strings are sanitized, other types passed through.
 * Use when you have mixed types (e.g. checkbox, file, number).
 */
export function sanitizeFormValue(value) {
  if (typeof value === "string") return sanitizeInput(value);
  return value;
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone) {
  const phoneRegex = /^[\d\s\-+()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 8;
}

export function validateName(name) {
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  return nameRegex.test(name);
}
