import JsonLd from '@/components/JsonLd';
import BurnRateCalculator from '@/components/Resources/BurnRateCalculator';
import ResourcesFaq from '@/components/Resources/ResourcesFaq';
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
    title: "Startup Burn Rate Calculator | Truthink",
    description:
      "Calculate your monthly burn rate and cash runway easily.",
      keywords:"burn rate calculator, startup runway tool, cash flow tracker, startup expenses calculator, financial planning for startups",
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
const faqs = [
  {
    question: "What is a good burn rate for a startup?",
    answer:
      "A good burn rate depends on your startup’s stage and funding status. Ideally, a startup should maintain 12–18 months of runway to operate comfortably without urgent fundraising pressure.",
  },
  {
    question: "What does a negative burn rate mean?",
    answer:
      "A negative burn rate means your startup is cash-flow positive. You are generating more cash through revenue than you are spending each month.",
  },
  {
    question: "How often should I calculate my burn rate?",
    answer:
      "At minimum, you should calculate burn rate monthly. Regular tracking helps you identify trends early and adjust spending, hiring, or fundraising plans before problems arise.",
  },
  {
    question: "Does burn rate include non-cash expenses like depreciation?",
    answer:
      "No. Burn rate focuses strictly on cash movement. Non-cash accounting items such as depreciation or amortization are excluded from burn rate calculations.",
  },
  {
    question: "How can Truthink help reduce my burn rate?",
    answer:
      "We analyse your cost structure, identify inefficiencies, automate financial reporting, and design sustainable strategies that help extend runway and improve long-term financial discipline.",
  },
];


export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <BurnRateCalculator />
      <ResourcesFaq info={faqs} />
    </div>
  );
}