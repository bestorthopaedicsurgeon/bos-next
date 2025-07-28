export const getDoctorProfileSelf = async () => {
  try {
    const res = await fetch("/api/doctors/me", {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch doctor profile");
    }

    return data.data;
  } catch (error) {
    console.error("API error (doctor profile):", error);
    return null;
  }
};