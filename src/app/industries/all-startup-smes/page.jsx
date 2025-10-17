import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "All Startups & SMEs – Industries – Truthink",
  description:
    "Comprehensive financial consulting for all types of startups and SMEs across industries.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/industries/all-startups-smes",
  },
  openGraph: {
    title: "All Startups & SMEs – Industries – Truthink",
    description:
      "Comprehensive financial consulting for all types of startups and SMEs.",
    url: "https://truthinkconsulting.in/industries/all-startups-smes",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Startups & SMEs – Industries – Truthink",
    description:
      "Comprehensive financial consulting for all types of startups and SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Industry",
  name: "All Startups & SMEs",
  description:
    "Comprehensive financial consulting for all types of startups and SMEs.",
  url: "https://truthinkconsulting.in/industries/all-startups-smes",
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

      <h1>ALL STARTUPS</h1>
    </div>
  );
}
