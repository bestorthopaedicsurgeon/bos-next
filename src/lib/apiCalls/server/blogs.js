import { headers } from "next/headers";

export const getAllBlogsApi = async () => {
  const headersList = await headers();
  const cookie = headersList.get("cookie");
  console.log("Fetching blog by slug:", process.env.NEXT_PUBLIC_BASE_URL);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/`,
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
    console.log("Blogs:", data);
    return data;
  } catch (error) {
    console.error("Error fetching doctor profile:", error);
    return null;
  }
};
export const getBlogBySlugApi = async (slug) => {
  const headersList = await headers();
  const cookie = headersList.get("cookie");
  console.log("Fetching blog by slug:", process.env.NEXT_PUBLIC_BASE_URL);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs/${slug}`,
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
