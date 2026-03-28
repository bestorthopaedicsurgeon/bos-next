import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Privacy Policy | Best Orthopaedic Surgeon",
  description: "Privacy Policy for www.bestorthopaedicsurgeon.com.au - Compliant with the Australian Privacy Principles (APPs)",
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyLayout({ children }) {
  return (
    <>
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
}

