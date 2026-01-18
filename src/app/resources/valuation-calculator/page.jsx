import JsonLd from '@/components/JsonLd';
import ValuationCalculator from '@/components/Resources/ValuationCalculator';
import ValuationGuide from '@/components/Resources/ValuationGuide';
import React from 'react'

export const metadata = {
  title: "Basic Startup Valuation Calculator | Free Tool",
  description:
    "Use our free calculator to estimate your startup’s valuation instantly.",
  keywords:
    "valuation calculator, startup valuation tool, business worth calculator, pre-money valuation, startup funding calculator",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/resources/valuation-calculator",
  },
  openGraph: {
    title: "Startup Valuation Calculator – Truthink",
    description:
      "Use our free startup valuation calculator to estimate your business worth.",
    url: "https://truthinkconsulting.in/resources/valuation-calculator",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Valuation Calculator – Truthink",
    description:
      "Use our free startup valuation calculator to estimate your business worth.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Startup Valuation Calculator",
  description: "Free tool to estimate startup valuation accurately.",
  url: "https://truthinkconsulting.in/resources/valuation-calculator",
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
        <ValuationCalculator />
        <ValuationGuide />
    </div>
  );
}
