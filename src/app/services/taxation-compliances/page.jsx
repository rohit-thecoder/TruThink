import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Taxation & Compliances – Truthink",
  description:
    "Expert guidance on taxation and regulatory compliance for startups & SMEs to ensure smooth operations.",
  openGraph: {
    title: "Taxation & Compliances – Truthink",
    description:
      "Expert guidance on taxation and regulatory compliance for startups & SMEs.",
      robots: { index: true, follow: true },
  alternates: { canonical: "https://truthinkconsulting.in/services/taxation-compliances" },
    url: "https://truthink.com/services/taxation-compliances",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxation & Compliances – Truthink",
    description:
      "Expert guidance on taxation and regulatory compliance for startups & SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Taxation & Compliances",
  description:
    "Expert guidance on taxation and regulatory compliance for startups & SMEs.",
    url: "https://truthinkconsulting.in/services/taxation-compliances",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthink.com",
  },
};


export default function page() {
  return (
    <div>
      
        <JsonLd data={jsonLd} />
      
      <h1>Taxation Compilances</h1>
    </div>
  );
}
