"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React, { useState } from "react";
import { profileHeader } from "@/data/profileHeader";
import WelcomeTxt from "@/components/reusable/welcomeTxt";
import { doc_reg, calendar_data, calendar } from "@/data/doc_reg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import UsePresenceData from "@/components/ui/slider.jsx";
// import { Pencil } from "lucide";
import { Clock3, PencilIcon, User } from "lucide-react";
const page = () => {
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.53026 9.88407C9.23736 10.177 8.76256 10.177 8.46966 9.88407L0.823183 2.23757C0.530293 1.94467 0.530293 1.46987 0.823183 1.17697L1.17674 0.823374C1.46963 0.530474 1.9445 0.530474 2.2374 0.823374L8.99996 7.58597L15.7626 0.823374C16.0555 0.530474 16.5303 0.530474 16.8232 0.823374L17.1768 1.17697C17.4697 1.46987 17.4697 1.94467 17.1768 2.23757L9.53026 9.88407Z' fill='%23033333'/%3E%3C/svg%3E")`,
  };
  const dropDown =
    "border border-(--primary) rounded-md p-3 pr-5 appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:16px_12px";
  const formField = "flex flex-col gap-2 max-lg:col-span-2";
  const inputField = "border border-(--primary) rounded-md p-3";

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((item) => item !== specialty)
        : [...prev, specialty]
    );
  };
  return (
    <div className="container m-auto">
      {profileHeader.createProfile.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={data.step2}
          step3={data.step3}
        />
      ))}
      {/*need to check size */}
      {profileHeader.welcome.map((data, key) => (
        <div key={key} className="text-center mt-[77px]">
          <h3 className="text-(--primary)">{data.heading}</h3>
          <span>{data.subTxt}</span>
        </div>
      ))}

      <form
        action=""
        className="grid grid-cols-2 gap-[32px] container m-auto pt-16"
      >
        <div className={formField}>
          <label htmlFor="title">Title</label>
          <select
            name="title"
            id="title"
            className={dropDown}
            style={selectStyle}
          >
            <option value="">select your title</option>
            <option value="">Dr</option>
            <option value="">Ms</option>
            <option value="">Mr</option>
            <option value="">Prof</option>
          </select>
        </div>
        <div className={formField}>
          <label htmlFor="pic">Upload Profile Picture</label>
          <input type="file" name="pic" id="pic" className="hidden" />
          <label
            htmlFor="pic"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#83C5BE] text-white rounded-md cursor-pointer"
          >
            <span>Click to upload</span>
            <span>
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z"
                  fill="white"
                />
              </svg>
            </span>
          </label>
        </div>
        <div className={formField}>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" className={inputField} />
        </div>
        <div className={formField}>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" className={inputField} />
        </div>
        <div className={formField}>
          <label htmlFor="exp">Experience</label>
          <select name="exp" id="exp" className={dropDown} style={selectStyle}>
            <option value="">Select your years of experience</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <div className={formField}>
          <label htmlFor="desig">Designation</label>
          <select
            name="desig"
            id="desig"
            className={dropDown}
            style={selectStyle}
          >
            <option value="">Select Designation</option>
            <option value="">Doctor</option>
            <option value="">Surgeon</option>
            <option value="">General Physician</option>
          </select>
        </div>
        <div className={`${formField} col-span-2`}>
          <label htmlFor="prac_name">Practice Name</label>
          <input
            type="text"
            name="prac_name"
            id="prac_name"
            placeholder="Enter your practice name"
            className={inputField}
          />
        </div>
        <div className={`${formField} col-span-2`}>
          <label htmlFor="clinic_name">Clinic Address</label>
          <input
            type="text"
            name="clinic_name"
            id="clinic_name"
            placeholder="123 Maple Street, Apollo hospital, Springfield, Sydney"
            className={inputField}
          />
        </div>
        <div className={formField}>
          <label htmlFor="post_code">Suburb / State / Postcode </label>
          <input
            type="text"
            name="post_code"
            id="post_code"
            placeholder="Enter your Suburb / State / Postcode "
            className={inputField}
          />
        </div>
        <div className={formField}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter practice phone number "
            className={inputField}
          />
        </div>
        <div className={formField}>
          <label htmlFor="">Subspeciality/Special Interests</label>
          <div className="border-(--primary) border-1 p-3 ">
            <div
              className="max-h-[240px] overflow-auto "
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#2F797B #D9D9D9",
              }}
            >
              {doc_reg.Subspeciality.map((specialty) => (
                <div key={specialty} className="flex items-center">
                  <input
                    type="checkbox"
                    id={specialty.replace(/\s+/g, "-").toLowerCase()}
                    checked={selectedSpecialties.includes(specialty)}
                    onChange={() => handleSpecialtyChange(specialty)}
                    className="hidden"
                  />
                  <label
                    htmlFor={specialty.replace(/\s+/g, "-").toLowerCase()}
                    className={`flex items-center cursor-pointer select-none rounded-full py-2`}
                  >
                    <span
                      className={`w-4 h-4 inline-block mr-2 rounded-full border 
                    ${
                      selectedSpecialties.includes(specialty)
                        ? "bg-blue-500 border-blue-500"
                        : "bg-white border-gray-400"
                    }`}
                    ></span>
                    {specialty}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={formField}>
          <div className="border-(--primary) border-1 p-3 mt-9">
            <div
              className="h-[240px] overflow-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#2F797B #D9D9D9",
              }}
            >
              {selectedSpecialties.map((specialty) => (
                <div key={specialty}>
                  <label
                    htmlFor={specialty.replace(/\s+/g, "-").toLowerCase()}
                    className={`flex items-center cursor-pointer select-none rounded-full py-2`}
                  >
                    <span
                      className={`w-4 h-4 inline-block mr-2 rounded-full border bg-blue-500 border-blue-500`}
                    ></span>
                    {specialty}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="about_self">Tell us about yourself</label>
          <textarea
            name="about_self"
            id="about_self"
            className={`h-[240px] ${inputField}`}
            placeholder="Write a brief introduction about yourself."
          ></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="reg_assoc">Registrations & Associations</label>
          <textarea
            name="reg_assoc"
            id="reg_assoc"
            className={`h-[240px] ${inputField}`}
            placeholder="Enter your registrations and any professional memberships (AHPRA, AHPRA, AOA, FRACS etc. )"
          ></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="qual">Qualifications</label>
          <textarea
            name="qual"
            id="qual"
            className={`h-[240px] ${inputField}`}
            placeholder="List your degrees, diplomas, and certifications along with the awarding institution and year.
                        E.g.: M.B, B.S — University of Sydney, 1986"
          ></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="awd_pub">Awards & Publications</label>
          <textarea
            name="awd_pub"
            id="awd_pub"
            className={`h-[240px] ${inputField}`}
            placeholder="List your awards and publications in chronological order, starting with the most recent."
          ></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="hosp_aff">Hospital affiliations</label>
          <select
            name="hosp_aff"
            id="hosp_aff"
            className={dropDown}
            style={selectStyle}
          >
            <option value="">Select hospital (s)</option>
            <option value="">Dr</option>
            <option value="">Ms</option>
            <option value="">Mr</option>
            <option value="">Prof</option>
          </select>
        </div>
        <div className={formField}>
          <label htmlFor="avail">Set Your Availability</label>

          <Dialog className="overflow-auto max-w-full">
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 px-4 py-4 h-[48px] bg-[#83C5BE] text-white rounded-md cursor-pointer"
              >
                <span>Click to set availability</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>My Availability</DialogTitle>
                <DialogDescription>
                  Set your availabilty to let the patients choose the timeslots
                  to conveniently book appointments
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <UsePresenceData />
                  <button className="bg-(--primary) text-(--secondary) py-3 pt-[7px] cursor-pointer px-6 rounded-md">
                    Mark Holidays
                  </button>
                </div>

                <div className="flex flex-col space-y-4 mt-10 max-sm:gap-[30px]">
                  {calendar.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start justify-center max-sm:gap-[20px]"
                    >
                      <div className="font-semibold capitalize max-sm:gap-[10px] max-sm:w-[100px] w-[280px]">
                        {item.type}
                      </div>
                      <div className="flex flex-wrap gap-1 max-sm:items-start">
                        {item.date.map((day) => {
                          const isDisabled = item.disabled.includes(day);
                          const isHoliday = item.holiday.includes(day);

                          return (
                            <button
                              key={day}
                              disabled={isDisabled}
                              className={`py-[3px] px-[7px] text-[17px] flex items-center justify-center 
                ${
                  isHoliday ? "bg-[var(--primary)] rounded-full text-white" : ""
                } 
                ${isDisabled ? "cursor-not-allowed opacity-50" : ""}
              `}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                      <PencilIcon className="cursor-pointer min-lg:h-[20px] min-sm:h-[40px] min-sm:w-[40px] min-lg:w-[20px] h-[40px] w-[70px] ml-3" />
                    </div>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div>
          <div className="flex bg-(--secondary) p-6">
            <p>Mon</p>
            <div className="line h-10 w-1 bg-(--background)"></div>
            <div>
              <div className="flex items-center">
                <Clock3 />
                <p>09:00am - 09:30am</p>
              </div>
              <div className="flex items-center">
                <User />
                <p>Clinic</p>
              </div>
            </div>
            <select
              name="edit"
              id="edit"
              className={dropDown}
              style={selectStyle}
            >
              <option value="">Edit</option>
              <option value="">Delete</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 items-center max-lg:col-span-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="border-(--primary) h-3 w-3 border-2 appearance-none  checked:border-primary checked:bg-primary focus:outline-none "
          />
          <label htmlFor="terms">I accept the terms</label>
        </div>
      </form>
      <button className="btn_fill px-14 py-2 mt-10 flex justify-center m-auto max-sm:w-full">
        Confirm Registration
      </button>
    </div>
  );
};

export default page;
