"use client"; 
import React, { useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your components
import About1 from '@/components/About/About1';
import About4 from '@/components/About/About4';
import About5 from '@/components/About/About5';
import Founders from '@/components/About/Founders';
import JsonLd from '@/components/JsonLd';

export default function AboutContent({ jsonLdData }) {
  // Hydration mismatch rokne ke liye
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
    gsap.registerPlugin(ScrollTrigger);

    // --- MAIN FIX FOR VERCEL ---
    // Hum multiple baar refresh call karenge taaki agar image late load ho, 
    // tab bhi animation update ho jaye.
    
    const refreshAll = () => ScrollTrigger.refresh();

    // 1. Turant refresh
    refreshAll();

    // 2. Window load hone par refresh (sabse important)
    window.addEventListener("load", refreshAll);

    // 3. Backup timers (1 sec aur 3 sec baad) - Slow internet ke liye
    const t1 = setTimeout(refreshAll, 1000);
    const t2 = setTimeout(refreshAll, 3000);

    return () => {
      window.removeEventListener("load", refreshAll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!isMounted) return null;

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