import BlogHeader from "@/components/blogPage/BlogHeader";
import ProfileHeader from "@/components/reusable/profileHeader";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="container">
      <ProfileHeader
        // key={data.heading}
        heading={"Read Blog"}
        step1={"blog"}
        step2={"Slug"}
      />
      <h1 className="font-syne text-primary my-20">Blog Name</h1>
      <Image
        src="/blog1.png"
        width={1000}
        height={1000}
        alt="blog"
        className="w-full"
      />
      <div className="flex items-center gap-4 my-4">
        <Image
          src="/profile.png"
          width={50}
          height={50}
          alt="profile"
          className="w-12 h-12 rounded-full"
        />
        <p>Author</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: "" }}></div>
    </div>
  );
};

export default Page;
