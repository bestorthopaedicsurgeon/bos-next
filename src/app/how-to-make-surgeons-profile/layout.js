import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  // Keyword map: "surgeon profile" (secondary "doctor directory").
  title: { absolute: 'Create Your Surgeon Profile | WA Orthopaedic Directory' },
  description: "Create or claim your surgeon profile on Western Australia's orthopaedic directory. Add your subspecialties, clinics and credentials so patients can find you.",
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
