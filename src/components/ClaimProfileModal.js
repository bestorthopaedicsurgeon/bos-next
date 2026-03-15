"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSanitizedForm } from "@/hooks/useSanitizedForm";

const ClaimProfileModal = ({ children, doctorId }) => {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData, handleInputChange] = useSanitizedForm({
    name: "",
    email: "",
    phone: "",
    ahpraNumber: "",
    waitingTime: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is authenticated
    // if (!session) {
    //   toast.error("You must be logged in to claim a profile");
    //   return;
    // }

    if (!formData.agreeToTerms) {
      setMessage("Please agree to HealthShare's Terms of Service");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/doctor-claims", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          ahpraNumber: formData.ahpraNumber,
        }),
      });

      if (response.ok) {
        setMessage("Profile claim request submitted successfully!");
        setTimeout(() => {
          setIsOpen(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            ahpraNumber: "",
            waitingTime: "",
            agreeToTerms: false,
          });
          setMessage("");
        }, 2000);
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to submit claim request");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open) => {
    // if (open && !session) {
    //   toast.error("You must be logged in to claim a profile");
    //   return;
    // }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <DialogTitle className="text-primary text-2xl font-bold mb-2 text-left">
            CLAIM YOUR PROFILE ON BOS
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-left mb-4">
            Your profile is integrated into the prescribing software of thousands of GPs -
            ensure your profile is confirmed.
          </DialogDescription>
          <DialogDescription className="text-gray-600 text-left mb-6">
            Simply fill out the form below or confirm your profile.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Prof Piers Yates"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Personal Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Personal Email<span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">
              This information will not be published on the website.
            </p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Mobile Number Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile Number<span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">
              This information will not be published on the website.
            </p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* AHPRA Number Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              AHPRA number<span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 mb-2">e.g. MED0123456789</p>
            <input
              type="text"
              name="ahpraNumber"
              value={formData.ahpraNumber}
              onChange={handleInputChange}
              placeholder="MED0123456789"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              className="mt-1 text-primary focus:ring-primary"
              required
            />
            <label className="text-sm text-gray-700">
              I agree to BOS{" "}
              <a
                href="#"
                className="text-primary hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Confirm"}
            </button>
          </div>

          {/* Required Field Note */}
          <p className="text-sm text-gray-500 text-right">
            <span className="text-red-500">*</span> Required field
          </p>

          {/* Message Display */}
          {message && (
            <div
              className={`mt-4 p-3 rounded-md text-sm ${message.includes("successfully")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
                }`}
            >
              {message}
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClaimProfileModal;
