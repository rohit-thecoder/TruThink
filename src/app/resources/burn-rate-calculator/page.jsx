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

export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <h1 className="py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl ">
        Our Burn rate calculator page is currently under construction. We will be live
        soon{" "}
      </h1>
    </div>
  );
}
