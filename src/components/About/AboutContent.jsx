"use client"; // Sabse upar ye zaroori hai
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Tumhare components import karo
import About1 from '@/components/About/About1';
import About4 from '@/components/About/About4';
import About5 from '@/components/About/About5';
import Founders from '@/components/About/Founders';
import JsonLd from '@/components/JsonLd';

export default function AboutContent({ jsonLdData }) {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // FIX: Page load hone ke baad ScrollTrigger ko refresh karo
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    // Multiple safety checks for production loading speeds
    window.addEventListener("load", handleRefresh);
    const timer1 = setTimeout(() => ScrollTrigger.refresh(), 1000);
    const timer2 = setTimeout(() => ScrollTrigger.refresh(), 3000);

    return () => {
      window.removeEventListener("load", handleRefresh);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <JsonLd data={jsonLdData} />
      
      {/* Components */}
      {/* <About1 /> */}
      <About4 />
      <Founders />
      <About5 />
    </div>
  );
}