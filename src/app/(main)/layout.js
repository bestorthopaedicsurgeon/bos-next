import Header from '@/components/header/Header';

export default function MainLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
