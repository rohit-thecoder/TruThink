"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Calculator, RotateCcw, Info, 
  IndianRupee, PieChart, ArrowRight, TrendingUp, Sparkles, AlertCircle 
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ValuationCalculator() {
  const containerRef = useRef(null);
  const resultRef = useRef(null);
  
  // --- STATE ---
  const [investment, setInvestment] = useState("");
  const [equity, setEquity] = useState("");
  
  // Display States (for smooth number animation)
  const [displayPre, setDisplayPre] = useState(0);
  const [displayPost, setDisplayPost] = useState(0);
  
  const [isCalculated, setIsCalculated] = useState(false);
  const [error, setError] = useState("");

  // --- ANIMATIONS ON LOAD ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header & Text Stagger
      gsap.fromTo(".val-item", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

      // 2. Calculator Card Scale Up
      gsap.fromTo(".calc-card", 
        { y: 50, opacity: 0, scale: 0.98 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out", delay: 0.2 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // --- LOGIC HANDLERS ---

  const handleInvestmentChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setInvestment(val);
    if(error) setError("");
  };

  const handleEquityChange = (e) => {
    let val = e.target.value.replace(/[^0-9.]/g, ''); 
    if ((val.match(/\./g) || []).length > 1) return; 
    setEquity(val);
    if(error) setError("");
  };

  const handleCalculate = () => {
    const invAmount = parseFloat(investment);
    const eqPercent = parseFloat(equity);

    // GSAP Shake Animation for Errors
    if (!invAmount || invAmount < 1) {
       setError("Please enter a valid investment amount.");
       gsap.to(".input-group-inv", { x: [-5, 5, -5, 5, 0], duration: 0.4, ease: "power2.inOut" });
       return;
    }
    if (!eqPercent || eqPercent <= 0 || eqPercent >= 100) {
       setError("Equity must be between 0.01% and 99.99%.");
       gsap.to(".input-group-eq", { x: [-5, 5, -5, 5, 0], duration: 0.4, ease: "power2.inOut" });
       return;
    }

    // Mathematical Logic
    const postVal = invAmount / (eqPercent / 100);
    const preVal = postVal - invAmount;

    // --- ANIMATE RESULTS (The Premium Feel) ---
    const counter = { pre: displayPre, post: displayPost };
    
    gsap.to(counter, {
        pre: preVal,
        post: postVal,
        duration: 1.5,
        ease: "expo.out",
        onUpdate: () => {
            // Update state with current animated value
            setDisplayPre(Math.round(counter.pre));
            setDisplayPost(Math.round(counter.post));
        }
    });

    // Animate The Visual Bar
    const percentInv = (invAmount / postVal) * 100;
    gsap.to(".bar-inv", { width: `${percentInv}%`, duration: 1.2, ease: "expo.out" });
    gsap.to(".bar-pre", { width: `${100 - percentInv}%`, duration: 1.2, ease: "expo.out" });

    setIsCalculated(true);
    setError("");
  };

  const handleReset = () => {
    // Fade out values
    gsap.to(".result-content", { opacity: 0, duration: 0.2, onComplete: () => {
        setInvestment("");
        setEquity("");
        setDisplayPre(0);
        setDisplayPost(0);
        setIsCalculated(false);
        setError("");
        gsap.to(".result-content", { opacity: 1, duration: 0.3 });
    }});
    
    // Reset Bar
    gsap.to(".bar-inv", { width: "0%", duration: 0.5 });
    gsap.to(".bar-pre", { width: "0%", duration: 0.5 });
  };

  // Currency Formatter
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      maximumFractionDigits: 0 
    }).format(val);
  };

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 md:py-36 px-4 md:px-8 overflow-hidden font-sans flex flex-col justify-center ">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      
      {/* 1. Technical Grid (High to Low Opacity Mask) */}
      <div className="absolute inset-0 pointer-events-none -z-20">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b12_1px,transparent_1px),linear-gradient(to_bottom,#64748b12_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_80%)]"></div>
      </div>

      {/* 2. Premium Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#8EC5FF]/20 rounded-full blur-[120px] mix-blend-multiply -z-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#F99321]/15 rounded-full blur-[120px] mix-blend-multiply -z-10"></div>


      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* --- TITLE SECTION --- */}
        <div className="text-center mb-16 space-y-5">
           <div className="val-item inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white border border-blue-100 shadow-sm backdrop-blur-sm">
              <Sparkles size={14} className="text-[#F99321] fill-[#F99321]" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Free Startup Tool</span>
           </div>
           
           <h1 className="val-item text-4xl md:text-6xl font-extrabold text-[#0f172a] tracking-tight">
             Valuation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2271B8] to-[#004a94]">Calculator</span>
           </h1>
           
           <p className="val-item text-lg text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
             Stop guessing equity dilution. Calculate precise Pre-money & Post-money valuations instantly.
           </p>
        </div>

        {/* --- CALCULATOR UI (THE MONOLITH) --- */}
        <div className="calc-card grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden relative ring-1 ring-gray-100">
            
            {/* Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F99321] via-[#8EC5FF] to-[#2271B8] z-30"></div>

            {/* --- LEFT SIDE: INPUTS --- */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-gray-50 relative z-10">
                <div className="space-y-8">
                    
                    {/* Input 1 */}
                    <div className="input-group-inv space-y-3 ">
                        <label className="text-s font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <div className="p-1 bg-orange-50 rounded text-[#F99321]"><IndianRupee size={20} /></div> 
                            Investment Amount
                        </label>
                        <div className="relative group">
                            <input
                                type="text"
                                inputMode="numeric"
                                placeholder="e.g. 1000000"
                                value={investment}
                                onChange={handleInvestmentChange}
                                className="w-full bg-slate-50/50 border border-gray-200 rounded-2xl px-4 py-5 pl-12 text-xl font-bold text-gray-900 focus:outline-none focus:bg-white focus:border-[#F99321] focus:ring-4 focus:ring-[#F99321]/10 transition-all placeholder:text-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                            />
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold group-focus-within:text-[#F99321] transition-colors">₹</span>
                        </div>
                    </div>

                    {/* Input 2 */}
                    <div className="input-group-eq space-y-3">
                        <label className="text-s font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <div className="p-1 bg-blue-50 rounded text-[#2271B8]"><PieChart size={20} /></div>
                            Investor's Equity
                        </label>
                        <div className="relative group">
                            <input
                                type="text"
                                inputMode="decimal"
                                placeholder="e.g. 10"
                                value={equity}
                                onChange={handleEquityChange}
                                className="w-full bg-slate-50/50 border border-gray-200 rounded-2xl px-4 py-5 pl-12 text-xl font-bold text-gray-900 focus:outline-none focus:bg-white focus:border-[#2271B8] focus:ring-4 focus:ring-[#2271B8]/10 transition-all placeholder:text-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]"
                            />
                            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold group-focus-within:text-[#2271B8] transition-colors">%</span>
                        </div>
                    </div>

                    {/* Error Feedback */}
                    <div className="h-6">
                        {error && (
                            <p className="text-xs text-red-500 font-bold flex items-center gap-1.5 animate-in fade-in slide-in-from-left-2 duration-300">
                                <AlertCircle size={14} /> {error}
                            </p>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-2">
                        <button 
                            onClick={handleCalculate}
                            className="cursor-pointer hover:bg-[#F99321] flex-1 bg-[#0f172a] text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-1 active:scale-[0.98] transition-all flex justify-center items-center gap-3 text-base tracking-wide group"
                        >
                            Calculate <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        
                        <button 
                            onClick={handleReset}
                            className="cursor-pointer w-14 flex items-center justify-center border-2 border-gray-100 text-gray-400 rounded-xl hover:border-gray-300 hover:text-gray-600 hover:bg-gray-50 transition-all active:scale-95"
                            title="Reset Fields"
                        >
                            <RotateCcw size={20} className="transition-transform active:-rotate-180" />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: RESULTS DASHBOARD (Dark Premium Theme) --- */}
            <div className="lg:col-span-7 bg-[#0f172a] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[550px]">
                
                {/* Dashboard Background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.07] pointer-events-none"></div>
                <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#2271B8]/20 blur-[150px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between result-content">
                    
                    {/* Result Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-gradient-to-br from-[#2271B8]/20 to-[#2271B8]/5 rounded-xl border border-[#2271B8]/30 text-[#8EC5FF]">
                                <TrendingUp size={20} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Financial Output</p>
                                <p className="text-white text-sm font-medium opacity-90">{isCalculated ? "Valuation Generated" : "Ready to Calculate"}</p>
                            </div>
                        </div>
                        {isCalculated && (
                            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                                Live Estimate
                            </span>
                        )}
                    </div>

                    {/* BIG METRICS (Animated) */}
                    <div className="space-y-10" ref={resultRef}>
                        
                        {/* Pre-Money */}
                        <div className={`transition-all duration-700 ${isCalculated ? "opacity-100 translate-x-0" : "opacity-30 translate-x-4 grayscale"}`}>
                            <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                Pre-Money Valuation
                            </p>
                            <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tight tabular-nums">
                                {formatCurrency(displayPre)}
                            </p>
                        </div>

                        {/* Post-Money */}
                        <div className={`transition-all duration-700 delay-100 ${isCalculated ? "opacity-100 translate-x-0" : "opacity-30 translate-x-4 grayscale"}`}>
                            <p className="text-[#F99321] text-[11px] font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                Post-Money Valuation
                            </p>
                            <p className="text-5xl md:text-[64px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#e2e8f0] to-[#94a3b8] tracking-tighter tabular-nums leading-none">
                                {formatCurrency(displayPost)}
                            </p>
                        </div>

                    </div>

                    {/* VISUAL OWNERSHIP STACK (The "Aha!" Moment) */}
                    <div className="mt-14">
                        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mb-3 tracking-wider">
                            <span>Ownership Structure</span>
                            <span>{isCalculated ? "100%" : "0%"}</span>
                        </div>
                        
                        {/* The Bar */}
                        <div className="w-full h-5 bg-gray-800/50 rounded-full overflow-hidden flex relative ring-1 ring-white/10 p-[2px]">
                            {/* Pre-Money Segment */}
                            <div className="bar-pre h-full bg-gradient-to-r from-[#2271B8] to-[#60a5fa] w-0 rounded-l-full relative group">
                                {isCalculated && (
                                    <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-white text-[#0f172a] text-[10px] font-bold px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Founders ({(100 - parseFloat(equity)).toFixed(2)}%)
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                                    </div>
                                )}
                            </div>
                            
                            {/* Investment Segment */}
                            <div className="bar-inv h-full bg-[#F99321] w-0 rounded-r-full relative group">
                                {isCalculated && (
                                    <div className="absolute bottom-full mb-3 right-0 bg-white text-[#0f172a] text-[10px] font-bold px-2 py-1 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        Investors ({equity}%)
                                        <div className="absolute top-full right-2 border-4 border-transparent border-t-white"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Legend */}
                        <div className="mt-4 flex gap-6 text-xs text-gray-400 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#2271B8]"></div> Founders Value
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#F99321]"></div> New Cash
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <p className="text-[11px] text-gray-500 flex items-center justify-center gap-2">
                <Info size={14} /> 
                <span>
                    <strong>Logic:</strong> Post-Money = Investment ÷ Equity% &nbsp;•&nbsp; Pre-Money = Post-Money - Investment
                </span>
            </p>
        </div>

      </div>
    </section>
  );
}