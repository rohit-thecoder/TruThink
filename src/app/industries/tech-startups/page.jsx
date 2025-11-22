import IndustriesFaq from '@/components/Industries/IndustriesFaqs';
import IndustriesHero from '@/components/Industries/IndustriesHero';
import IndustriesOffer from '@/components/Industries/IndustriesOffer';
import IndustriesPreferUs from '@/components/Industries/IndustriesPreferUs';
import IndustriesSpecial from '@/components/Industries/IndustriesSpecial';
import SubIndustries from '@/components/Industries/SubIndustries';
import JsonLd from '@/components/JsonLd';
import React from 'react'

export const metadata = {
  title: "Financial Consulting for Tech Startups | Truthink",
  description:
    "Expert finance, valuation, and compliance consulting for tech, SaaS, and digital startups driving innovation and growth.",
  keywords:
    "tech startup consulting, SaaS finance advisor, startup valuation services, IT startup compliance, CFO services for tech startups, fintech advisory",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/industries/tech-startups",
  },
  openGraph: {
    title: "Tech Startups – Financial Consulting – Truthink",
    description:
      "Tailored financial consulting solutions for technology startups.",
    url: "https://truthinkconsulting.in/industries/tech-startups",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Startups – Financial Consulting – Truthink",
    description:
      "Tailored financial consulting solutions for technology startups.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Industry",
  name: "Tech Startups",
  description: "Financial consulting solutions for technology startups.",
  url: "https://truthinkconsulting.in/industries/tech-startups",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthinkconsulting.in",
  },
};

const HeroData = {
  title: `Finance that grows as fast as your product.
`,
  description: ` Tech startups move quickly — features change, revenue models evolve, and investors want clarity long before the numbers settle. We help you build a finance backbone that matches this pace. From subscription tracking to runway planning, we make sure your finances stay as agile as your product roadmap.
`,
  bigImage: {
    src: `https://images.pexels.com/photos/914931/pexels-photo-914931.jpeg`,
    alt: `Tech Big Image`,
  },
  smallImage: {
    src: `https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg`,
    alt: `Tech Small Image`,
  },
  wideImage: {
    src: `https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg`,
    alt: `Tech Wide Image`,
  },
};


const IndustriesData = [
  {
    title: "Saas & Subscription Accounting",
    description: `Get clean MRR, ARR, churn, and cohort numbers without spending hours in spreadsheets. We set up subscription accounting that actually matches how your product works.
`,
  },
  {
    title: "Finance Stack Setup",
    description: `From billing systems to dashboards, we integrate the right tools so your numbers flow automatically — not manually every month.`,
  },
  {
    title: "FP&A & Runway Planning",
    description: `Understand your burn, runway, hiring capacity, and growth pace with clear monthly forecasts you can actually use.
`,
  },
  {
    title: "Investor-Ready Models & Valuation",
    description: `No fluff — just a sharp, simple model that tells your business story and supports your next fundraise.
`,
  },
];


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
  title: `Why tech startups need specialized accounting and finance services?
`,
  description: `Tech startups don’t grow in a straight line — they scale in spikes, pivots, and rapid experiments. That’s why traditional accounting simply doesn’t fit their reality. SaaS metrics, recurring revenue models, deferred revenue, burn rate, customer acquisition costs, and fundraising cycles all require a finance partner who understands how tech companies actually operate.`,
  description2: `Specialized startup accounting ensures your numbers reflect the real health of your tech business — not just compliance. It helps you track investor-focused metrics like MRR, ARR, CAC, LTV, and churn, maintain cash-flow clarity in fast-growth, high-burn environments, recognize revenue accurately in subscription or usage-based models, plan fundraising with solid data instead of guesswork, and avoid costly mistakes across tax, compliance, and financial operations.
`,
  src: `https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg`,
};

export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <IndustriesHero info={HeroData}/>
      <IndustriesSpecial info={specialData}/>
      <SubIndustries industries={IndustriesData} heading="Our Services"/>
      <IndustriesPreferUs/>
      <IndustriesOffer heading="Do you run any Tech Startup"/>
      <IndustriesFaq info={faqs}/>

      {/* <h1 className="py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl ">
        Our Tech startup page is currently under construction. We will be live
        soon{" "}
      </h1> */}
    </div>
  );
}
