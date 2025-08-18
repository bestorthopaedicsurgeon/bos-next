"use client";
import React, { useState, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";

// Utility functions for sanitization and validation
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>\"'&]/g, '') // Remove potentially harmful characters
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
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
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

    if (!formData.fname) {
      newErrors.fname = 'First name is required';
    } else if (!validateName(formData.fname)) {
      newErrors.fname = 'Please enter a valid first name';
    }

    if (!formData.lname) {
      newErrors.lname = 'Last name is required';
    } else if (!validateName(formData.lname)) {
      newErrors.lname = 'Please enter a valid last name';
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitMessage('Please fix the errors and try again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.fname,
          lastName: formData.lname,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
        // Reset form
        setFormData({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          message: ''
        });
        setAcceptTerms(false);
        setErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
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

        {/* Submit Message */}
        {submitMessage && (
          <div className={`mb-4 p-3 rounded-md text-center ${
            submitMessage.includes('successfully') 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitMessage}
          </div>
        )}

        <form
          className="grid grid-cols-2 gap-6 md:gap-8"
          onSubmit={handleSubmit}
        >
          {/* First Name & Last Name */}
          <div className={formField}>
            <label htmlFor="fname">First name</label>
            <input
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={(e) => handleInputChange('fname', e.target.value)}
              className={inputField}
              placeholder="Enter your first name"
              maxLength={50}
              disabled={isSubmitting}
            />
            {errors.fname && (
              <span className="text-red-500 text-sm">{errors.fname}</span>
            )}
          </div>
          
          <div className={formField}>
            <label htmlFor="lname">Last name</label>
            <input
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={(e) => handleInputChange('lname', e.target.value)}
              className={inputField}
              placeholder="Enter your last name"
              maxLength={50}
              disabled={isSubmitting}
            />
            {errors.lname && (
              <span className="text-red-500 text-sm">{errors.lname}</span>
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
              className="btn_fill w-full rounded-md bg-[#217B7E] px-6 py-2 text-white disabled:bg-gray-400"
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
