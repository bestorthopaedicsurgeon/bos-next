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
import { redirect } from "next/navigation";
import { getDoctorProfileSelf } from "@/lib/apiCalls/server/doctor";
const Page = async () => {
  const session = await getServerSession(authOptions);

  // console.log("Session in doctor profile page:", session);

  const res = await getDoctorProfileSelf();
  // console.log("Doctor Profile Data:", doctorProfile);

  if (!res || !res.success) {
    console.error("Doctor profile not found");
    // redirect("/doctor-registration");
  }

  let doctData;

  if (res.success && res.data) {
    doctData = res.data;
    console.log("doctData", doctData);
  }

  return (
    <div className="">
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
          <DocProfile docProfile_Details={doctData} editProfile={true} />
          <DocInfo docProfile_Details={doctData} />
        </div>
        {/* right area */}
        <div>
          <AvailabilityCalendar />
          <HospitalAffiliations hospitals={doctData?.doctorProfile?.hospitalAffiliations} />
        </div>
      </div>
      <DocTabs doctData={doctData} ownProfile={true} />
    </div>
  );
};

export default Page;
