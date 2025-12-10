"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faq";
import { ChevronDown, Search } from "lucide-react";

const FAQPage = () => {
  const { pageTitle, breadcrumb, header, allFaqs, categories } = faqData;
  const [openItems, setOpenItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      {/* Header Section */}
      <div className="profile_head mb-10">
        <h1 className="text-white text-center">{pageTitle}</h1>
        <p className="text-white/90 text-center">{breadcrumb}</p>
      </div>

      {/* Content Section */}
      <div className="mt-20 mx-auto pb-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 text-center">
          <span className="inline-block bg-[#217B7E]/10 text-[#217B7E] px-4 py-2 rounded-full text-sm font-medium mb-4">
            {header.subtitle}
          </span>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {header.description}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-[#217B7E] focus:outline-none focus:ring-2 focus:ring-[#217B7E]/20 transition-all bg-white"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[#217B7E] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-center text-gray-500 text-sm mb-8">
          Showing {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
        </p>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                faq={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 text-[#217B7E] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-[#217B7E] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Please reach out to our friendly team.
          </p>
          <a
            href="/contactUs"
            className="inline-block bg-white text-[#217B7E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

// Accordion Item Component - Cervana Style
const AccordionItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div 
      className={`
        rounded-2xl overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen 
          ? "bg-white shadow-lg shadow-gray-200/50 border border-gray-100" 
          : "bg-gray-50/80 hover:bg-gray-100/80 border border-transparent"
        }
      `}
    >
      <button
        onClick={onToggle}
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
            {faq.category && (
              <span className="inline-block mt-4 text-xs bg-[#217B7E]/10 text-[#217B7E] px-3 py-1 rounded-full">
                {faq.category}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
