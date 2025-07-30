"use client";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const SearchableSelect = ({
  options = [],
  placeholder = "Select an option",
  value,
  onChange,
  className = "",
  searchPlaceholder = "Search...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  // Calculate filtered options directly - no delay
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (value) {
      const selectedOption = options.find((option) => option.value === value);
      setInputValue(selectedOption ? selectedOption.label : value);
    } else {
      setInputValue("");
    }
  }, [value, options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        // If no valid option selected, reset to empty
        if (!value) {
          setInputValue("");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value]);

  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    setInputValue(inputVal);
    setIsOpen(true);
    
    // If input matches an option exactly, set that as the value
    const exactMatch = options.find(
      (option) => option.label.toLowerCase() === inputVal.toLowerCase()
    );
    if (exactMatch) {
      onChange(exactMatch.value);
    } else {
      onChange(inputVal); // Pass the typed value even if not in options
    }
  };

  const handleOptionSelect = (option) => {
    setInputValue(option.label);
    setIsOpen(false);
    onChange(option.value);
  };

  const handleClear = () => {
    setInputValue("");
    setIsOpen(false);
    onChange("");
    inputRef.current?.focus();
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      inputRef.current?.focus();
    }
  };

  return (
    <div className={cn("relative w-full", className)} ref={dropdownRef}>
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="border-primary min-h-[56px] w-full rounded-md border px-4 py-3.5 pr-20"
        />
        <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {inputValue && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 hover:bg-gray-100"
              onClick={handleClear}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 hover:bg-gray-100"
            onClick={handleToggleDropdown}
          >
            {isOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleOptionSelect(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center px-4 py-6 text-center">
              {inputValue ? (
                <>
                  <div className="mb-2 text-2xl">🔍</div>
                  <div className="mb-1 font-medium text-gray-600">Not found</div>
                  <div className="text-xs text-gray-500">
                    &ldquo;{inputValue}&rdquo; doesn&apos;t match any available options
                  </div>
                </>
              ) : (
                <div className="text-gray-500">No options available</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};