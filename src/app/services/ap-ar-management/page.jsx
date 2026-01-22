import JsonLd from '@/components/JsonLd';
import Service4 from '@/components/Services/Service4';
import Service5 from '@/components/Services/Service5';
import Service6 from '@/components/Services/Service6';
import ServiceFaqs1 from '@/components/Services/ServiceFaqs1';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export const metadata = {
  title: "Accounts Payable & Receivable Outsourcing | Truthink",
  description:
    "Simplify AP & AR management for better cash flow and financial control.",
  keywords:
    "accounts payable outsourcing, accounts receivable management, startup accounting services, AR automation, cash flow consulting",
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
  src: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg",
};

const servicesData = [
  {
    title: "Launch and Build",
    description: `Starting up is messy — we help you build the company, bit by bit. From setting up the right team and basic processes to handling the essential registration and compliance tasks, we take care of the little but important things. So you can focus on product and customers while the company runs smoothly behind the scenes.
`,
  },
  {
    title: "Finance Stack Consulting",
    description: `Our finance tools should talk to each other, not create chaos. We help you pick and set up the right tech stack — accounting, billing, payroll, dashboards — all integrated and startup-ready. Get clean, automated numbers every month without manual struggle.`,
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

const features = [
  { name: "Value-based Pricing", active: true },
  { name: "Fast and seamless data onboarding", active: false },
  { name: "Proactive AR tracking and reporting", active: false },
  { name: "Real-time dashboards and reconciliations", active: false },
  { name: "Tailored processes that match your systems and culture", active: false },
];


const faqs = [
  {
    question: " What kind of companies use your AP & AR services?",
    answer:
      "We work with startups, SMEs, and global firms looking to outsource their finance back-office. Whether you’re scaling fast or optimizing costs, our team adapts to your needs.",
  },
  {
    question: "How does outsourcing AP & AR actually work?",
    answer:
      "We integrate with your existing tools or in case there is no existing tool, we will implement a new AP tool for you. Our team handles daily transactions — mailbox management, invoices accounting, vendor management — while you get regular reports and visibility into every number.",
  },
  {
    question: "Can you handle global clients and multiple currencies?",
    answer:
      " Yes. We manage clients across countries and currencies, ensuring compliance with local tax and reporting requirements.",
  },
  {
    question: "How fast can you onboard and start?",
    answer:
      "Usually within a week. We set up your processes, migrate data securely, and begin operations without interrupting your ongoing work.",
  },
  {
    question: "Is bookkeeping part of the package?",
    answer:
      "It can be. Many clients bundle bookkeeping with AP & AR outsourcing for a complete, streamlined finance back-office.",
  },
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
