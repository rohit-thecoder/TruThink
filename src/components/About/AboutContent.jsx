"use client";
import React from 'react';

// Import your components
import About1 from '@/components/About/About1';
import About4 from '@/components/About/About4';
import About5 from '@/components/About/About5';
import Founders from '@/components/About/Founders';
import JsonLd from '@/components/JsonLd';

export default function AboutContent({ jsonLdData }) {
  // GSAP aur ScrollTrigger logic ki ab zarurat nahi hai.
  // Framer Motion automatically layout shifts handle karta hai.
  
  return (
    <div className="overflow-hidden w-full relative bg-white">
      <JsonLd data={jsonLdData} />

      <About1 />
      
      {/* Wrapper to ensure stacking context */}
      <div className="relative z-10">
        <About4 />
        <Founders />
        <About5 />
      </div>
    </div>
  );
}