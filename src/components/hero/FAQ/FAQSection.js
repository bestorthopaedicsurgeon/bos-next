"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqData } from "@/data/faq";
import { ChevronDown, ArrowRight } from "lucide-react";

export const FAQSection = () => {
  const { featuredFaqs } = faqData;
  const [openItems, setOpenItems] = useState([1]); // First item open by default

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="mb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-[#217B7E]/10 text-[#217B7E] px-4 py-2 rounded-full text-sm font-medium mb-4">
          FAQs
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mx-auto max-w-2xl">
          Find quick answers to the most common questions about our orthopaedic surgeon directory.
        </p>
      </div>

      {/* FAQ Accordion - Cervana Style */}
      <div className="max-w-4xl mx-auto space-y-3">
        {featuredFaqs.map((faq) => {
          const isOpen = openItems.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`
                rounded-2xl overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen 
                  ? "bg-white shadow-lg shadow-gray-200/50 border border-gray-100" 
                  : "bg-gray-50/80 hover:bg-gray-100/80 border border-transparent"
                }
              `}
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
              >
                <span className={`font-semibold pr-4 transition-colors duration-200 ${isOpen ? "text-gray-900" : "text-gray-700"}`}>
                  {faq.question}
                </span>
                <div className={`
                  flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                  ${isOpen ? "bg-gray-100" : "bg-transparent"}
                `}>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`
                  grid transition-all duration-300 ease-in-out
                  ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Link */}
      <div className="text-center mt-10">
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 bg-[#217B7E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1a6163] transition-colors group"
        >
          <span>View All FAQs</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};
