"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const months = [
  { label: "June 2023", key: "June 2023" },
  { label: "May 2023", key: "May 2023" },
  { label: "April 2023", key: "April 2023" },
];

const appointmentsData = {
  upcoming: [
    {
      day: "Fri",
      date: "14",
      doctor: "Dr. Ashton Cleve",
      time: "10:00am - 10:30am",
      highlight: true,
    },
    {
      day: "Sat",
      date: "15",
      doctor: "Dr. Ashton Cleve",
      time: "10:00am - 10:30am",
      highlight: false,
    },
  ],
  past: {
    "June 2023": [
      {
        day: "Mon",
        date: "13",
        doctor: "Dr. Ashton Cleve",
        time: "10:00am - 10:30am",
        rate: true,
      },
      {
        day: "Tues",
        date: "05",
        doctor: "Dr. Ashton Cleve",
        time: "10:00am - 10:30am",
        rate: true,
      },
    ],
    "May 2023": [
      {
        day: "Wed",
        date: "24",
        doctor: "Dr. Ashton Cleve",
        time: "11:00am - 11:30am",
        rate: true,
      },
    ],
    "April 2023": [],
  },
};

const PatientAppointments = () => {
  const [openMonth, setOpenMonth] = useState(months[0].key);
  const [monthIdx, setMonthIdx] = useState(0);

  const handlePrev = (e) => {
    e.stopPropagation();
    if (monthIdx > 0) {
      setMonthIdx(monthIdx - 1);
      setOpenMonth(months[monthIdx - 1].key);
    }
  };
  const handleNext = (e) => {
    e.stopPropagation();
    if (monthIdx < months.length - 1) {
      setMonthIdx(monthIdx + 1);
      setOpenMonth(months[monthIdx + 1].key);
    }
  };
  const handleAccordion = () => {
    setOpenMonth(
      openMonth === months[monthIdx].key ? null : months[monthIdx].key,
    );
  };

  return (
    <div className="w-full rounded-lg bg-white p-6 max-lg:mt-10 min-xl:max-w-[435px]">
      <h3 className="mb-4 text-[20px] font-bold text-[#2F797B]">
        Upcoming Appointments
      </h3>
      <div className="mb-8 flex flex-col gap-3">
        {appointmentsData.upcoming.map((a, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 rounded-xl border border-[#F2F2F2] px-4 py-3 ${
              a.highlight ? "bg-[#FDECEC]" : "bg-[#F6FAF5]"
            }`}
          >
            <div className="flex min-w-[48px] flex-col items-center justify-center">
              <span className="text-[15px] font-semibold text-[#6B7B7B]">
                {a.day}
              </span>
              <span
                className={`text-[22px] font-bold ${
                  a.highlight ? "text-[#E57373]" : "text-[#6B7B7B]"
                }`}
              >
                {a.date}
              </span>
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[#232323]">{a.doctor}</div>
              <div className="text-[14px] text-[#6B7B7B]">{a.time}</div>
            </div>
            <span className="ml-auto text-2xl text-[#232323]">
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.09175 4.45899L0.791748 1.15899L1.73441 0.216325L5.97708 4.45899L1.73441 8.70166L0.791748 7.75899L4.09175 4.45899Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
      <h3 className="mb-4 text-[20px] font-bold text-[#2F797B]">
        Past Appointments
      </h3>
      <div className="mb-2 w-full">
        <button
          className="flex w-full items-center justify-between rounded-lg border border-[#F2F2F2] bg-[#F6FAF5] px-4 py-2 text-[16px] font-semibold text-[#232323] hover:cursor-pointer min-lg:w-[384px]"
          onClick={handleAccordion}
        >
          <span className="flex w-full items-center gap-2">
            {months[monthIdx].label}
            <div className="ml-5 flex items-center gap-5">
              <span
                onClick={handlePrev}
                className={`cursor-pointer text-xl ${
                  monthIdx === 0 ? "pointer-events-none opacity-30" : ""
                }`}
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5291 4.95899L5.8291 1.65899L4.88644 0.716325L0.643768 4.95899L4.88644 9.20166L5.8291 8.25899L2.5291 4.95899Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span
                onClick={handleNext}
                className={`cursor-pointer text-xl ${
                  monthIdx === months.length - 1
                    ? "pointer-events-none opacity-30"
                    : ""
                }`}
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 6 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.09175 4.45899L0.791748 1.15899L1.73441 0.216325L5.97708 4.45899L1.73441 8.70166L0.791748 7.75899L4.09175 4.45899Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </span>
          <span className="text-2xl">
            {openMonth === months[monthIdx].key ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </span>
        </button>
      </div>
      {openMonth === months[monthIdx].key && (
        <div className="mb-2 flex flex-col gap-3">
          {appointmentsData.past[months[monthIdx].key] &&
          appointmentsData.past[months[monthIdx].key].length > 0 ? (
            appointmentsData.past[months[monthIdx].key].map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-[#F2F2F2] bg-[#F6FAF5] px-4 py-3 max-[495px]:flex-col"
              >
                <div className="flex min-w-[48px] flex-col items-center justify-center">
                  <span className="text-[15px] font-semibold text-[#6B7B7B]">
                    {a.day}
                  </span>
                  <span className="text-[22px] font-bold text-[#6B7B7B]">
                    {a.date}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#232323]">{a.doctor}</div>
                  <div className="text-[14px] text-[#6B7B7B]">{a.time}</div>
                </div>
                {a.rate && (
                  <a
                    href="#"
                    className="mr-2 flex items-center justify-center gap-5 text-[14px] font-semibold text-[#2F797B] underline"
                  >
                    Rate your Surgeon
                    <span className="ml-auto text-2xl text-[#232323]">
                      <svg
                        width="6"
                        height="9"
                        viewBox="0 0 6 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.09175 4.45899L0.791748 1.15899L1.73441 0.216325L5.97708 4.45899L1.73441 8.70166L0.791748 7.75899L4.09175 4.45899Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            ))
          ) : (
            <div className="py-4 text-center text-[#6B7B7B]">
              No appointments found for this month.
            </div>
          )}
          <a
            href="#"
            className="text-[15px] font-semibold text-[#2F797B] underline"
          >
            See More
          </a>
        </div>
      )}
    </div>
  );
};

export default PatientAppointments;
