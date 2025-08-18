import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import StarRating from "@/components/reusable/StarRating";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function BlogCarousel({ blogs }) {
  // Function to extract clean text from HTML content and truncate
  const extractDescription = (htmlContent, maxWords = 20) => {
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

  // Function to truncate title to specified word count
  const truncateTitle = (title, maxWords = 6) => {
    if (!title) return "";
    const words = title.split(" ");
    if (words.length <= maxWords) return title;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  if (!blogs || blogs.length === 0) {
    return <div className="text-center text-white">No blogs available</div>;
  }
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full flex items-center justify-center gap-5 "
    >
      <CarouselPrevious />
      <CarouselContent>
        {Array.from(blogs).map((blog, index) => (
          <CarouselItem key={blog.id || index} className="md:basis-1/2 lg:basis-1/3">
            <div className="bg-white p-7 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <Image
                src={blog.image || "/home/blog-image.png"}
                alt={blog.title || "Blog"}
                width={343}
                height={220}
                className="mb-4 rounded-md object-cover w-full h-[220px]"
              />
              <h3 className="font-dm-sans text-primary mb-2 text-[20px] font-medium h-[60px] flex items-center">
                {truncateTitle(blog.title)}
              </h3>
              <p className="text-[16px] text-neutral-700 mb-4 line-clamp-3 flex-grow h-[72px] overflow-hidden">
                {extractDescription(blog.content, 20)}
              </p>
              <Link 
                href={`/blog/${blog.slug}`}
                className="mt-auto flex items-center gap-4 cursor-pointer group"
              >
                <p className="font-dm-sans text-[16px] font-bold text-[#3A506B] group-hover:text-primary transition-colors">
                  Read More
                </p>
                <ArrowRight className="text-primary h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      <CarouselNext />
    </Carousel>
  );
}
