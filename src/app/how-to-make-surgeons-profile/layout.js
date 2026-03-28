import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: 'Create Surgeon Profile',
  description: 'Guide on how to create a surgeon profile on Best Orthopaedic Surgeons.',
  alternates: { canonical: '/how-to-make-surgeons-profile' },
};

export default function HowToMakeSurgeonsProfileLayout({ children }) {
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
