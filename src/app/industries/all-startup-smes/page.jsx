import IndustriesFaq from '@/components/Industries/IndustriesFaqs';
import IndustriesHero from '@/components/Industries/IndustriesHero';
import IndustriesOffer from '@/components/Industries/IndustriesOffer';
import IndustriesPreferUs from '@/components/Industries/IndustriesPreferUs';
import IndustriesSpecial from '@/components/Industries/IndustriesSpecial';
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

const HeroData = {
  title: `Finance that supports your ambition — wherever you’re headed.
`,
  description: ` Every startup and MSME battles the same challenges — limited time, tighter budgets, and the need to grow without losing control of the numbers. We help you bring clarity to your finances so you can focus on customers, operations, and scaling. Simple systems, clean data, and reliable reporting — everything you need to run your business with confidence.
`,
  bigImage: {
    src: `https://images.pexels.com/photos/34774341/pexels-photo-34774341.jpeg`,
    alt: `Tech Big Image`,
  },
  smallImage: {
    src: `https://images.pexels.com/photos/8528744/pexels-photo-8528744.jpeg`,
    alt: `Tech Small Image`,
  },
  wideImage: {
    src: `https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg`,
    alt: `Tech Wide Image`,
  },
};

const faqs = [
  {
    question: `What financial metrics should a tech startup track regularly?`,
    answer: `Tech startups should monitor MRR/ARR, CAC, LTV, churn, gross margins, burn rate, runway, and revenue retention. These metrics give a clear view of growth, efficiency, and sustainability.
`,
  },
  {
    question: `How early should a tech startup formalize its accounting systems?
`,
    answer: `Ideally from day one. Clean books and proper revenue recognition early on save enormous time and money later — especially before fundraising or due diligence.`,
  },
  {
    question: `How do you help with cash flow management for high-burn startups?`,
    answer: `We track burn vs. runway, identify avoidable expenses, build cash-flow forecasts, and help founders plan fundraising or capital allocation more strategically.
`,
  },
  {
    question: ` What’s the biggest financial mistake early-stage tech founders make?
`,
    answer: `Mixing growth with chaos — rapid scaling without proper financial hygiene. Missing revenue recognition rules, incorrect SaaS metrics, and poor cash planning are the most common issues.
`,
  },
];

const specialData = {
  title: `Why startups & MSMEs need structured financial systems?
`,
  description: `Most small businesses operate on instinct — but growth requires visibility. Without structured accounting, cash flow becomes unpredictable, profitability gets unclear, and taxes turn stressful.`,
  description2: `A strong financial foundation gives you clarity across revenue, expenses, margins, cash flow, compliance, and growth opportunities. It ensures you avoid leaks, plan better, stay compliant, and make decisions with real numbers instead of assumptions. No complexity — just clean, practical finance that supports your business at every stage.
`,
  src: `https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg`,
};


export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <div>
        <IndustriesHero info={HeroData} />
        <IndustriesSpecial info={specialData} />
        <SubIndustries industries={IndustriesData} heading="Our Services" />
        <IndustriesPreferUs />
        <IndustriesOffer heading="Do you run any Tech Startup" />
        <IndustriesFaq info={faqs} />
      </div>
    </div>
  );
}
