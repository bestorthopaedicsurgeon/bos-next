import React from "react";

const Types = () => {
  const cards = [
    {
      icon: "/surgeons/types/1.png",
      title: "General Orthopaedic Surgeon",
      description:
        "A general orthopaedic surgeon handles a wide variety of musculoskeletal problems. They treat fractures, joint pain, arthritis, and minor deformities. These specialists offer both surgical and non-surgical care for bone and joint issues.",
    },
    {
      icon: "/surgeons/types/2.png",
      title: "Joint Replacement Specialist",
      description:
        "This specialist focuses on replacing damaged joints like the hip, knee, or shoulder. They help restore mobility and relieve chronic joint pain caused by arthritis or injury. Joint replacement surgery greatly improves the patient’s quality of life.",
    },
    {
      icon: "/surgeons/types/3.png",
      title: "Sports Medicine Surgeon:",
      description:
        "These doctors treat injuries from sports, exercise, and physical activities. They manage ligament tears, sprains, fractures, and joint dislocations. Their goal is to help athletes recover and return to peak performance.",
    },
    {
      icon: "/surgeons/types/1.png",
      title: "General Orthopaedic Surgeon",
      description:
        "A general orthopaedic surgeon handles a wide variety of musculoskeletal problems. They treat fractures, joint pain, arthritis, and minor deformities. These specialists offer both surgical and non-surgical care for bone and joint issues.",
    },
    {
      icon: "/surgeons/types/2.png",
      title: "Joint Replacement Specialist",
      description:
        "This specialist focuses on replacing damaged joints like the hip, knee, or shoulder. They help restore mobility and relieve chronic joint pain caused by arthritis or injury. Joint replacement surgery greatly improves the patient’s quality of life.",
    },
    {
      icon: "/surgeons/types/3.png",
      title: "Sports Medicine Surgeon:",
      description:
        "These doctors treat injuries from sports, exercise, and physical activities. They manage ligament tears, sprains, fractures, and joint dislocations. Their goal is to help athletes recover and return to peak performance.",
    },
  ];

  return (
    <section>
      <h1 className="font-syne text-primary">Types Of Orthopaedic Surgeons</h1>
      <div className="grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-3 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-3 rounded-lg border bg-white p-10"
          >
            {/* <img src={card.icon} alt={card.title} /> */}
            <h4 className="text-primary">{card.title}</h4>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Types;
