import React from "react";
import ProfileHeader from "@/components/reusable/profileHeader";
import { patientRegHeader } from "@/data/patient_reg";

const formField = "flex flex-col gap-2 max-md:col-span-2";
const inputField =
  "border border-(--primary) rounded-md p-3 focus:outline-none focus:border-primary";
const dropDown =
  "border border-(--primary) rounded-md p-3 pr-5 appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:16px_12px]";
const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.53026 9.88407C9.23736 10.177 8.76256 10.177 8.46966 9.88407L0.823183 2.23757C0.530293 1.94467 0.530293 1.46987 0.823183 1.17697L1.17674 0.823374C1.46963 0.530474 1.9445 0.530474 2.2374 0.823374L8.99996 7.58597L15.7626 0.823374C16.0555 0.530474 16.5303 0.530474 16.8232 0.823374L17.1768 1.17697C17.4697 1.46987 17.4697 1.94467 17.1768 2.23757L9.53026 9.88407Z' fill='%23033333'/%3E%3C/svg%3E")`,
};

const Page = () => {
  return (
    <div className="container m-auto px-2 md:px-0">
      <ProfileHeader
        heading={patientRegHeader.heading}
        step1={patientRegHeader.step1}
        step2={patientRegHeader.step2}
        step3={patientRegHeader.step3}
      />
      <div className="mt-8 text-center">
        <h2 className="text-primary mb-2 font-[700]">
          {patientRegHeader.subheading}
        </h2>
        <p className="mb-2 text-[14px] text-gray-500">
          {patientRegHeader.description}
        </p>
      </div>
      <form className="mx-auto mt-8 grid grid-cols-2 gap-6 rounded-lg bg-transparent md:gap-8">
        {/* First Name & Last Name */}
        <div className={formField}>
          <label htmlFor="fname">First name</label>
          <input
            id="fname"
            name="fname"
            className={inputField}
            placeholder="Enter your first name"
          />
        </div>
        <div className={formField}>
          <label htmlFor="lname">Last name</label>
          <input
            id="lname"
            name="lname"
            className={inputField}
            placeholder="Enter your last name"
          />
        </div>
        {/* Birth Date & Gender */}
        <div className={formField}>
          <label htmlFor="birthdate">Birth Date</label>
          <input
            id="birthdate"
            name="birthdate"
            className={inputField}
            placeholder="MM/YY/DD"
            type="date"
          />
        </div>
        <div className={formField}>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            className={dropDown + " w-full"}
            style={selectStyle}
            defaultValue=""
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Address */}
        <div className={formField + " col-span-2"}>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            name="address"
            className={inputField}
            placeholder="Enter your address"
          />
        </div>
        {/* Symptoms */}
        <div className={formField + " col-span-2"}>
          <label htmlFor="symptoms">Symptoms (optional)</label>
          <input
            id="symptoms"
            name="symptoms"
            className={inputField}
            placeholder="E.g back pain, muscle stretch..."
          />
        </div>
        {/* Upload Profile Picture */}
        <div className={formField + " col-span-2"}>
          <label htmlFor="profile_picture">Upload Profile Picture</label>
          <div className="flex h-full flex-col">
            <label
              htmlFor="profile_picture"
              className="border-primary flex min-h-[96px] flex-1 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-[#F8F8F8] p-4"
            >
              <span className="mb-2 text-center text-sm text-gray-500">
                Upload your profile picture
              </span>
              <svg
                width="60"
                height="60"
                viewBox="0 0 32 33"
                fill="#2F797B"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z"
                  fill="#2F797B"
                />
              </svg>
            </label>
            <input
              id="profile_picture"
              name="profile_picture"
              type="file"
              className="hidden"
            />
          </div>
        </div>
        {/* Accept Terms */}
        <div className="col-span-2 mt-2 flex items-center gap-2">
          <div className="relative">
            <input
              id="accept_terms"
              name="accept_terms"
              type="checkbox"
              className="peer h-4 w-4 appearance-none rounded border-2 border-primary bg-white checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <svg
              className="pointer-events-none absolute inset-0 h-4 w-4 text-white opacity-0 peer-checked:opacity-100"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <label htmlFor="accept_terms" className="text-sm">
            I accept the terms
          </label>
        </div>
        {/* Submit Button */}
        <div className="col-span-2 mt-4 flex justify-center">
          <button
            type="submit"
            className="btn_fill w-full px-14 py-2 md:w-auto"
          >
            Confirm Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
