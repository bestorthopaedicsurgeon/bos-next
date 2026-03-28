"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React, { useState, useEffect } from "react";
import { profileHeader } from "@/data/profileHeader";
import {
  calendar,
  schedule_date,
} from "@/data/doc_reg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, X, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import EditableEntry from "@/components/registration/EditableEntry";
import { toast } from "sonner";
import { auCities } from "@/lib/constants/auCities";
import { useSession } from "next-auth/react";
import { sanitizeFormValue } from "@/lib/sanitize";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

const toTitleCase = (str) =>
  str.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());

const DoctorProfileForm = ({ mode = "create", userRole = "DOCTOR", initialData = null, doctorId = null }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [form, setForm] = useState({
    title: "",
    fname: "",
    lname: "",
    desig: "",
    about_self: "",
    location: "",
    officialEmail: "",
    groupName: "",
    qualifications: [],
    primaryQualification: [],
    awardsPublications: [],
    registrationsAssociations: [],
    hospitalAffiliations: [],
    featuredQualifications: [],
    practices: [],
  });

  const [inputs, setInputs] = useState({
    qualifications: "",
    awardsPublications: "",
    registrationsAssociations: "",
    hospitalAffiliations: "",
    featuredQualifications: "",
  });

  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(mode === "edit");
  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [specificAvailability, setSpecificAvailability] = useState([]);
  const [customSpecialties, setCustomSpecialties] = useState([]);
  const [customInput, setCustomInput] = useState("");

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

  const dayMap = {
    Mon: "MONDAY", Tue: "TUESDAY", Wed: "WEDNESDAY", Thu: "THURSDAY",
    Fri: "FRIDAY", Sat: "SATURDAY", Sun: "SUNDAY",
  };

  const [scheduleTimes, setScheduleTimes] = useState(
    schedule_date.map((item) => ({
      startTime: item.startTime.replace("am", "").replace("pm", "").trim(),
      endTime: item.endTime.replace("am", "").replace("pm", "").trim(),
      location: (item.day === "Sat" || item.day === "Sun") ? "" : "ONLINE",
    })),
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Initialize data if provided or if in edit mode
  useEffect(() => {
    if (mode === "edit" && initialData) {
      populateData(initialData);
      setDataLoading(false);
    }
  }, [mode, initialData]);

  const populateData = (doctorData) => {
    const nameParts = doctorData.name ? doctorData.name.split(" ") : ["", ""];
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    setForm({
      title: doctorData.title || "",
      fname: firstName,
      lname: lastName,
      desig: doctorData.designation || "",
      about_self: doctorData.about || "",
      location: doctorData.location || "",
      officialEmail: doctorData.officialEmail || "",
      groupName: doctorData.groupName || "",
      qualifications: doctorData.qualifications ? doctorData.qualifications.slice(1) : [],
      primaryQualification: doctorData.qualifications?.[0]
        ? [{ value: doctorData.qualifications[0], label: doctorData.qualifications[0] }]
        : [],
      awardsPublications: doctorData.awardsPublications || [],
      registrationsAssociations: doctorData.registrationsAssociations || [],
      hospitalAffiliations: doctorData.hospitalAffiliations || [],
      featuredQualifications: (doctorData.featuredQualifications || []).map(q => ({ value: q, label: q })),
      image: doctorData.image || null,
    });

    if (doctorData.subspecialities && Array.isArray(doctorData.subspecialities)) {
      const mappedSpecialties = doctorData.subspecialities.map((specialty) => {
        const found = subspecialities.find((s) => s.label === specialty);
        return found || { value: "Other", label: specialty };
      });
      setSelectedSpecialties(mappedSpecialties);
      const customSpecs = doctorData.subspecialities.filter(
        (specialty) => !subspecialities.some((s) => s.label === specialty),
      );
      setCustomSpecialties(customSpecs);
    }

    if (doctorData.practices && Array.isArray(doctorData.practices)) {
      setForm(prev => ({ ...prev, practices: doctorData.practices }));
    }


    if (doctorData.DoctorAvailabilityTime && Array.isArray(doctorData.DoctorAvailabilityTime)) {
      setDoctorAvailability(doctorData.DoctorAvailabilityTime);
      const scheduleMap = {};
      doctorData.DoctorAvailabilityTime.forEach((avail) => {
        const dayIndex = schedule_date.findIndex((d) => dayMap[d.day] === avail.dayOfWeek);
        if (dayIndex !== -1) {
          scheduleMap[dayIndex] = {
            startTime: avail.startTime,
            endTime: avail.endTime,
            location: avail.location === "CLINIC" ? avail.clinicName : avail.location,
          };
        }
      });
      setScheduleTimes((prev) => prev.map((item, idx) => ({ ...item, ...scheduleMap[idx] })));
    }

    if (doctorData.specificAvailability && Array.isArray(doctorData.specificAvailability)) {
      setSpecificAvailability(doctorData.specificAvailability);
    }
  };

  const handleInputChange = (field) => (e) => {
    const value = field === "image" ? e.target.files?.[0] : sanitizeFormValue(e.target.value);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiInputChange = (field) => (e) => {
    setInputs((prev) => ({ ...prev, [field]: sanitizeFormValue(e.target.value) }));
  };

  const handleImageUpload = async (targetDoctorId) => {
    if (!form.image || typeof form.image === "string") return true;

    const formData = new FormData();
    formData.append("file", form.image);
    formData.append("doctorId", targetDoctorId);

    const res = await fetch("/api/doctors/upload-image", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      toast.error("Image upload failed");
      return false;
    }
    return true;
  };

  const addCurrentInputAsTag = (field) => {
    let value = (inputs?.[field] ?? "").trim();
    if (!value) return;
    if (["registrationsAssociations", "qualifications", "awardsPublications", "featuredQualifications"].includes(field)) {
      value = toTitleCase(value);
    }
    setForm((prev) => {
      if (prev[field].includes(value)) return prev;
      return { ...prev, [field]: [...prev[field], value] };
    });
    setInputs((prev) => ({ ...prev, [field]: "" }));
  };

  const handleKeyDown = (field) => (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addCurrentInputAsTag(field);
    }
  };

  const handleRemoveValue = (field, idx) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== idx),
    }));
  };


  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties((prev) => {
      const exists = prev.find((s) => s.value === specialty.value);
      if (exists) return prev.filter((s) => s.value !== specialty.value);
      return [...prev, specialty];
    });
  };

  const handleAddCustomSpecialty = () => {
    let trimmed = customInput.trim();
    if (trimmed !== "") {
      trimmed = toTitleCase(trimmed);
      if (!customSpecialties.includes(trimmed)) {
        const updatedCustom = [...customSpecialties, trimmed];
        setCustomSpecialties(updatedCustom);
        setCustomInput("");
        setSelectedSpecialties([
          ...selectedSpecialties.filter((s) => s.value !== "Other"),
          ...updatedCustom.map((label) => ({ value: "Other", label })),
        ]);
      }
    }
  };

  const handleRemoveCustomSpecialty = (labelToRemove) => {
    const updatedCustom = customSpecialties.filter((label) => label !== labelToRemove);
    setCustomSpecialties(updatedCustom);
    setSelectedSpecialties([
      ...selectedSpecialties.filter((s) => !(s.value === "Other" && s.label === labelToRemove)),
    ]);
  };

  // Sync doctorAvailability with scheduleTimes
  useEffect(() => {
    const updatedAvailability = scheduleTimes.map((entry, idx) => {
      const dayShort = schedule_date[idx].day;
      const dayOfWeek = DayOfWeekMap[dayShort];
      let location = entry.location;
      if (!location || location === "") return null;
      if (location !== "ONLINE") location = "CLINIC";
      const clinicName = location === "CLINIC" ? entry.location : "ONLINE";
      return {
        dayOfWeek,
        startTime: entry.startTime,
        endTime: entry.endTime,
        location,
        clinicName: clinicName || "ONLINE",
      };
    }).filter(Boolean);
    setDoctorAvailability(updatedAvailability);
  }, [scheduleTimes]);

  const DayOfWeekMap = {
    Mon: "MONDAY", Tue: "TUESDAY", Wed: "WEDNESDAY", Thu: "THURSDAY",
    Fri: "FRIDAY", Sat: "SATURDAY", Sun: "SUNDAY",
  };

  const generateTimeOptions = (start = "06:00", end = "22:00") => {
    const options = [];
    let [hour, minute] = start.split(":").map(Number);
    const [endHour, endMinute] = end.split(":").map(Number);
    while (hour < endHour || (hour === endHour && minute <= endMinute)) {
      const h = hour.toString().padStart(2, "0");
      const m = minute.toString().padStart(2, "0");
      options.push(`${h}:${m}`);
      minute += 30;
      if (minute >= 60) { minute = 0; hour += 1; }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title) return toast.error("Please select your title.");
    if (!form.fname) return toast.error("First name is required.");
    if (!form.lname) return toast.error("Last name is required.");
    if (!form.desig) return toast.error("Please select your designation.");
    if (form.practices.length === 0) return toast.error("Practice/Clinic Details is required.");
    if (selectedSpecialties.length === 0) return toast.error("Please select at least one subspeciality.");
    if (!form.about_self) return toast.error("Please tell us about yourself.");

    setLoading(true);
    try {
      const data = {
        name: `${form.fname} ${form.lname}`,
        title: form.title,
        experience: form.exp ? parseInt(form.exp) : undefined,
        designation: form.desig,
        about: form.about_self,
        location: form.location,
        officialEmail: form.officialEmail,
        groupName: form.groupName,
        subspecialities: selectedSpecialties.map((s) => s.label),
        registrationsAssociations: form.registrationsAssociations,
        awardsPublications: form.awardsPublications,
        hospitalAffiliations: form.hospitalAffiliations,
        practices: form.practices,
        featuredQualifications: form.featuredQualifications.map(q => q.value),
        doctorAvailability: doctorAvailability,
        specificAvailability: specificAvailability,
      };

      const finalQualifications = [];
      if (Array.isArray(form.primaryQualification)) {
        form.primaryQualification.forEach(q => {
          if (!finalQualifications.includes(q.value)) finalQualifications.push(q.value);
        });
      }
      if (Array.isArray(form.qualifications)) {
        form.qualifications.forEach(q => {
          if (!finalQualifications.includes(q)) finalQualifications.push(q);
        });
      }
      if (finalQualifications.length > 0) data.qualifications = finalQualifications;

      if (mode === "edit" || userRole === "DOCTOR") {
        if (doctorId) data.id = parseInt(doctorId);
      } else if (userRole === "ADMIN" && doctorId) {
        data.userId = doctorId; // Reusing doctorId prop for userId in create mode for admin
      }

      const method = (mode === "edit" || userRole === "DOCTOR") ? "PATCH" : "POST";

      const res = await fetch("/api/doctors", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        const finalDoctorId = result.data?.id || result.profile?.id || doctorId;

        if (form.image) {
          await handleImageUpload(finalDoctorId);
        }

        toast.success(mode === "edit" ? "Profile updated!" : "Registration successful!");

        if (userRole === "ADMIN") {
          router.push("/admin/doctors");
        } else {
          router.push("/doctor");
        }
      } else {
        const result = await res.json();
        toast.error(result.error || "Save failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const inputFieldClass = "border border-(--primary) rounded-md p-3 focus:ring-1 focus:ring-(--primary) focus:outline-none";
  const formFieldClass = "flex flex-col gap-2 max-lg:col-span-2";

  if (dataLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container m-auto py-10">
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-[32px]" autoComplete="off">
        {/* Basic Info Rows */}
        <div className={formFieldClass}>
          <label htmlFor="title">Title</label>
          <Select
            id="title"
            isSearchable={false}
            isClearable
            className="react-select-container"
            classNamePrefix="react-select"
            value={form.title ? { value: form.title, label: { DR: "Dr", MS: "Ms", MR: "Mr", PROF: "Prof" }[form.title] } : null}
            onChange={(selected) => setForm((prev) => ({ ...prev, title: selected ? selected.value : "" }))}
            options={[
              { value: "DR", label: "Dr" },
              { value: "MS", label: "Ms" },
              { value: "MR", label: "Mr" },
              { value: "PROF", label: "Prof" },
            ]}
            placeholder="Select title"
            unstyled
            classNames={{
              control: (state) => `${inputFieldClass} bg-transparent ${state.isFocused ? "ring-1 ring-primary" : ""}`,
              menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
              option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-primary text-white" : "hover:bg-gray-100"}`,
              placeholder: () => "text-gray-500",
              valueContainer: () => "flex gap-1",
              indicatorsContainer: () => "text-gray-500 cursor-pointer",
            }}
          />
        </div>

        <div className={formFieldClass}>
          <label htmlFor="image">Profile Picture</label>
          <input type="file" id="image" className="hidden" onChange={handleInputChange("image")} />
          <label htmlFor="image" className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-2 text-white">
            <span>{form.image ? "Change Picture" : "Click to upload"}</span>
            <Plus size={20} />
          </label>
        </div>

        <div className={formFieldClass}>
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" placeholder="Enter first name" className={inputFieldClass} value={form.fname} onChange={handleInputChange("fname")} />
        </div>

        <div className={formFieldClass}>
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" placeholder="Enter last name" className={inputFieldClass} value={form.lname} onChange={handleInputChange("lname")} />
        </div>

        <div className={formFieldClass}>
          <label htmlFor="desig">Designation</label>
          <CreatableSelect
            isClearable
            id="desig"
            className="react-select-container"
            classNamePrefix="react-select"
            value={form.desig ? { label: form.desig, value: form.desig } : null}
            onChange={(selected) => setForm((prev) => ({ ...prev, desig: selected ? selected.value : "" }))}
            options={[
              { value: "Orthopaedic Surgeon", label: "Orthopaedic Surgeon" },
              { value: "A/ Professor", label: "A/ Professor" },
              { value: "Professor", label: "Professor" },
              { value: "Spinal Surgeon", label: "Spinal Surgeon" },
            ]}
            placeholder="Select or type..."
            unstyled
            classNames={{
              control: (state) => `${inputFieldClass} bg-transparent ${state.isFocused ? "ring-1 ring-primary" : ""}`,
              menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
              option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-primary text-white" : "hover:bg-gray-100"}`,
            }}
          />
        </div>

        <div className={formFieldClass}>
          <label htmlFor="location">City</label>
          <Select
            id="location"
            value={form.location ? { value: form.location, label: form.location } : null}
            onChange={(selected) => setForm((prev) => ({ ...prev, location: selected ? selected.value : "" }))}
            options={auCities.map((cityObj) => ({ value: cityObj.city, label: cityObj.city }))}
            placeholder="Select city"
            unstyled
            classNames={{
              control: (state) => `${inputFieldClass} bg-transparent ${state.isFocused ? "ring-1 ring-primary" : ""}`,
              menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
              option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-primary text-white" : "hover:bg-gray-100"}`,
            }}
          />
        </div>

        <div className={formFieldClass}>
          <label htmlFor="officialEmail" className="flex items-center">
            Official Email Address
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-2 cursor-help"><Info size={16} className="text-gray-400" /></span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-[250px] text-sm">This email will be used to securely notify you about your appointments booked through our platform.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <input type="email" id="officialEmail" placeholder="Enter official email" className={inputFieldClass} value={form.officialEmail} onChange={handleInputChange("officialEmail")} />
        </div>

        <div className={formFieldClass}>
          <label htmlFor="groupName">Group Name</label>
          <input type="text" id="groupName" placeholder="Enter group name" className={inputFieldClass} value={form.groupName} onChange={handleInputChange("groupName")} />
        </div>

        {/* Full width rows */}
        <div className={`${formFieldClass} col-span-2`}>
          <label>Hospital Affiliations</label>
          <EditableEntry
            entries={form.hospitalAffiliations}
            setEntries={(val) => {
              const newEntries = typeof val === 'function' ? val(form.hospitalAffiliations) : val;
              setForm(prev => ({ ...prev, hospitalAffiliations: newEntries }));
            }}
            fieldNames={["name", "address", "phone"]}
            renderLabel={(entry) => entry.name}
          />
          <p className="text-xs text-gray-500 mt-1">Click Add to add a hospital affiliation</p>

        </div>
        {/* Subspecialties */}
        <div className={`${formFieldClass} h-full flex flex-col`}>
          <label className="flex items-center">
            Subspeciality/Special Interests
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="ml-2 cursor-help"><Info size={16} className="text-gray-400" /></span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-[250px] text-sm">The first subspeciality entered will appear on the doctor's card; all will show in the about section.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className="border border-primary p-3 rounded-md flex-1 flex flex-col">
            <div className="flex gap-2 mb-2">
              <input type="text" value={customInput} onChange={(e) => setCustomInput(e.target.value)} placeholder="Add other..." className="flex-1 p-2 text-sm border rounded" />
              <button type="button" onClick={handleAddCustomSpecialty} className="bg-primary text-white px-4 rounded h-9 flex items-center justify-center cursor-pointer font-medium text-sm">Add</button>
            </div>
            <div className="overflow-auto flex-1 h-[140px]">
              {subspecialities.filter(s => s.value !== "Other").map(s => (
                <label key={s.value} className="flex items-center gap-2 py-1 cursor-pointer">
                  <input type="checkbox" className="accent-primary" checked={selectedSpecialties.some(sel => sel.value === s.value)} onChange={() => handleSpecialtyChange(s)} />
                  <span className="text-sm">{s.label}</span>
                </label>
              ))}
              {customSpecialties.map(label => (
                <div key={label} className="flex items-center justify-between py-1">
                  <span className="text-sm">{label}</span>
                  <button type="button" onClick={() => handleRemoveCustomSpecialty(label)} className="text-red-500"><X size={16} /></button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${formFieldClass} h-full flex flex-col`}>
          <label>Selected Subspecialities</label>
          <div className="border border-primary p-3 rounded-md flex-1 min-h-[200px]">
            {selectedSpecialties.map(s => (
              <div key={s.label} className="flex items-center gap-2 py-1">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`${formFieldClass} h-full flex flex-col`}>
          <label htmlFor="about_self">Tell us about yourself</label>
          <textarea id="about_self" className={`flex-1 min-h-[150px] resize-none ${inputFieldClass}`} placeholder="Write a brief introduction about yourself." value={form.about_self} onChange={handleInputChange("about_self")}></textarea>
          <p className="text-xs opacity-0 mt-1 pointer-events-none select-none">&nbsp;</p>
        </div>

        <div className={`${formFieldClass} h-full flex flex-col`}>
          <label>Registrations & Associations</label>
          <div className="border border-primary p-2 rounded-md flex-1 flex flex-wrap gap-2 content-start min-h-[150px]">
            {form.registrationsAssociations.map((q, i) => (
              <span key={i} className="bg-[#83C5BE] text-white px-3 py-1 rounded text-xs flex items-center gap-2">
                {q} <button type="button" className="cursor-pointer" onClick={() => handleRemoveValue("registrationsAssociations", i)}><X size={12} /></button>
              </span>
            ))}
            <div className="flex gap-2 w-full">
              <input type="text" className="flex-1 outline-none text-sm border p-2 rounded" placeholder="Type then press enter, click add or tap outside." value={inputs.registrationsAssociations} onChange={handleMultiInputChange("registrationsAssociations")} onKeyDown={handleKeyDown("registrationsAssociations")} />
              <button type="button" onClick={() => addCurrentInputAsTag("registrationsAssociations")} className="bg-primary text-white px-4 h-9 rounded flex items-center justify-center cursor-pointer font-medium text-sm">Add</button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Add each item (e.g. AHPRA, AOA, FRACS). Press Enter, click Add, or leave the field to save.</p>
        </div>


        {/* Left Column: Qualifications Group */}
        <div className="flex flex-col gap-6">
          <div className={formFieldClass}>
            <label className="flex items-center">
              Primary Qualifications
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-2 cursor-help"><Info size={16} className="text-gray-400" /></span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-[250px] text-sm">This will be prominently displayed on your profile at the top, under your doctor information.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
            <CreatableSelect
              isMulti
              isClearable
              id="featuredQualifications"
              className="react-select-container"
              classNamePrefix="react-select"
              value={form.featuredQualifications}
              onChange={(selected) => setForm((prev) => ({ ...prev, featuredQualifications: selected || [] }))}
              options={[
                { value: "FRCS", label: "FRCS" },
                { value: "FRACS", label: "FRACS" },
                { value: "FAOrthoA", label: "FAOrthoA" },
                { value: "DMCC", label: "DMCC" },
              ]}
              placeholder="Select or type up to 4..."
              unstyled
              classNames={{
                control: (state) => `${inputFieldClass} bg-transparent ${state.isFocused ? "ring-1 ring-primary" : ""}`,
                menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
                option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-primary text-white" : "hover:bg-gray-100"}`,
                multiValue: () => "bg-[#83C5BE] text-white rounded-full px-2 py-0.5 m-1 text-xs flex items-center gap-1",
                multiValueLabel: () => "text-white",
                multiValueRemove: () => "hover:text-red-500",
              }}
            />
          </div>

          <div className={formFieldClass}>
            <label className="flex items-center">
              Additional Qualifications
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-2 cursor-help"><Info size={16} className="text-gray-400" /></span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-[250px] text-sm">These will be grouped as descriptive qualifications and shown within the About section of your profile.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
            <div className="border border-primary p-3 rounded-md min-h-[150px] flex flex-wrap gap-2 content-start">
              {form.qualifications.map((q, i) => (
                <span key={i} className="bg-[#83C5BE] text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                  {q} <button type="button" className="cursor-pointer" onClick={() => handleRemoveValue("qualifications", i)}><X size={12} /></button>
                </span>
              ))}
              <div className="flex gap-2 w-full mt-2">
                <input type="text" className="flex-1 outline-none text-sm border p-2 rounded" placeholder="Type then press Enter, click Add, or tap outside" value={inputs.qualifications} onChange={handleMultiInputChange("qualifications")} onKeyDown={handleKeyDown("qualifications")} />
                <button type="button" onClick={() => addCurrentInputAsTag("qualifications")} className="bg-primary text-white px-4 rounded h-9 flex items-center justify-center cursor-pointer font-medium text-sm">Add</button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">Add each qualification. Press Enter, click Add, or leave the field to save.</p>
          </div>
        </div>

        {/* Right Column: Awards & Publications */}
        <div className={`${formFieldClass} h-full`}>
          <label>Awards & Publications</label>
          <div className="border border-primary p-3 rounded-md flex-1 flex flex-wrap gap-2 content-start">
            {form.awardsPublications.map((q, i) => (
              <span key={i} className="bg-[#83C5BE] text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                {q} <button type="button" className="cursor-pointer" onClick={() => handleRemoveValue("awardsPublications", i)}><X size={12} /></button>
              </span>
            ))}
            <div className="flex gap-2 w-full mt-2 items-start">
              <input type="text" className="flex-1 outline-none text-sm border p-2 rounded" placeholder="Type then press Enter, click Add, or tap outside" value={inputs.awardsPublications} onChange={handleMultiInputChange("awardsPublications")} onKeyDown={handleKeyDown("awardsPublications")} />
              <button type="button" onClick={() => addCurrentInputAsTag("awardsPublications")} className="bg-primary text-white px-4 h-9 rounded flex items-center justify-center cursor-pointer font-medium text-sm">Add</button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">Add each award or publication. Press Enter, click Add, or leave the field to save.</p>
        </div>


        <div className={formFieldClass}>
          <label>Practice/Clinic Details</label>
          <EditableEntry
            entries={form.practices}
            setEntries={(val) => {
              const newEntries = typeof val === 'function' ? val(form.practices) : val;
              setForm(prev => ({ ...prev, practices: newEntries }));
            }}
            fieldNames={["practiceName", "clinicName", "clinicAddress", "postCode", "phone", "fax"]}
            renderLabel={(entry) => entry.practiceName}
          />
          <p className="text-xs text-gray-500 mt-1">Click Add to add a practice/clinic detail</p>
        </div>

        {/* Availability Section */}
        <div className={`${formFieldClass} col-span-2 mt-10`}>
          <h3 className="font-bold text-primary text-xl">Weekly Availability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {scheduleTimes.map((item, idx) => (
              <div key={idx} className="border p-4 rounded-lg bg-gray-50">
                <label className="font-bold text-sm block mb-2">{schedule_date[idx]?.day} Availability</label>
                <div className="flex flex-col gap-2">
                  <Select
                    value={item.location ? { value: item.location, label: item.location === "ONLINE" ? "Online" : item.location } : { value: "", label: "Unavailable" }}
                    onChange={(sel) => setScheduleTimes(prev => {
                      const newTimes = [...prev];
                      newTimes[idx].location = sel ? sel.value : "";
                      return newTimes;
                    })}
                    options={[
                      { value: "", label: "Unavailable" },
                      { value: "ONLINE", label: "Online" },
                      ...form.practices.map(p => ({ value: p.clinicName || p.practiceName, label: p.clinicName || p.practiceName }))
                    ]}
                    className="text-xs"
                  />
                  {item.location && (
                    <div className="flex gap-2">
                      <Select
                        value={{ value: item.startTime, label: item.startTime }}
                        onChange={(sel) => setScheduleTimes(prev => {
                          const newTimes = [...prev];
                          newTimes[idx].startTime = sel.value;
                          return newTimes;
                        })}
                        options={timeOptions.map(t => ({ value: t, label: t }))}
                        className="flex-1 text-xs"
                      />
                      <Select
                        value={{ value: item.endTime, label: item.endTime }}
                        onChange={(sel) => setScheduleTimes(prev => {
                          const newTimes = [...prev];
                          newTimes[idx].endTime = sel.value;
                          return newTimes;
                        })}
                        options={timeOptions.map(t => ({ value: t, label: t }))}
                        className="flex-1 text-xs"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 pt-10 border-t mt-10">
          <Button type="submit" disabled={loading} className="w-full h-12 text-lg">
            {loading ? "Saving Profile..." : (mode === "edit" ? "Update Profile" : "Create Profile")}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DoctorProfileForm;
