import React from "react";
import ProfileHeader from "@/components/reusable/profileHeader";
import { patientProfileHeader } from "@/data/patientProfile";
import DocProfile from "@/components/docProfile/docProfile";
import DocInfo from "@/components/docProfile/docInfo";
import { docProfile_Details } from "@/data/doctorProfile";
import HospitalAffiliations from "@/components/docProfile/HospAffil";
import Rating from "@/components/docProfile/Rating";
import PatientRating from "@/components/patientProfile/PatientRating";
import PatientAppointments from "@/components/patientProfile/PatientAppointments";
import QuestionsAndAnswers from "@/components/docProfile/QA";

const page = () => {
  return (
    <div className="container m-auto">
      {patientProfileHeader.stepper.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={data.step2}
          step3={data.step3}
        />
      ))}
      {/* ...rest of patient profile page... */}
      <div className="mt-30 flex justify-center max-lg:flex-col min-lg:gap-10">
        {/* left area    */}
        <div>
          <DocProfile docProfile_Details={docProfile_Details} />
          <DocInfo
            docProfile_Details={docProfile_Details}
            showLocation={false}
          />
          <PatientRating className="w-full" />
        </div>
        {/* right area */}
        <div className="">
          <PatientAppointments />
          <QuestionsAndAnswers className="" />
        </div>
      </div>
    </div>
  );
};

export default page;
