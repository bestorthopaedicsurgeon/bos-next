"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Checkbox } from "@/components/ui/checkbox";
import { submitDoctorReview } from "@/lib/apiCalls/client/doctor";
import { toast } from "sonner";

export default function ReviewForm({ className, doctorId, onReviewSubmit }) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    professionalism: 1,
    punctuality: 1,
    helpfulness: 1,
    knowledge: 1,
  });

  // Update form data when session is available
  useEffect(() => {
    if (isLoggedIn && session?.user) {
      setFormData(prev => ({
        ...prev,
        name: session.user.name || "",
        email: session.user.email || "",
      }));
    }
  }, [isLoggedIn, session]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRatingChange = (category, value) => {
    setFormData((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setError('Please log in to submit a review');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    // console.log(formData);

    try {
      const reviewData = {
        professionalism: formData.professionalism,
        punctuality: formData.punctuality,
        helpfulness: formData.helpfulness,
        knowledge: formData.knowledge,
        review: formData.review,
      };
      console.log('asdasd',doctorId);
      const res = await submitDoctorReview(doctorId, reviewData);

      // Reset form on success
      setFormData({
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        review: "",
        professionalism: 1,
        punctuality: 1,
        helpfulness: 1,
        knowledge: 1,
      });

      // setSuccess('Thank you for your review!');
      toast.success('Thank you for your review!');
      if (onReviewSubmit) {
        onReviewSubmit();
      }
    } catch (error) {
      console.log(error);
      // console.error('Error submitting review:', error);
      toast.error(error.message || 'Failed to submit review. Please try again.');
      // setError(error.message || 'Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (category, currentRating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(category, star)}
            className="focus:outline-none cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L11.5 6L17 6.75L13 10.75L14 16L9 13.5L4 16L5 10.75L1 6.75L6.5 6L9 1Z"
                fill={star <= currentRating ? "#F3CD03" : "#E2E8F0"}
                stroke={star <= currentRating ? "#F3CD03" : "#E2E8F0"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={`h-full rounded-lg bg-white p-6 shadow-md ${className}`}>
      <p className="text-primary mb-4 font-[700]">
        Rate & Review Dr. Smith Brown
      </p>
      <p className="mb-6 text-[14px]">
        Let us know about your experience of your appointment with the surgeon.
        Your feedback matters!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex w-full gap-4 max-md:flex-wrap">
          <div className="w-full">
            <label className="mb-1 block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="border-primary bg-gray-200 w-full rounded border p-2"
              disabled
              required
            />
          </div>
          <div className="w-full">
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-primary bg-gray-200 w-full rounded border p-2"
              disabled
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">
            Write your review
          </label>
          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="border-primary h-32 w-full rounded border p-2"
            required
            placeholder="Tell us about your experience..."
          />
        </div>

        <div className="mb-4">
          <h2 className="mb-2 text-lg font-medium">Ratings</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="mb-1 text-sm">Professionalism</p>
              <div className="flex items-center">
                {renderStars("professionalism", formData.professionalism)}
                <span className="ml-2 text-sm">
                  {formData.professionalism}/5
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="mb-1 text-sm">Punctuality</p>
              <div className="flex items-center">
                {renderStars("punctuality", formData.punctuality)}
                <span className="ml-2 text-sm">{formData.punctuality}/5</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="mb-1 text-sm">Helpfulness</p>
              <div className="flex items-center">
                {renderStars("helpfulness", formData.helpfulness)}
                <span className="ml-2 text-sm">{formData.helpfulness}/5</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="mb-1 text-sm">Knowledge</p>
              <div className="flex items-center">
                {renderStars("knowledge", formData.knowledge)}
                <span className="ml-2 text-sm">{formData.knowledge}/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>} */}

        <button
          type="submit"
          className="bg-primary mx-auto flex cursor-pointer justify-center rounded px-20 py-3 text-white transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
