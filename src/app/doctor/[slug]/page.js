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
import { getDoctorProfile } from "@/lib/apiCalls/server/doctor";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await getDoctorProfile(slug);
  
  if (!res || !res.success || !res.data) {
    return {
      title: "Doctor Profile Not Found | Best Orthopaedic Surgeons",
    };
  }

  const doctData = res.data;
  const formatTitle = (title) => {
    if (!title) return "";
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };
  
  const formattedTitle = formatTitle(doctData?.title);
  const doctorName = doctData?.name || "Doctor";
  const designation = doctData?.designation ? ` - ${doctData.designation.charAt(0).toUpperCase() + doctData.designation.slice(1).toLowerCase()}` : "";
  const location = doctData?.location ? ` in ${doctData.location}` : "";
  
  const pageTitle = `${formattedTitle ? `${formattedTitle}. ` : ""}${doctorName}${designation}${location}`;
  
  let description = `View the profile of ${formattedTitle ? `${formattedTitle}. ` : ""}${doctorName} on Best Orthopaedic Surgeons.`;
  if (doctData?.about) {
    description = doctData.about.length > 160 ? doctData.about.substring(0, 157) + "..." : doctData.about;
  }

  const ogImages = [];
  if (doctData?.image) {
    ogImages.push(doctData.image);
  }

  return {
    title: pageTitle,
    description: description,
    openGraph: {
      title: pageTitle,
      description: description,
      images: ogImages.length > 0 ? ogImages : undefined,
    },
  };
}

const Page = async ({ params }) => {
  // const session = await getServerSession(authOptions);
  const { slug } = await params
  
  // Check if we should redirect from ID to slug
  const isNumeric = !isNaN(Number(slug));

  const res = await getDoctorProfile(slug);

  if (res?.success && res.data) {
    // If it was a numeric ID, redirect to the slug for SEO
    if (isNumeric && res.data.slug) {
      redirect(`/doctor/${res.data.slug}`);
    }
  }
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

  // Helper to standardise titles like DR. to Dr.
  const formatTitle = (title) => {
    if (!title) return "";
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  };
  const formattedTitle = formatTitle(doctData?.title);

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Person", "MedicalBusiness", "LocalBusiness"],
            name: pageTitle,
            jobTitle: designation.replace(' - ', '') || "Orthopaedic Surgeon",
            image: doctData?.image || undefined,
            address: doctData?.location || undefined,
            url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://www.bestorthopaedicsurgeon.com.au"}/doctor/${doctData?.slug}`
          }),
        }}
      />
      {docProfile_Details.stepper.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={`${formattedTitle ? `${formattedTitle}. ` : ""}${doctData?.name || "Doctor"}`}
        />
      ))}
      <div className="w-full max-w-7xl mx-auto flex flex-col min-lg:flex-row items-start gap-10 mt-10">
        {/* left area    */}
        <div className="flex-1 w-full flex flex-col gap-5">
          <DocProfile docProfile_Details={doctData} />
          <DocInfo docProfile_Details={doctData} />
        </div>
        {/* right area */}
        <div className="w-full min-lg:w-[450px] xl:w-[500px] flex flex-col gap-5 min-lg:self-stretch">
          <AvailabilityCalendar
            availability={doctData?.DoctorAvailabilityTime}
          />
          <HospitalAffiliations
            hospitals={doctData?.hospitalAffiliations}
            className="flex-1"
          />
        </div>
      </div>
      <DocTabs doctData={doctData} />
    </div>
  );
};

export default Page;
