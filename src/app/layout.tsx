import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { BookingModal } from "@/components/BookingModal";

export const metadata: Metadata = {
  title: "Smile Matters | Modern Dental Care",
  description: "Smile Matters provides professional dental care, cosmetic dentistry, implants, orthodontics, and preventive treatments with a patient-first approach.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  openGraph: {
    siteName: "Smile Matters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smile Matters | Modern Dental Care",
    description: "Smile Matters provides professional dental care, cosmetic dentistry, implants, orthodontics, and preventive treatments with a patient-first approach.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalOrganization"],
    "name": "Smile Matters",
    "image": "https://example.com/images/logo.png",
    "url": "https://example.com",
    "telephone": "+15551234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Dental Way",
      "addressLocality": "Beverly Hills",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <div className="sticky top-0 z-50 flex flex-col">
            <EmergencyBanner />
            <Navbar />
          </div>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <BookingModal />
        </SmoothScrollProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
