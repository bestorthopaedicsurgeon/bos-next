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

export const submitDoctorReview = async (doctorId, reviewData) => {
  try {
    const res = await fetch(`/api/doctors/${doctorId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      // If the response is not ok OR if success is false
      throw new Error(data.error || 'Failed to submit review');
    }

    return data;
  } catch (error) {
    console.error('API error (submit review):', error);
    throw error;
  }
};

// Example API call in your frontend
export const fetchDoctorReviews = async (doctorId) => {
  try {
    const response = await fetch(`/api/doctors/${doctorId}/reviews`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch reviews');
    }
    return data.data; // Contains reviews, totalReviews, and averageRatings
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};