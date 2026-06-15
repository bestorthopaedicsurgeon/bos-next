import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Legal Disclaimer",
  description: "Legal Disclaimer for www.bestorthopaedicsurgeon.com.au - Terms and conditions of use",
  alternates: { canonical: '/legal-disclaimer' },
};

export default function LegalDisclaimerLayout({ children }) {
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

