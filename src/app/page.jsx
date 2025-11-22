import Hero from '@/components/Home/Hero';
import Home2 from '@/components/Home/Home2';
import Home3 from '@/components/Home/Home3';
import Home4 from '@/components/Home/Home4';
import Home5 from '@/components/Home/Home5';
import Home6 from '@/components/Home/Home6';
import HomeSlider from '@/components/Home/HomeSlider';
import React from 'react'



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




export default function page() {
  return (
    <div>
      {/* <Service1/> */}
{/* <Home6/> */}
      <Home2/>
      <Home3/>
      <Home4/>
      <Home5/>
      
      {/* <h1 className='py-50 md:py-80 px-5 md:px-100 flex justify-center text-center text-3xl md:text-5xl '>Our homepage is currently under construction. We will be live soon </h1> */}
    </div>
  );
}
