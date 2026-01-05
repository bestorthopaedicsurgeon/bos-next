"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Save, Loader2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ProfileHeader from "@/components/reusable/profileHeader";

const EditProfilePage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
    age: "",
    hasPassword: false,
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordSaving, setPasswordSaving] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/users/me");
        const json = await res.json();
        if (json.success) {
          const { user } = json.data;
          setFormData({
            name: user.name || "",
            phone: user.phone || "",
            dob: user.dob ? new Date(user.dob).toISOString().split('T')[0] : "",
            age: user.age || "",
            hasPassword: user.hasPassword || false,
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        toast.error("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      
      // Calculate age if DOB changes
      if (name === "dob" && value) {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        newData.age = age;
      }
      
      return newData;
    });
  };

  const handlePhoneChange = (phone) => {
    setFormData((prev) => ({ ...prev, phone: `+${phone}` }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/users/me", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.success) {
        toast.success("Profile updated successfully");
        router.push("/profile");
        router.refresh();
      } else {
        toast.error(json.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while saving");
    } finally {
      setSaving(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (formData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setPasswordSaving(true);

    try {
      const res = await fetch("/api/users/me/password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const json = await res.json();

      if (json.success) {
        toast.success(json.message);
        setFormData(prev => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
          hasPassword: true
        }));
      } else {
        toast.error(json.error || "Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred while updating password");
    } finally {
      setPasswordSaving(false);
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container">
      <ProfileHeader heading="Edit Profile" step1="Home" step2="Profile" step3="Edit" />

      <div className="py-12 max-w-3xl mx-auto space-y-8">
        <Link 
          href="/profile" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-dm-sans font-semibold text-sm"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Profile
        </Link>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-dm-sans">Display Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter display name"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[#232323] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium font-dm-sans"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-dm-sans">Phone Number</label>
              <div className="phone-input-container">
                <PhoneInput
                  country={'au'}
                  value={formData.phone.replace('+', '')}
                  onChange={handlePhoneChange}
                  inputClass="!w-full !bg-gray-50 !border-gray-100 !rounded-xl !pl-14 !py-3 !text-[#232323] !focus:outline-none !focus:ring-2 !focus:ring-primary/20 !transition-all !font-medium !h-[48px]"
                  containerClass="!w-full"
                  buttonClass="!bg-transparent !border-none !rounded-l-xl !absolute !left-0 !top-0 !bottom-0 !z-10 !hover:bg-transparent"
                  dropdownClass="!bg-white !shadow-xl !rounded-xl !border-gray-100 !mt-2"
                  placeholder="+61 000 000 000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="dob" className="text-xs font-bold text-gray-400 uppercase tracking-wider font-dm-sans">Date of Birth {formData.age && <span className="text-primary font-bold ml-2">({formData.age} yrs)</span>}</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[#232323] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium font-dm-sans"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-50 flex items-center justify-end gap-4">
            <Link 
              href="/profile"
              className="px-6 py-3 rounded-xl font-bold text-gray-400 hover:text-gray-600 transition-all text-sm font-dm-sans"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:scale-100 transition-all font-dm-sans"
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>

        {/* Security Section */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-md space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#232323] font-syne">Account Security</h2>
            <p className="text-sm text-gray-500 mt-1 font-dm-sans">
              {formData.hasPassword 
                ? "Update your existing account password." 
                : "Add a password to your account to sign in without Google."}
            </p>
          </div>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {formData.hasPassword && (
                <div className="space-y-2">
                  <label htmlFor="currentPassword" dangerouslySetInnerHTML={{ __html: 'Current Password' }} className="text-xs font-bold text-gray-400 uppercase tracking-wider font-dm-sans" />
                  <input
                    type="password"
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    placeholder="Enter current password"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[#232323] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium font-dm-sans"
                    required
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="newPassword" dangerouslySetInnerHTML={{ __html: formData.hasPassword ? 'New Password' : 'Set Password' }} className="text-xs font-bold text-gray-400 uppercase tracking-wider font-dm-sans" />
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[#232323] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium font-dm-sans"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" dangerouslySetInnerHTML={{ __html: 'Confirm New Password' }} className="text-xs font-bold text-gray-400 uppercase tracking-wider font-dm-sans" />
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm new password"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-[#232323] focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium font-dm-sans"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-50">
              <button
                type="submit"
                disabled={passwordSaving}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:scale-100 transition-all font-dm-sans"
              >
                {passwordSaving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4" />
                    {formData.hasPassword ? "Update Password" : "Set Password"}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
