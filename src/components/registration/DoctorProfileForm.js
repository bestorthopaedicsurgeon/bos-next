"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React, { useState, useEffect } from "react";
import { profileHeader } from "@/data/profileHeader";
import { calendar, schedule_date } from "@/data/doc_reg";
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

// ─── Helpers ────────────────────────────────────────────────────────────────
const toTitleCase = (str) =>
  str.replace(/\w\S*/g, (t) =>
    t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
  );

const DayOfWeekMap = {
  Mon: "MONDAY",
  Tue: "TUESDAY",
  Wed: "WEDNESDAY",
  Thu: "THURSDAY",
  Fri: "FRIDAY",
  Sat: "SATURDAY",
  Sun: "SUNDAY",
};

// ─── Component ───────────────────────────────────────────────────────────────
const DoctorProfileForm = ({
  mode = "create",
  userRole = "DOCTOR",
  initialData = null,
  doctorId = null,
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const today = new Date();

  // ── Form State ──────────────────────────────────────────────────────────
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [form, setForm] = useState({
    title: "",
    fname: "",
    lname: "",
    desig: "",
    about_self: "",
    location: "",
    officialEmail: null,
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [scheduleTimes, setScheduleTimes] = useState(
    schedule_date.map((item) => ({
      startTime: item.startTime.replace("am", "").replace("pm", "").trim(),
      endTime: item.endTime.replace("am", "").replace("pm", "").trim(),
      location: item.day === "Sat" || item.day === "Sun" ? "" : "ONLINE",
    }))
  );

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

  // ── Effects ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (mode === "edit" && initialData) {
      populateData(initialData);
      setDataLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, initialData]);

  // Sync doctorAvailability with scheduleTimes
  useEffect(() => {
    const updatedAvailability = scheduleTimes
      .map((entry, idx) => {
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
      })
      .filter(Boolean);
    setDoctorAvailability(updatedAvailability);
  }, [scheduleTimes]);

  // ── Populate for Edit Mode ───────────────────────────────────────────────
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
      officialEmail: doctorData.officialEmail || null,
      groupName: doctorData.groupName || "",
      qualifications: doctorData.qualifications ? doctorData.qualifications.slice(1) : [],
      primaryQualification: doctorData.qualifications?.[0]
        ? [{ value: doctorData.qualifications[0], label: doctorData.qualifications[0] }]
        : [],
      awardsPublications: doctorData.awardsPublications || [],
      registrationsAssociations: doctorData.registrationsAssociations || [],
      hospitalAffiliations: doctorData.hospitalAffiliations || [],
      featuredQualifications: (doctorData.featuredQualifications || []).map((q) => ({
        value: q,
        label: q,
      })),
      image: doctorData.image || null,
      practices: doctorData.practices || [],
    });

    if (doctorData.subspecialities && Array.isArray(doctorData.subspecialities)) {
      const mappedSpecialties = doctorData.subspecialities.map((specialty) => {
        const found = subspecialities.find((s) => s.label === specialty);
        return found || { value: "Other", label: specialty };
      });
      setSelectedSpecialties(mappedSpecialties);
      const customSpecs = doctorData.subspecialities.filter(
        (specialty) => !subspecialities.some((s) => s.label === specialty)
      );
      setCustomSpecialties(customSpecs);
    }

    if (doctorData.DoctorAvailabilityTime && Array.isArray(doctorData.DoctorAvailabilityTime)) {
      setDoctorAvailability(doctorData.DoctorAvailabilityTime);
      const scheduleMap = {};
      doctorData.DoctorAvailabilityTime.forEach((avail) => {
        const dayIndex = schedule_date.findIndex(
          (d) => dayMap[d.day] === avail.dayOfWeek
        );
        if (dayIndex !== -1) {
          scheduleMap[dayIndex] = {
            startTime: avail.startTime,
            endTime: avail.endTime,
            location: avail.location === "CLINIC" ? avail.clinicName : avail.location,
          };
        }
      });
      setScheduleTimes((prev) =>
        prev.map((item, idx) => ({ ...item, ...scheduleMap[idx] }))
      );
    }

    if (doctorData.specificAvailability && Array.isArray(doctorData.specificAvailability)) {
      setSpecificAvailability(doctorData.specificAvailability);
    }
  };

  // ── Form Handlers ────────────────────────────────────────────────────────
  const handleInputChange = (field) => (e) => {
    let value =
      field === "image" ? e.target.files?.[0] : sanitizeFormValue(e.target.value);
    if (field === "officialEmail" && value === "") value = null;
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
    if (!res.ok) { toast.error("Image upload failed"); return false; }
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
    if (e.key === "Enter") { e.preventDefault(); addCurrentInputAsTag(field); }
  };

  const handleTagInputBlur = (field) => () => {
    addCurrentInputAsTag(field);
  };

  const handleRemoveValue = (field, idx) => {
    setForm((prev) => ({ ...prev, [field]: prev[field].filter((_, i) => i !== idx) }));
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
      ...selectedSpecialties.filter(
        (s) => !(s.value === "Other" && s.label === labelToRemove)
      ),
    ]);
  };

  // ── Time Options ────────────────────────────────────────────────────────
  const generateTimeOptions = (start = "00:00", end = "23:30") => {
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
  const timeOptions = generateTimeOptions("06:00", "22:00");

  // ── Submit ───────────────────────────────────────────────────────────────
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
        featuredQualifications: form.featuredQualifications.map((q) => q.value),
        doctorAvailability: doctorAvailability,
        specificAvailability: specificAvailability,
      };

      const finalQualifications = [];
      if (Array.isArray(form.primaryQualification)) {
        form.primaryQualification.forEach((q) => {
          if (!finalQualifications.includes(q.value)) finalQualifications.push(q.value);
        });
      }
      if (Array.isArray(form.qualifications)) {
        form.qualifications.forEach((q) => {
          if (!finalQualifications.includes(q)) finalQualifications.push(q);
        });
      }
      if (finalQualifications.length > 0) data.qualifications = finalQualifications;

      if (mode === "edit" || userRole === "DOCTOR") {
        if (doctorId) data.id = parseInt(doctorId);
      } else if (userRole === "ADMIN" && doctorId) {
        data.userId = doctorId;
      }

      const method = mode === "edit" || userRole === "DOCTOR" ? "PATCH" : "POST";

      const res = await fetch("/api/doctors", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const result = await res.json();
        const finalDoctorId = result.data?.id || result.profile?.id || doctorId;
        if (form.image) await handleImageUpload(finalDoctorId);
        toast.success(mode === "edit" ? "Profile updated!" : "Registration successful!");
        if (userRole === "ADMIN") router.push("/admin/doctors");
        else router.push("/doctor");
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

  // ── Design Constants ─────────────────────────────────────────────────────
  const formField = "flex flex-col gap-2 max-lg:col-span-2";
  const inputField =
    "border border-(--primary) rounded-md p-3 focus:ring-1 focus:ring-(--primary) focus:outline-none";

  // ── Reusable tooltip wrapper ─────────────────────────────────────────────
  // Matches the clean professional look in the screenshot (default shadcn style)
  const InfoTooltip = ({ text }) => (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <button type="button" className="cursor-help focus:outline-none" tabIndex="-1">
            <Info className="ml-2 h-4 w-4 text-gray-500 hover:text-gray-700" />
          </button>
        </TooltipTrigger>
        {/* ✅ Clean default tooltip — white card with shadow, no custom border/colour overrides */}
        <TooltipContent>
          <p className="max-w-[260px] text-sm">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  // ── Loading State ────────────────────────────────────────────────────────
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

  const heading =
    mode === "edit"
      ? userRole === "ADMIN"
        ? "Edit Doctor Profile"
        : "Edit Your Profile"
      : userRole === "ADMIN"
        ? "Create New Doctor Profile"
        : "Doctor Profile Registration";

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      <ProfileHeader
        heading={heading}
        step1="Doctors"
        step2={form.fname || form.lname ? `${form.fname} ${form.lname}` : ""}
        step3={mode === "edit" ? "Edit Profile" : "Registration"}
      />
      <div className="container m-auto pb-16">
        <div
          className="container m-auto grid grid-cols-2 gap-[32px] pt-16"
          autoComplete="off"
        >
          {/* ── Title ─────────────────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="title">Title</label>
            <Select
              id="title"
              isSearchable={false}
              isClearable
              className="react-select-container"
              classNamePrefix="react-select"
              value={
                form.title
                  ? { value: form.title, label: { DR: "Dr", MS: "Ms", MR: "Mr", PROF: "Prof" }[form.title] }
                  : null
              }
              onChange={(selected) =>
                setForm((prev) => ({ ...prev, title: selected ? selected.value : "" }))
              }
              options={[
                { value: "DR", label: "Dr" },
                { value: "MS", label: "Ms" },
                { value: "MR", label: "Mr" },
                { value: "PROF", label: "Prof" },
              ]}
              placeholder="Select your title"
              unstyled
              classNames={{
                control: (state) => `${inputField} bg-transparent ${state.isFocused ? "ring-1 ring-(--primary)" : ""}`,
                menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
                option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-(--primary) text-white" : "hover:bg-gray-100"}`,
                placeholder: () => "text-gray-500",
                valueContainer: () => "flex gap-1",
                indicatorsContainer: () => "text-gray-500 cursor-pointer",
              }}
            />
          </div>

          {/* ── Profile Picture ───────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="image">Upload Profile Picture</label>
            <input type="file" name="image" id="image" className="hidden" onChange={handleInputChange("image")} />
            <label
              htmlFor="image"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-2 text-white"
            >
              <span>Click to upload</span>
              <span>
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z"
                    fill="white"
                  />
                </svg>
              </span>
            </label>
          </div>

          {/* ── First Name ───────────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="fname">First Name</label>
            <input type="text" name="fname" id="fname" placeholder="Enter first name" className={inputField} value={form.fname} onChange={handleInputChange("fname")} />
          </div>

          {/* ── Last Name ────────────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" placeholder="Enter last name" className={inputField} value={form.lname} onChange={handleInputChange("lname")} />
          </div>

          {/* ── Designation ─────────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="desig">Designation</label>
            <CreatableSelect
              isClearable
              id="desig"
              className="react-select-container"
              classNamePrefix="react-select"
              value={form.desig ? { label: form.desig, value: form.desig } : null}
              onChange={(selected) =>
                setForm((prev) => ({ ...prev, desig: selected ? selected.value : "" }))
              }
              options={[
                { value: "Orthopaedic Surgeon", label: "Orthopaedic Surgeon" },
                { value: "A/ Professor", label: "A/ Professor" },
                { value: "Professor", label: "Professor" },
                { value: "Spinal Surgeon", label: "Spinal Surgeon" },
              ]}
              placeholder="Select or type..."
              unstyled
              classNames={{
                control: (state) => `${inputField} bg-transparent ${state.isFocused ? "ring-1 ring-(--primary)" : ""}`,
                menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
                option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-(--primary) text-white" : "hover:bg-gray-100"}`,
                placeholder: () => "text-gray-500",
                valueContainer: () => "flex gap-1",
                indicatorsContainer: () => "text-gray-500 cursor-pointer",
              }}
            />
          </div>

          {/* ── City ────────────────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="location">City</label>
            <Select
              id="location"
              className="react-select-container"
              classNamePrefix="react-select"
              value={form.location ? { value: form.location, label: form.location } : null}
              onChange={(selected) =>
                setForm((prev) => ({ ...prev, location: selected ? selected.value : "" }))
              }
              options={auCities.map((cityObj) => ({ value: cityObj.city, label: cityObj.city }))}
              placeholder="Select your city"
              unstyled
              classNames={{
                control: (state) => `${inputField} bg-transparent ${state.isFocused ? "ring-1 ring-(--primary)" : ""}`,
                menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
                option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-(--primary) text-white" : "hover:bg-gray-100"}`,
                placeholder: () => "text-gray-500",
                valueContainer: () => "flex gap-1",
                indicatorsContainer: () => "text-gray-500 cursor-pointer",
              }}
            />
          </div>

          {/* ── Official Email ───────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="officialEmail" className="flex items-center">
              Official Email Address
              <InfoTooltip text="This email will be used to securely notify you about your appointments booked through our platform." />
            </label>
            <input
              type="email"
              name="officialEmail"
              id="officialEmail"
              placeholder="Enter official email address"
              className={inputField}
              value={form.officialEmail}
              onChange={handleInputChange("officialEmail")}
            />
          </div>

          {/* ── Group Name ──────────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="groupName">Group Name</label>
            <input
              type="text"
              name="groupName"
              id="groupName"
              placeholder="Enter group or practice name"
              className={inputField}
              value={form.groupName}
              onChange={handleInputChange("groupName")}
            />
          </div>

          {/* ── Hospital Affiliations ────────────────────────────────────── */}
          <div className={`${formField} col-span-2`}>
            <label htmlFor="hosp_aff">Hospital affiliations</label>
            <div className="flex flex-col gap-2">
              <EditableEntry
                entries={form.hospitalAffiliations}
                setEntries={(val) => {
                  const newEntries = typeof val === "function" ? val(form.hospitalAffiliations) : val;
                  setForm((prev) => ({ ...prev, hospitalAffiliations: newEntries }));
                }}
                fieldNames={["name", "address", "phone"]}
                renderLabel={(entry) => entry.name}
              />
              <span className="text-xs text-gray-500">Click + to add a hospital affiliation.</span>
            </div>
          </div>

          {/* ── Subspecialities — left panel (checkboxes) ────────────────── */}
          <div className={formField}>
            <label className="flex items-center">
              Subspeciality/Special Interests
              <InfoTooltip text="The first subspeciality entered will appear on the doctor's card; all will show in the about section." />
            </label>
            <div className="border-1 border-(--primary) p-3">
              <div
                className="max-h-[240px] overflow-auto"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#2F797B #D9D9D9" }}
              >
                {/* Custom specialty input */}
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder="Enter other specialty"
                    className="w-full rounded border border-(--primary) px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-(--primary) focus:ring-inset"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomSpecialty}
                    className="rounded bg-primary p-2 text-white hover:bg-primary/80"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {subspecialities.map((specialty, idx) => {
                  if (specialty.value === "Other") {
                    return (
                      <div key={idx} className="mt-2 space-y-2">
                        {customSpecialties.map((label, cIdx) => (
                          <div key={cIdx} className="flex items-center justify-between rounded border px-3 py-2 text-sm shadow-sm">
                            <span>{label}</span>
                            <button type="button" onClick={() => handleRemoveCustomSpecialty(label)} className="text-red-500 hover:text-red-700">
                              <X size={18} />
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <div key={specialty.value} className="flex items-center gap-2 py-1">
                      {/* ✅ Real checkbox — same layout/text as before, just checkbox instead of circle */}
                      <input
                        type="checkbox"
                        id={specialty.value.toLowerCase()}
                        checked={selectedSpecialties.some((s) => s.value === specialty.value)}
                        onChange={() => handleSpecialtyChange(specialty)}
                        className="h-4 w-4 cursor-pointer accent-primary"
                      />
                      <label
                        htmlFor={specialty.value.toLowerCase()}
                        className="cursor-pointer select-none"
                      >
                        {specialty.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Subspecialities — right panel (selected) ─────────────────── */}
          <div className={formField}>
            <div className="mt-9 border-1 border-(--primary) p-3">
              <div
                className="h-[240px] overflow-auto"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#2F797B #D9D9D9" }}
              >
                {selectedSpecialties.map((specialty, idx) => (
                  <div key={idx}>
                    <label className="flex cursor-pointer items-center rounded-full py-2 select-none">
                      <span className="mr-2 inline-block h-4 w-4 rounded-full border border-primary bg-primary"></span>
                      {specialty.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── About ───────────────────────────────────────────────────── */}
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

          {/* ── Registrations & Associations ────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="reg_assoc">Registrations & Associations</label>
            <div className="flex flex-col gap-2">
              <div className="items-starts border-primary flex min-h-[240px] flex-wrap content-start gap-2 rounded-md border bg-transparent p-3 focus-within:ring-1 focus-within:ring-(--primary)">
                {form?.registrationsAssociations?.map((q, idx) => (
                  <span key={idx} className="mr-2 mb-2 flex h-fit items-center rounded-md bg-[#83C5BE] px-3 py-1 text-sm text-white">
                    {q}
                    <button type="button" className="ml-2 cursor-pointer text-white hover:text-red-400" onClick={() => handleRemoveValue("registrationsAssociations", idx)} aria-label="Remove">
                      &times;
                    </button>
                  </span>
                ))}
                <div className="flex min-w-[120px] flex-1 basis-full items-center gap-2">
                  <input
                    type="text"
                    className="h-fit flex-1 border-none outline-none"
                    placeholder="Type then press Enter, click Add, or tap outside"
                    value={inputs?.registrationsAssociations ?? ""}
                    onChange={handleMultiInputChange("registrationsAssociations")}
                    onKeyDown={handleKeyDown("registrationsAssociations")}
                    onBlur={handleTagInputBlur("registrationsAssociations")}
                  />
                  <Button type="button" size="sm" className="shrink-0 bg-(--primary) text-white px-3 py-1 rounded-md text-sm hover:bg-(--primary-hover) hover:text-white transition-colors" onClick={() => addCurrentInputAsTag("registrationsAssociations")}>
                    Add
                  </Button>
                </div>
              </div>
              <span className="text-xs text-gray-500">Add each item (e.g. AHPRA, AOA, FRACS). Press Enter, click Add, or leave the field to save.</span>
            </div>
          </div>

          {/* ── Qualifications (Primary + Additional) ────────────────────── */}
          <div className="flex flex-col gap-[20px] max-lg:col-span-2 h-full">
            {/* Primary Qualification */}
            <div className="flex flex-col gap-2">
              <label htmlFor="primaryQualification" className="flex items-center">
                Primary Qualification
                <InfoTooltip text="This will be prominently displayed on your profile at the top, under your doctor information." />
              </label>
              <CreatableSelect
                isMulti
                id="primaryQualification"
                className="react-select-container"
                classNamePrefix="react-select"
                value={form.primaryQualification}
                onChange={(selected) => setForm((prev) => ({ ...prev, primaryQualification: selected || [] }))}
                options={[
                  { value: "FRCS", label: "FRCS" },
                  { value: "FRACS", label: "FRACS" },
                  { value: "FAOrthoA", label: "FAOrthoA" },
                  { value: "DMCC", label: "DMCC" },
                ]}
                isOptionDisabled={() => form.primaryQualification?.length >= 4}
                placeholder="Select or type up to 4..."
                unstyled
                classNames={{
                  control: (state) => `${inputField} bg-transparent ${state.isFocused ? "ring-1 ring-(--primary)" : ""}`,
                  menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
                  option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-(--primary) text-white" : "hover:bg-gray-100"}`,
                  placeholder: () => "text-gray-500",
                  multiValue: () => "bg-[#83C5BE] text-white rounded-md m-1 flex items-center",
                  multiValueLabel: () => "p-1 px-2 text-sm",
                  multiValueRemove: () => "hover:text-red-400 p-1 rounded-r-md cursor-pointer",
                  valueContainer: () => "flex gap-1 flex-wrap",
                  indicatorsContainer: () => "text-gray-500 cursor-pointer",
                }}
              />
            </div>

            {/* Additional Qualifications */}
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="qual" className="flex items-center">
                Additional Qualifications
                <InfoTooltip text="These will be grouped as descriptive qualifications and shown within the About section of your profile." />
              </label>
              <div className="flex flex-col gap-2 flex-1">
                <div className="items-starts border-primary flex min-h-[140px] flex-wrap content-start gap-2 rounded-md border bg-transparent p-3 flex-1 focus-within:ring-1 focus-within:ring-(--primary)">
                  {form?.qualifications?.map((q, idx) => (
                    <span key={idx} className="mr-2 mb-2 flex h-fit items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white">
                      {q}
                      <button type="button" className="ml-2 cursor-pointer text-white hover:text-red-400" onClick={() => handleRemoveValue("qualifications", idx)} aria-label="Remove">
                        &times;
                      </button>
                    </span>
                  ))}
                  <div className="flex min-w-[120px] flex-1 basis-full items-center gap-2">
                    <input
                      type="text"
                      className="h-fit flex-1 border-none outline-none"
                      placeholder="Type then press Enter, click Add, or tap outside"
                      value={inputs?.qualifications ?? ""}
                      onChange={handleMultiInputChange("qualifications")}
                      onKeyDown={handleKeyDown("qualifications")}
                      onBlur={handleTagInputBlur("qualifications")}
                    />
                    <Button type="button" size="sm" className="shrink-0 bg-(--primary) text-white px-3 py-1 rounded-md text-sm hover:bg-(--primary-hover) hover:text-white transition-colors" onClick={() => addCurrentInputAsTag("qualifications")}>
                      Add
                    </Button>
                  </div>
                </div>
                <span className="text-xs text-gray-500">Add each qualification. Press Enter, click Add, or leave the field to save.</span>
              </div>
            </div>
          </div>

          {/* ── Awards & Publications ────────────────────────────────────── */}
          <div className={`${formField} h-full`}>
            <label htmlFor="qual">Awards & Publications</label>
            <div className="flex flex-col gap-2 flex-1">
              <div className="items-starts border-primary flex min-h-[240px] flex-wrap content-start gap-2 rounded-md border bg-transparent p-3 flex-1 focus-within:ring-1 focus-within:ring-(--primary)">
                {form?.awardsPublications?.map((q, idx) => (
                  <span key={idx} className="mr-2 mb-2 flex h-fit items-center rounded-md bg-[#83C5BE] px-3 py-1 text-sm text-white">
                    {q}
                    <button type="button" className="ml-2 cursor-pointer text-white hover:text-red-400" onClick={() => handleRemoveValue("awardsPublications", idx)} aria-label="Remove">
                      &times;
                    </button>
                  </span>
                ))}
                <div className="flex min-w-[120px] flex-1 basis-full items-center gap-2">
                  <input
                    type="text"
                    className="h-fit flex-1 border-none outline-none"
                    placeholder="Type then press Enter, click Add, or tap outside"
                    value={inputs?.awardsPublications ?? ""}
                    onChange={handleMultiInputChange("awardsPublications")}
                    onKeyDown={handleKeyDown("awardsPublications")}
                    onBlur={handleTagInputBlur("awardsPublications")}
                  />
                  <Button type="button" size="sm" className="shrink-0 bg-(--primary) text-white px-3 py-1 rounded-md text-sm hover:bg-(--primary-hover) hover:text-white transition-colors" onClick={() => addCurrentInputAsTag("awardsPublications")}>
                    Add
                  </Button>
                </div>
              </div>
              <span className="text-xs text-gray-500">Add each award or publication. Press Enter, click Add, or leave the field to save.</span>
            </div>
          </div>

          {/* ── Practice / Clinic Details ────────────────────────────────── */}
          <div className={formField}>
            <label>Practice/Clinic Details</label>
            <div className="flex flex-col gap-2">
              <EditableEntry
                entries={form.practices}
                setEntries={(val) => {
                  const newEntries = typeof val === "function" ? val(form.practices) : val;
                  setForm((prev) => ({ ...prev, practices: newEntries }));
                }}
                fieldNames={["practiceName", "clinicName", "clinicAddress", "postCode", "phone", "fax"]}
                renderLabel={(entry) =>
                  entry.clinicName
                    ? `${entry.practiceName} (${entry.clinicName})`
                    : entry.practiceName
                }
              />
              <span className="text-xs text-gray-500">Click + to add a practice or clinic location.</span>
            </div>
          </div>

          {/* ── Availability ─────────────────────────────────────────────── */}
          <div className={formField}>
            <label htmlFor="avail">Set Your Availability</label>

            {/* Trigger button */}
            <button
              type="button"
              className={`flex h-[48px] items-center justify-center gap-2 rounded-md px-4 py-4 text-white ${form.practices.length === 0
                ? "cursor-not-allowed bg-[#83C5BE]"
                : "cursor-pointer bg-primary"
                }`}
              onClick={() => {
                if (form.practices.length === 0) {
                  toast.error("Please add at least one Practice before setting availability.");
                } else {
                  setIsDialogOpen(true);
                }
              }}
            >
              <span>Click to set availability</span>
            </button>

            {/* ✅ Dialog now contains the NEW weekly availability card grid */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="w-full max-w-[90%] overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-primary text-xl font-bold">
                    Weekly Availability
                  </DialogTitle>
                  <DialogDescription>
                    Set your availability to let patients choose timeslots to conveniently book appointments.
                  </DialogDescription>
                </DialogHeader>

                {/* ── Weekly cards grid ──────────────────────────────────── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  {scheduleTimes.map((item, idx) => (
                    <div key={idx} className="border rounded-lg p-4 bg-white shadow-sm">
                      <p className="font-bold text-sm mb-3">
                        {schedule_date[idx]?.day} Availability
                      </p>

                      {/* Location dropdown */}
                      <div className="mb-2">
                        <select
                          value={item.location}
                          onChange={(e) => {
                            const newTimes = [...scheduleTimes];
                            newTimes[idx].location = e.target.value;
                            setScheduleTimes(newTimes);
                          }}
                          className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="">Unavailable</option>
                          <option value="ONLINE">Online</option>
                          {form.practices.map((practice, pIdx) => (
                            <option key={pIdx} value={practice.clinicName || practice.practiceName}>
                              {practice.clinicName || practice.practiceName}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Time selectors — only show if not unavailable */}
                      {item.location && (
                        <div className="flex gap-2 mt-2">
                          <select
                            value={item.startTime}
                            onChange={(e) => {
                              const newTimes = [...scheduleTimes];
                              newTimes[idx].startTime = e.target.value;
                              setScheduleTimes(newTimes);
                            }}
                            className="flex-1 border rounded px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            {timeOptions.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                          <select
                            value={item.endTime}
                            onChange={(e) => {
                              const newTimes = [...scheduleTimes];
                              newTimes[idx].endTime = e.target.value;
                              setScheduleTimes(newTimes);
                            }}
                            className="flex-1 border rounded px-2 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          >
                            {timeOptions.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Save & close */}
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      toast.success("Availability saved!");
                      setIsDialogOpen(false);
                    }}
                    className="rounded bg-primary px-8 py-2 text-white transition-colors hover:bg-primary/80"
                  >
                    Save & Close
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* ── Submit ──────────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center max-sm:flex-col">
          <button
            className="btn_fill col-span-2 m-auto mt-10 mb-10 flex cursor-pointer justify-center px-14 py-2 max-sm:mb-0 max-sm:w-full"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : mode === "edit"
                ? "Update Doctor Profile"
                : "Create Doctor Profile"}
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorProfileForm;