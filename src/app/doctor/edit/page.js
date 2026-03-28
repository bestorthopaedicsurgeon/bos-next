"use client";
import DoctorProfileForm from "@/components/registration/DoctorProfileForm";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

const DoctorEditPage = () => {
  const { data: session } = useSession();
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!session?.user?.id) return;
      try {
        const res = await fetch(`/api/doctors/me`);
        if (res.ok) {
          const result = await res.json();
          setDoctorData(result.data);
        } else {
          toast.error("Profile not found");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [session]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!doctorData) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        Doctor profile not found
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Edit Your Profile</h1>
      <DoctorProfileForm 
        mode="edit" 
        userRole="DOCTOR" 
        initialData={doctorData} 
        doctorId={doctorData.id}
      />
    </div>
  );
};

export default DoctorEditPage;