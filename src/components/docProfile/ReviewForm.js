"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function ReviewForm({ className }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    professionalism: 1,
    punctuality: 1,
    helpfulness: 1,
    knowledge: 1,
    acceptTerms: false,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const renderStars = (category, currentRating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(category, star)}
            className="text-2xl focus:outline-none"
            style={{
              color: star <= currentRating ? "#F3CD03" : "transparent",
              WebkitTextStroke: star > currentRating ? "1.5px #F3CD03" : "none",
              textStroke: star > currentRating ? "1.5px #F3CD03" : "none",
              transition: "color 0.2s, -webkit-text-stroke 0.2s",
              cursor: "pointer",
            }}
          >
            ★
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
              className="border-primary w-full rounded border p-2"
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
              className="border-primary w-full rounded border p-2"
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

        <div className="mb-6">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={formData.acceptTerms}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, acceptTerms: checked }))
              }
              required
            />
            <span className="text-[14px]">I accept the terms</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-primary mx-auto flex cursor-pointer justify-center rounded px-20 py-3 text-white transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
