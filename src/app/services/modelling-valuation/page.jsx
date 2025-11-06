import JsonLd from '@/components/JsonLd';
import ServiceComparision from '@/components/Services/ServiceComparision';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export const metadata = {
  title: "Financial Modelling & Valuation – Truthink",
  description:
    "Accurate business valuation and financial modelling for startups & SMEs to make informed decisions.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/services/modelling-valuation",
  },
  openGraph: {
    title: "Financial Modelling & Valuation – Truthink",
    description:
      "Accurate business valuation and financial modelling for startups & SMEs to make informed decisions.",
    url: "https://truthinkconsulting.in/services/modelling-valuation",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Modelling & Valuation – Truthink",
    description:
      "Accurate business valuation and financial modelling for startups & SMEs to make informed decisions.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Financial Modelling & Valuation",
  description:
    "Accurate business valuation and financial modelling for startups & SMEs.",
    url: "https://truthinkconsulting.in/services/modelling-valuation",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthinkconsulting.in",
  },
};

const HeroData = {
  title: ` Financial Clarity. Real Valuation. Smarter Decisions.
`,
  description: `Every strategic move — be it fundraising, expansion, or acquisition — starts with clear financial understanding. We build robust financial models and perform accurate valuations that help you see your business’s true worth and make confident, data-driven decisions.
`,
  src: "https://images.pexels.com/photos/34358325/pexels-photo-34358325.jpeg",
};

const servicesData = [
  {
    title: "Financial Modeling & Projections",
    description: `A good model tells your story in numbers. We design dynamic financial models that capture revenue, cost, and growth assumptions — ideal for fundraising, budgeting, and investor discussions. Our models help you visualize outcomes and plan for every “what-if” scenario.
`,
  },
  {
    title: "Cap Table Management Services",
    description: `Your cap table isn’t just a spreadsheet — it’s your company’s ownership DNA. We help you structure, maintain, and manage your capitalization table with accuracy and compliance. From tracking shareholding changes to simulating dilution and funding rounds, we ensure every stakeholder’s equity is clearly defined and investor-ready.`,
  },
  {
    title: "Valuation Services",
    description: `Every founder wonders — “What’s my company really worth?” We help you find that with clarity. Whether you’re pre-revenue or scaling fast, our valuations make sense — not just on paper, but in real investor conversations.
Using trusted methods like the income approach and market comparables, we arrive at a value that’s fair, defensible, and true to your story.

`,
  },
];


const otherFirmPoints = [
  "Use static Excel models with generic templates",
  "Focus only on compliance valuations",
  "Deliver numbers with no story",
  "One-size-fits-all approach",
  "Delayed and rigid processes",
];

const truThinkPoints = [
  "Build dynamic, scenario-based financial models tailored to your business",
  "FProvide strategic valuations that support funding and decision-making",
  "Translate data into insights that investors understand",
  "Custom-built models for each business stage and industry",
  "Fast turnaround with collaborative, transparent reviews",
];

export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <ServiceKaHero info={HeroData} />
      <SubServices
        services={servicesData}
        heading="Our Modeling and Valuation Services"
      />
      <ServiceComparision
        leftPoints={otherFirmPoints}
        rightPoints={truThinkPoints}
      />
    </div>
  );
}
