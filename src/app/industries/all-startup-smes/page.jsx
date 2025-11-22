import SubIndustries from '@/components/Industries/SubIndustries';
import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "All Startups & SMEs – Industries – Truthink",
  description:
    "Comprehensive financial consulting for all types of startups and SMEs across industries.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/industries/all-startups-smes",
  },
  openGraph: {
    title: "All Startups & SMEs – Industries – Truthink",
    description:
      "Comprehensive financial consulting for all types of startups and SMEs.",
    url: "https://truthinkconsulting.in/industries/all-startups-smes",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Startups & SMEs – Industries – Truthink",
    description:
      "Comprehensive financial consulting for all types of startups and SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Industry",
  name: "All Startups & SMEs",
  description:
    "Comprehensive financial consulting for all types of startups and SMEs.",
  url: "https://truthinkconsulting.in/industries/all-startups-smes",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthinkconsulting.in",
  },
};

const IndustriesData = [
  {
    title: "Bookkeeping & MIS ",
    description: `Simple, reliable books that keep your finances investor- and lender-ready at all times.`,
  },
  {
    title: "AP & AR Management",
    description: `Get control over vendor payments and customer collections so cash flow stays predictable — not chaotic.`,
  },
  {
    title: "Direct & Indirect Taxation ",
    description: `We turn your numbers into insights with easy-to-read financial reports every month.`,
  },
  {
    title: "Expansion & Growth Planning",
    description: `Plan your next hires, expansion, or investments with clear, data-backed financial projections.`,
  },
];


export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div>
        <SubIndustries industries={IndustriesData} heading="Our Services" />

        <h1 className="py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl ">
          Our ALL startup page is currently under construction. We will be live
          soon{" "}
        </h1>
      </div>
    </div>
  );
}
