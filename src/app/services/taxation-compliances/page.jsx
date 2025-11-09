import JsonLd from '@/components/JsonLd';
import Service4 from '@/components/Services/Service4';
import Service5 from '@/components/Services/Service5';
import Service6 from '@/components/Services/service6';
import ServiceComparision from '@/components/Services/ServiceComparision';
import ServiceFaqs1 from '@/components/Services/ServiceFaqs1';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export const metadata = {
  title: "Taxation & Compliances – Truthink",
  description:
    "Expert guidance on taxation and regulatory compliance for startups & SMEs to ensure smooth operations.",
  openGraph: {
    title: "Taxation & Compliances – Truthink",
    description:
      "Expert guidance on taxation and regulatory compliance for startups & SMEs.",
      robots: { index: true, follow: true },
  alternates: { canonical: "https://truthinkconsulting.in/services/taxation-compliances" },
    url: "https://truthink.com/services/taxation-compliances",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxation & Compliances – Truthink",
    description:
      "Expert guidance on taxation and regulatory compliance for startups & SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Taxation & Compliances",
  description:
    "Expert guidance on taxation and regulatory compliance for startups & SMEs.",
    url: "https://truthinkconsulting.in/services/taxation-compliances",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthink.com",
  },
};

const HeroData = {
  title: `Simplifying Tax & Compliance for Growing Businesses
`,
  description: ` Tax and regulatory complexities can slow down even the best-run businesses. At Truthink, we handle everything from tax planning to statutory compliance — so you can focus on growth while staying 100% compliant and audit-ready at all times.
`,
  src: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
};

const servicesData = [
  {
    title: "Direct & Indirect Tax Management",
    description: `Taxes don’t have to be stressful. We manage your complete tax lifecycle — from accurate filings and reconciliations to advance tax planning. Whether it’s Income Tax, GST, or TDS, we ensure compliance while optimizing your tax outflow through smart structuring and planning.
`,
  },
  {
    title: "Regulatory & Statutory Compliance",
    description: `Missed filings or incorrect documentation can lead to penalties and unwanted scrutiny. Our experts keep your business aligned with Companies Act, FEMA, and other regulatory requirements — ensuring every return, report, and resolution is filed right and on time.
`,
  },
  {
    title: "Assessment, Representation & Advisory",
    description: `Facing a notice or audit? We represent you before tax authorities with confidence and clarity. From responding to queries to defending your position, we take care of the process end-to-end while you stay focused on operations.
`,
  },
];

const otherFirmPoints = [
  "Work reactively — file only when deadlines arrive",
  "Focus only on compliance filings",
  "Use manual spreadsheets and outdated systems",
  "Clients chase updates",
  "See tax as an obligation",
];

const truThinkPoints = [
  "Plan proactively to minimize taxes and avoid last-minute stress",
  "Combine compliance with strategic tax planning",
  "Use automated tools for filing, tracking, and reminders",
  "Clients stay informed through transparent dashboards and regular updates",
  "See tax as an opportunity to optimize profitability",
];

const faqs = [
  {
    question: "What types of taxes do you manage?",
    answer:
      "We handle all direct and indirect taxes including Income Tax, GST, TDS, Advance Tax, and International Tax for businesses, founders, and startups.",
  },
  {
    question: "Can you help us with compliance beyond taxation?",
    answer:
      "Absolutely. We manage your entire statutory and regulatory compliance — ROC filings, FEMA reporting, board resolutions, and more — so nothing slips through the cracks.",
  },
  {
    question: "Do you represent clients before tax authorities?",
    answer:
      "Yes. Our experts handle assessments, audits, and representations before tax departments and regulatory bodies with thorough preparation and professional expertise.",
  },
  {
    question: "How do you ensure timely compliance?",
    answer: "We use automated reminders, cloud-based trackers, and structured processes to ensure every filing is done accurately and ahead of deadlines.",
  },
];



export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <ServiceKaHero info={HeroData} />
      <SubServices
        services={servicesData}
        heading="Our Taxation & Compliance Services"
      />
      {/* <ServiceComparision
        leftPoints={otherFirmPoints}
        rightPoints={truThinkPoints}
      /> */}
      <Service4 />

      <Service5 />
      <Service6 />
      <ServiceFaqs1 info={faqs} />
    </div>
  );
}
