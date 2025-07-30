"use client";
import { useState } from "react";
import { HeroSection } from "./Hero";
import { AllSurgeons } from "./AllSurgeons";

export const SearchableSurgeonsWrapper = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <HeroSection 
        onSearchResults={setSearchResults} 
        onSearchStateChange={setIsSearching}
      />
      <AllSurgeons 
        searchResults={searchResults} 
        isSearching={isSearching}
      />
    </>
  );
};