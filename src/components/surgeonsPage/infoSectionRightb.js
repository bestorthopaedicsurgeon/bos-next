import Image from "next/image";
import React from "react";

const InfoSectionRightb = ({image}) => {
  return (
    <section className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1.4fr_1fr] items-center">
      <Image
        src={image}
        alt="Orthopaedic Specialist"
        width={579}
        height={720}
      />
      <div className="min-lg:max-w-[600px]">
        <h5 className="text-primary mt-8">Rate & Review Your Experience</h5>
        <p className="mt-4 text-lg text-gray-700">
        We believe that patient feedback matters — and it helps others make more informed choices about their healthcare.
        </p>
        <h5 className="text-primary mt-8">Leave a Review
        </h5>
        <p className="mt-4 text-lg text-gray-700">
        After your appointment, you can rate your Orthopaedic surgeon based on your experience, including professionalism, bedside manner, clarity of diagnosis, wait times, and overall satisfaction.
        </p>
        <h5 className="text-primary mt-8">Help Others Find the Right Surgeon
        </h5>
        <p className="mt-4 text-lg text-gray-700">
        Your honest feedback provides valuable insights for other patients in WA who are seeking trusted care.
        All reviews are moderated to ensure they meet our community guidelines and maintain a respectful, constructive tone.
        </p>
        <h5 className="text-primary mt-8">Our Vision
        </h5>
        <p className="mt-4 text-lg text-gray-700">
        To be the most trusted and comprehensive online hub for Orthopaedic care in Western Australia — improving access, transparency, and outcomes for all.
        </p>
        <h5 className="text-primary mt-8">Get Involved
        </h5>
        <ul className="mt-4 text-lg text-gray-700">
        <li><b>Patients</b> – Start your search today and find a surgeon who’s right for you.</li>
        <li><b>Surgeons</b> – Claim or list your profile to join a growing community of Orthopaedic experts and reach more patients across WA.</li>
       
        </ul>
      </div>
    </section>
  );
};

export default InfoSectionRightb;
