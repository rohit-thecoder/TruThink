import CardEffect from '@/components/CardEffect';
import CardStack from '@/components/CardStack';
import CoursesGrid from '@/components/CoursesGrid';
import HoverCarousel from '@/components/HoverCarousel';
import MagicTiles from '@/components/Magic';
import ScrollingCards from '@/components/ScrollingCards';
import React from 'react'

export default function page() {
  return (
    <div>
      <section className="bg-[var(--color-secondary)]">
        <CardEffect/>
        <CardStack/>
        <CoursesGrid/>
        <HoverCarousel/>
        <MagicTiles/>
        <ScrollingCards/>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-12 px-6 gap-6 font-sans">
          {/*Left Side */}
          <div className="w-full md:w-7/12  mt-20">
            <h2 className="text-white text-xl md:text-3xl font-bold mb-5">
              WELCOME TO TRUTHINK
            </h2>
            <div className="text-white text-3xl md:text-7xl font-medium ">
              <span>Simplifying Finance,</span>
              <br />
              <span className="mt-4 inline-block">
                <span className="bg-[#ec3750] inline-block rotate-358 rounded-xl p-1 ">
                  Amplifying
                </span>
                Success!!
              </span>
            </div>
            <p></p>
          </div>
        </div>
      </section>
    </div>
  );
}
