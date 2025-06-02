import React from "react";

const SelectField = ({ label, name, options }) => {
  return (
    <div className="mt-[40px] flex w-[213px] flex-col gap-3">
      <label htmlFor={name}>{label}</label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className="outline-primary w-full appearance-none rounded-md  px-[16px] py-[14px] outline"
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* ▼ icon on the right side */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
