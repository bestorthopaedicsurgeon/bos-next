import ProfileHeader from "@/components/reusable/profileHeader";
import React from "react";

import { docProfile_Details } from "@/data/doctorProfile";
import { profileHeader } from "@/data/profileHeader";
import AvailabilityCalendar from "@/components/calendar";
import HospitalAffiliations from "@/components/docProfile/HospAffil";
import DocInfo from "@/components/docProfile/docInfo";
import DocProfile from "@/components/docProfile/docProfile";
import { TabsList } from "@/components/ui/tabs";
import { DocTabs } from "@/components/docProfile/tabs";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
const page = async () => {

  const session = await getServerSession(authOptions);
  console.log("Session in doctor profile page:", session);

  return (
    <div className="px-20 my-4 ">
      {docProfile_Details.stepper.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={docProfile_Details.doc_details[0].name}
        />
      ))}
      <div className="w-full max-w-7xl mx-auto flex flex-col min-lg:flex-row items-start gap-10 mt-10">
        {/* left area    */}
        <div className="flex-1 w-full flex flex-col gap-5">
          <DocProfile docProfile_Details={docProfile_Details} />
          <DocInfo docProfile_Details={docProfile_Details} />
        </div>
        {/* right area */}
        <div className="w-full min-lg:w-[450px] flex flex-col gap-5 xl:w-[500px]">
          <AvailabilityCalendar />
          <HospitalAffiliations />
        </div>
      </div>
      <DocTabs />
    </div>
  );
};

export default page;
