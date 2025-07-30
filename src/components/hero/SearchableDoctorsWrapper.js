"use client";
import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { FeaturedSurgeonsSection } from "./FeaturedSurgeonsSection";

export const SearchableDoctorsWrapper = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <HeroSection 
        onSearchResults={setSearchResults} 
        onSearchStateChange={setIsSearching}
      />
      <FeaturedSurgeonsSection 
        searchResults={searchResults} 
        isSearching={isSearching}
      />
    </>
  );
};