"use client";
import ProfileHeader from "@/components/reusable/profileHeader";
import React, { useState, useEffect } from "react";
import { profileHeader } from "@/data/profileHeader";
import {
  calendar,
  schedule_date,
} from "@/data/doc_reg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus, X } from "lucide-react";
import { Clock3, User, Info } from "lucide-react";
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
import { getDoctorProfileSelf } from "@/lib/apiCalls/client/doctor";
import AvailabilityCalendar from "@/components/calendar";
import { sanitizeFormValue } from "@/lib/sanitize";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

const toTitleCase = str => str.replace(/\w\S*/g, t => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());

const Page = ({ params }) => {
  const { data: session } = useSession();
  const doctorId = session?.user?.doctorId;
  const router = useRouter();

  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [form, setForm] = useState({
    title: "",
    fname: "",
    lname: "",
    // exp: "",
    desig: "",
    about_self: "",
    location: "",
    officialEmail: "",
    groupName: "",
    qualifications: [],
    primaryQualification: [],
    primaryQualificationOther: "",
    awardsPublications: [],
    registrationsAssociations: [],
    hospitalAffiliation: [],
  });
  const [inputs, setInputs] = useState({
    qualifications: "",
    awardsPublications: "",
    registrationsAssociations: "",
  });

  const [qualifications, setQualifications] = useState([]);
  const [qualificationInput, setQualificationInput] = useState("");
  const [practiceEntries, setPracticeEntries] = useState([]);
  const [hospitalAffiliations, setHospitalAffiliations] = useState([]);
  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [specificAvailability, setSpecificAvailability] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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

  const [scheduleTimes, setScheduleTimes] = useState(
    schedule_date.map((item) => ({
      startTime: item.startTime.replace("am", "").replace("pm", "").trim(),
      endTime: item.endTime.replace("am", "").replace("pm", "").trim(),
      location: (item.day === "Sat" || item.day === "Sun") ? "" : "ONLINE",
    })),
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Fetch existing doctor data
  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        setDataLoading(true);
        const doctorData = await getDoctorProfileSelf();

        if (doctorData) {
          const nameParts = doctorData.name ? doctorData.name.split(" ") : ["", ""];
          const firstName = nameParts[0] || "";
          const lastName = nameParts.slice(1).join(" ") || "";

          setForm({
            title: doctorData.title || "",
            fname: firstName,
            lname: lastName,
            // exp: doctorData.experience ? doctorData.experience.toString() : "",
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
            hospitalAffiliation: doctorData.hospitalAffiliations || [],
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
            setPracticeEntries(doctorData.practices);
          }

          if (doctorData.hospitalAffiliations && Array.isArray(doctorData.hospitalAffiliations)) {
            setHospitalAffiliations(doctorData.hospitalAffiliations);
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
        } else {
          toast.error("No doctor profile found");
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
        toast.error("Error loading doctor data");
      } finally {
        setDataLoading(false);
      }
    };
    fetchDoctorData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddCustomSpecialty = () => {
    const trimmed = customInput.trim();
    if (trimmed !== "" && !customSpecialties.includes(trimmed)) {
      const updatedCustom = [...customSpecialties, trimmed];
      setCustomSpecialties(updatedCustom);
      setCustomInput("");
      setSelectedSpecialties([
        ...selectedSpecialties.filter((s) => s.value !== "Other"),
        ...updatedCustom.map((label) => ({ value: "Other", label })),
      ]);
    }
  };

  const handleRemoveCustomSpecialty = (labelToRemove) => {
    const updatedCustom = customSpecialties.filter((label) => label !== labelToRemove);
    setCustomSpecialties(updatedCustom);
    setSelectedSpecialties([
      ...selectedSpecialties.filter((s) => !(s.value === "Other" && s.label === labelToRemove)),
    ]);
  };

  const handleInputChange = (field) => (e) => {
    const value = field === "image" ? e.target.files?.[0] : sanitizeFormValue(e.target.value);
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiInputChange = (field) => (e) => {
    setInputs((prev) => ({ ...prev, [field]: sanitizeFormValue(e.target.value) }));
  };

  const handleImageUpload = async () => {
    if (!form.image) return;
    const formData = new FormData();
    formData.append("file", form.image);
    formData.append("doctorId", doctorId);
    const res = await fetch("/api/doctors/upload-image", { method: "POST", body: formData });
    const result = await res.json();
    if (!res.ok) return alert("Upload failed");
    console.log("Public URL:", result.url);
    return true;
  };

  const handleKeyDown = (field) => (e) => {
    if (e.key === "Enter" && inputs[field]?.trim()) {
      e.preventDefault();
      let trimmed = inputs[field].trim();
      if (["registrationsAssociations", "qualifications", "awardsPublications"].includes(field)) {
        trimmed = toTitleCase(trimmed);
      }
      if (!form[field].includes(trimmed)) {
        setForm((prev) => ({ ...prev, [field]: [...prev[field], trimmed] }));
      }
      setInputs((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const addCurrentInputAsTag = (field) => {
    let value = (inputs?.[field] ?? "").trim();
    if (!value) return;
    if (["registrationsAssociations", "qualifications", "awardsPublications"].includes(field)) {
      value = toTitleCase(value);
    }
    setForm((prev) => {
      if (prev[field].includes(value)) return prev;
      return { ...prev, [field]: [...prev[field], value] };
    });
    setInputs((prev) => ({ ...prev, [field]: "" }));
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

  const handleDateClick = (fullDate, dayOfWeekIndex) => {
    const scheduleIndex = dayOfWeekIndex === 0 ? 6 : dayOfWeekIndex - 1;
    const weeklySlot = scheduleTimes[scheduleIndex];
    const isWeeklyAvailable = weeklySlot.location && weeklySlot.location !== "";
    if (!isWeeklyAvailable) {
      toast.error(`Cannot mark specific dates as available when ${schedule_date[scheduleIndex].day} is set to Unavailable.`);
      return;
    }
    const dateString = fullDate.toISOString().split("T")[0];
    const existingOverrideIndex = specificAvailability.findIndex((s) => {
      const sDate = new Date(s.date).toISOString().split("T")[0];
      return sDate === dateString;
    });
    if (existingOverrideIndex !== -1) {
      setSpecificAvailability((prev) => {
        const newArr = [...prev];
        const current = newArr[existingOverrideIndex];
        if (current.isAvailable) {
          newArr[existingOverrideIndex] = { ...current, isAvailable: false };
        } else {
          newArr.splice(existingOverrideIndex, 1);
        }
        return newArr;
      });
    } else {
      setSpecificAvailability((prev) => [
        ...prev,
        { date: fullDate, isAvailable: false, startTime: null, endTime: null, location: null, clinicName: null },
      ]);
    }
  };

  React.useEffect(() => {
    const updatedAvailability = scheduleTimes
      .map((entry, idx) => {
        const dayShort = schedule_date[idx].day;
        const dayOfWeek = dayMap[dayShort];
        let location = entry.location;
        if (!location || location === "") return null;
        if (location !== "ONLINE") location = "CLINIC";
        const clinicName = location === "CLINIC" ? entry.location : "ONLINE";
        return { dayOfWeek, startTime: entry.startTime, endTime: entry.endTime, location, clinicName: clinicName || "ONLINE" };
      })
      .filter(Boolean);
    setDoctorAvailability(updatedAvailability);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleTimes]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!form.title) return toast.error("Please select your title.");
    if (!form.fname) return toast.error("First name is required.");
    if (!form.lname) return toast.error("Last name is required.");
    if (!form.desig) return toast.error("Please select your designation.");
    if (practiceEntries.length === 0) return toast.error("Practice/Clinic Details is required.");
    if (selectedSpecialties.length === 0) return toast.error("Please select at least one subspeciality.");
    if (!form.about_self) return toast.error("Please tell us about yourself.");

    setLoading(true);
    try {
      const data = {};
      if (form.fname && form.lname) data.name = `${form.fname} ${form.lname}`;
      if (form.title) data.title = form.title;
      // if (form.exp) data.experience = parseInt(form.exp);
      if (form.desig) data.designation = form.desig;
      if (form.about_self) data.about = form.about_self;
      if (form.location) data.location = form.location;
      if (form.officialEmail) data.officialEmail = form.officialEmail;
      if (form.groupName) data.groupName = form.groupName;

      if (Array.isArray(selectedSpecialties) && selectedSpecialties.length > 0) {
        data.subspecialities = selectedSpecialties.map((s) => s.label);
      }
      if (Array.isArray(form.registrationsAssociations) && form.registrationsAssociations.length > 0) {
        data.registrationsAssociations = form.registrationsAssociations;
      }

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

      if (Array.isArray(form.awardsPublications) && form.awardsPublications.length > 0) {
        data.awardsPublications = form.awardsPublications;
      }
      if (Array.isArray(hospitalAffiliations) && hospitalAffiliations.length > 0) {
        data.hospitalAffiliations = hospitalAffiliations;
      }
      if (Array.isArray(practiceEntries) && practiceEntries.length > 0) {
        data.practices = practiceEntries;
      }
      if (Array.isArray(doctorAvailability) && doctorAvailability.length > 0) {
        data.doctorAvailability = doctorAvailability;
      }
      if (Array.isArray(specificAvailability) && specificAvailability.length > 0) {
        data.specificAvailability = specificAvailability;
      }
      if (doctorId) data.id = parseInt(doctorId);

      const res = await fetch("/api/doctors", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Profile updated successfully!");
        if (form.image) await handleImageUpload();
        router.push(`/doctor`);
      } else {
        const result = await res.json();
        setError(result.error || "Update failed");
        toast.error(result.error || "Update failed");
      }
    } catch (err) {
      setError("Something went wrong");
      toast.error("Something went wrong");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const formField = "flex flex-col gap-2 max-lg:col-span-2";
  const inputField = "border border-(--primary) rounded-md p-3 focus:ring-1 focus:ring-(--primary) focus:outline-none";

  if (dataLoading) {
    return (
      <div className="container m-auto">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-[#83C5BE]"></div>
            <p className="text-lg text-gray-600">Loading your profile...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container m-auto">
      {profileHeader.createProfile.map((data) => (
        <ProfileHeader key={data.heading} heading={"Edit Profile"} step1={data.step1} step2={data.step2} step3={data.step3} />
      ))}
      {profileHeader.welcome.map((data, key) => (
        <div key={key} className="mt-[77px] text-center">
          <h3 className="text-(--primary)">Update Your Profile</h3>
          <span>Edit your professional information and availability</span>
        </div>
      ))}

      <div className="container m-auto grid grid-cols-2 gap-[32px] pt-16" autoComplete="off">

        {/* Row 1: Title | Upload Profile Picture */}
        <div className={formField}>
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
        <div className={formField}>
          <label htmlFor="pic">Upload Profile Picture</label>
          <input type="file" name="pic" id="pic" className="hidden" onChange={handleInputChange("image")} />
          <label htmlFor="pic" className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-2 text-white">
            <span>Click to upload</span>
            <span>
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6668 4.99936C7.88 4.99936 4 8.86616 4 13.6662C4 13.6662 3.9992 13.6582 4 13.791C1.6216 14.991 0 17.399 0 20.3326C0 24.3326 3.2832 27.6662 7.3332 27.6662H25.3332C29.0148 27.6662 32 24.5994 32 20.9994C32 18.1994 30.2708 15.7746 27.8332 14.7074C27.928 14.441 28 14.0662 28 13.6662C28 10.9994 25.9108 8.99936 23.3332 8.99936C22.2692 8.99936 21.2852 9.24936 20.5 9.91616C19.1092 6.98256 16.124 4.99936 12.6668 4.99936ZM16 11.6662L21.3332 18.3326H18.6668V24.999H13.3332V18.333H10.6668L16 11.6662Z" fill="white" />
              </svg>
            </span>
          </label>
        </div>

        {/* Row 2: First Name | Last Name */}
        <div className={formField}>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" placeholder="Enter first name" className={inputField} value={form.fname} onChange={handleInputChange("fname")} />
        </div>
        <div className={formField}>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" placeholder="Enter last name" className={inputField} value={form.lname} onChange={handleInputChange("lname")} />
        </div>

        {/* Experience — commented out, not needed currently */}
        {/* <div className={formField}>
          <label htmlFor="exp">Experience</label>
          <input type="text" name="exp" id="exp" placeholder="Enter your experience" className={inputField} value={form.exp} onChange={handleInputChange("exp")} />
        </div> */}

        {/* Row 3: Designation | City */}
        <div className={formField}>
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
              control: (state) => `${inputField} bg-transparent ${state.isFocused ? "ring-1 ring-(--primary)" : ""}`,
              menu: () => "bg-white border border-gray-200 rounded-md shadow-lg mt-1 z-50",
              option: (state) => `cursor-pointer p-2 ${state.isFocused ? "bg-(--primary) text-white" : "hover:bg-gray-100"}`,
              placeholder: () => "text-gray-500",
              valueContainer: () => "flex gap-1",
              indicatorsContainer: () => "text-gray-500 cursor-pointer",
            }}
          />
        </div>
        <div className={formField}>
          <label htmlFor="location">City</label>
          <Select
            id="location"
            className="react-select-container"
            classNamePrefix="react-select"
            value={form.location ? { value: form.location, label: form.location } : null}
            onChange={(selected) => setForm((prev) => ({ ...prev, location: selected ? selected.value : "" }))}
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

        {/* Row 4: Official Email | Group Name */}
        <div className={formField}>
          <label htmlFor="officialEmail" className="flex items-center">
            Official Email Address
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <button type="button" className="cursor-help focus:outline-none" tabIndex="-1">
                    <Info className="ml-2 h-4 w-4 text-gray-500 hover:text-gray-700" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-center border border-gray-200 bg-white text-black p-2 text-sm shadow-md">
                  <p>This email will be used to securely notify you about your appointments booked through our platform.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <input type="email" name="officialEmail" id="officialEmail" autoComplete="off" placeholder="Enter official email address" className={inputField} value={form.officialEmail} onChange={handleInputChange("officialEmail")} />
        </div>
        <div className={formField}>
          <label htmlFor="groupName">Group Name</label>
          <input type="text" name="groupName" id="groupName" placeholder="Enter group or practice name" className={inputField} value={form.groupName} onChange={handleInputChange("groupName")} />
        </div>

        {/* Row 5: Hospital Affiliations (full width) */}
        <div className={`${formField} col-span-2`}>
          <label htmlFor="hosp_aff">Hospital affiliations</label>
          <div className="flex flex-col gap-2">
            <EditableEntry
              entries={hospitalAffiliations}
              setEntries={setHospitalAffiliations}
              fieldNames={["name", "address", "phone"]}
              renderLabel={(entry) => entry.name}
            />
            <span className="text-xs text-gray-500">Click + to add a hospital affiliation.</span>
          </div>
        </div>

        {/* Row 6: Subspeciality | Selected specialties display */}
        <div className={formField}>
          <label htmlFor="" className="flex items-center">
            Subspeciality/Special Interests
            <TooltipProvider>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <button type="button" className="cursor-help focus:outline-none" tabIndex="-1">
                    <Info className="ml-2 h-4 w-4 text-gray-500 hover:text-gray-700" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-center border border-gray-200 bg-white text-black p-2 text-sm shadow-md">
                  <p>The first subspeciality entered will appear on the doctor&apos;s card; all will show in the about section.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </label>
          <div className="border-1 border-(--primary) p-3">
            <div className="max-h-[240px] overflow-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#2F797B #D9D9D9" }}>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  placeholder="Enter other specialty"
                  className="w-full rounded border border-(--primary) px-3 py-2 text-sm focus:outline-none"
                />
                <button type="button" onClick={handleAddCustomSpecialty} className="rounded bg-primary p-2 text-white hover:bg-primary/80">
                  <Plus size={18} />
                </button>
              </div>
              {subspecialities.map((specialty, idx) => {
                if (specialty.value === "Other") {
                  return (
                    <div key={idx} className="mt-2 space-y-2">
                      {customSpecialties.map((label, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded border px-3 py-2 text-sm shadow-sm">
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
                  <div key={specialty.value} className="flex items-center">
                    <input type="checkbox" id={specialty.value.toLowerCase()} checked={selectedSpecialties.some((s) => s.value === specialty.value)} onChange={() => handleSpecialtyChange(specialty)} className="hidden" />
                    <label htmlFor={specialty.value.toLowerCase()} className="flex cursor-pointer items-center rounded-full py-2 select-none">
                      <span className={`mr-2 inline-block h-4 w-4 rounded-full border ${selectedSpecialties.some((s) => s.value === specialty.value) ? "border-primary bg-primary" : "border-gray-400 bg-white"}`}></span>
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
            <div className="h-[240px] overflow-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#2F797B #D9D9D9" }}>
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

        {/* Row 7: Tell us about yourself | Registrations & Associations */}
        <div className={formField}>
          <label htmlFor="about_self">Tell us about yourself</label>
          <textarea name="about_self" id="about_self" className={`h-[240px] resize-none ${inputField}`} placeholder="Write a brief introduction about yourself." value={form.about_self} onChange={handleInputChange("about_self")}></textarea>
        </div>
        <div className={formField}>
          <label htmlFor="reg_assoc">Registrations & Associations</label>
          <div className="flex flex-col gap-2">
            <div className="items-starts border-primary flex min-h-[240px] flex-wrap content-start gap-2 rounded-md border bg-transparent p-3 focus-within:ring-1 focus-within:ring-(--primary)">
              {form?.registrationsAssociations?.map((q, idx) => (
                <span key={idx} className="mr-2 mb-2 flex h-fit items-center rounded-md bg-[#83C5BE] px-3 py-1 text-sm text-white">
                  {q}
                  <button type="button" className="ml-2 cursor-pointer text-white hover:text-red-400" onClick={() => handleRemoveValue("registrationsAssociations", idx)} aria-label="Remove">&times;</button>
                </span>
              ))}
              <div className="flex min-w-[120px] flex-1 basis-full items-center gap-2">
                <input type="text" className="h-fit flex-1 border-none outline-none" placeholder="Type then press Enter, click Add, or tap outside" value={inputs?.registrationsAssociations ?? ""} onChange={handleMultiInputChange("registrationsAssociations")} onKeyDown={handleKeyDown("registrationsAssociations")} />
                <Button type="button" className="shrink-0 bg-(--primary) text-white px-3 py-1 rounded-md text-sm hover:bg-(--primary-hover) hover:text-white transition-colors" onClick={() => addCurrentInputAsTag("registrationsAssociations")}>Add</Button>
              </div>
            </div>
            <span className="text-xs text-gray-500">Add each item (e.g. AHPRA, AOA, FRACS). Press Enter, click Add, or leave the field to save.</span>
          </div>
        </div>

        {/* Row 8: Primary Qualification + Additional Qualifications | Awards & Publications */}
        <div className="flex flex-col gap-[20px] max-lg:col-span-2 h-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="primaryQualification" className="flex items-center">
              Primary Qualification
              <TooltipProvider>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <button type="button" className="cursor-help focus:outline-none" tabIndex="-1">
                      <Info className="ml-2 h-4 w-4 text-gray-500 hover:text-gray-700" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs text-center border border-gray-200 bg-white text-black p-2 text-sm shadow-md">
                    <p>This will be prominently displayed on your profile at the top, under your doctor information.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
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
          <div className="flex flex-col gap-2 flex-1">
            <label htmlFor="qual" className="flex items-center">
              Additional Qualifications
              <TooltipProvider>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <button type="button" className="cursor-help focus:outline-none" tabIndex="-1">
                      <Info className="ml-2 h-4 w-4 text-gray-500 hover:text-gray-700" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs text-center border border-gray-200 bg-white text-black p-2 text-sm shadow-md">
                    <p>These will be grouped as descriptive qualifications and shown within the About section of your profile.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
            <div className="flex flex-col gap-2 flex-1">
              <div className="items-starts border-primary flex min-h-[140px] flex-wrap content-start gap-2 rounded-md border bg-transparent p-3 flex-1 focus-within:ring-1 focus-within:ring-(--primary)">
                {form?.qualifications?.map((q, idx) => (
                  <span key={idx} className="mr-2 mb-2 flex h-fit items-center rounded-full bg-[#83C5BE] px-3 py-1 text-sm text-white">
                    {q}
                    <button type="button" className="ml-2 cursor-pointer text-white hover:text-red-400" onClick={() => handleRemoveValue("qualifications", idx)} aria-label="Remove">&times;</button>
                  </span>
                ))}
                <div className="flex min-w-[120px] flex-1 basis-full items-center gap-2">
                  <input type="text" className="h-fit flex-1 border-none outline-none" placeholder="Type then press Enter, click Add, or tap outside" value={inputs?.qualifications ?? ""} onChange={handleMultiInputChange("qualifications")} onKeyDown={handleKeyDown("qualifications")} />
                  <Button type="button" className="shrink-0 bg-(--primary) text-white px-3 py-1 rounded-md text-sm hover:bg-(--primary-hover) hover:text-white transition-colors" onClick={() => addCurrentInputAsTag("qualifications")}>Add</Button>
                </div>
              </div>
              <span className="text-xs text-gray-500">Add each qualification. Press Enter, click Add, or leave the field to save.</span>
            </div>
          </div>
        </div>
        <div className={`${formField} h-full`}>
          <label htmlFor="qual">Awards & Publications</label>
          <div className="flex flex-col gap-2 flex-1">
            <div className="items-starts border-primary flex min-h-[240px] flex-wrap content-start gap-2 rounded-md border bg-transparent p-3 flex-1 focus-within:ring-1 focus-within:ring-(--primary)">
              {form?.awardsPublications?.map((q, idx) => (
                <span key={idx} className="mr-2 mb-2 flex h-fit items-center rounded-md bg-[#83C5BE] px-3 py-1 text-sm text-white">
                  {q}
                  <button type="button" className="ml-2 cursor-pointer text-white hover:text-red-400" onClick={() => handleRemoveValue("awardsPublications", idx)} aria-label="Remove">&times;</button>
                </span>
              ))}
              <div className="flex min-w-[120px] flex-1 basis-full items-center gap-2">
                <input type="text" className="h-fit flex-1 border-none outline-none" placeholder="Type then press Enter, click Add, or tap outside" value={inputs?.awardsPublications ?? ""} onChange={handleMultiInputChange("awardsPublications")} onKeyDown={handleKeyDown("awardsPublications")} />
                <Button type="button" className="shrink-0 bg-(--primary) text-white px-3 py-1 rounded-md text-sm hover:bg-(--primary-hover) hover:text-white transition-colors" onClick={() => addCurrentInputAsTag("awardsPublications")}>Add</Button>
              </div>
            </div>
            <span className="text-xs text-gray-500">Add each award or publication. Press Enter, click Add, or leave the field to save.</span>
          </div>
        </div>

        {/* Row 9: Practice/Clinic Details | Set Your Availability */}
        <div className={formField}>
          <label>Practice/Clinic Details</label>
          <div className="flex flex-col gap-2">
            <EditableEntry
              entries={practiceEntries}
              setEntries={setPracticeEntries}
              fieldNames={["practiceName", "clinicName", "clinicAddress", "postCode", "phone"]}
              renderLabel={(entry) => entry.clinicName ? `${entry.practiceName} (${entry.clinicName})` : entry.practiceName}
            />
            <span className="text-xs text-gray-500">Click + to add a practice or clinic location.</span>
          </div>
        </div>
        <div className={formField}>
          <label htmlFor="avail">Set Your Availability</label>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} className="max-w-full overflow-auto">
            <button
              type="button"
              className="flex h-[48px] items-center justify-center gap-2 rounded-md bg-[#83C5BE] px-4 py-4 text-white"
              onClick={() => {
                if (practiceEntries.length === 0) {
                  toast.error("Please add at least one Practice before setting availability.");
                } else {
                  setIsDialogOpen(true);
                }
              }}
              style={{ opacity: practiceEntries.length === 0 ? 0.5 : 1, cursor: practiceEntries.length === 0 ? "not-allowed" : "pointer" }}
            >
              <span>Click to set availability</span>
            </button>
            <DialogContent className="h-full w-full max-w-[90%] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>My Availability</DialogTitle>
                <DialogDescription>Set your availability to let patients choose timeslots to book appointments</DialogDescription>
              </DialogHeader>
              <div className="mb-6">
                <AvailabilityCalendar
                  availability={doctorAvailability}
                  specificAvailability={specificAvailability}
                  onDateClick={handleDateClick}
                />
              </div>
              <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
                <div className="bg-secondary col-span-2 mt-10 rounded-md p-5">
                  <div className="text-primary m-auto flex w-[60%] items-center justify-between max-lg:w-full">
                    <p>Clinic Timing</p>
                    <div className="line bg-primary h-[30px] w-[1px]"></div>
                    <p>Online Timing</p>
                  </div>
                </div>
                {schedule_date.map((data, key) => (
                  <div key={key} className="bg-secondary max-sm:justify-flex-start flex items-center justify-between rounded-md p-6 max-lg:col-span-2 max-sm:flex-wrap max-sm:gap-[10px] max-sm:p-2">
                    <p className="bg-background flex h-[47px] items-center rounded-md px-5 pb-[4px]">{data.day}</p>
                    <div className="line h-[68px] w-[1px] bg-(--background)"></div>
                    <div className="flex flex-col justify-center gap-5 max-sm:gap-2">
                      <div className="flex items-center gap-3">
                        <Clock3 className="max-sm:h-[15px] max-sm:w-[15px]" />
                        <select value={scheduleTimes[key].startTime} onChange={(e) => { const newTimes = [...scheduleTimes]; newTimes[key].startTime = e.target.value; setScheduleTimes(newTimes); }} className="rounded border px-2 py-1">
                          {timeOptions.map((time) => (<option key={time} value={time}>{time}</option>))}
                        </select>
                        <span>-</span>
                        <select value={scheduleTimes[key].endTime} onChange={(e) => { const newTimes = [...scheduleTimes]; newTimes[key].endTime = e.target.value; setScheduleTimes(newTimes); }} className="rounded border px-2 py-1">
                          {timeOptions.map((time) => (<option key={time} value={time}>{time}</option>))}
                        </select>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="max-sm:h-[15px] max-sm:w-[15px]" />
                        <select value={scheduleTimes[key].location} onChange={(e) => { const newTimes = [...scheduleTimes]; newTimes[key].location = e.target.value; setScheduleTimes(newTimes); }} className="rounded border px-2 py-1">
                          <option value="">Unavailable</option>
                          <option value="ONLINE">Online</option>
                          {practiceEntries && practiceEntries.map((practice, idx) => (
                            <option key={idx} value={practice.clinicName || practice.practiceName}>{practice.clinicName || practice.practiceName}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t pt-4 text-center">
                <p className="text-sm text-gray-600">Note: Your availability settings will be saved when you click &quot;Update Profile&quot; on the main page.</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

      </div>

      {success && <div className="col-span-2 mt-2 text-green-500">{success}</div>}

      <div className="flex items-center justify-center">
        <button className="btn_fill col-span-2 m-auto mt-10 mb-10 flex cursor-pointer justify-center px-14 py-2 max-sm:w-full" onClick={handleUpdate} disabled={loading || dataLoading}>
          {loading ? "Updating..." : dataLoading ? "Loading..." : "Update Profile"}
        </button>
        <button className="btn_fill col-span-2 m-auto mt-10 mb-10 flex cursor-pointer justify-center px-14 py-2 max-sm:w-full" onClick={() => router.push(`/doctor/`)} disabled={loading}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Page;