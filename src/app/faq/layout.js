import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Frequently Asked Questions | Best Orthopaedic Surgeon",
  description: "Find answers to common questions about our orthopaedic surgeon directory, ratings, reviews, and how to find the right surgeon in Western Australia.",
};

export default function FAQLayout({ children }) {
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

