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
import EditableEntry from "@/components/registration/EditableEntry";
import { toast } from "sonner";

const CreateDoctorPage = () => {
  const router = useRouter();
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [form, setForm] = useState({
    qualifications: [],
    awardsPublications: [],
    registrationsAssociations: [],
    hospitalAffiliation: [],
  });
  const [inputs, setInputs] = useState();

  // Qualifications as tags
  const [qualifications, setQualifications] = useState([]); // array of strings
  const [qualificationInput, setQualificationInput] = useState("");

  // For practice/clinic entries
  const [practiceEntries, setPracticeEntries] = useState([]);
  const [hospitalAffiliations, setHospitalAffiliations] = useState([]);
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

  const handleInputChange = (field) => (e) => {
    const value = field === "image" ? e.target.files?.[0] : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiInputChange = (field) => (e) => {
    setInputs((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleKeyDown = (field) => (e) => {
    if (e.key === "Enter" && inputs[field].trim()) {
      e.preventDefault();
      console.log(inputs);
      console.log("form", form);
      const trimmed = inputs[field].trim();
      if (!form[field].includes(trimmed)) {
        setForm((prev) => ({
          ...prev,
          [field]: [...prev[field], trimmed],
        }));
      }
      setInputs((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleRemoveValue = (field, idx) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== idx),
    }));
  };

  // Qualifications tag input handlers
  const handleQualificationInputChange = (e) => {
    setQualificationInput(e.target.value);
  };

  const handleQualificationKeyDown = (e) => {
    if (e.key === "Enter" && qualificationInput.trim()) {
      e.preventDefault();
      console.log(qualifications);
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

  const emptyAllFields = () => {
    setForm({});
    setQualifications([]);
    setQualificationInput("");
    setPracticeEntries([]);
    setHospitalAffiliations([]);
    setRegistrationsAssociations([]);
    setSelectedSpecialties([]);
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

  const handleImageUpload = async (doctorId) => {
    if (!form.image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", form.image);
    formData.append("doctorId", doctorId);

    const res = await fetch("/api/doctors/upload-image", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (!res.ok) return alert("Upload failed");

    console.log("Public URL:", result.url);
    return true;

    // optionally: update doctor profile with the image URL
    // await updateDoctor({ imageUrl: result.url });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const data = {};

      // Add only if value is non-empty / defined
      if (form.fname && form.lname) {
        data.name = `${form.fname} ${form.lname}`;
      }

      if (form.title) data.title = form.title;
      if (form.exp) data.experience = parseInt(form.exp);
      if (form.desig) data.designation = form.desig;
      if (form.about_self) data.about = form.about_self;

      // Arrays: check if defined AND has at least one item
      if (
        Array.isArray(selectedSpecialties) &&
        selectedSpecialties.length > 0
      ) {
        data.subspecialities = selectedSpecialties.map((s) => s.label);
      }

      if (
        Array.isArray(form.registrationsAssociations) &&
        form.registrationsAssociations.length > 0
      ) {
        data.registrationsAssociations = form.registrationsAssociations;
      }

      if (
        Array.isArray(form.qualifications) &&
        form.qualifications.length > 0
      ) {
        data.qualifications = form.qualifications;
      }

      if (
        Array.isArray(form.awardsPublications) &&
        form.awardsPublications.length > 0
      ) {
        data.awardsPublications = form.awardsPublications;
      }

      if (
        Array.isArray(hospitalAffiliations) &&
        hospitalAffiliations.length > 0
      ) {
        data.hospitalAffiliations = hospitalAffiliations;
      }

      if (Array.isArray(practiceEntries) && practiceEntries.length > 0) {
        data.practices = practiceEntries;
      }

      console.log("data", data);
      console.log(form);
      const res = await fetch("/api/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        const data = await res.json();
        console.log("Registration successful:", data);
        if (data.success) {
          const imageUploaded = await handleImageUpload(data?.profile?.id);
          if (imageUploaded) {
            console.log("Image uploaded successfully");
          }
          toast.success("Doctor created successfully!");
          router.refresh();
        }
      } else {
        setError("Registration failed");
        toast.error("Registration failed!");
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
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-8">
        <h1 className="text-primary mb-2 text-2xl font-bold">
          Create New Doctor Profile
        </h1>
        <p className="text-gray-600">
          Add a new doctor to the system with their professional details.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[32px]" autoComplete="off">
        <div className={formField}>
          <label htmlFor="title">Title</label>
          <select
            name="title"
            id="title"
            className={dropDown}
            style={selectStyle}
            value={form.title}
            onChange={handleInputChange("title")}
          >
            <option value="">select your title</option>
            <option value="DR">Dr</option>
            <option value="MS">Ms</option>
            <option value="MR">Mr</option>
            <option value="PROF">Prof</option>
          </select>
        </div>
        <div className={formField}>
          <label htmlFor="image">Upload Profile picture</label>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            onChange={handleInputChange("image")}
          />
          <label
            htmlFor="image"
            className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-2 text-white"
          >
            <span>Click to upload</span>
            <span>
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
            onChange={handleInputChange("fname")}
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
            onChange={handleInputChange("lname")}
          />
        </div>
        <div className={formField}>
          <label htmlFor="exp">Experience</label>
          <input
            type="text"
            name="exp"
            id="exp"
            placeholder="Enter your experience"
            className={inputField}
            value={form.exp}
            onChange={handleInputChange("exp")}
          />
        </div>
        <div className={formField}>
          <label htmlFor="desig">Designation</label>
          <select
            name="desig"
            id="desig"
            className={dropDown}
            style={selectStyle}
            value={form.desig}
            onChange={handleInputChange("desig")}
          >
            <option value="">Select Designation</option>
            <option value="DOCTOR">Doctor</option>
            <option value="SURGEON">Surgeon</option>
            <option value="GENERAL">General Physician</option>
          </select>
        </div>
        {/* Practice/Clinic Entries Tag Box */}
        <div className={`${formField} col-span-2`}>
          <label>Practice/Clinic Details</label>
          <div className="flex flex-col gap-2">
            <EditableEntry
              entries={practiceEntries}
              setEntries={setPracticeEntries}
              fieldNames={[
                "practiceName",
                "clinicAddress",
                "postCode",
                "phone",
              ]}
              renderLabel={(entry) => entry.practiceName}
            />
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
            onChange={handleInputChange("about_self")}
          ></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="reg_assoc">Registrations & Associations</label>
          <div className="flex flex-col gap-2">
            <div className="items-starts border-primary flex min-h-[240px] flex-wrap content-start rounded-md border bg-transparent p-3">
              {form?.registrationsAssociations?.map((q, idx) => (
                <span
                  key={idx}
                  className="mr-2 mb-2 flex h-fit items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white"
                >
                  {q}
                  <button
                    type="button"
                    className="ml-2 cursor-pointer text-white hover:text-red-200"
                    onClick={() =>
                      handleRemoveValue("registrationsAssociations", idx)
                    }
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
                value={inputs?.registrationsAssociations}
                onChange={handleMultiInputChange("registrationsAssociations")}
                onKeyDown={handleKeyDown("registrationsAssociations")}
              />
            </div>
            <span className="text-xs text-gray-500">
              Press Enter to add each qualification as a tag.
            </span>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="qual">Qualifications</label>
          <div className="flex flex-col gap-2">
            <div className="items-starts border-primary flex min-h-[240px] flex-wrap content-start rounded-md border bg-transparent p-3">
              {form?.qualifications?.map((q, idx) => (
                <span
                  key={idx}
                  className="mr-2 mb-2 flex h-fit items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white"
                >
                  {q}
                  <button
                    type="button"
                    className="ml-2 cursor-pointer text-white hover:text-red-200"
                    onClick={() => handleRemoveValue("qualifications", idx)}
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
                value={inputs?.qualifications}
                onChange={handleMultiInputChange("qualifications")}
                onKeyDown={handleKeyDown("qualifications")}
              />
            </div>
            <span className="text-xs text-gray-500">
              Press Enter to add each qualification as a tag.
            </span>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="qual">Awards & Publications</label>
          <div className="flex flex-col gap-2">
            <div className="items-starts border-primary flex min-h-[240px] flex-wrap content-start rounded-md border bg-transparent p-3">
              {form?.awardsPublications?.map((q, idx) => (
                <span
                  key={idx}
                  className="mr-2 mb-2 flex h-fit items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white"
                >
                  {q}
                  <button
                    type="button"
                    className="ml-2 cursor-pointer text-white hover:text-red-200"
                    onClick={() => handleRemoveValue("awardsPublications", idx)}
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
                value={inputs?.awardsPublications}
                onChange={handleMultiInputChange("awardsPublications")}
                onKeyDown={handleKeyDown("awardsPublications")}
              />
            </div>
            <span className="text-xs text-gray-500">
              Press Enter to add each awards and Publications as a tag.
            </span>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="hosp_aff">Hospital affiliations</label>
          <div className="flex flex-col gap-2">
            <EditableEntry
              entries={hospitalAffiliations}
              setEntries={setHospitalAffiliations}
              fieldNames={["name", "address"]}
              renderLabel={(entry) => entry.name}
            />
          </div>
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
      <div className="mt-8 flex items-center justify-center">
        <button
          className="btn_fill col-span-2 m-auto flex cursor-pointer justify-center px-14 py-2 max-sm:w-full"
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Doctor Profile"}
        </button>
      </div>
    </div>
  );
};

export default CreateDoctorPage;
