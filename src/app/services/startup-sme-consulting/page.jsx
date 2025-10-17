import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Startup & SME Consulting Services – Truthink",
  description:
    "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/services/startup-sme-consulting",
  },

  openGraph: {
    title: "Startup & SME Consulting Services – Truthink",
    description:
      "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
    url: "https://truthinkconsulting.in/services/startup-sme-consulting",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup & SME Consulting Services – Truthink",
    description:
      "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Startup & SME Consulting",
  description:
    "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
    url: "https://truthinkconsulting.in/services/startup-sme-consulting",
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
      
      <h1>StartUp Sme Consulting</h1>
    </div>
  );
}
