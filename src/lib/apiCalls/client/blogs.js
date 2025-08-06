export const getAllBlogs = async () => {
    try {
      const res = await fetch("/api/blogs", {
        method: "GET",
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data?.error || "Failed to fetch doctors");
      }
  
      return data.data;
    } catch (error) {
      console.error("API error (doctors):", error);
      return null;
    }
  };