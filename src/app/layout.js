import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@components/theme-provider";
import { SessionProvider } from "next-auth/react";
import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/seo/JsonLd";

const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://www.bestorthopaedicsurgeon.com.au";

// Site-wide structured data (rendered on every page).
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Best Orthopaedic Surgeons",
  alternateName: "BOS",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/bos-logo-1.png`,
  description:
    "An independent directory of orthopaedic surgeons across Western Australia.",
  areaServed: { "@type": "State", name: "Western Australia" },
  sameAs: [
    "https://www.facebook.com/bestorthopaedicsurgeon",
    "https://www.instagram.com/best.orthopaedicsurgeon/",
    "https://www.linkedin.com/company/best-orthopaedic-surgeon",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Best Orthopaedic Surgeons",
  inLanguage: "en-AU",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

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
  // No global canonical here — each page sets its own. A hardcoded canonical at
  // the root made every page that didn't override it claim to be the homepage.
  openGraph: {
    title: "Best Orthopaedic Surgeons",
    description: "Find the Best Orthopaedic Surgeons in Western Australia.",
    url: "/",
    siteName: "Best Orthopaedic Surgeons",
    // og:image is supplied automatically by src/app/opengraph-image.js
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Orthopaedic Surgeons",
    description: "Find the Best Orthopaedic Surgeons in Western Australia.",
    // twitter:image is supplied automatically by src/app/twitter-image.js
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
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Toaster />
          <SessionWrapper>{children}</SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
