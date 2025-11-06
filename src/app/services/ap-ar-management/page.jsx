import JsonLd from '@/components/JsonLd';
import ServiceComparision from '@/components/Services/ServiceComparision';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export const metadata = {
  title: "Accounts Payable & Receivable Management – Truthink",
  description:
    "Efficient AP & AR management solutions for startups & SMEs to optimize cash flow.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/services/ap-ar-management",
  },
  openGraph: {
    title: "Accounts Payable & Receivable Management – Truthink",
    description: "Efficient AP & AR management solutions for startups & SMEs.",
    url: "https://truthinkconsulting.in/services/ap-ar-management",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounts Payable & Receivable Management – Truthink",
    description: "Efficient AP & AR management solutions for startups & SMEs.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Accounts Payable & Receivable Management",
  description: "Efficient AP & AR management solutions for startups & SMEs.",
  url: "https://truthinkconsulting.in/services/ap-ar-management",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthinkconsulting.in",
  },
};

const HeroData = {
  title: `Your Finance Team Deserves to Breathe — We’ll Handle the Rest
`,
  description: ` Chasing invoices, clearing payments, managing ledgers — it can get messy. We take charge of your AP & AR functions, making sure your books stay clean, your vendors happy, and your cash flowing — without the chaos.
`,
  src: "https://images.pexels.com/photos/34358325/pexels-photo-34358325.jpeg",
};

const servicesData = [
  {
    title: "Launch and Build",
    description: `Starting up is messy — we help you build the company, bit by bit. From setting up the right team and basic processes to handling the essential registration and compliance tasks, we take care of the little but important things. So you can focus on product and customers while the company runs smoothly behind the scenes.
`,
  },
  {
    title: "Finance Stack Consulting",
    description: `our finance tools should talk to each other, not create chaos. We help you pick and set up the right tech stack — accounting, billing, payroll, dashboards — all integrated and startup-ready. Get clean, automated numbers every month without manual struggle.`,
  },
  {
    title: "Fractional CFO",
    description: `You don’t need a full-time CFO yet — but you do need strategic finance direction. We step in part-time to help you plan runway, manage cash, and prepare for investors. It’s like having a finance co-founder who’s got your back on every big decision.
`,
  },
];

const otherFirmPoints = [
  "Effort-based Pricing",
  "Slow, manual data transition",
  "Reactive collection follow-ups",
  "Limited visibility into numbers",
  "Generic bookkeeping",
];

const truThinkPoints = [
  "Value-based Pricing.",
  "Fast and seamless data onboarding",
  "Proactive AR tracking and reporting",
  "Real-time dashboards and reconciliations",
  "Tailored processes that match your systems and culture",
];


export default function page() {
  return (
    <div>
      <JsonLd data={jsonLd} />

      <ServiceKaHero info={HeroData} />
      <SubServices
        services={servicesData}
        heading="Our Startup & SME Consulting Services"
      />
      <ServiceComparision
        leftPoints={otherFirmPoints}
        rightPoints={truThinkPoints}
      />
    </div>
  );
}
