import Image from "next/image";
import React from "react";

const InfoSectionLeft = ({image}) => {
  return (
    <section className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1.4fr_1fr] items-center">
      <div className="min-lg:max-w-[600px]">
        <h1 className="font-syne text-primary">For Orthopaedic Surgeons</h1>
        <p className="mt-4 text-lg text-gray-700">
          Orthopaedics is a medical specialty dedicated to diagnosing, treating,
          preventing, and rehabilitating conditions affecting the
          musculoskeletal system — including bones, joints, ligaments, tendons,
          muscles, and nerves. Orthopaedic care covers both surgical and
          non-surgical approaches to restore mobility, relieve pain, and improve
          quality of life.
        </p>
        {/* <h5 className="text-primary mt-8">Are You an Orthopaedic Surgeon Practicing in WA?</h5> */}
        {/* <p className="mt-4 text-sm text-gray-700">
          An Orthopaedic Specialist is a medical doctor trained to diagnose and
          treat disorders of the bones, joints, muscles, ligaments, and tendons.
          Whether it’s a sports injury, arthritis, fractures, or spine issues,
          orthopaedic doctors are skilled in providing comprehensive care — from
          physical therapies to complex surgeries.
        </p> */}
        <h5 className="text-primary mt-8">
        Are You an Orthopaedic Surgeon Practicing in WA?
        </h5>
        <p className="mt-4 text-lg text-gray-700">
        Join the only directory in Western Australia dedicated solely to Orthopaedic professionals.
        Claim your profile or join and list your profile today to showcase your expertise
        </p>
        <ul className="mt-4 text-lg text-gray-700">
          <li>
          Grow your online visibility
          </li>
          <li>
          Attract new patients
          </li>
          <li>Strengthen your local presence</li>
          <li>Be part of a trusted, surgeon-only platform</li>
        </ul>
        <p className="mt-4 text-lg text-gray-700">Boost visibility. Build trust. Grow your practice.</p>
      </div>
      <Image
        src={image}
        alt="Orthopaedic Specialist"
        width={579}
        height={720}
      />
    </section>
  );
};

export default InfoSectionLeft;
