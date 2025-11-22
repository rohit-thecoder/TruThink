import SubIndustries from '@/components/Industries/SubIndustries';
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

const IndustriesData = [
  {
    title: "Costing & Margins Setup",
    description: `Get accurate material costing, blended margins, and product-wise profitability so you know exactly what’s making money — and what isn’t.
`,
  },
  {
    title: "Working Capital Management ",
    description: `Streamline stock purchases, reorder credit cycles, and cash tied in inventory to keep production flowing smoothly.
`,
  },
  {
    title: "GST, Compliance & Incentives",
    description: `End-to-end support for manufacturing-specific compliance, documentation, and identifying eligible rebates or incentives.
`,
  },
  {
    title: "Forecasting & Expansion Planning",
    description: `From capacity planning to capex decisions, get clear long-term financial visibility before taking the next leap.
`,
  },
];


export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />
      <SubIndustries industries={IndustriesData} heading="Our Services" />

      <h1 className="py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl ">
        Our Manufacturing startup page is currently under construction. We will
        be live soon{" "}
      </h1>
    </div>
  );
}
