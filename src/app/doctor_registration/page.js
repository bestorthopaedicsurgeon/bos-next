"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React, { useState } from "react";
import { profileHeader } from "@/data/profileHeader";
import WelcomeTxt from "@/components/reusable/welcomeTxt";
import { doc_reg } from "@/data/doc_reg";
const page = () => {
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  const specialties = [
    "Foot and Ankle Surgery",
    "Pediatric Orthopedics",
    "Joint Replacement (Arthroplasty)",
    "Spine Surgery",
    "Hand Surgery",
    "Shoulder and Elbow Surgery",
    "Sports Medicine",
  ];

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((item) => item !== specialty)
        : [...prev, specialty]
    );
  };
  return (
    <div>
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

      <form action="">
        <div>
          <label htmlFor="title">Title</label>
          <select name="title" id="title">
            <option value="">select your title</option>
            <option value="">Dr</option>
            <option value="">Ms</option>
            <option value="">Mr</option>
            <option value="">Prof</option>
          </select>
        </div>
        <div>
          <label htmlFor="pic">Upload Profile Picture</label>
          <input type="file" name="pic" id="pic" />
        </div>
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" />
        </div>
        <div>
          <label htmlFor="exp">Experience</label>
          <select name="exp" id="exp">
            <option value="">Select your years of experience</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
        </div>
        <div>
          <label htmlFor="desig">Designation</label>
          <select name="desig" id="desig">
            <option value="">Select Designation</option>
            <option value="">Doctor</option>
            <option value="">Surgeon</option>
            <option value="">General Physician</option>
          </select>
        </div>
        <div>
          <label htmlFor="prac_name">Practice Name</label>
          <input
            type="text"
            name="prac_name"
            id="prac_name"
            placeholder="Enter your practice name"
          />
        </div>
        <div>
          <label htmlFor="clinic_name">Clinic Address</label>
          <input
            type="text"
            name="clinic_name"
            id="clinic_name"
            placeholder="123 Maple Street, Apollo hospital, Springfield, Sydney"
          />
        </div>
        <div>
          <label htmlFor="post_code">Suburb / State / Postcode </label>
          <input
            type="text"
            name="post_code"
            id="post_code"
            placeholder="Enter your Suburb / State / Postcode "
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter practice phone number "
          />
        </div>
        <div>
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
        <div className="border-(--primary) border-1 p-3 ">
          <div
            className=" h-[240px] overflow-auto"
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
      </form>
    </div>
  );
};

export default page;
