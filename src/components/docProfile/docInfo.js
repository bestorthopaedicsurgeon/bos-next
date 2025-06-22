import React from "react";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
const DocInfo = ({ docProfile_Details }) => {
  const heading_style = "text-[14px] text-gray-500";
  const info_style = "text-[13px] font-[600] mt-2";
  const main_heading = "text-[20px] font-[600] text-primary mb-5";
  const box_style = "bg-secondary rounded-xl mt-5 w-full min-lg:max-w-[800px]";
  return (
    <>
      {/* doc details  */}
      <div className={`${box_style} px-8 py-5`}>
        <p className={`${main_heading}`}>Doctor’s Information</p>
        {docProfile_Details.doc_details.map((data, key) => (
          <div
            className="grid w-full items-center justify-center gap-y-5 max-md:grid-cols-2 max-sm:grid-cols-1 min-md:grid-cols-3"
            key={key}
          >
            <div>
              <p className={`${heading_style}`}>Name</p>
              <p className={`${info_style}`}>{data.name}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Experience</p>
              <p className={`${info_style}`}>{data.exp}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Subspeciality</p>
              <p className={`${info_style}`}>{data.sub_spec}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Hospital</p>
              <p className={`${info_style}`}>{data.hospital}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Email Address</p>
              <p className={`${info_style}`}>{data.email}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Designation</p>
              <p className={`${info_style}`}>{data.designation}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Qualification</p>
              <p className={`${info_style}`}>{data.qualification}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Consultation Fee</p>
              <p className={`${info_style}`}>EURO {data.fee}</p>
            </div>
            <div>
              <p className={`${heading_style}`}>Consultation Fee (Online)</p>
              <p className={`${info_style}`}>EURO {data.online_fee}</p>
            </div>
          </div>
        ))}
      </div>
      {/* doc location  */}

      <div
        className={`${box_style} flex flex-wrap items-center justify-between p-2`}
      >
        <div className="px-3 py-4 min-md:px-11">
          <p className={`${main_heading}`}>Clinic Location</p>
          <p className={`${heading_style}`}>Address</p>
          <p className={`${info_style}`}>
            {docProfile_Details.doc_details[0].clinic_loc}
          </p>
        </div>
        <div>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(docProfile_Details.doc_details[0].clinic_loc)}&output=embed`}
            className="w-full min-lg:w-[315px]"
            height="152"
            style={{ border: "0", " borderRadius": "9px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default DocInfo;
