import Header from "@/components/header/Header";

export default function MainLayout({ children }) {
  return (
    <>
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Header />
      </div>
      {children}
    </>
  );
}
