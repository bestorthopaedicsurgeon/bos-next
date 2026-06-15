import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqData } from "@/data/faq";

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our orthopaedic surgeon directory, ratings, reviews, and how to find the right surgeon in Western Australia.",
  alternates: { canonical: '/faq' },
};

// FAQPage structured data, built from the same data the page renders.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: (faqData?.allFaqs || []).map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQLayout({ children }) {
  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
}

