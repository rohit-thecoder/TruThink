import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Startup Burn Rate Calculator – Truthink",
  description:
    "Calculate your startup's burn rate quickly and efficiently with Truthink's free burn rate calculator for better financial planning.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/resources/burn-rate-calculator",
  },
  openGraph: {
    title: "Startup Burn Rate Calculator – Truthink",
    description:
      "Calculate your startup's burn rate quickly and efficiently with our free tool.",
    url: "https://truthinkconsulting.in/resources/burn-rate-calculator",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Burn Rate Calculator – Truthink",
    description:
      "Calculate your startup's burn rate quickly and efficiently with our free tool.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Startup Burn Rate Calculator",
  description:
    "Free tool to calculate startup burn rate for better financial planning.",
  url: "https://truthinkconsulting.in/resources/burn-rate-calculator",
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
    
      <h1>BURN RATE CALCULATOR</h1>
    </div>
  );
}
