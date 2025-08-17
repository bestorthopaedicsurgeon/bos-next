import Image from "next/image";
import React from "react";

const InfoSectionRight = ({image}) => {
  return (
    <section className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-[1.4fr_1fr] items-center">
      <Image
        src={image}
        alt="Orthopaedic Specialist"
        width={579}
        height={720}
      />
      <div className="min-lg:max-w-[600px]">
        <h5 className="text-primary mt-8">Your Trusted Source for Orthopaedic Care in Western Australia</h5>
        <p className="mt-4 text-lg text-gray-700">
        At BOS, our mission is simple: to make it easier for patients across Western Australia to connect with qualified, trusted Orthopaedic surgeons — all in one place.
        We are a purpose-built directory, exclusively focused on Orthopaedic specialists, designed to serve both patients seeking care and surgeons looking to grow their presence and impact in the community.
        </p>
        <h5 className="text-primary mt-8">Why We Exist?</h5>
        <p className="mt-4 text-lg text-gray-700">
        Orthopaedic conditions affect thousands of Australians each year — from sports injuries and fractures to chronic joint pain and spinal disorders. Yet, finding the right specialist can be overwhelming, especially when navigating countless general directories with mixed listings.
BOS was created to solve that.
We bring together verified Orthopaedic surgeons in a single, streamlined platform to ensure:
        </p>
        <ul className="mt-4 text-lg text-gray-700">
        <li>Patients find the care they need, faster.</li>
        <li>SSurgeons can focus on what they do best — helping people move better.</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoSectionRight;
