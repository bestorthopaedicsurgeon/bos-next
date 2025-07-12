import Header from "@/components/header/Header";

export default function MainLayout({ children }) {
  return (
    <main className="mx-4 px-4 sm:mx-8 sm:px-6 md:mx-12 lg:mx-16 lg:px-8 xl:mx-20 2xl:mx-32">
      <Header />
      {children}
    </main>
  );
}
