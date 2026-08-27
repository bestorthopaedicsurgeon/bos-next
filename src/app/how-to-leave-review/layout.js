import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: 'How to Leave a Review',
  description: 'Learn how to find an orthopaedic surgeon profile, submit a patient review and understand how reviews are checked before publication on BOS.',
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
