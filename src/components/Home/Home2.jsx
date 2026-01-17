"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home2() {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Set (Hidden State)
      gsap.set(".hero-element", { y: 40, opacity: 0 });
      gsap.set(videoContainerRef.current, {
        rotateX: 20, // Tilted forward
        y: 80,
        opacity: 0,
        scale: 0.9,
        transformPerspective: 1200,
        transformOrigin: "center top"
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 2. Text Reveal Sequence
      tl.to(".hero-element", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      });

      // 3. Video "Rise & Tilt" Animation (Cinematic Effect)
      tl.to(
        videoContainerRef.current,
        {
          rotateX: 0, // Straighten up
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "expo.out",
        },
        "-=0.8" // Start slightly before text finishes
      );

      // Force Video Play (Reliability Check)
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
            console.log("Auto-play prevented by browser:", error);
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden pt-36 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Technical Grid */}
      <div className="absolute inset-0 -z-20 pointer-events-none h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_80%)]"></div>

      {/* 2. Premium Finance Icons Layer (Closer & Higher Opacity) */}
      <div className="absolute inset-0 -z-15 pointer-events-none overflow-hidden select-none">
        
        {/* ========= LEFT SIDE ICONS ========= */}
        <svg className="absolute top-[8%] left-[12%] w-28 h-28 text-[#0066cc] opacity-[0.10] rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
        </svg>

        <svg className="absolute top-[28%] left-[15%] w-20 h-20 text-gray-500 opacity-[0.12] -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>

        <svg className="absolute top-[45%] left-[8%] w-32 h-32 text-[#F99321] opacity-[0.08] rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>

        <svg className="absolute bottom-[30%] left-[14%] w-24 h-24 text-gray-400 opacity-[0.10] -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>

        <svg className="absolute bottom-[10%] left-[10%] w-36 h-36 text-[#0066cc] opacity-[0.08] rotate-[15deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>


        {/* ========= RIGHT SIDE ICONS ========= */}
        <svg className="absolute top-[10%] right-[12%] w-28 h-28 text-[#F99321] opacity-[0.10] -rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>

        <svg className="absolute top-[32%] right-[14%] w-24 h-24 text-gray-500 opacity-[0.12] rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
        </svg>

        <svg className="absolute top-[52%] right-[8%] w-32 h-32 text-[#0066cc] opacity-[0.09] -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>

        <svg className="absolute bottom-[25%] right-[15%] w-24 h-24 text-gray-400 opacity-[0.10] rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.25L4.25 20.75" />
            <circle cx="16.5" cy="16.5" r="2.5" />
            <circle cx="7.5" cy="7.5" r="2.5" />
        </svg>

        <svg className="absolute bottom-[8%] right-[10%] w-36 h-36 text-[#F99321] opacity-[0.08] -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18v18H3V3z" />
        </svg>

      </div>

      {/* 3. Premium Brand Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#8EC5FF]/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#F99321]/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>


      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* --- HERO TEXT CONTENT --- */}
        <div className="max-w-4xl mx-auto mb-16">
          
          {/* 1. Badge / Tag */}
          <div className="hero-element flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white border border-[#8EC5FF]/30 rounded-full py-1.5 px-1.5 pr-4 shadow-sm hover:shadow-md transition-all cursor-default">
              <span className="bg-[#0066cc] text-white text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide flex items-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
                NEW
              </span>
              <span className="text-gray-600 text-sm font-medium tracking-wide">
                Smarter Money Management
              </span>
            </div>
          </div>

          {/* 2. Main Heading */}
          <h1 className="hero-element text-[42px] sm:text-6xl md:text-[80px] leading-[1.1] font-extrabold text-[#0f172a] tracking-tight mb-8">
            Simplify Finance, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99321] to-[#d97706]">
              Amplify Success.
            </span>
          </h1>

          {/* 3. ULTRA-PREMIUM TRUST WIDGET (REPLACED SECTION) */}
          <div className="hero-element w-full max-w-4xl mx-auto mb-14">
             <div className="relative bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-3xl p-2 sm:p-2.5 ring-1 ring-white/80 isolate overflow-hidden">
                
                {/* Subtle sheen background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent -z-10"></div>

                <div className="flex flex-col sm:flex-row items-stretch justify-between gap-2 sm:gap-0">
                   
                   {/* Feature 1: CFO Advisory */}
                   <div className="flex-1 group relative rounded-2xl p-4 transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:shadow-blue-900/5 cursor-default border border-transparent hover:border-blue-100/50">
                      <div className="flex items-center gap-4">
                         {/* Gradient Icon Box */}
                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-sm flex items-center justify-center text-[#0066cc] group-hover:scale-105 group-hover:shadow-md group-hover:shadow-blue-200/50 transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                         </div>
                         <div className="text-left">
                            <h3 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-[#0066cc] transition-colors">CFO Advisory</h3>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">Data-driven growth strategy</p>
                         </div>
                      </div>
                   </div>

                   {/* Custom Divider 1 (Desktop) */}
                   <div className="hidden sm:block w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-1 self-stretch opacity-60"></div>
                   {/* Divider Mobile */}
                   <div className="block sm:hidden h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-1 w-full opacity-60"></div>

                   {/* Feature 2: Tax Compliance */}
                   <div className="flex-1 group relative rounded-2xl p-4 transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:shadow-orange-900/5 cursor-default border border-transparent hover:border-orange-100/50">
                      <div className="flex items-center gap-4">
                         {/* Gradient Icon Box */}
                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 shadow-sm flex items-center justify-center text-[#F99321] group-hover:scale-105 group-hover:shadow-md group-hover:shadow-orange-200/50 transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                         </div>
                         <div className="text-left">
                            <h3 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-[#F99321] transition-colors">Tax Compliance</h3>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">Audit-proof filings</p>
                         </div>
                      </div>
                   </div>

                   {/* Custom Divider 2 */}
                   <div className="hidden sm:block w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent mx-1 self-stretch opacity-60"></div>
                   <div className="block sm:hidden h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent my-1 w-full opacity-60"></div>

                   {/* Feature 3: Bookkeeping */}
                   <div className="flex-1 group relative rounded-2xl p-4 transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:shadow-gray-900/5 cursor-default border border-transparent hover:border-gray-200/50">
                      <div className="flex items-center gap-4">
                         {/* Gradient Icon Box */}
                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-gray-200/50 transition-all duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                         </div>
                         <div className="text-left">
                            <h3 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-gray-900 transition-colors">Bookkeeping</h3>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time accuracy</p>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          </div>

          {/* 4. CTA Button */}
          <div className="hero-element">
            <button className="group relative px-10 py-4 bg-[#1f1f1f] text-white rounded-full text-lg font-semibold shadow-xl shadow-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
              </span>
              {/* Hover Gradient Slide */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F99321] to-[#d97706] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </div>
        </div>

        {/* --- VIDEO DASHBOARD CONTAINER --- */}
        <div className="w-full relative perspective-1000 px-2 md:px-0">
          <div
            ref={videoContainerRef}
            className="relative w-full max-w-6xl mx-auto rounded-xl md:rounded-2xl border-[4px] md:border-[8px] border-white bg-white shadow-2xl shadow-[#003B70]/10 overflow-hidden z-20"
          >
            {/* 1. Browser Window Header */}
            <div className="h-8 md:h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
              {/* Mock URL */}
              <div className="ml-4 flex-1 h-5 md:h-6 bg-white border border-gray-200 rounded-md flex items-center px-3 text-[10px] md:text-xs text-gray-400 font-mono">
                truthink.in/dashboard
              </div>
            </div>

            {/* 2. Video Player */}
            <div className="relative aspect-video bg-gray-100">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              >
                <source src="https://videos.pexels.com/video-files/7565439/7565439-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-[#003B70]/5 pointer-events-none"></div>
            </div>
          </div>
          
          {/* 3. Glow Behind Video */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[90%] bg-[#8EC5FF]/20 blur-[80px] -z-10 rounded-full opacity-60"></div>
        </div>

      </div>
    </section>
  );
}