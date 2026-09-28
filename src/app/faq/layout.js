import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqData } from "@/data/faq";

export const metadata = {
  // Keyword map: "what does an orthopaedic surgeon do" (secondary "what is an orthopaedic surgeon").
  title: { absolute: "What Does an Orthopaedic Surgeon Do? FAQs for Patients" },
  description: "What does an orthopaedic surgeon do, and when should you see one? Answers on referrals, first appointments, our WA directory, ratings and reviews.",
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

