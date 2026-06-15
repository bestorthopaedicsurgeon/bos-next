// Server component — no hooks or browser APIs used

import Link from "next/link";
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

  // Build image URL with cache-busting based on slug to avoid stale cached images
  const imageUrl = card?.image
    ? `${card.image}${card.image.includes('?') ? '&' : '?'}slug=${card.slug}`
    : null;

  return (
    <Link
      href={`/blog/${card.slug}`}
      className="bg-white p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col cursor-pointer group block"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={card.title || "Blog"}
          width={600}
          height={385}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="mb-4 rounded-md object-cover max-sm:object-contain w-full h-[220px] bg-gray-50"
        />
      )}
      <h3 className="font-dm-sans text-primary mb-2 text-[20px] font-medium h-[60px] flex items-center group-hover:underline">
        {truncateTitle(card.title, 8)}
      </h3>
      <p className="text-[14px] text-neutral-700 mb-2">
        {formatDate(card.createdAt)} • {calculateReadingTime(card.content)}
      </p>
      <p className="text-[16px] text-neutral-700 mb-4 line-clamp-3 flex-grow min-h-[72px] overflow-hidden">
        {extractDescription(card.content, 25)}
      </p>
      <div className="mt-auto flex items-center gap-4">
        <p className="font-dm-sans text-[16px] font-bold text-primary transition-colors">
          Read More
        </p>
        <ArrowRight className="text-primary h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};
