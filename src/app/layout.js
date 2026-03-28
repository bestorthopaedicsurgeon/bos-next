import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@components/theme-provider";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"], // Regular
  variable: "--font-dm-sans",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.bestorthopaedicsurgeon.com.au"),
  title: {
    template: "%s | Best Orthopaedic Surgeons",
    default: "Best Orthopaedic Surgeons | BOS",
  },
  description: "Find the Best Orthopaedic Surgeons in Australia. Comprehensive platform for patients and doctors.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Orthopaedic Surgeons",
    description: "Find the Best Orthopaedic Surgeons in Australia.",
    url: "/",
    siteName: "Best Orthopaedic Surgeons",
    images: [
      {
        url: "/bos_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  icons: {
    icon: "/bos_favicon.svg",
    shortcut: "/bos_favicon.svg",
    apple: "/bos_favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Toaster />
          <SessionWrapper>{children}</SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
