export const getAllDoctors = async (params = {}) => {
  try {
    const { page = 1, limit = 12, name = "", subspecialty = "", location = "", filter = "" } = params;
    
    const queryParams = new URLSearchParams();
    if (page) queryParams.append("page", page.toString());
    if (limit) queryParams.append("limit", limit.toString());
    if (name) queryParams.append("name", name);
    if (subspecialty) queryParams.append("subspecialty", subspecialty);
    if (location) queryParams.append("location", location);
    if (filter) queryParams.append("filter", filter);

    const res = await fetch(`/api/doctors/all?${queryParams.toString()}`, {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch doctors");
    }

    return data; // Return full data including pagination
  } catch (error) {
    console.error("API error (doctors):", error);
    return null;
  }
};