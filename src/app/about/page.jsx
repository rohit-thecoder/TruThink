import About1 from '@/components/About/About1';
import About2 from '@/components/About/About2';
import About3 from '@/components/About/About3';
import About4 from '@/components/About/About4';
import About5 from '@/components/About/About5';
import Founders from '@/components/About/Founders';
import Contact0 from '@/components/Contact/Contact0';
import FlippingCardsPage from '@/components/FlippingCard';
import Footer from '@/components/Footer/Footer';
import JsonLd from '@/components/JsonLd';
import React from 'react'


export const metadata = {
  title: "About Truthink Consulting | Startup Advisors",
  description: "Know our story, mission, and team behind Truthink Consulting",
  keywords:"about Truthink Consulting, startup consultants India, SME advisory firm, financial consulting company, business growth advisors",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://truthinkconsulting.in/about" },
  openGraph: {
    title: "About Truthink – Startup & SME Financial Experts",
    description:
      "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
    url: "https://truthinkconsulting.in/about",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Truthink – Startup & SME Financial Experts",
    description:
      "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Truthink",
  description:
    "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
  url: "https://truthinkconsulting.in/about",
};


export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div>
        <About1 />
        <About4 />
        
        {/* <About2 /> */}
        <Founders/>
        {/* <About3 /> */}

        <About5 />
        {/* <h1 className="py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl ">
          Our AboutPage is currently under construction. We will be live soon{" "}
        </h1> */}
      </div>
    </div>
  );
}
