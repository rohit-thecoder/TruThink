"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Banknote, TrendingUp, Activity, Calculator, 
  RotateCcw, Info, CheckCircle2, DollarSign 
} from "lucide-react";

// Register Plugin
gsap.registerPlugin(ScrollTrigger);

export default function ValuationCalculator() {
  const containerRef = useRef(null);
  const valuationTextRef = useRef(null);

  // --- STATE ---
  const [revenue, setRevenue] = useState("");
  const [growth, setGrowth] = useState("");
  const [multiplier, setMultiplier] = useState(5); 
  const [valuation, setValuation] = useState(0);

  // --- ANIMATIONS ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Reveal
      gsap.fromTo(".val-header > *", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // 2. Main Card Reveal (Scale Up)
      gsap.fromTo(".calculator-wrapper", 
        { y: 60, opacity: 0, scale: 0.95 }, 
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          delay: 0.3, 
          ease: "power4.out" 
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // --- LOGIC & NUMBER ANIMATION ---
  useEffect(() => {
    const rev = parseFloat(revenue.toString().replace(/,/g, "")) || 0;
    const mult = parseFloat(multiplier.toString()) || 0;
    const growthRate = parseFloat(growth.toString()) || 0;
    
    // Formula: Revenue * Multiplier (adjusted slightly by growth for visual feedback)
    // We add a small bonus for high growth: (Growth / 100) * Revenue * 0.5
    const growthFactor = growthRate > 0 ? (rev * (growthRate / 100)) * 0.5 : 0;
    
    const calculatedVal = (rev * mult) + growthFactor;

    // Animate the Number
    gsap.to({ val: valuation }, {
      val: calculatedVal,
      duration: 0.8,
      ease: "power2.out",
      onUpdate: function () {
        if (valuationTextRef.current) {
          setValuation(this.targets()[0].val);
        }
      },
    });
  }, [revenue, multiplier, growth]); 

  // Format Currency (Indian Lakhs/Crores style)
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0 
    }).format(val);
  };

  // Format Large Numbers (e.g. 1.2 Cr)
  const formatCompact = (val) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
    return formatCurrency(val);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen py-34 px-4 md:px-12 lg:px-20 overflow-hidden font-sans text-gray-800 flex flex-col justify-center">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="fixed inset-0 bg-white -z-20"></div>
      
      {/* 1. Grid Pattern (High Opacity Top -> Fade Bottom) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_80%)]"></div>

      {/* 2. Premium Glowing Orbs */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#8EC5FF]/20 blur-[120px] mix-blend-multiply -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#F99321]/15 blur-[120px] mix-blend-multiply -z-10"></div>


      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center val-header mb-12">
           <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 border border-[#8EC5FF]/30 text-[#0066cc] text-xs font-bold tracking-[0.15em] uppercase mb-6 shadow-sm backdrop-blur-md">
              <Calculator size={14} strokeWidth={2.5} /> Valuation Tool
           </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
            Know Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99321] to-[#d97706]">Worth</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Instantly estimate your startup's valuation using industry-standard revenue multiples.
          </p>
        </div>

        {/* --- CALCULATOR WRAPPER --- */}
        <div className="calculator-wrapper bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden relative">
            
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#F99321] via-[#8EC5FF] to-[#F99321]"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
                
                {/* --- LEFT PANEL: CONTROLS --- */}
                <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 bg-white/60 backdrop-blur-md flex flex-col justify-center">
                    
                    <div className="space-y-10">
                        {/* 1. Annual Revenue Input */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                <Banknote size={18} className="text-[#F99321]" /> Annual Revenue (ARR)
                            </label>
                            <div className="relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#F99321] transition-colors">
                                    <span className="text-lg font-bold">₹</span>
                                </div>
                                <input
                                    type="number"
                                    placeholder="e.g. 1,00,00,000"
                                    value={revenue}
                                    onChange={(e) => setRevenue(e.target.value)}
                                    className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl pl-12 pr-6 py-5 text-2xl font-bold text-gray-900 focus:outline-none focus:bg-white focus:border-[#F99321] focus:ring-4 focus:ring-[#F99321]/10 transition-all placeholder:text-gray-300 placeholder:font-normal shadow-sm"
                                />
                            </div>
                        </div>

                        {/* 2. Growth Rate Input */}
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                <TrendingUp size={18} className="text-[#8EC5FF]" /> YoY Growth Rate
                            </label>
                            <div className="relative group">
                                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8EC5FF] transition-colors">
                                    <Activity size={20} />
                                </div>
                                <input
                                    type="number"
                                    placeholder="e.g. 20"
                                    value={growth}
                                    onChange={(e) => setGrowth(e.target.value)}
                                    className="w-full bg-gray-50/80 border border-gray-200 rounded-2xl pl-12 pr-12 py-5 text-2xl font-bold text-gray-900 focus:outline-none focus:bg-white focus:border-[#8EC5FF] focus:ring-4 focus:ring-[#8EC5FF]/10 transition-all placeholder:text-gray-300 placeholder:font-normal shadow-sm"
                                />
                                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">%</span>
                            </div>
                        </div>

                        {/* 3. Custom Multiplier Slider */}
                        <div className="space-y-6 pt-4">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                                    Multiplier
                                    <span className="group relative">
                                        <Info size={14} className="text-gray-400 cursor-help" />
                                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-gray-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Based on industry standards (SaaS ~5-10x, Service ~1-3x)</span>
                                    </span>
                                </label>
                                <div className="text-3xl font-extrabold text-[#d97706] bg-[#F99321]/10 px-4 py-1 rounded-xl">
                                    {multiplier}x
                                </div>
                            </div>
                            
                            <div className="relative h-4 w-full rounded-full bg-gray-100 shadow-inner">
                                {/* Colored Track */}
                                <div 
                                    className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#F99321] to-[#d97706]"
                                    style={{ width: `${(multiplier / 20) * 100}%` }}
                                ></div>
                                {/* The Actual Range Input (Invisible but interactive) */}
                                <input 
                                    type="range" 
                                    min="1" 
                                    max="20" 
                                    step="0.5"
                                    value={multiplier}
                                    onChange={(e) => setMultiplier(e.target.value)}
                                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-20"
                                />
                                {/* Thumb Visual (Optional, usually default thumb is hidden by opacity 0, but functionality remains) */}
                                <div 
                                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-4 border-[#F99321] rounded-full shadow-lg pointer-events-none transition-all z-10"
                                    style={{ left: `calc(${(multiplier / 20) * 100}% - 16px)` }}
                                ></div>
                            </div>
                            
                            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                                <span>Conservative</span>
                                <span>High Growth</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT PANEL: DASHBOARD (Dark Theme) --- */}
                <div className="lg:col-span-5 bg-[#111827] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    
                    {/* Noise Texture for Premium Feel */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"></div>
                    
                    {/* Glows */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#F99321]/20 rounded-full blur-[80px] -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8EC5FF]/10 rounded-full blur-[80px] -ml-10 -mb-10"></div>

                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-[0.15em]">Estimated Value</h3>
                            <button 
                                onClick={() => {setRevenue(""); setGrowth(""); setMultiplier(5);}}
                                className="cursor-pointer group flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors"
                            >
                                <RotateCcw size={14} className="group-hover:-rotate-180 transition-transform duration-500" /> RESET
                            </button>
                        </div>

                        {/* BIG NUMBER */}
                        <div className="mb-2">
                            <p className="text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-none">
                                <span ref={valuationTextRef}>
                                    {formatCurrency(valuation)}
                                </span>
                            </p>
                        </div>
                        <p className="text-sm text-green-400 font-medium flex items-center gap-2 mb-10">
                            <CheckCircle2 size={14} /> Calculation Complete
                        </p>

                        {/* Breakdown Box */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Calculation Breakdown</p>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-300">Revenue Base</span>
                                    <span className="font-bold text-white">{formatCompact(revenue || 0)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-300">Multiplier Effect</span>
                                    <span className="font-bold text-[#F99321]">x {multiplier}</span>
                                </div>
                                {growth > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-300">Growth Premium</span>
                                        <span className="font-bold text-green-400">+{growth}% Boost</span>
                                    </div>
                                )}
                                <div className="h-px bg-white/10 my-2"></div>
                                <div className="flex justify-between items-center text-base font-bold">
                                    <span className="text-white">Total</span>
                                    <span className="text-white">{formatCompact(valuation)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-8">
                        <div className="flex gap-3 items-start p-4 bg-[#F99321]/10 rounded-xl border border-[#F99321]/20">
                            <Info size={18} className="text-[#F99321] mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-gray-300 leading-relaxed">
                                <span className="text-white font-bold">Disclaimer:</span> This tool provides a rough estimate based on revenue multiples. Actual valuation depends on profitability, market size, IP, and team quality.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
}