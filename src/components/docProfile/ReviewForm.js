"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Checkbox } from "@/components/ui/checkbox";
import { submitDoctorReview } from "@/lib/apiCalls/client/doctor";
import { toast } from "sonner";
import { useSanitizedForm } from "@/hooks/useSanitizedForm";

export default function ReviewForm({ className, doctorId, doctorName, onReviewSubmit }) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);

  const [formData, setFormData, handleChange] = useSanitizedForm({
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, session]);

  const handleRatingChange = (category, value) => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      setShowAuthModal(true);
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
        Rate & Review Dr. {doctorName}
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

      {/* Auth Prompt Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-all">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl border border-gray-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.252.583 1.833l-3.978 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.977-2.893a1 1 0 00-1.176 0l-3.977 2.893c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.98 9.927c-.777-.58-.378-1.833.583-1.833h4.908a1 1 0 00.95-.69l1.519-4.674z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sign up to leave a review</h3>
            <p className="text-sm text-gray-600 mb-6 font-dm-sans">
              You must have an account to rate and review surgeons on Best Orthopaedic Surgeons. Share your experience to help other patients!
            </p>
            
            <div className="w-full flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  const dest = `/signup?callbackUrl=${encodeURIComponent(window.location.pathname + "?writeReview=true")}`;
                  window.location.href = dest;
                }}
                className="w-full py-3 bg-primary hover:bg-primary/95 text-white font-semibold rounded-lg shadow-sm cursor-pointer transition-colors"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => {
                  const dest = `/login?callbackUrl=${encodeURIComponent(window.location.pathname + "?writeReview=true")}`;
                  window.location.href = dest;
                }}
                className="w-full py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-lg cursor-pointer transition-colors"
              >
                Log In
              </button>
            </div>
            
            <button
              type="button"
              onClick={() => setShowAuthModal(false)}
              className="mt-4 text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
