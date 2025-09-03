"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { format } from "date-fns";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const BlogCard = (card) => {
  // Format the date from API
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    try {
      return format(new Date(dateString), "MMMM dd, yyyy");
    } catch (error) {
      return "Date not available";
    }
  };

  // Function to truncate title to specified word count
  const truncateTitle = (title, maxWords = 10) => {
    if (!title) return "";
    const words = title.split(" ");
    if (words.length <= maxWords) return title;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  // Function to extract clean text from HTML content and truncate
  const extractDescription = (htmlContent, maxWords = 25) => {
    if (!htmlContent) return "Explore this comprehensive medical blog post covering important health topics and professional insights.";
    
    // Remove HTML tags using regex (safer for SSR)
    const textContent = htmlContent
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace HTML entities
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    
    // Remove extra whitespace and split into words
    const cleanText = textContent.replace(/\s+/g, ' ').trim();
    const words = cleanText.split(' ');
    
    // If content is too short, return as is
    if (words.length <= maxWords) return cleanText;
    
    // Truncate and add ellipsis
    return words.slice(0, maxWords).join(' ') + '...';
  };

  // Function to calculate estimated reading time
  const calculateReadingTime = (htmlContent) => {
    if (!htmlContent) return "5 min read";
    
    // Remove HTML tags using regex
    const textContent = htmlContent
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace HTML entities
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    
    // Count words
    const words = textContent.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Average reading speed is 200-250 words per minute
    // Using 200 WPM for more conservative estimate
    const readingSpeed = 200;
    const minutes = Math.ceil(wordCount / readingSpeed);
    
    // Ensure minimum of 1 minute
    const readingTime = Math.max(1, minutes);
    
    return `${readingTime} min read`;
  };

  return (
    <div className="bg-white p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {card?.image && (
        <Image
          src={card.image}
          alt={card.title || "Blog"}
          width={343}
          height={220}
          className="mb-4 rounded-md object-cover w-full h-[220px]"
        />
      )}
      <h3 className="font-dm-sans text-primary mb-2 text-[20px] font-medium h-[60px] flex items-center">
        {truncateTitle(card.title, 8)}
      </h3>
      <p className="text-[14px] text-neutral-700 mb-2">
        {formatDate(card.createdAt)} • {calculateReadingTime(card.content)}
      </p>
      <p className="text-[16px] text-neutral-700 mb-4 line-clamp-3 flex-grow min-h-[72px] overflow-hidden">
        {extractDescription(card.content, 25)}
      </p>
      <Link
        href={`/blog/${card.slug}`}
        className="mt-auto flex items-center gap-4 cursor-pointer group"
        target="_blank"
      >
        <p className="font-dm-sans text-[16px] font-bold text-primary transition-colors">
          Read More
        </p>
        <ArrowRight className="text-primary h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
