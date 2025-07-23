"use client"
import { MapPin, Pencil } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
const { Popover, PopoverTrigger, PopoverContent } = require("@/components/ui/popover");

const DocProfile = ({ docProfile_Details }) => {
  const [data, setData] = useState(docProfile_Details);
  const doctorProfile = data || {};
  const [editField, setEditField] = useState(null); // which field is being edited
  const [editValue, setEditValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Helper to open popover for a field
  const handleEditClick = (field, value) => {
    setEditField(field);
    setEditValue(value || "");
    setMessage("");
  };

  // Save handler
  const handleSave = async () => {
    setLoading(true);
    setMessage("");
    try {
      // Prepare payload
      let updatedProfile = { ...doctorProfile, [editField]: editValue };
      // Call PUT API (adjust endpoint as needed)
      const res = await fetch(`/api/doctor-profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          doctorId: data.id,
          [editField]: editValue,
        }),
      });
      if (!res.ok) throw new Error("Failed to update");
      // Update local state
      setData((prev) => ({
        ...prev,
        doctorProfile: { ...prev.doctorProfile, [editField]: editValue },
        // For name, update at root
        ...(editField === "name" ? { name: editValue } : {}),
      }));
      setMessage("Saved!");
      setEditField(null);
    } catch (e) {
      setMessage("Error saving. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Render editable field
  const renderEditable = (label, field, value, isRoot = false) => (
    <div className="flex items-center gap-2">
      <span>{value}</span>
      <Popover open={editField === field} onOpenChange={(open) => {
        if (!open) setEditField(null);
      }}>
        <PopoverTrigger asChild>
          <button
            className="ml-1 p-1 hover:bg-gray-100 rounded"
            onClick={() => handleEditClick(field, value)}
            aria-label={`Edit ${label}`}
            type="button"
          >
            <Pencil size={16} />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="flex flex-col gap-2">
            <label className="text-primary text-sm font-medium">Edit {label}</label>
            <input
              type="text"
              className="border border-primary rounded-md p-2"
              value={editValue}
              onChange={e => setEditValue(e.target.value)}
              disabled={loading}
            />
            <button
              className="bg-primary text-white rounded px-3 py-1 mt-2 disabled:opacity-60"
              onClick={handleSave}
              disabled={loading || !editValue}
              type="button"
            >
              {loading ? "Saving..." : "Save"}
            </button>
            {message && <span className={`text-xs ${message === "Saved!" ? "text-green-600" : "text-red-600"}`}>{message}</span>}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );

  return (
    <div>
      <div
        key={data.id}
        className="flex items-center justify-start gap-5 max-md:flex-wrap"
      >
        <div className="border-primary relative h-50 w-50 overflow-hidden rounded-md border-2">
          <Image
            src={data?.image || "/placeholder.jpg"}
            alt="Profile Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col flex-wrap gap-2 min-lg:w-[200px]">
          <h3 className="font-[500]">
            {renderEditable(
              "Name",
              "name",
              `${doctorProfile?.title ? `${doctorProfile?.title}. ` : ""}${data.name}`,
              true
            )}
          </h3>
          <div className="text-primary text-[16px] font-[700]">
            {renderEditable("Designation", "designation", doctorProfile?.designation)}
          </div>
          <div className="text-primary text-[16px] font-[700]">
            {renderEditable("Qualification", "qualifications", doctorProfile?.qualifications?.[0])}
          </div>
          <div className="flex items-center gap-3 text-[13px]">
            <MapPin className="text-primary h-5 w-5" />
            {renderEditable("Clinic Address", "clinicAddress", doctorProfile?.location)}
          </div>
          <p className="flex items-center gap-3 text-[13px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9356 5.44571C14.8894 5.30974 14.8045 5.19027 14.6912 5.10204C14.5779 5.01381 14.4413 4.96069 14.2981 4.94924L10.1111 4.61654L8.29929 0.605809C8.24159 0.476631 8.14773 0.366914 8.02905 0.289898C7.91037 0.212883 7.77194 0.171861 7.63046 0.171784C7.48898 0.171706 7.3505 0.212576 7.23174 0.289461C7.11297 0.366346 7.019 0.47596 6.96115 0.605074L5.14931 4.61654L0.962319 4.94924C0.821643 4.96038 0.687156 5.01182 0.574947 5.09739C0.462738 5.18297 0.37756 5.29906 0.329602 5.43178C0.281643 5.5645 0.272936 5.70822 0.304522 5.84576C0.336108 5.9833 0.406649 6.10882 0.507706 6.20732L3.60187 9.22363L2.50756 13.9622C2.47434 14.1056 2.48498 14.2557 2.53813 14.393C2.59127 14.5303 2.68446 14.6485 2.8056 14.7322C2.92673 14.8159 3.07022 14.8612 3.21745 14.8623C3.36468 14.8635 3.50885 14.8203 3.63124 14.7385L7.63022 12.0725L11.6292 14.7385C11.7543 14.8215 11.9018 14.8643 12.052 14.861C12.2021 14.8577 12.3476 14.8085 12.4689 14.7201C12.5903 14.6316 12.6816 14.5081 12.7307 14.3662C12.7797 14.2242 12.7841 14.0707 12.7433 13.9262L11.4001 9.22583L14.7314 6.22788C14.9496 6.03105 15.0296 5.72406 14.9356 5.44571Z"
                fill="#F3CD03"
              />
            </svg>
            {5}
          </p>
        </div>
        <button className="bg-primary text-secondary flex cursor-pointer items-center gap-4 self-end rounded-full px-8 py-4 text-[12px] font-[500]">
          Edit Profile
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_427_5656)">
              <path
                d="M20.2703 10.3071C20.2703 4.76773 15.7716 0.269073 10.2322 0.269073C4.69281 0.269073 0.194151 4.76773 0.194151 10.3071C0.194151 15.8465 4.69281 20.3452 10.2322 20.3452C15.7716 20.3452 20.2703 15.8465 20.2703 10.3071ZM19.4921 10.3071C19.4934 11.5235 19.2547 12.7282 18.7898 13.8522C18.3249 14.9763 17.6429 15.9976 16.7828 16.8577C15.9227 17.7178 14.9014 18.3998 13.7773 18.8647C12.6533 19.3297 11.4486 19.5683 10.2322 19.567C5.11039 19.567 0.946604 15.4289 0.946604 10.3071C0.946604 5.18531 5.11039 1.04722 10.2322 1.04722C11.4486 1.04596 12.6533 1.28461 13.7773 1.74951C14.9014 2.21441 15.9227 2.89645 16.7828 3.75656C17.6429 4.61667 18.3249 5.63798 18.7898 6.76202C19.2547 7.88605 19.4934 9.09074 19.4921 10.3071ZM12.2398 8.29952H8.80198V9.10256H10.8345L7.37096 12.5661L7.94915 13.1178L11.4368 9.62936V11.7374H12.2398V8.29952Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_427_5656">
                <rect
                  width="20.0761"
                  height="20.0761"
                  fill="white"
                  transform="matrix(0 1 -1 0 20.2701 0.269043)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DocProfile;
