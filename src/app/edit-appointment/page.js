"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React, { useState } from "react";
import { editAppointment } from "@/data/editAppointment";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import AvailabilityCalendar from "@/components/calendar";

const formField = "flex flex-col gap-2 max-md:col-span-2";
const inputField =
  "border border-(--primary) rounded-md p-3 focus:outline-none focus:border-primary";
const dropDown =
  "border border-(--primary) rounded-md p-3 pr-5 appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:16px_12px]";
const selectStyle = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.53026 9.88407C9.23736 10.177 8.76256 10.177 8.46966 9.88407L0.823183 2.23757C0.530293 1.94467 0.530293 1.46987 0.823183 1.17697L1.17674 0.823374C1.46963 0.530474 1.9445 0.530474 2.2374 0.823374L8.99996 7.58597L15.7626 0.823374C16.0555 0.530474 16.5303 0.530474 16.8232 0.823374L17.1768 1.17697C17.4697 1.46987 17.4697 1.94467 17.1768 2.23757L9.53026 9.88407Z' fill='%23033333'/%3E%3C/svg%3E")`,
};

const attachedDocs = [
  { name: "Blood report", url: "/docs/blood-report.pdf" },
  { name: "Dr. Sophia Prescription", url: "/docs/prescription.pdf" },
  { name: "Blood report", url: "/docs/blood-report2.pdf" },
  { name: "Dr. Sophia Prescription", url: "/docs/prescription2.pdf" },
  { name: "Blood report", url: "/docs/blood-report3.pdf" },
  { name: "Blood report", url: "/docs/blood-report4.pdf" },
];

const Page = () => {
  const [consultType, setConsultType] = useState("clinic");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="container m-auto px-2 md:px-0">
      {editAppointment.stepper &&
        editAppointment.stepper.map((data) => (
          <ProfileHeader
            key={data.heading}
            heading={data.heading}
            step1={data.step1}
            step2={data.step2}
            step3={data.step3}
          />
        ))}
      <div className="mt-8 text-center">
        <h2 className="text-primary mb-2 font-[700]">
          Your Appointment - 15th April 2025 (Saturday)
        </h2>
        <p className="mb-2 text-[14px] text-gray-500">
          You booked appointment for 15/04/2025, Saturday with the following
          details. Click on this input field to edit.
        </p>
      </div>
      <form
        className="mx-auto mt-8 grid grid-cols-2 gap-6 rounded-lg bg-transparent md:gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          setOpenDialog(true);
        }}
      >
        {/* Doctor's Name & Clinic Address */}
        <div className={formField}>
          <label htmlFor="doctor_name">Doctor&#39;s Name</label>
          <input
            id="doctor_name"
            name="doctor_name"
            className={inputField}
            placeholder="Enter doctor's name"
            defaultValue="Dr. Smith Brown"
          />
        </div>
        <div className={formField}>
          <label htmlFor="clinic_address">Clinic Address</label>
          <input
            id="clinic_address"
            name="clinic_address"
            className={inputField}
            placeholder="Enter clinic address"
            defaultValue="123 Maple Street, Apollo hospital, Spring..."
          />
        </div>
        {/* Consultation Type & Available Slot */}
        <div className={formField}>
          <label className="mb-1 font-medium">Consultation type</label>
          <div className="border-primary flex w-full items-center gap-6 rounded-md border bg-white px-4 py-3">
            <button
              type="button"
              onClick={() => setConsultType("online")}
              className="flex items-center gap-2 focus:outline-none"
              tabIndex={0}
            >
              <span
                className={`h-4 w-4 rounded-full border-2 ${consultType === "online" ? "border-[#2F797B] bg-[#2F797B]" : "border-[#D1D1D1] bg-[#D1D1D1]"}`}
              ></span>
              <span
                className={`text-base font-medium ${consultType === "online" ? "text-[#232A36]" : "text-[#232A36]"}`}
              >
                Online
              </span>
            </button>
            <button
              type="button"
              onClick={() => setConsultType("clinic")}
              className="flex items-center gap-2 focus:outline-none"
              tabIndex={0}
            >
              <span
                className={`h-4 w-4 rounded-full border-2 ${consultType === "clinic" ? "border-[#2F797B] bg-[#2F797B]" : "border-[#D1D1D1] bg-[#D1D1D1]"}`}
              ></span>
              <span
                className={`text-base font-medium ${consultType === "clinic" ? "text-[#232A36]" : "text-[#232A36]"}`}
              >
                Clinic Vist
              </span>
            </button>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="slot">Available Slot</label>
          <select
            id="slot"
            name="slot"
            className={dropDown + " w-full"}
            style={selectStyle}
            defaultValue="Wednesday, 3:30 PM"
          >
            <option>Wednesday, 3:30 PM</option>
            <option>Thursday, 10:00 AM</option>
            <option>Friday, 1:00 PM</option>
          </select>
        </div>
        {/* First Name & Last Name */}
        <div className={formField}>
          <label htmlFor="fname">First name</label>
          <input
            id="fname"
            name="fname"
            className={inputField}
            placeholder="Enter your first name"
            defaultValue="Sarah"
          />
        </div>
        <div className={formField}>
          <label htmlFor="lname">Last name</label>
          <input
            id="lname"
            name="lname"
            className={inputField}
            placeholder="Enter your last name"
            defaultValue="Edwards"
          />
        </div>
        {/* Age & Phone Number */}
        <div className={formField}>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            name="age"
            className={inputField}
            placeholder="Enter your age"
            type="number"
            defaultValue="32"
          />
        </div>
        <div className={formField}>
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            className={inputField}
            placeholder="Enter your phone number"
            type="tel"
            defaultValue="61 024784646"
          />
        </div>
        {/* Symptoms */}
        <div className={formField + " col-span-2"}>
          <label htmlFor="symptoms">Symptoms</label>
          <input
            id="symptoms"
            name="symptoms"
            className={inputField}
            placeholder="E.g back pain, muscle stretch..."
            defaultValue="Muscle stretch, back pain."
          />
        </div>
        {/* Message & Upload Documents */}
        <div className={formField}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={inputField + " h-45 resize-none"}
            placeholder="Type your message..."
          />
        </div>
        <div className={formField}>
          <label htmlFor="documents">Upload Documents</label>
          <div className="flex h-full flex-col">
            <label
              htmlFor="documents"
              className="border-primary flex min-h-[96px] flex-1 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-[#F8F8F8] p-4"
            >
              <span className="mb-2 text-center text-sm text-gray-500">
                Upload your medical documents for e.g Xray, test reports etc.
              </span>
              <svg
                width="100"
                height="100"
                viewBox="0 0 32 33"
                fill="#2F797B"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z"
                  fill="#2F797B"
                />
              </svg>
            </label>
            <input
              id="documents"
              name="documents"
              type="file"
              className="hidden"
            />
          </div>
        </div>
        {/* Documents Attached */}
        <div className="col-span-2">
          <div className="mt-2 rounded-lg bg-[#F8F8F8] p-4">
            <h3 className="mb-3 text-base font-semibold text-[#232A36]">
              Documents Attached
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {attachedDocs.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center rounded-md border border-dashed bg-white p-2"
                >
                  <img
                    src="/icons/pdf-icon.svg"
                    alt="pdf"
                    className="mb-2 h-10 w-10"
                  />
                  <span className="text-center text-xs">{doc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Accept Terms */}
        <div className="col-span-2 mt-2 flex items-center gap-2">
          <input
            id="accept_terms"
            name="accept_terms"
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="checked:border-primary checked:bg-primary h-4 w-4 appearance-none rounded border-2 border-(--primary) focus:outline-none"
          />
          <label htmlFor="accept_terms" className="text-sm">
            I accept the terms
          </label>
        </div>
        {/* Action Buttons */}
        <div className="col-span-2 mt-4 flex justify-between gap-4 max-md:w-full max-md:flex-wrap">
          <button
            type="button"
            className="btn_fill w-1/2 rounded-md bg-[#2F797B] px-6 py-2 text-white max-md:w-full"
            style={{ background: "#2F797B" }}
          >
            Cancel Appointment
          </button>
          <button
            type="submit"
            className="btn_fill w-1/2 rounded-md bg-[#2F797B] px-6 py-2 text-white max-md:w-full"
            style={{ background: "#2F797B" }}
          >
            Save Changes
          </button>
        </div>
      </form>
      {/* Modal Dialog for AvailabilityCalendar */}
      <Dialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        className="!w-auto"
      >
        <DialogContent className="bg-white p-0">
          <div className="!m-0 !rounded-none bg-white p-4 !shadow-none">
            <AvailabilityCalendar className="!m-w-sm !m-0 !border-none !bg-white !p-0" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
// ...existing code...
