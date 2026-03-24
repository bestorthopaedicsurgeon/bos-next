"use client";

import { useState, useCallback } from "react";
import { sanitizeFormValue } from "@/lib/sanitize";

/**
 * Form state with built-in sanitization on change.
 * Returns [formData, setFormData, handleChange].
 * Use handleChange(e) for inputs with name/value; sanitizes strings, passes through checkboxes/numbers.
 * Use setFormData for programmatic updates (e.g. loading session data).
 */
export function useSanitizedForm(initialState) {
  const [formData, setFormData] = useState(initialState);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const safeValue =
      type === "checkbox" ? checked : sanitizeFormValue(value);
    setFormData((prev) => ({ ...prev, [name]: safeValue }));
  }, []);

  return [formData, setFormData, handleChange];
}
