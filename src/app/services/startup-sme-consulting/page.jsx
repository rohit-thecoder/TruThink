import JsonLd from '@/components/JsonLd';
import Service1 from '@/components/Services/Service1';
import Service2 from '@/components/Services/Service2';
import Service3 from '@/components/Services/Service3';
import Service4 from '@/components/Services/Service4';
import Service5 from '@/components/Services/Service5';
import Service6 from '@/components/Services/service6';
import Service7 from '@/components/Services/Service7';
import ServiceComparision from '@/components/Services/ServiceComparision';
import ServiceFaqs from '@/components/Services/ServiceFaqs';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

export const metadata = {
  title: "Startup & SME Consulting Services – Truthink",
  description:
    "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://truthinkconsulting.in/services/startup-sme-consulting",
  },

  openGraph: {
    title: "Startup & SME Consulting Services – Truthink",
    description:
      "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
    url: "https://truthinkconsulting.in/services/startup-sme-consulting",
    siteName: "Truthink",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup & SME Consulting Services – Truthink",
    description:
      "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Startup & SME Consulting",
  description:
    "Expert consulting for startups & SMEs in financial planning, strategy & compliance.",
    url: "https://truthinkconsulting.in/services/startup-sme-consulting",
  provider: {
    "@type": "Organization",
    name: "Truthink",
    url: "https://truthinkconsulting.in",
  },
};

const HeroData = {
  title: `Strategic Finance Partner for Ambitious Startups & Growing SMEs`,
  description: `Building a successful business takes more than just a great idea.
            Whether you’re just validating your business model or scaling to new
            markets, our experts help you stay investor-ready, compliant, and
            financially confident every step of the way.`,
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
  "Focus only on bookkeeping",
  "Treated as a cost center",
  "Outdated tools and processes",
];

const truThinkPoints = [
  "Value-based Pricing",
  "Fast and seamless data onboarding",
  "Deliver insights that drive decisions",
  "Act as a direct growth partner",
  "Modern, automated finance stack",
];

const faqs = [
  {
    question: "How is Truthink different from a regular accounting firm?",
    answer:
      " Most firms just record numbers — we turn them into insights. Our team acts like your extended finance arm, helping you make smarter business decisions, not just stay compliant.",
  },
  {
    question: "I’ve just started up. Is it too early to work with Truthink?",
    answer:
      "Not at all. In fact, that’s when we add the most value. We help you set up your company, basic systems, and finance stack right from day one so you don’t have to redo things later.",
  },
  {
    question: "Do you offer Virtual CFO services for startups and SMEs?",
    answer:
      " Yes, that’s one of our core offerings. We act as your Virtual CFO — managing finances, investor reporting, and strategic planning — so you get senior-level financial expertise without hiring full-time.",
  },
  {
    question: "How fast can you onboard a new client?",
    answer:
      "We move quickly — our data transition and setup process usually takes a few days, not weeks. You’ll start seeing clean reports and insights almost immediately.",
  },

];


export default function page() {

  
  return (
    <div>
      <JsonLd data={jsonLd} />

      <Service1/>
      <Service2/>
      <Service3/>
      <Service4/>
      <Service5/>
      <Service6/>
      <Service7/>

      <ServiceKaHero info={HeroData} />
      <SubServices
        services={servicesData}
        heading="Our Startup & SME Consulting Services"
      />
      <ServiceComparision
        leftPoints={otherFirmPoints}
        rightPoints={truThinkPoints}
      />
      <ServiceFaqs info ={faqs}/>
    </div>
  );
}
