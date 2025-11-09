import JsonLd from '@/components/JsonLd';
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

      <h1 className="py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl ">
        Our Free pitchdesk page is currently under construction. We will be live
        soon{" "}
      </h1>
    </div>
  );
}
