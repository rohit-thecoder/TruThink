
import { Lato } from "next/font/google";

import "./globals.css";
import JsonLd from "@/components/JsonLd";
import localFont from 'next/font/local';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";



// src/app/layout.jsx में

const phantomSans = localFont({
  src: [
    // 1. Thin (बहुत हल्का)
    {
      path: "../phantom-sans-font-family/PhantomSans-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    // 2. Light
    {
      path: "../phantom-sans-font-family/PhantomSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    // 3. Book (Regular के करीब, पढ़ने के लिए अच्छा)
    {
      path: "../phantom-sans-font-family/PhantomSans-Book.ttf",
      weight: "400",
      style: "normal",
    },
    // 4. Regular (मानक टेक्स्ट)
    {
      path: "../phantom-sans-font-family/PhantomSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // 5. Medium
    {
      path: "../phantom-sans-font-family/PhantomSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    // 6. Semi-Bold
    {
      path: "../phantom-sans-font-family/PhantomSans-Semi-Bold.ttf",
      weight: "600",
      style: "normal",
    },
    // 7. Bold (शीर्षकों के लिए)
    {
      path: "../phantom-sans-font-family/PhantomSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },

    // Italic और BoldItalic वेरिएंट्स
    {
      path: "../phantom-sans-font-family/PhantomSans-BookItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../phantom-sans-font-family/PhantomSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    // MidItalic (अगर Mid italic का weight 500 है)
    {
      path: "../phantom-sans-font-family/PhantomSans-MidItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-phantom-sans",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: [
    "100", // Thin
    "300", // Light
    "400", // Regular
    "700", // Bold
    "900", // Black
  ],
  variable: "--font-lato",
  display: "swap",
});



export const metadata = {
  title: "Truthink – Expert Financial Consulting for Startups & SMEs",
  description:
    "Truthink provides expert financial consulting, valuation, taxation, and management services for startups and SMEs. Helping businesses grow efficiently.",
  icons: {
    icon: "truthink-favicon.png",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://truthinkconsulting.in/" },
  openGraph: {
    title: "Truthink – Expert Financial Consulting for Startups & SMEs",
    description:
      "Truthink provides expert financial consulting, valuation, taxation, and management services for startups and SMEs. Helping businesses grow efficiently.",
    url: "https://truthinkconsulting.in.com",
    siteName: "Truthink",
    images: [
      {
        url: "https://truthinkconsulting.in/images/homepage-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truthink – Expert Financial Consulting for Startups & SMEs",
    description:
      "Truthink provides expert financial consulting, valuation, taxation, and management services for startups and SMEs. Helping businesses grow efficiently.",
    images: ["https://truthinkconsulting.in/images/homepage-banner.jpg"],
  },
};

// Optional JSON-LD
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Truthink",
  url: "https://truthinkconsulting.in",
  logo: "https://truthinkconsulting.in/images/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/truthink",
    "https://twitter.com/truthink",
  ],
  description:
    "Truthink provides expert financial consulting, valuation, taxation, and management services for startups and SMEs.",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en" className={lato.variable}>
      <JsonLd data={jsonLd} />

      <body className={`font sans ${lato.variable} antialiased `}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
