"use client";
import React, { useState } from "react";

const formField = "flex flex-col gap-2 max-md:col-span-2";
const inputField =
  "border border-(--primary) rounded-md p-3 focus:outline-none focus:border-primary";

const Page = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);
  return (
    <div className=" m-auto px-2 md:px-0">
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
          onSubmit={(e) => {
            e.preventDefault();
            // handle submit here
          }}
        >
          {/* First Name & Last Name */}
          <div className={formField}>
            <label htmlFor="fname">First name</label>
            <input
              id="fname"
              name="fname"
              className={inputField}
              placeholder="Enter your first name"
            />
          </div>
          <div className={formField}>
            <label htmlFor="lname">Last name</label>
            <input
              id="lname"
              name="lname"
              className={inputField}
              placeholder="Enter your last name"
            />
          </div>
          {/* Email & Phone */}
          <div className={formField}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              className={inputField}
              placeholder="Enter your Email"
              type="email"
            />
          </div>
          <div className={formField}>
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              className={inputField}
              placeholder="Enter your phone number"
              type="tel"
            />
          </div>
          {/* Message */}
          <div className={formField + " col-span-2"}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={inputField + " h-40 resize-none"}
              placeholder="Type your message..."
            />
          </div>
          {/* Accept Terms */}
          <div className="col-span-2 mt-2 flex items-center gap-2">
            <input
              id="accept_terms"
              name="accept_terms"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
              className="checked:border-primary checked:bg-primary h-4 w-4 appearance-none rounded border-2 border-(--primary) focus:outline-none"
            />
            <label htmlFor="accept_terms" className="text-sm">
              I accept the terms
            </label>
          </div>
          {/* Action Button */}
          <div className="col-span-2 mt-4 flex justify-center">
            <button
              type="submit"
              className="btn_fill w-full rounded-md bg-[#217B7E] px-6 py-2 text-white"
              style={{ background: "#217B7E" }}
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
