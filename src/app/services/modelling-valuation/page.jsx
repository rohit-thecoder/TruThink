import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Financial Modelling & Valuation – Truthink",
  description:
    "Accurate business valuation and financial modelling for startups & SMEs to make informed decisions.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/services/modelling-valuation",
  },
  openGraph: {
    title: "Financial Modelling & Valuation – Truthink",
    description:
      "Accurate business valuation and financial modelling for startups & SMEs to make informed decisions.",
    url: "https://truthinkconsulting.in/services/modelling-valuation",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Modelling & Valuation – Truthink",
    description:
      "Accurate business valuation and financial modelling for startups & SMEs to make informed decisions.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Financial Modelling & Valuation",
  description:
    "Accurate business valuation and financial modelling for startups & SMEs.",
    url: "https://truthinkconsulting.in/services/modelling-valuation",
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
      
      <h1>Modelling-valution</h1>
    </div>
  );
}
