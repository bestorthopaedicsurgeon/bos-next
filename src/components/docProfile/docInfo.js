import React from 'react'
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
const DocInfo = ({docProfile_Details}) => {
      const heading_style = "text-[14px] text-gray-500";
      const info_style = "text-[13px] font-[600] mt-2";
      const main_heading = "text-[20px] font-[600] text-primary mb-5";
      const box_style = "bg-secondary rounded-xl mt-5 max-w-[800px]";
  return (
    <div>
       <div>
      
        {/* doc details  */}
        <div className={`${box_style} py-5 px-8`}>
          <p className={`${main_heading}`}>Doctor’s Information</p>
          {
            docProfile_Details.doc_details.map((data, key) => (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 items-center justify-center" key={key}>
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
            ))
          }

        </div>
        {/* doc location  */}

         <div className={`${box_style} flex justify-between items-center p-2`}>   
            <div className="py-4 px-11">
              <p className={`${main_heading}`}>Clinic Location</p>
              <p className={`${heading_style}`}>Address</p>
              <p className={`${info_style}`}>{docProfile_Details.doc_details[0].clinic_loc}</p>
            </div>
            <div>
              <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(docProfile_Details.doc_details[0].clinic_loc)}&output=embed`} width="315" height="152" style={{"border":"0"," borderRadius":"9px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DocInfo
