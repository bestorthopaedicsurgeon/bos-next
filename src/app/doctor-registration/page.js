"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React, { useState } from "react";
import { profileHeader } from "@/data/profileHeader";
import WelcomeTxt from "@/components/reusable/welcomeTxt";
import {
  doc_reg,
  calendar_data,
  calendar,
  schedule_date,
} from "@/data/doc_reg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import UsePresenceData from "@/components/ui/slider.jsx";
import { ChevronLeft, ChevronRight, Edit, Check, Plus } from "lucide-react";
// import { Pencil } from "lucide";
import { Clock3, PencilIcon, User } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const Page = () => {
  const router = useRouter();
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [form, setForm] = useState({
    title: "",
    pic: null,
    fname: "",
    lname: "",
    exp: "",
    desig: "",
    about_self: "",
    reg_assoc: "",
    awd_pub: "",
    hosp_aff: "",
    email: "",
    password: "",
  });

  // Qualifications as tags
  const [qualifications, setQualifications] = useState([]); // array of strings
  const [qualificationInput, setQualificationInput] = useState("");

  // For practice/clinic entries
  const [practiceEntries, setPracticeEntries] = useState([]);
  const [registrationsAssociations, setRegistrationsAssociations] = useState(
    [],
  );

  const [editEntry, setEditEntry] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const [practiceForm, setPracticeForm] = useState({
    practiceName: "",
    clinicAddress: "",
    postCode: "",
    phone: "",
  });
  const [practiceError, setPracticeError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const subspecialities = [
    { value: "UPPER_LIMB", label: "Upper Limb" },
    { value: "LOWER_LIMB", label: "Lower Limb" },
    { value: "SPINE", label: "Spine" },
    { value: "PEDIATRICS", label: "Paediatrics" },
    { value: "ONCOLOGY", label: "Oncology" },
    { value: "TRAUMA", label: "Trauma" },
    { value: "SPORTS", label: "Sports" },
    { value: "ARTHROPLASTY", label: "Arthroplasty" },
    { value: "Other", label: "Other" },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Qualifications tag input handlers
  const handleQualificationInputChange = (e) => {
    setQualificationInput(e.target.value);
  };

  const handleQualificationKeyDown = (e) => {
    if (e.key === "Enter" && qualificationInput.trim()) {
      e.preventDefault();
      if (!qualifications.includes(qualificationInput.trim())) {
        setQualifications([...qualifications, qualificationInput.trim()]);
      }
      setQualificationInput("");
    }
  };

  const handleRemoveQualification = (idx) => {
    setQualifications((prev) => prev.filter((_, i) => i !== idx));
  };

  // For practice dialog input
  const handlePracticeInputChange = (e) => {
    const { name, value } = e.target;
    setPracticeForm((prev) => ({ ...prev, [name]: value }));
  };

  // Add practice entry
  const handleAddPractice = (e) => {
    e.preventDefault();
    setPracticeError("");
    if (
      !practiceForm.practiceName.trim() ||
      !practiceForm.clinicAddress.trim() ||
      !practiceForm.postCode.trim() ||
      !practiceForm.phone.trim()
    ) {
      setPracticeError("All fields are required.");
      return;
    }
    setPracticeEntries((prev) => [...prev, practiceForm]);
    setPracticeForm({
      practiceName: "",
      clinicAddress: "",
      postCode: "",
      phone: "",
    });
  };

  // Remove a practice entry
  const handleRemovePractice = (idx) => {
    setPracticeEntries((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // setError("");
    // setSuccess("");

    // Validation
    // if (!form.title) return setError("Please select your title.");
    // if (!form.fname.trim()) return setError("First name is required.");
    // if (!form.lname.trim()) return setError("Last name is required.");
    // if (isNaN(parseInt(form.exp)))
    //   return setError("Please select your years of experience.");
    // if (!form.desig) return setError("Please select your designation.");
    // if (!form.prac_name.trim()) return setError("Practice name is required.");
    // if (!form.clinic_name.trim())
    //   return setError("Clinic address is required.");
    // if (!form.post_code.trim())
    //   return setError("Suburb/State/Postcode is required.");
    // if (!form.phone.trim()) return setError("Phone number is required.");
    // if (selectedSpecialties.length === 0)
    //   return setError("Please select at least one subspeciality.");
    // if (!form.about_self.trim())
    //   return setError("Please tell us about yourself.");
    // if (!form.reg_assoc.trim())
    //   return setError("Registrations & Associations are required.");
    // if (!form.qual.trim()) return setError("Qualifications are required.");
    // if (!form.awd_pub.trim())
    //   return setError("Awards & Publications are required.");
    // if (!form.hosp_aff)
    //   return setError("Please select your hospital affiliation.");
    // if (!form.email.trim()) return setError("Email is required.");
    // // Simple email regex
    // if (!/^\S+@\S+\.\S+$/.test(form.email))
    //   return setError("Please enter a valid email address.");
    // if (!form.password) return setError("Password is required.");
    // if (form.password.length < 6)
    //   return setError("Password must be at least 6 characters.");
    // const termsCheckbox = document.getElementById("terms");
    // if (!termsCheckbox || !termsCheckbox.checked)
    //   return setError("You must accept the terms.");

    setLoading(true);
    try {
      // Helper to get day of week string from a date
      // function getDayOfWeekString(year, month, day) {
      //   const days = [
      //     "SUNDAY",
      //     "MONDAY",
      //     "TUESDAY",
      //     "WEDNESDAY",
      //     "THURSDAY",
      //     "FRIDAY",
      //     "SATURDAY",
      //   ];
      //   return days[new Date(year, month, day).getDay()];
      // }

      // Build DoctorAvailabilityDays (all selected days, as strings: 'YYYY-MM-DD')
      let DoctorAvailabilityDays = [];
      let DoctorAvailability = [];

      // Object.entries(availability).forEach(([monthKey, types]) => {
      //   const [year, month] = monthKey.split("-").map(Number);
      //   Object.entries(types).forEach(([type, days]) => {
      //     days.forEach((day) => {
      //       // DoctorAvailabilityDays: ISO string for each selected day
      //       const dateObj = new Date(year, month, day);
      //       DoctorAvailabilityDays.push(dateObj.toISOString().split("T")[0]);
      //       // DoctorAvailability: slot for each day (example: 09:00-09:30, location from type)
      //       DoctorAvailability.push({
      //         dayOfWeek: getDayOfWeekString(year, month, day),
      //         startTime: "09:00", // You can make this dynamic if needed
      //         endTime: "09:30",
      //         location: type.toUpperCase(), // 'ONLINE' or 'CLINIC'
      //         clinicName: type === "clinic" ? form.clinic_name : null,
      //       });
      //     });
      //   });
      // });

      // Prepare doctor registration data
      const data = {
        // email: form.email,
        // password: form.password,
        // name: { firstName: form.fname, lastName: form.lname },
        title: form.title,
        phone: form.phone,
        experience: parseInt(form.exp),
        designation: form.desig,
        practiceName: form.prac_name,
        clinicAddress: form.clinic_name,
        state: form.post_code,
        practicePhone: form.phone,
        subspecialities: selectedSpecialties.map((s) => s.value),
        about: form.about_self,
        registrationsAssociations: form.reg_assoc,
        qualifications: qualifications, // send as array
        awardsPublications: form.awd_pub,
        hospitalAffiliations: form.hosp_aff,
        // DoctorAvailability: { create: DoctorAvailability }, // <-- wrap in create
        // DoctorAvailabilityDays,
      };
      const res = await fetch("/api/doctor", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.ok) {
        // setSuccess("Registration successful!");
        // // Optionally redirect or clear form
        // // Reset form and availability after successful registration
        // setForm({
        //   title: "",
        //   pic: null,
        //   fname: "",
        //   lname: "",
        //   exp: "",
        //   desig: "",
        //   prac_name: "",
        //   clinic_name: "",
        //   post_code: "",
        //   phone: "",
        //   about_self: "",
        //   reg_assoc: "",
        //   qual: "",
        //   awd_pub: "",
        //   hosp_aff: "",
        //   email: "",
        //   password: "",
        // });
        // setSelectedSpecialties([]);
        // // Reset availability to empty for current month
        // const base = {};
        // const year = today.getFullYear();
        // const month = today.getMonth();
        // calendar.forEach((item) => {
        //   base[`${year}-${month}`] = base[`${year}-${month}`] || {};
        //   base[`${year}-${month}`][item.type] = [];
        // });
        // setAvailability(base);
        console.log("Registration successful:", result);
        router.push("/doctor");
      } else {
        setError(result.error || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const selectStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='18' height='11' viewBox='0 0 18 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9.53026 9.88407C9.23736 10.177 8.76256 10.177 8.46966 9.88407L0.823183 2.23757C0.530293 1.94467 0.530293 1.46987 0.823183 1.17697L1.17674 0.823374C1.46963 0.530474 1.9445 0.530474 2.2374 0.823374L8.99996 7.58597L15.7626 0.823374C16.0555 0.530474 16.5303 0.530474 16.8232 0.823374L17.1768 1.17697C17.4697 1.46987 17.4697 1.94467 17.1768 2.23757L9.53026 9.88407Z' fill='%23033333'/%3E%3C/svg%3E")`,
  };
  const dropDown =
    "border border-(--primary) rounded-md p-3 pr-5 appearance-none bg-no-repeat bg-[right_0.75rem_center] bg-[length:16px_12px";
  const formField = "flex flex-col gap-2 max-lg:col-span-2";
  const inputField = "border border-(--primary) rounded-md p-3";

  const handleSpecialtyChange = (specialty) => {
    console.log(selectedSpecialties);
    setSelectedSpecialties((prev) => {
      const exists = prev.find((s) => s.value === specialty.value);
      if (exists) {
        // Remove it
        return prev.filter((s) => s.value !== specialty.value);
      } else {
        // Add it
        return [...prev, specialty];
      }
    });
  };

  // Calendar state for month slider and availability
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [isEditing, setIsEditing] = useState(false);
  // availability: { ["2025-6"]: { online: [1,2,3], clinic: [4,5,6] } }
  const [availability, setAvailability] = useState({});
  // Initialize availability state from doc_reg.js calendar for current month (no preselected days)
  React.useEffect(() => {
    const base = {};
    const year = today.getFullYear();
    const month = today.getMonth();
    calendar.forEach((item) => {
      base[`${year}-${month}`] = base[`${year}-${month}`] || {};
      base[`${year}-${month}`][item.type] = [];
    });
    setAvailability(base);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helpers for calendar days
  function getDaysInMonth(year, month) {
    const lastDay = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: lastDay }, (_, i) => i + 1);
  }
  // For UI: get disabled/holiday from doc_reg.js for current month
  function getDocRegMeta(type) {
    const item = calendar.find((c) => c.type === type);
    return item
      ? { disabled: item.disabled, holiday: item.holiday }
      : { disabled: [], holiday: [] };
  }

  // Slider logic (month navigation)
  function changeMonth(dir) {
    let m = currentMonth + dir;
    let y = currentYear;
    if (m < 0) {
      m = 11;
      y--;
    }
    if (m > 11) {
      m = 0;
      y++;
    }
    setCurrentMonth(m);
    setCurrentYear(y);
  }

  // Toggle day for a type (online/clinic)
  function toggleDay(type, day) {
    if (!isEditing) return;
    const key = `${currentYear}-${currentMonth}`;
    setAvailability((prev) => {
      const monthData = { ...(prev[key] || {}) };
      const days = new Set(monthData[type] || []);
      if (days.has(day)) days.delete(day);
      else days.add(day);
      return { ...prev, [key]: { ...monthData, [type]: Array.from(days) } };
    });
  }

  // For rendering: get days for type in current month
  function getSelectedDays(type) {
    const key = `${currentYear}-${currentMonth}`;
    return new Set((availability[key] && availability[key][type]) || []);
  }

  // For rendering: get disabled/holiday for type in current month
  function getMeta(type) {
    // Optionally, you could make this dynamic per month
    return getDocRegMeta(type);
  }

  // For UI: edit/save icon
  function handleEditToggle() {
    setIsEditing((v) => !v);
  }

  return (
    <div className="container m-auto">
      {profileHeader.createProfile.map((data) => (
        <ProfileHeader
          key={data.heading}
          heading={data.heading}
          step1={data.step1}
          step2={data.step2}
          step3={data.step3}
        />
      ))}
      {/*need to check size */}
      {profileHeader.welcome.map((data, key) => (
        <div key={key} className="mt-[77px] text-center">
          <h3 className="text-(--primary)">{data.heading}</h3>
          <span>{data.subTxt}</span>
        </div>
      ))}

      <div
        className="container m-auto grid grid-cols-2 gap-[32px] pt-16"
        autoComplete="off"
      >
        <div className={formField}>
          <label htmlFor="title">Title</label>
          <select
            name="title"
            id="title"
            className={dropDown}
            style={selectStyle}
            value={form.title}
            onChange={handleInputChange}
          >
            <option value="">select your title</option>
            <option value="DR">Dr</option>
            <option value="MS">Ms</option>
            <option value="MR">Mr</option>
            <option value="PROF">Prof</option>
          </select>
        </div>
        <div className={formField}>
          <label htmlFor="pic">Upload Profile Picture</label>
          <input
            type="file"
            name="pic"
            id="pic"
            className="hidden"
            onChange={handleInputChange}
          />
          <label
            htmlFor="pic"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-2 text-white"
          >
            <span>Click to upload</span>
            <span>
              {/* ...existing svg... */}
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z"
                  fill="white"
                />
              </svg>
            </span>
          </label>
        </div>
        <div className={formField}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            className={inputField}
            value={form.fname}
            onChange={handleInputChange}
          />
        </div>
        <div className={formField}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            className={inputField}
            value={form.lname}
            onChange={handleInputChange}
          />
        </div>
        <div className={formField}>
          <label htmlFor="exp">Experience</label>
          <select
            name="exp"
            id="exp"
            className={dropDown}
            style={selectStyle}
            value={form.exp}
            onChange={handleInputChange}
          >
            <option value="">Select your years of experience</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className={formField}>
          <label htmlFor="desig">Designation</label>
          <select
            name="desig"
            id="desig"
            className={dropDown}
            style={selectStyle}
            value={form.desig}
            onChange={handleInputChange}
          >
            <option value="">Select Designation</option>
            <option value="DOCTOR">DOCTOR</option>
            <option value="SURGEON">SURGEON</option>
            <option value="GENERAL">GENERAL</option>
          </select>
        </div>
        {/* Practice/Clinic Entries Tag Box */}
        <div className={`${formField} col-span-2`}>
          <label>Practice/Clinic Details</label>
          <div className="flex flex-col gap-2">
            <div className="border-primary flex min-h-[48px] flex-wrap gap-2 rounded-md border bg-transparent p-3">
              {practiceEntries.map((entry, idx) => (
                <Popover
                  key={idx}
                  onOpenChange={(open) => {
                    if (open) {
                      setEditEntry({ ...entry });
                      setActiveIndex(idx);
                    } else {
                      setEditEntry(null);
                      setActiveIndex(null);
                    }
                  }}
                >
                  <PopoverTrigger asChild>
                    <span className="mr-2 flex cursor-pointer items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white">
                      {entry.practiceName}
                      <button
                        type="button"
                        className="ml-2 text-white hover:text-red-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemovePractice(idx);
                        }}
                        aria-label="Remove"
                      >
                        &times;
                      </button>
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="w-[260px] text-sm">
                    {editEntry && (
                      <div className="grid grid-cols-1 gap-4">
                        {/* Practice Name */}
                        <div className="flex flex-col gap-1">
                          <label className="text-primary text-lg">
                            Practice Name
                          </label>
                          <input
                            type="text"
                            name="practiceName"
                            className={inputField}
                            value={editEntry.practiceName}
                            onChange={(e) =>
                              setEditEntry({
                                ...editEntry,
                                practiceName: e.target.value,
                              })
                            }
                            required
                          />
                        </div>

                        {/* Clinic Address */}
                        <div className="flex flex-col gap-1">
                          <label className="text-primary text-lg">
                            Clinic Address
                          </label>
                          <input
                            type="text"
                            name="clinicAddress"
                            className={inputField}
                            value={editEntry.clinicAddress}
                            onChange={(e) =>
                              setEditEntry({
                                ...editEntry,
                                clinicAddress: e.target.value,
                              })
                            }
                            required
                          />
                        </div>

                        {/* PostCode */}
                        <div className="flex flex-col gap-1">
                          <label className="text-primary text-lg">
                            Suburb / State / Postcode
                          </label>
                          <input
                            type="text"
                            name="postCode"
                            className={inputField}
                            value={editEntry.postCode}
                            onChange={(e) =>
                              setEditEntry({
                                ...editEntry,
                                postCode: e.target.value,
                              })
                            }
                            required
                          />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1">
                          <label className="text-primary text-lg">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            className={inputField}
                            value={editEntry.phone}
                            onChange={(e) =>
                              setEditEntry({
                                ...editEntry,
                                phone: e.target.value,
                              })
                            }
                            required
                          />
                        </div>

                        <button
                          onClick={() => {
                            setPracticeEntries((prev) => {
                              const updated = [...prev];
                              updated[activeIndex] = { ...editEntry };
                              return updated;
                            });
                            console.log("Updated entry:", editEntry);
                            console.log("entries:", practiceEntries);
                          }}
                          className="bg-primary hover:bg-primary-hover cursor-pointer rounded px-4 py-2 text-white"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </PopoverContent>
                </Popover>
              ))}
              <Popover>
                <PopoverTrigger asChild>
                  <button className="bg-primary hover:bg-primary-hover flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[18px] leading-none text-white">
                    <Plus size={16} />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="text-sm">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex flex-col gap-1">
                      <label
                        className="text-primary font-dm-sans text-lg"
                        htmlFor="practiceName"
                      >
                        Practice Name
                      </label>
                      <input
                        type="text"
                        name="practiceName"
                        id="practiceName"
                        className={inputField}
                        value={practiceForm.practiceName}
                        onChange={handlePracticeInputChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="text-primary font-dm-sans text-lg"
                        htmlFor="clinicAddress"
                      >
                        Clinic Address
                      </label>
                      <input
                        type="text"
                        name="clinicAddress"
                        id="clinicAddress"
                        className={inputField}
                        value={practiceForm.clinicAddress}
                        onChange={handlePracticeInputChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="text-primary font-dm-sans text-lg"
                        htmlFor="postCode"
                      >
                        Suburb / State / Postcode
                      </label>
                      <input
                        type="text"
                        name="postCode"
                        id="postCode"
                        className={inputField}
                        value={practiceForm.postCode}
                        onChange={handlePracticeInputChange}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className="text-primary font-dm-sans text-lg"
                        htmlFor="phone"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className={inputField}
                        value={practiceForm.phone}
                        onChange={handlePracticeInputChange}
                        required
                      />
                    </div>
                    <button
                      onClick={handleAddPractice}
                      className="bg-primary hover:bg-primary-hover cursor-pointer rounded px-4 py-2 text-white"
                    >
                      Add
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        {/* Practice/Clinic Add Dialog */}{" "}
        <div className={formField}>
          <label htmlFor="">Subspeciality/Special Interests</label>
          <div className="border-1 border-(--primary) p-3">
            <div
              className="max-h-[240px] overflow-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#2F797B #D9D9D9",
              }}
            >
              {subspecialities.map((specialty) => {
                if (specialty.value === "Other") {
                  return (
                    <div key="other" className="mt-2">
                      <input
                        type="text"
                        placeholder="Enter other specialty"
                        className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                        onChange={(e) => {
                          const value = e.target.value;
                          const updated = selectedSpecialties.filter(
                            (s) => s.value !== "Other",
                          );
                          if (value.trim() !== "") {
                            updated.push({ value: "Other", label: value });
                          }
                          setSelectedSpecialties(updated);
                        }}
                      />
                    </div>
                  );
                }

                return (
                  <div key={specialty.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={specialty.value.toLowerCase()}
                      checked={selectedSpecialties.some(
                        (s) => s.value === specialty.value,
                      )}
                      onChange={() => handleSpecialtyChange(specialty)}
                      className="hidden"
                    />
                    <label
                      htmlFor={specialty.value.toLowerCase()}
                      className="flex cursor-pointer items-center rounded-full py-2 select-none"
                    >
                      <span
                        className={`mr-2 inline-block h-4 w-4 rounded-full border ${
                          selectedSpecialties.some(
                            (s) => s.value === specialty.value,
                          )
                            ? "border-blue-500 bg-blue-500"
                            : "border-gray-400 bg-white"
                        }`}
                      ></span>
                      {specialty.label}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={formField}>
          <div className="mt-9 border-1 border-(--primary) p-3">
            <div
              className="h-[240px] overflow-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#2F797B #D9D9D9",
              }}
            >
              {selectedSpecialties.map((specialty) => (
                <div key={specialty.value}>
                  <label
                    className={`flex cursor-pointer items-center rounded-full py-2 select-none`}
                  >
                    <span
                      className={`mr-2 inline-block h-4 w-4 rounded-full border border-blue-500 bg-blue-500`}
                    ></span>
                    {specialty.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="about_self">Tell us about yourself</label>
          <textarea
            name="about_self"
            id="about_self"
            className={`h-[240px] resize-none ${inputField}`}
            placeholder="Write a brief introduction about yourself."
            value={form.about_self}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="reg_assoc">Registrations & Associations</label>
          <div className="border-primary flex min-h-[240px] flex-wrap content-start items-start gap-2 rounded-md border bg-transparent p-3">
            {registrationsAssociations.map((entry, idx) => (
              <Popover
                key={idx}
                onOpenChange={(open) => {
                  if (open) {
                    setEditEntry(entry);
                    setActiveIndex(idx);
                  } else {
                    setEditEntry(null);
                    setActiveIndex(null);
                  }
                }}
              >
                <PopoverTrigger asChild>
                  <span className="mr-2 cursor-pointer items-center rounded-2xl bg-[#83C5BE] px-3 py-1 text-sm text-white">
                    {entry}
                    <button
                      type="button"
                      className="ml-2 cursor-pointer text-white hover:text-red-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        setRegistrationsAssociations((prev) =>
                          prev.filter((item, i) => i !== idx),
                        );
                      }}
                      aria-label="Remove"
                    >
                      &times;
                    </button>
                  </span>
                </PopoverTrigger>
                <PopoverContent className="w-[260px] text-sm">
                  {editEntry && (
                    <div className="grid grid-cols-1 gap-4">
                      {/* Practice Name */}
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          name="registrations_associations"
                          className={inputField}
                          value={editEntry}
                          onChange={(e) => setEditEntry(e.target.value)}
                          required
                        />
                      </div>

                      <button
                        onClick={() => {
                          setRegistrationsAssociations((prev) => {
                            const updated = [...prev];
                            updated[activeIndex] = editEntry; // make sure editEntry is a string
                            return updated;
                          });
                          console.log("Updated entry:", editEntry);
                          console.log("entries:", registrationsAssociations);
                        }}
                        className="bg-primary hover:bg-primary-hover cursor-pointer rounded px-4 py-2 text-white"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <button className="bg-primary hover:bg-primary-hover flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[18px] leading-none text-white">
                  <Plus size={16} />
                </button>
              </PopoverTrigger>
              <PopoverContent className="text-sm">
                <div className="grid grid-cols-1 gap-4">
                  {/* Practice Name */}
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      name="registrations_associations"
                      className={inputField}
                      value={editEntry}
                      onChange={(e) => setEditEntry(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    onClick={() => {
                      setRegistrationsAssociations((prev) => {
                        const updated = [...prev];
                        updated.push(editEntry);
                        return updated;
                      });
                      setEditEntry("");
                      console.log("Updated entry:", editEntry);
                      console.log("entries:", registrationsAssociations);
                    }}
                    className="bg-primary hover:bg-primary-hover cursor-pointer rounded px-4 py-2 text-white"
                  >
                    Add
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          {/* <textarea
            name="reg_assoc"
            id="reg_assoc"
            className={`h-[240px] ${inputField}`}
            placeholder="Enter your registrations and any professional memberships (AHPRA, AHPRA, AOA, FRACS etc. )"
            value={form.reg_assoc}
            onChange={handleInputChange}
          ></textarea> */}
        </div>
        <div className={formField}>
          <label htmlFor="qual">Qualifications</label>
          <div className="flex flex-col gap-2">
            <div className="flex min-h-[240px] flex-wrap gap-2 rounded-md border border-(--primary) bg-transparent p-3">
              {qualifications.map((q, idx) => (
                <span
                  key={idx}
                  className="mr-2 mb-2 flex h-fit items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white"
                >
                  {q}
                  <button
                    type="button"
                    className="ml-2 cursor-pointer text-white hover:text-red-200"
                    onClick={() => handleRemoveQualification(idx)}
                    aria-label="Remove"
                  >
                    &times;
                  </button>
                </span>
              ))}
              <input
                type="text"
                className="h-fit min-w-[120px] flex-1 border-none outline-none"
                placeholder="Type and press Enter..."
                value={qualificationInput}
                onChange={handleQualificationInputChange}
                onKeyDown={handleQualificationKeyDown}
              />
            </div>
            <span className="text-xs text-gray-500">
              Press Enter to add each qualification as a tag.
            </span>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="awd_pub">Awards & Publications</label>
          <textarea
            name="awd_pub"
            id="awd_pub"
            className={`h-[240px] ${inputField}`}
            placeholder="List your awards and publications in chronological order, starting with the most recent."
            value={form.awd_pub}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="hosp_aff">Hospital affiliations</label>
          <select
            name="hosp_aff"
            id="hosp_aff"
            className={dropDown}
            style={selectStyle}
            value={form.hosp_aff}
            onChange={handleInputChange}
          >
            <option value="">Select hospital (s)</option>
            <option value="Dr">Dr</option>
            <option value="Ms">Ms</option>
            <option value="Mr">Mr</option>
            <option value="Prof">Prof</option>
          </select>
        </div>
        <div className={formField}>
          <label htmlFor="avail">Set Your Availability</label>
          <Dialog className="max-w-full overflow-auto">
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="flex h-[48px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-4 text-white"
              >
                <span>Click to set availability</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="h-full w-full max-w-[90%] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>My Availability</DialogTitle>
                <DialogDescription>
                  Set your availabilty to let the patients choose the timeslots
                  to conveniently book appointments
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center gap-2">
                <div className="grid flex-1 gap-2"></div>
              </div>
              <div>
                {/* Month slider */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-[150px] text-lg font-medium">
                      {monthNames[currentMonth]} {currentYear}
                    </span>
                    <button
                      onClick={() => changeMonth(-1)}
                      className="cursor-pointer rounded-full p-1"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="text-primary h-5 w-5" />
                    </button>
                    <button
                      onClick={() => changeMonth(1)}
                      className="cursor-pointer rounded-full p-1"
                      aria-label="Next month"
                    >
                      <ChevronRight className="text-primary h-5 w-5" />
                    </button>
                  </div>
                  <button
                    onClick={handleEditToggle}
                    className={`ml-4 rounded-full p-1 ${isEditing ? "bg-gray-200" : ""}`}
                    aria-label={
                      isEditing ? "Stop editing" : "Edit availability"
                    }
                  >
                    {!isEditing ? (
                      <Edit className="text-primary h-5 w-5 hover:text-gray-800" />
                    ) : (
                      <Check className="text-primary h-5 w-5 hover:text-gray-800" />
                    )}
                  </button>
                </div>
                {/* Calendar for online and clinic */}
                <div className="mt-6 flex flex-col space-y-4 max-sm:gap-[30px]">
                  {["online", "clinic"].map((type) => {
                    const selectedDays = getSelectedDays(type);
                    const meta = getMeta(type);
                    const days = getDaysInMonth(currentYear, currentMonth);
                    return (
                      <div
                        key={type}
                        className="flex items-start justify-center max-sm:gap-[20px]"
                      >
                        <div className="w-[120px] font-semibold capitalize max-sm:w-[80px] max-sm:gap-[10px]">
                          {type}
                        </div>
                        <div className="flex flex-wrap gap-1 max-sm:items-start">
                          {days.map((day) => {
                            // Calculate the weekday for this day (0=Sunday, 6=Saturday)
                            const weekday = new Date(
                              currentYear,
                              currentMonth,
                              day,
                            ).getDay();
                            const isDisabled = weekday === 0 || weekday === 6;
                            const isHoliday = meta.holiday.includes(day);
                            const isSelected = selectedDays.has(day);
                            return (
                              <button
                                key={day}
                                disabled={isDisabled}
                                onClick={() => toggleDay(type, day)}
                                className={`flex h-10 w-10 items-center justify-center border border-gray-300 ${isHoliday ? "rounded-full bg-[var(--primary)] text-white" : ""} ${isDisabled ? "cursor-not-allowed opacity-50" : isEditing ? "hover:bg-blue-200 hover:text-gray-800" : ""} ${isSelected ? "bg-[#04434317] !text-black" : ""}`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* ...existing schedule_date UI... */}
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
                <div className="bg-secondary col-span-2 mt-10 rounded-md p-5">
                  <div className="text-primary m-auto flex w-[60%] items-center justify-between max-lg:w-full">
                    <p>Clinic Timing</p>
                    <div className="line bg-primary h-[30px] w-[1px]"></div>
                    <p>Online Timing</p>
                  </div>
                </div>
                {schedule_date.map((data, key) => (
                  <div
                    key={key}
                    className="bg-secondary max-sm:justify-flex-start flex items-center justify-between rounded-md p-6 max-lg:col-span-2 max-sm:flex-wrap max-sm:gap-[10px] max-sm:p-2"
                  >
                    <p className="bg-background flex h-[47px] items-center rounded-md px-5 pb-[4px]">
                      {data.day}
                    </p>
                    <div className="line h-[68px] w-[1px] bg-(--background)"></div>
                    <div className="flex flex-col justify-center gap-5 max-sm:gap-2">
                      <div className="flex items-center gap-3">
                        <Clock3 className="max-sm:h-[15px] max-sm:w-[15px]" />
                        <p className="text-wrap">{data.time}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="max-sm:h-[15px] max-sm:w-[15px]" />
                        <p>{data.location}</p>
                      </div>
                    </div>
                    <select
                      name="edit"
                      id="edit"
                      className={`${dropDown} bg-background cursor-pointer !border-none px-[20px]`}
                      style={selectStyle}
                    >
                      <option value="">Edit</option>
                      <option value="">Delete</option>
                    </select>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* Email and Password fields for registration */}
        <div className={formField + " col-span-1"}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={inputField}
            value={form.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={formField + " col-span-1"}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className={inputField}
            value={form.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* {error && <div className="col-span-2 mt-2 text-red-500">{error}</div>} */}
        {success && (
          <div className="col-span-2 mt-2 text-green-500">{success}</div>
        )}
        <div className="col-span-2 flex items-center gap-3">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="checked:border-primary checked:bg-primary h-3 w-3 appearance-none border-2 border-(--primary) focus:outline-none"
          />
          <label htmlFor="terms">I accept the terms</label>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="btn_fill col-span-2 m-auto mt-10 mb-10 flex cursor-pointer justify-center px-14 py-2 max-sm:w-full"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Registering..." : "Confirm Registration"}
        </button>
        <button
          className="btn_fill col-span-2 m-auto mt-10 mb-10 flex cursor-pointer justify-center px-14 py-2 max-sm:w-full"
          onClick={() => router.push("/doctor")}
          disabled={loading}
        >
          Complete Later
        </button>
      </div>
    </div>
  );
};

export default Page;
