import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  { src: "/fb_icon.svg", alt: "Facebook", href: "#" },
  { src: "/insta_icon.svg", alt: "Instagram", href: "#" },
  { src: "/twitt_icon.svg", alt: "Twitter", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#3A8686] text-[#F1F8F6] w-full py-16 px-4 md:px-16 mt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand/About */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Best Orthopedic Surgeon</h2>
          <p className="mb-6 text-base text-[#F1F8F6]">
            B.O.S simplifies healthcare with an easy-to-use platform for booking appointments, telehealth services, and managing patient records.
          </p>
          <div className="flex gap-4 mt-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.href}
                aria-label={icon.alt}
                className="bg-[#F1F8F6] rounded-full p-3 flex items-center justify-center hover:bg-[#e0ecea] transition"
              >
                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Primary Care</Link></li>
            <li><Link href="#" className="hover:underline">Specialist Care</Link></li>
            <li><Link href="#" className="hover:underline">Mental Health Services</Link></li>
            <li><Link href="#" className="hover:underline">Telehealth</Link></li>
          </ul>
        </div>
        {/* Find a Doctor */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Find a Doctor</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Top-Rated Doctors</Link></li>
            <li><Link href="#" className="hover:underline">Appointment Scheduling</Link></li>
            <li><Link href="#" className="hover:underline">Patient Reviews</Link></li>
            <li><Link href="#" className="hover:underline">Doctor Profiles</Link></li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">News and Updates</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Community Involvement</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 