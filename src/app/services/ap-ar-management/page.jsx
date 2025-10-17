import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Accounts Payable & Receivable Management – Truthink",
  description:
    "Efficient AP & AR management solutions for startups & SMEs to optimize cash flow.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/services/ap-ar-management",
  },
  openGraph: {
    title: "Accounts Payable & Receivable Management – Truthink",
    description: "Efficient AP & AR management solutions for startups & SMEs.",
    url: "https://truthinkconsulting.in/services/ap-ar-management",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounts Payable & Receivable Management – Truthink",
    description: "Efficient AP & AR management solutions for startups & SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Accounts Payable & Receivable Management",
  description: "Efficient AP & AR management solutions for startups & SMEs.",
  url: "https://truthinkconsulting.in/services/ap-ar-management",
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
      
      <h1>AP AR Management</h1>
    </div>
  );
}
