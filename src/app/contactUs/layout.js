import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Best Orthopaedic Surgeons for help using the Western Australian surgeon directory, profile enquiries, reviews or general support.',
  alternates: { canonical: '/contactUs' },
};

export default function MainLayout({ children }) {
  return (
    <>
    <div className="mx-auto container px-4 sm:px-6 lg:px-8">
      <Header />
      {children}
      </div>
      <Footer/>
    </>
  );
}
