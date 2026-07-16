"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinks({ isMobile = false }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/surgeons", label: "Surgeons" },
    { href: "/blog", label: "Blogs" },
    { href: "/contactUs", label: "Contact" },
    { href: "/faq", label: "FAQs" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`font-medium transition ${
            pathname === link.href
              ? "text-primary font-bold"
              : "hover:text-primary/90 text-gray-700"
          } ${
            isMobile
              ? "block border-b border-gray-100 px-6 py-3 text-lg last:border-b-0 hover:bg-gray-50"
              : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
