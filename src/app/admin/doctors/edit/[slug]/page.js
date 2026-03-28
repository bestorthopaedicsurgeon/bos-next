"use client";
import DoctorProfileForm from "@/components/registration/DoctorProfileForm";
import React, { useState, useEffect } from "react";
import { getDoctorProfileBySlug } from "@/lib/apiCalls/client/doctor";
import { toast } from "sonner";

const AdminEditDoctorPage = ({ params }) => {
  const { slug } = params;
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorProfileBySlug(slug);
        if (data) {
          setDoctorData(data);
        } else {
          toast.error("Doctor not found");
        }
      } catch (error) {
        console.error("Error fetching doctor:", error);
        toast.error("Failed to load doctor data");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [slug]);

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
      <h1 className="text-3xl font-bold mb-8 text-primary">Edit Doctor Profile (Admin)</h1>
      <DoctorProfileForm 
        mode="edit" 
        userRole="ADMIN" 
        initialData={doctorData} 
        doctorId={doctorData.id}
      />
    </div>
  );
};

export default AdminEditDoctorPage;