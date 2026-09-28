import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  // Keyword map: "doctor reviews" (secondary "rate my doctor").
  title: { absolute: 'How to Leave Doctor Reviews | Rate Your Orthopaedic Surgeon' },
  description: 'Leave doctor reviews for your orthopaedic surgeon in five simple steps. Rate your doctor and help other patients in Western Australia choose with confidence.',
  alternates: { canonical: '/how-to-leave-review' },
};

export default function HowToLeaveReviewLayout({ children }) {
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
