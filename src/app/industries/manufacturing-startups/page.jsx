import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Manufacturing Startups – Financial Consulting – Truthink",
  description:
    "Financial advisory for manufacturing startups focusing on cost, valuation, and growth strategies.",
  robots: { index: true, follow: true },
  alternates: {
    canonical:
      "https://truthinkconsulting.in/industries/manufacturing-startups",
  },
  openGraph: {
    title: "Manufacturing Startups – Financial Consulting – Truthink",
    description:
      "Financial advisory for manufacturing startups focusing on cost, valuation, and growth.",
    url: "https://truthinkconsulting.in/industries/manufacturing-startups",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Startups – Financial Consulting – Truthink",
    description:
      "Financial advisory for manufacturing startups focusing on cost, valuation, and growth.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Industry",
  name: "Manufacturing Startups",
  description:
    "Financial advisory for manufacturing startups focusing on cost, valuation, and growth.",
    url: "https://truthinkconsulting.in/industries/manufacturing-startups",
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
        Our Manufacturing startup page is currently under construction. We will be live
        soon{" "}
      </h1>
    </div>
  );
}
