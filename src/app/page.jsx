import Hero from '@/components/Home/Hero';
import HomeSlider from '@/components/Home/HomeSlider';
import HoverCarousel from '@/components/HoverCarousel';
import MagicTiles from '@/components/Magic';
import ScrollingCards from '@/components/ScrollingCards';
import ServiceComparision from '@/components/Services/ServiceComparision';
import ServiceKaHero from '@/components/Services/ServiceKaHero';
import SubServices from '@/components/Services/SubServices';
import React from 'react'

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





export default function page() {
  return (
    <div>
      {/* <HomeSlider/> */}
      {/* <Hero/> */}
      <ServiceKaHero />
      <SubServices services={servicesData} />
      <ServiceComparision />
    </div>
  );
}
