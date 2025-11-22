import IndustriesFaq from '@/components/Industries/IndustriesFaqs';
import IndustriesHero from '@/components/Industries/IndustriesHero';
import IndustriesOffer from '@/components/Industries/IndustriesOffer';
import IndustriesPreferUs from '@/components/Industries/IndustriesPreferUs';
import IndustriesSpecial from '@/components/Industries/IndustriesSpecial';
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

const HeroData = {
  title: `Finance that keeps your production moving — smoothly and profitably.
`,
  description: ` Manufacturing isn’t built on guesses — it’s built on precision. Costs shift, supply chains fluctuate, and even small process inefficiencies can impact margins. We help you build a financial system that gives complete visibility across production, inventory, margins, and cash flow. Whether you’re scaling a factory floor or optimizing batch runs, your finance stays just as disciplined as your operations.
`,
  bigImage: {
    src: `https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg`,

    alt: `Manufacturing Big Image`,
  },
  smallImage: {
    src: `https://images.pexels.com/photos/2480481/pexels-photo-2480481.jpeg`,
    alt: `Manufacturing Small Image`,
  },
  wideImage: {
    src: `https://images.pexels.com/photos/9889058/pexels-photo-9889058.jpeg`,
    alt: `Manufacturing Wide Image`,
  },
};


const faqs = [
  {
    question: `Why is costing accuracy so important for manufacturing businesses?`,
    answer: `Small pricing errors can wipe out margins. Accurate costing ensures your pricing, profitability, and production decisions are grounded in real numbers.
`,
  },
  {
    question: ` Can you help us reduce working capital pressure?
`,
    answer: `Yes — we optimize inventory cycles, vendor terms, and receivables to free up cash without slowing production.`,
  },
  {
    question: `How do you manage compliance for manufacturing startups?
`,
    answer: `We handle GST filings, documentation, statutory books, inventory audits, and identify incentives based on your state and production model.
`,
  },
  {
    question: ` Do manufacturing startups need specialized financial forecasting?
`,
    answer: `Absolutely. Production, capex, labor, and material fluctuations require forecasts that account for real operational variability.
`,
  },
];

const specialData = {
  title: `Why manufacturing startups need specialized accounting and finance services?
`,
  description: `Manufacturing has more moving parts than most industries — raw materials, WIP, machinery, labor cycles, vendor credit terms, compliance, and long payment cycles. Traditional bookkeeping can’t capture this complexity.`,
  description2: `Specialized manufacturing finance ensures you always know your true production cost, actual margins, working capital needs, and cash conversion cycle. It helps you manage inventory efficiently, improve vendor-payable strategies, stay compliant on GST and statutory filings, and plan capacity or expansion with realistic financial projections. The goal is simple: turn your operations into a predictable, scalable engine.
`,
  src: `https://images.pexels.com/photos/4483609/pexels-photo-4483609.jpeg`,
};


export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <IndustriesHero info={HeroData} />
      <IndustriesSpecial info={specialData} />
      <SubIndustries industries={IndustriesData} heading="Our Services" />
      <IndustriesPreferUs />
      <IndustriesOffer heading="Do you run a manufacturing startup?" />
      <IndustriesFaq info={faqs} />
    </div>
  );
}
