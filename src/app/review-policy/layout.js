import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Review & Rating Policy | Best Orthopaedic Surgeon",
  description: "Review & Rating Policy for www.bestorthopaedicsurgeon.com.au - How reviews, ratings, and user-submitted content are managed",
};

export default function ReviewPolicyLayout({ children }) {
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

