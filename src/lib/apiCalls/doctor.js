import { headers } from "next/headers";

export const getDoctorProfile = async () => {
  const headersList = await headers();
  const cookie = headersList.get("cookie");
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie: cookie ?? "", // pass the session cookie manually
        },
        cache: "no-store", // optional, to always fetch fresh data
      },
    );
    const data = await res.json();
    console.log("Doctor Profile Response:", data);
    return data;
  } catch (error) {
    console.error("Error fetching doctor profile:", error);
    return null;
  }
};

export const getFeaturedDoctors = async () => {
  const headersList = await headers();
  const cookie = headersList.get("cookie");

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/doctors/featured`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          cookie: cookie ?? "",
        },
        cache: "no-store", // optional: disables Next.js caching
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch featured doctors:", res.status);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching featured doctors:", error);
    return null;
  }
};
