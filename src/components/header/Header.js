"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, UserCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full border-b py-4">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-blue-600">
          <Link href="/">
            <Image
              src="/logos/bos-logo-1.png"
              alt="Logo"
              width={200}
              height={110}
            />
          </Link>
        </div>

        {/* Middle: Nav Items */}
        <nav className="ml-12 hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "text-gray-700 hover:text-primary/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Button + Profile */}
        <div className="flex items-center gap-4">
          <Button variant={"primary"} size={"primary"}>
            Collaborate
          </Button>
          <div className="bg-primary rounded-full p-3">
            <User className="text-primary-foreground h-8 w-8" />
          </div>
        </div>
      </div>
    </header>
  );
}
