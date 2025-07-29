"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/header/ProfileDropdown";
import { NavLinks } from "@/components/header/NavLinks";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="mb-8 w-full py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="text-xl font-bold text-blue-600">
            <Link href="/">
              <Image
                src="/logos/bos-logo-1.png"
                alt="Logo"
                width={200}
                height={110}
                className="max-sm:w-30 max-sm:h-20"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Middle: Nav Items */}
            <nav className="ml-12 gap-6 flex">
              <NavLinks />
            </nav>

            {/* Right: Button + Profile */}
            <div className="flex items-center gap-4">
              <Button variant={"primary"} size={"primary"}>
                Collaborate
              </Button>
              <ProfileDropdown />
            </div>
          </div>

          {/* Mobile Menu Button and Profile */}
          <div className="md:hidden flex items-center gap-4">
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
            <ProfileDropdown />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-[rgba(255,255,255,0.4)] bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu */}
            <div className="absolute top-full left-0 right-0 bg-white border-b rounded-lg shadow-lg z-50 md:hidden">
              <nav className="flex flex-col">
                <div onClick={closeMobileMenu}>
                  <NavLinks isMobile={true} />
                </div>
                
                {/* Mobile Collaborate Button */}
                <div className="px-6 pt-4 pb-4 border-t mt-4">
                  <Button 
                    variant={"primary"} 
                    size={"primary"}
                    className="w-full"
                    onClick={closeMobileMenu}
                  >
                    Collaborate
                  </Button>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
