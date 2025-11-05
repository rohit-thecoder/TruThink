import React from 'react'

const ServiceComparision = () => {
  return (
    <section className="bg-white px-[clamp(1rem,5vw,5rem)] py-[clamp(1.5rem,8vw,5rem)]">
      <div className="flex flex-col md:flex-row items-stretch md:divide-x divide-[#1e1e1e] bg-[#D7ECFF] px-[clamp(2rem,6vw,8rem)] py-[clamp(2rem,6vw,4rem)] rounded-4xl gap-10">
        <div className="flex-1 md:p-4 ">
          <h2 className="text-[clamp(2rem,4vw,3rem)]  mb-[clamp(1.5rem,4vw,2rem)]">
            Other Firms
          </h2>
          <ul className="list-disc pl-6 text-[clamp(1rem,2vw,1.3rem)] space-y-1 md:space-y-2">
            <li>Effort-based Pricing</li>
            <li>Slow, manual data transition</li>
            <li>Focus only on bookkeeping</li>
            <li>Treated as a cost center</li>
            <li>Outdated tools and processes</li>
          </ul>
        </div>
        <div className="flex-1 md:p-4  md:pl-[clamp(4rem,4vw,6rem)]">
          <h2 className="text-[clamp(2rem,4vw,3rem)] mb-[clamp(1.5rem,4vw,2rem)]">
            TruThink
          </h2>
          <ul className="list-disc pl-6 text-[clamp(1rem,2vw,1.3rem)] space-y-1 md:space-y-2 ">
            <li>Value-based Pricing</li>
            <li>Fast and seamless data onboarding</li>
            <li>Deliver insights that drive decisions</li>
            <li>Act as a direct growth parthner</li>
            <li>Modern, automated finanace stack</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServiceComparision
