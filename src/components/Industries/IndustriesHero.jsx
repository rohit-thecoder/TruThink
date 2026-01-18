"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import IndustryCta from "../IndustryCta"; 
import { Layers } from "lucide-react";

const IndustriesHero = ({ info }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  // Default title fallback
  const fullTitle = info?.title || "Transforming Industries.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 0. Setup
      if (titleRef.current) titleRef.current.innerText = "";
      
      // 1. Grid & Background Reveal (Fast)
      tl.fromTo(".hero-grid-bg", 
        { opacity: 0 }, 
        { opacity: 1, duration: 1 }
      );

      // 2. Badge Fade In
      tl.fromTo(".hero-badge",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.5"
      );

      // 3. TYPEWRITER EFFECT (4 Seconds duration, but starts logic immediately)
      // Note: We don't block other animations. We use offsets to start them concurrently.
      tl.to({}, {
        duration: 4, 
        ease: "none",
        onUpdate: function() {
          const progress = this.progress();
          const charCount = Math.floor(progress * fullTitle.length);
          if (titleRef.current) {
            titleRef.current.innerText = fullTitle.substring(0, charCount);
          }
        },
      }, "-=0.2"); // Starts almost immediately after badge

      // 4. FASTER RENDER: Images & Text appear *while* typing is happening
      // We use a large negative offset to pull them back to the start of the timeline
      
      // Images Reveal (Start 0.5s after typing starts)
      tl.fromTo(".hero-img-box", 
        { scale: 0.9, opacity: 0, y: 30 }, 
        { scale: 1, opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "expo.out" }, 
        "-=3.5" // Pull back heavily so it renders quickly
      );

      // Description & CTA Reveal (Start shortly after images)
      tl.fromTo(".hero-fade-item", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 
        "-=3.2" 
      );

    }, containerRef);

    return () => ctx.revert();
  }, [fullTitle]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden  px-5 md:px-10 lg:px-20 pt-20 pb-10"
    >
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Technical Grid (High to Low Opacity) */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_80%)]"></div>
      </div>

      {/* 2. Premium Ambient Glows */}
      <div className="hero-grid-bg absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[120px] -z-15 mix-blend-multiply"></div>
      <div className="hero-grid-bg absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-[100px] -z-15 mix-blend-multiply"></div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 h-full">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8 z-10">
          
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full shadow-sm">
             <Layers size={14} className="text-[#F99321]" />
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industry Expertise</span>
          </div>

          {/* H1 Heading with Fixed Cursor Logic */}
          <div className="min-h-[120px] md:min-h-[160px]"> 
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
                {/* Text Span */}
                <span ref={titleRef}></span>
                {/* Cursor Span: Uses inline-block but aligned baseline to stick to last letter */}
                <span className="inline-block w-[3px] h-[0.9em] bg-[#F99321] ml-1 align-baseline animate-pulse"></span>
            </h1>
          </div>

          {/* Description */}
          <p className="hero-fade-item text-lg text-slate-600 leading-relaxed font-medium max-w-lg">
            {info?.description || "We bring specialized consulting strategies to scalable sectors, ensuring your business stays ahead of the curve."}
          </p>

          {/* CTA */}
          <div className="hero-fade-item pt-2">
            <IndustryCta text="Let's Talk" />
          </div>
        </div>


        {/* --- RIGHT: BENTO GRID IMAGES --- */}
        <div className="flex-1 w-full h-auto md:h-[500px] relative">
            
            {/* Grid Layout */}
            <div className="grid grid-cols-2 grid-rows-3 gap-3 md:gap-4 h-full w-full min-h-[350px] sm:min-h-[450px]">
    
    {/* 1. BIG IMAGE (Left Column) */}
    <div className="hero-img-box relative col-span-1 row-span-2 rounded-xl md:rounded-2xl overflow-hidden border-[3px] md:border-[4px] border-white shadow-xl shadow-gray-200 group">
        <Image
            src={info?.bigImage?.src || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"}
            alt={info?.bigImage?.alt || "Industry Focus"}
            fill
            priority
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            // ✅ Responsive: Mobile pe 50% width, Desktop pe 33%
            sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent pointer-events-none"></div>
    </div>

    {/* 2. TOP RIGHT (Small) */}
    <div className="hero-img-box relative col-span-1 row-span-1 rounded-xl md:rounded-2xl overflow-hidden border-[3px] md:border-[4px] border-white shadow-lg group">
        <Image
            src={info?.smallImage?.src || "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"}
            alt={info?.smallImage?.alt || "Detail Shot"}
            fill
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            // ✅ Responsive: Mobile pe 50% width, Desktop pe 33%
            sizes="(max-width: 768px) 50vw, 33vw"
        />
    </div>

    {/* 3. BOTTOM WIDE */}
    <div className="hero-img-box relative col-span-2 row-span-1 rounded-xl md:rounded-2xl overflow-hidden border-[3px] md:border-[4px] border-white shadow-lg group">
        <Image
            src={info?.wideImage?.src || "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"}
            alt={info?.wideImage?.alt || "Wide Shot"}
            fill
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            // ✅ Responsive: Mobile pe 100% width, Desktop pe 50%
            sizes="(max-width: 768px) 100vw, 50vw"
        />
    </div>

</div>
            
            {/* Decorative Dots */}
            <div className="hero-grid-bg absolute -top-5 -right-5 w-24 h-24 bg-[radial-gradient(#2271B8_2px,transparent_2px)] [background-size:12px_12px] opacity-30 -z-10"></div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesHero;