import JsonLd from '@/components/JsonLd';
import Service4 from '@/components/Services/Service4';
import Service5 from '@/components/Services/Service5';
import Service6 from '@/components/Services/Service6';
import ServiceFaqs1 from '@/components/Services/ServiceFaqs1';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export const metadata = {
  title: "Financial Modelling & Business Valuation, Forecasting Expert",
  description:
    "Build investor-ready models and valuations for your startup’s funding and growth.",
    keywords :"startup valuation services, business valuation consultant, financial modelling expert, investor pitch valuation, startup funding model",
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
  src: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
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

const features = [
  { name: "Build dynamic, scenario-based financial models tailored to your bussiness", active: true },
  { name: "Provide strategic valuations that support funding and decision-making", active: false },
  { name: "Translate data into insights that investors understand", active: false },
  { name: "Custom-built models for each bussiness stage and industry", active: true },
  { name: "Fast turnaround with collaborative, transparent reviews", active: false },
];


const faqs = [
  {
    question: "What kind of financial models do you prepare?",
    answer:
      "We prepare detailed models for startups, SMEs, and corporates — including revenue projections, cost analysis, cash flow forecasting, investor pitch models, and project reports.",
  },
  {
    question: "Can you help us make sense of our financial model?",
    answer:
      "100%. We don’t just build models — we walk you through what the numbers mean, how to read them, and how small changes can impact your runway or valuation.",
  },
  {
    question: "Can you help startups with valuation during fundraising?",
    answer:
      "Absolutely. We perform startup valuations for fundraising, share issuances, or investor negotiations — ensuring transparency and credibility in every transaction.",
  },
  {
    question: "We’re not fundraising yet. Should we still get valued?",
    answer:
      "Definitely. Knowing your company’s worth helps in setting goals, planning equity, and negotiating better when the time comes. Many founders use it as a reality check before they go to the market.",
  },

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
      {/* <ServiceComparision
        leftPoints={otherFirmPoints}
        rightPoints={truThinkPoints}
      /> */}
      <Service4/>
      <Service5 features={features}/>
      <Service6/>
      <ServiceFaqs1 info={faqs} />
    </div>
  );
}
