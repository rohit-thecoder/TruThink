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
      
      <h1>About</h1>
    </div>
  );
}
