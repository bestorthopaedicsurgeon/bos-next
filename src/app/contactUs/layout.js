import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

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
