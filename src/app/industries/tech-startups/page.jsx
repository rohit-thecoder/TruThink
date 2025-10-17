import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Tech Startups – Financial Consulting – Truthink",
  description:
    "Tailored financial consulting solutions for technology startups to scale efficiently.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/industries/tech-startups",
  },
  openGraph: {
    title: "Tech Startups – Financial Consulting – Truthink",
    description:
      "Tailored financial consulting solutions for technology startups.",
    url: "https://truthinkconsulting.in/industries/tech-startups",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Startups – Financial Consulting – Truthink",
    description:
      "Tailored financial consulting solutions for technology startups.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Industry",
  name: "Tech Startups",
  description: "Financial consulting solutions for technology startups.",
  url: "https://truthinkconsulting.in/industries/tech-startups",
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
      
      <h1>TECH STARTUPS</h1>
    </div>
  );
}
