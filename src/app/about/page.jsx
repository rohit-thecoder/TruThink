import JsonLd from '@/components/JsonLd';
import React from 'react'


export const metadata = {
  title: "About Truthink – Startup & SME Financial Experts",
  description:
    "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
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
        {/* <Service1/> */}

        {/* <Hero />
      <HomeSlider /> */}
        <h1 className="py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl ">
          Our AboutPage is currently under construction. We will be live soon{" "}
        </h1>
      </div>
    </div>
  );
}
