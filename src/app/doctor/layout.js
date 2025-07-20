import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export default function MainLayout({ children }) {
  return (
    <>
    <main className="container">
      <Header />
      {children}
    </main>
    <Footer/>
    </>
  );
}
