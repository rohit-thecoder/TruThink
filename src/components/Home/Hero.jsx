import React from 'react'
import CardEffect from '../CardEffect'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-around h-auto bg-white  gap-10  px-[clamp(1rem,5vw,5rem)] py-[clamp(2rem,10vw,5rem)] mt-[clamp(1.5rem,10vw,5rem)]">
      <div className="flex flex-row justify-center items-center color-secondary-bg px-2 py-4 pr-4 h-10 rounded-xl md:rounded-3xl gap-4">
        <div className="flex flex-row justify-center items-center bg-white py-2 px-2 rounded-2xl gap-2">
          {/* Concentratic circle */}
          <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-blue-200"></div>
          <h3 className="text-xs font-bold">COINEST</h3>
        </div>
        <h3 className="text-sm font-bold">Smarter Money Management</h3>
      </div>

      <h1 className="text-7xl font-medium text-center text-color mx-[10%]">
        The #1 Firm Startups Rely on for Accounting, CFO and Tax
      </h1>

      <p className="mx-[25%] text-center text-color">
        Clean Books. Strategic Guidance. Industry Specific Expertise. Born out
        of a VC fund, we are the startup accounting firm most founders &
        operators rely on for quality bookkeeping, fractional CFO & tax.
      </p>

      <button className="color-secondary-bg py-4 px-12 rounded-full font-bold">
        Get Started
      </button>

      <div className="mx-[10%] box-border border-x-16 border-t-16 w-[80%] h-130 rounded-t-2xl bg-border"></div>
    </div>
  );
}
