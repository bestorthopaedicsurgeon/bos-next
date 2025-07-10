import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ProfileDropdown from "@/components/header/ProfileDropdown";
import { NavLinks } from "@/components/header/NavLinks";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/surgeons", label: "Surgeons" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="mb-8 w-full border-b py-4">
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

        <div className="flex items-center gap-6">
          {/* Middle: Nav Items */}
          <nav className="ml-12 hidden gap-6 md:flex">
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
      </div>
    </header>
  );
}
