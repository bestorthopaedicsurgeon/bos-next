import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Terms of Use | Best Orthopaedic Surgeon",
  description: "Terms of Use for www.bestorthopaedicsurgeon.com.au - Terms and conditions governing your access to and use of the Website",
  alternates: { canonical: '/terms-of-use' },
};

export default function TermsOfUseLayout({ children }) {
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
