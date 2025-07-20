import { BlogCard } from "@/components/blogPage/BlogCard";
import { Button } from "@/components/ui/button";
import React from "react";

const cards = [
  {
    icon: "/surgeons/types/1.png",
    title: "Dental treatments",
    description:
      "A general orthopaedic surgeon handles a wide variety of musculoskeletal problems. They treat fractures, joint pain, arthritis, and minor deformities. These specialists offer both surgical and non-surgical care for bone and joint issues.",
  },
  {
    icon: "/surgeons/types/2.png",
    title: "Bone treatments",
    description:
      "This specialist focuses on replacing damaged joints like the hip, knee, or shoulder. They help restore mobility and relieve chronic joint pain caused by arthritis or injury. Joint replacement surgery greatly improves the patient’s quality of life.",
  },
  {
    icon: "/surgeons/types/3.png",
    title: "Diagnosis",
    description:
      "These doctors treat injuries from sports, exercise, and physical activities. They manage ligament tears, sprains, fractures, and joint dislocations. Their goal is to help athletes recover and return to peak performance.",
  },
  {
    icon: "/surgeons/types/1.png",
    title: "Cardiology",
    description:
      "A general orthopaedic surgeon handles a wide variety of musculoskeletal problems. They treat fractures, joint pain, arthritis, and minor deformities. These specialists offer both surgical and non-surgical care for bone and joint issues.",
  },
  {
    icon: "/surgeons/types/2.png",
    title: "Surgery",
    description:
      "This specialist focuses on replacing damaged joints like the hip, knee, or shoulder. They help restore mobility and relieve chronic joint pain caused by arthritis or injury. Joint replacement surgery greatly improves the patient’s quality of life.",
  },
  {
    icon: "/surgeons/types/3.png",
    title: "Eye care",
    description:
      "These doctors treat injuries from sports, exercise, and physical activities. They manage ligament tears, sprains, fractures, and joint dislocations. Their goal is to help athletes recover and return to peak performance.",
  },
];

export const Blogs = () => {
  return (
    <section id="blogs">
      <h1 className="font-syne text-primary text-center mb-8">Types Of Orthopaedic Surgeons</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <BlogCard key={index} {...card} />
        ))}
      </div>
      <Button className="mt-8 mb-20 mx-auto block" variant="primary" size="primary">
        Load More Blogs
      </Button>
    </section>
  );
};
