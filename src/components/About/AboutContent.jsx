"use client"; // Ye line sabse zaroori hai
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Tumhare sare components yahan import karo
import About1 from '@/components/About/About1';
import About4 from '@/components/About/About4';
import About5 from '@/components/About/About5';
import Founders from '@/components/About/Founders';
import JsonLd from '@/components/JsonLd';

export default function AboutContent({ jsonLdData }) {
  
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // --- MAGIC FIX FOR VERCEL ---
    // Page load hone ke baad thoda ruk kar refresh maaro
    const timer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 1000); // 1 second delay to allow layout to settle

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden"> {/* Horizontal scroll rokne ke liye */}
      <JsonLd data={jsonLdData} />
      
      {/* NOTE: About1 ke andar Image tag mein 
         onLoadingComplete={() => ScrollTrigger.refresh()} 
         zaroor laga hona chahiye (Jo maine pehle bataya tha)
      */}
      <About1 />
      <About4 />
      <Founders />
      <About5 />
    </div>
  );
}