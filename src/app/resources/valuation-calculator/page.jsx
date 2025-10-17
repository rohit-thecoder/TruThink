import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Startup Valuation Calculator – Truthink",
  description:
    "Use our free startup valuation calculator to estimate your business worth accurately and efficiently.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/resources/valuation-calculator",
  },
  openGraph: {
    title: "Startup Valuation Calculator – Truthink",
    description:
      "Use our free startup valuation calculator to estimate your business worth.",
    url: "https://truthinkconsulting.in/resources/valuation-calculator",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Valuation Calculator – Truthink",
    description:
      "Use our free startup valuation calculator to estimate your business worth.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Startup Valuation Calculator",
  description: "Free tool to estimate startup valuation accurately.",
  url: "https://truthinkconsulting.in/resources/valuation-calculator",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthinkconsulting.in",
  },
};

export default function page() {
  return (
    <div>
      
        <JsonLd data={jsonLd} />
      
      <h1>VALUATION CALCULATOR</h1>
    </div>
  );
}
