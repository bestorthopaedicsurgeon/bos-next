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
      <div className="mt-30 flex flex-wrap justify-center min-lg:gap-10">
        {/* left area    */}
        <div>
          <DocProfile docProfile_Details={docProfile_Details} />
          <DocInfo docProfile_Details={docProfile_Details} />
        </div>
        {/* right area */}
        <div>
          <AvailabilityCalendar />
          <HospitalAffiliations />
        </div>
      </div>
      <DocTabs />
    </div>
  );
};

export default page;
