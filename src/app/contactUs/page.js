"use client";
import React, { useState, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { submitContactForm } from '@/lib/apiCalls/client/ContactUs';
import { toast } from "sonner";
// Utility functions for sanitization and validation
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>\"'&]/g, '') // Remove potentially harmful characters
    .replace(/\s{3,}/g, '  ') // Replace 3+ consecutive spaces with 2 spaces (less aggressive)
    .substring(0, 500); // Limit length
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone) => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8;
};

const validateName = (name) => {
  const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
  return nameRegex.test(name);
};

const formField = "flex flex-col gap-2 max-md:col-span-2";
const inputField = "border border-gray-300 rounded-md p-3 focus:outline-none focus:border-primary";

const Page = () => {
  // Form state with original field names
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle input changes with sanitization
  const handleInputChange = useCallback((field, value) => {
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  }, [errors]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(formData.firstName)) {
      newErrors.firstName = 'Please enter a valid first name';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!validateName(formData.lastName)) {
      newErrors.lastName = 'Please enter a valid last name';
    }

    if (!formData.email) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    if (!acceptTerms) {
      newErrors.terms = 'You must accept the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setIsSubmitting(true);
    
    try {
      await submitContactForm(formData);
      setSuccess(true);
      toast.success('Message sent successfully');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setAcceptTerms(false); // Reset terms checkbox
    } catch (error) {
      console.error('Error:', error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-auto px-2 md:px-0">
      {/* Header Section */}
      <div className="mb-8 rounded-2xl bg-[#217B7E] py-10 text-center">
        <h1 className="mb-2 text-3xl font-bold text-white">Contact Us</h1>
        <div className="text-sm text-white">Home &gt; Contact Us</div>
      </div>
      
      {/* Form Section */}
      <div className="mx-auto rounded-lg bg-transparent p-6">
        <h2 className="mb-2 text-center text-2xl font-bold text-[#217B7E]">
          Get In Touch
        </h2>
        <p className="mb-6 text-center text-sm text-gray-500">
          Facing any problem or have a query? Fill the form to get contacted
        </p>

        <form
          className="grid grid-cols-2 gap-6 md:gap-8"
          onSubmit={handleSubmit}
        >
          {/* First Name & Last Name */}
          <div className={formField}>
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              className={inputField}
              placeholder="Enter your first name"
              maxLength={50}
              disabled={isSubmitting}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>
          
          <div className={formField}>
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              className={inputField}
              placeholder="Enter your last name"
              maxLength={50}
              disabled={isSubmitting}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
          
          {/* Email & Phone */}
          <div className={formField}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={inputField}
              placeholder="Enter your Email"
              maxLength={100}
              disabled={isSubmitting}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          
          <div className={formField}>
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={inputField}
              placeholder="Enter your phone number"
              maxLength={20}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
          
          {/* Message */}
          <div className={formField + " col-span-2"}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={inputField + " h-40 resize-none"}
              placeholder="Type your message..."
              maxLength={500}
              disabled={isSubmitting}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
          </div>
          
          {/* Accept Terms */}
          <div className="col-span-2 mt-2 flex items-center gap-2">
            <Checkbox
              id="accept_terms"
              checked={acceptTerms}
              onCheckedChange={setAcceptTerms}
              disabled={isSubmitting}
            />
            <label htmlFor="accept_terms" className="text-sm">
              I accept the terms
            </label>
            {errors.terms && (
              <span className="text-red-500 text-sm ml-2">{errors.terms}</span>
            )}
          </div>
          
          {/* Action Button */}
          <div className="col-span-2 mt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn_fill w-full rounded-md bg-[#217B7E] px-6 py-2 text-white  hover:cursor-pointer"
              style={{ background: isSubmitting ? "#9CA3AF" : "#217B7E" }}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
