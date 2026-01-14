import JsonLd from '@/components/JsonLd';
import Blog from '@/components/Resources/Blog';
import React from 'react'

export const metadata = {
  title: "Free Pitchdeck Template – Truthink",
  description:
    "Download a free, ready-to-use pitchdeck template designed for startups & SMEs to present their business effectively.",
  robots: { index: true, follow: true },
  alternates: {
    canonical:
      "https://truthinkconsulting.in/resources/free-pitchdesk-template",
  },
  openGraph: {
    title: "Free Pitchdeck Template – Truthink",
    description:
      "Download a free pitchdeck template for startups & SMEs to present their business effectively.",
    url: "https://truthinkconsulting.in/resources/free-pitchdeck-template",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Pitchdeck Template – Truthink",
    description:
      "Download a free pitchdeck template for startups & SMEs to present their business effectively.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Free Pitchdeck Template",
  description:
    "Download a free, ready-to-use pitchdeck template designed for startups & SMEs.",
  url: "https://truthinkconsulting.in/resources/free-pitchdeck-template",
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
        <Blog />
      
    </div>
  );
}
