import JsonLd from '@/components/JsonLd';
import Service4 from '@/components/Services/Service4';
import Service5 from '@/components/Services/Service5';
import Service6 from '@/components/Services/service6';

import ServiceFaqs1 from '@/components/Services/ServiceFaqs1';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export const metadata = {
  title: "Startup Taxation & Compliance Services | Truthink",
  description:
    "End-to-end tax filing, ROC, and startup compliance handled by experts",
  keywords:
    "startup income tax filing, company compliance consultant, GST filing, ROC compliance, corporate tax planning",
  openGraph: {
    title: "Taxation & Compliances – Truthink",
    description:
      "Expert guidance on taxation and regulatory compliance for startups & SMEs.",
    robots: { index: true, follow: true },
    alternates: {
      canonical: "https://truthinkconsulting.in/services/taxation-compliances",
    },
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
    description: `Taxes don’t have to be stressful. We handle your filings, reconciliations, and planning—Income Tax, GST, or TDS—ensuring compliance while optimizing your tax outflow.
`,
  },
  {
    title: "Regulatory & Statutory Compliance",
    description: `Missed filings invite penalties. Our experts keep your business compliant with Companies Act, FEMA, and other regulations—filing every return, report, and resolution on time.
`,
  },
  {
    title: "Assessment, Representation",
    description: `Facing a notice or audit? We handle responses and defend your position before tax authorities, letting you focus on operations.`
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

const features = [
  { name: "Plan proactively to minimize taxes and avoid last-minute stress", active: true },
  { name: "Combine compiance with strategic tax planning", active: false },
  { name: "Use automated tools for filing, tracking, and reminders", active: false },
  { name: "Clients stay informed through transparent dashboards and regular updates", active: false },
  { name: "See tax as an opportunity to optimize profitability", active: false },
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

      <Service5 features={features} />
      <Service6 />
      <ServiceFaqs1 info={faqs} />
    </div>
  );
}
