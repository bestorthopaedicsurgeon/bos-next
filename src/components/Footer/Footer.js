import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    src: "/fb_icon.svg",
    alt: "Facebook",
    href: "https://www.facebook.com/bestorthopaedicsurgeon",
  },
  {
    src: "/insta_icon.svg",
    alt: "Instagram",
    href: "https://www.instagram.com/best.orthopaedicsurgeon/",
  },
  {
    src: "/linkedin_icon.svg",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/company/best-orthopaedic-surgeon",
  },
];

const Footer = () => {
  return (
    <footer className="mt-30 w-full bg-[#3A8686] px-4 py-16 text-[#F1F8F6] md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Brand/About */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">
            Best Orthopedic Surgeon
          </h2>
          <p className="mb-2 text-base text-[#F1F8F6]">
            Built for Orthopaedic Surgeons. Trusted by Patients! <br />
            Your Trusted Orthopaedic Surgeon Directory
          </p>
          <p className="mb-6 text-base font-bold text-[#F1F8F6] break-words">
            support@bestorthopaedicsurgeon.com.au
          </p>

          <div className="mt-4 flex gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="flex items-center justify-center rounded-full bg-[#F1F8F6] p-3 transition hover:bg-[#e0ecea]"
              >
                <Image src={icon.src} alt={icon.alt} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        {/* For Patients */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">For Patients</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/how-to-leave-review" className="hover:underline">
                How to Leave Review
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blogs and Health Tips
              </Link>
            </li>
            {/* <li><Link href="/patient-registration" className="hover:underline">Patient Registration</Link></li> */}
            {/* <li><Link href="/patient-profile" className="hover:underline">Patient Profile</Link></li> */}
          </ul>
        </div>
        {/* For Surgeons */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">For Surgeons</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/how-to-make-surgeons-profile"
                className="hover:underline"
              >
                How to Create Profile
              </Link>
            </li>
            {/* <li><Link href="/doctor/registration" className="hover:underline">Surgeon Registration</Link></li> */}
            {/* <li><Link href="/doctor-profile" className="hover:underline">Manage Profile</Link></li> */}
            <li>
              <Link href="/contactUs" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Pages */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">More</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/faq" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:underline">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/legal-disclaimer" className="hover:underline">
                Legal Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/review-policy" className="hover:underline">
                Review Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-[#F1F8F6]/20 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#F1F8F6]/80">
            © {new Date().getFullYear()} Best Orthopaedic Surgeon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
