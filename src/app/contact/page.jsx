import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Contact Truthink – Get in Touch",
  description:
    "Reach out to Truthink for financial consulting, valuation, taxation, and management services for startups & SMEs.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://truthinkconsulting.in/contact" },
  openGraph: {
    title: "Contact Truthink – Get in Touch",
    description:
      "Reach out to Truthink for financial consulting, valuation, taxation, and management services for startups & SMEs.",
    url: "https://truthinkconsulting.in/contact",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Truthink – Get in Touch",
    description:
      "Reach out to Truthink for financial consulting, valuation, taxation, and management services for startups & SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Truthink",
  description:
    "Reach out to Truthink for financial consulting, valuation, taxation, and management services for startups & SMEs.",
  url: "https://truthinkconsulting.in/contact",
};


export default function page() {
  return (
    <div>
        <JsonLd data={jsonLd} />

      <h1>Contact</h1>
    </div>
  );
}
