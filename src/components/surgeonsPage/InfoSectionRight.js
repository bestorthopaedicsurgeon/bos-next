import Image from "next/image";
import React from "react";

const InfoSectionRight = ({image}) => {
  return (
    <section className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1.4fr_1fr] lg:px-16">
      <Image
        src={image}
        alt="Orthopaedic Specialist"
        width={579}
        height={720}
      />
      <div>
        <h5 className="text-primary mt-8">What conditions does an Orthopaedic Specialist treat?</h5>
        <p className="mt-4 text-sm text-gray-700">
          Orthopaedics is a medical specialty dedicated to diagnosing, treating,
          preventing, and rehabilitating conditions affecting the
          musculoskeletal system — including bones, joints, ligaments, tendons,
          muscles, and nerves. Orthopaedic care covers both surgical and
          non-surgical approaches to restore mobility, relieve pain, and improve
          quality of life.
        </p>
        <h5 className="text-primary mt-8">Services Offered by Orthopaedic Specialists</h5>
        <p className="mt-4 text-sm text-gray-700">
          An Orthopaedic Specialist is a medical doctor trained to diagnose and
          treat disorders of the bones, joints, muscles, ligaments, and tendons.
          Whether it’s a sports injury, arthritis, fractures, or spine issues,
          orthopaedic doctors are skilled in providing comprehensive care — from
          physical therapies to complex surgeries.
        </p>
        <h5 className="text-primary mt-8">
          What does an Orthopaedic Specialist do?
        </h5>
        <p className="mt-4 text-sm text-gray-700">
          An Orthopaedic Specialist in Australia offers expert services for
          musculoskeletal health. Their work includes both surgical and
          non-surgical treatment plans to restore mobility, reduce pain, and
          improve the structural integrity of bones and joints. Common services
          offered by orthopaedic doctors include: Diagnosing and treating bone,
          joint, and muscle disorders. Performing surgeries to repair fractures
          or replace joints. Prescribing physical therapy, braces, or
          medications. Providing injury prevention advice and rehabilitation
          programs..
        </p>
      </div>
    </section>
  );
};

export default InfoSectionRight;
