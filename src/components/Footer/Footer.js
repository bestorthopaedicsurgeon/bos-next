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
          Built for Orthopaedic Surgeons. Trusted by Patients!  <br />Your Trusted Orthopaedic Surgeon Directory
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
        {/* Pages */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/surgeons" className="hover:underline">Find Surgeons</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
        {/* For Patients */}
        <div>
          <h3 className="font-semibold text-lg mb-4">For Patients</h3>
          <ul className="space-y-2">
            <li><Link href="/book-appointment" className="hover:underline">Book Appointment</Link></li>
            {/* <li><Link href="/patient-registration" className="hover:underline">Patient Registration</Link></li> */}
            <li><Link href="/how-to-leave-review" className="hover:underline">How to Leave Review</Link></li>
            {/* <li><Link href="/patient-profile" className="hover:underline">Patient Profile</Link></li> */}
          </ul>
        </div>
        {/* For Surgeons */}
        <div>
          <h3 className="font-semibold text-lg mb-4">For Surgeons</h3>
          <ul className="space-y-2">
            <li><Link href="/how-to-make-surgeons-profile" className="hover:underline">How to Create Profile</Link></li>
            {/* <li><Link href="/doctor/registration" className="hover:underline">Surgeon Registration</Link></li> */}
            {/* <li><Link href="/doctor-profile" className="hover:underline">Manage Profile</Link></li> */}
            <li><Link href="/contactUs" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 