import Header from "@/components/header/Header";

export default function MainLayout({ children }) {
  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <Header />
      {children}
    </main>
  );
}
