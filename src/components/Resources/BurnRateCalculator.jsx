"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function BurnRateCalculator() {
  const containerRef = useRef(null);
  const resultRef = useRef(null);

  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState({
    startingCash: "",
    monthlyRevenue: "",
    monthlyExpenses: "",
    cashInflows: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // --- ANIMATIONS ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(".calc-header", 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      
      // Form Animation
      gsap.fromTo(".calc-card", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power2.out" }
      );

      // CTA Section Animation
      gsap.fromTo(".cta-section",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Result Animation when calculated
  useEffect(() => {
    if (result && resultRef.current) {
      gsap.fromTo(resultRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [result]);

  // --- HANDLERS ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow only numbers
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateBurnRate = () => {
    const cash = parseFloat(formData.startingCash) || 0;
    const revenue = parseFloat(formData.monthlyRevenue) || 0;
    const expenses = parseFloat(formData.monthlyExpenses) || 0;
    const inflows = parseFloat(formData.cashInflows) || 0;

    if (cash === 0 && expenses === 0) {
      setError("Please enter valid financial data.");
      return;
    }
    setError("");

    // Net Burn = Expenses - (Revenue + Inflows)
    const netBurn = expenses - (revenue + inflows);
    
    let runway = 0;
    let status = "";
    let action = "";
    let colorClass = "";

    if (netBurn <= 0) {
      // Cash Positive
      runway = Infinity;
      status = "Cash Positive";
      action = "Reinvest surplus wisely — in growth, efficiency, or reserves.";
      colorClass = "text-green-600";
    } else {
      // Burning Cash
      runway = cash / netBurn;
      
      if (runway < 3) {
        status = "Critical Zone";
        action = "Cut discretionary spend, delay new hires, and focus on urgent fundraising.";
        colorClass = "text-red-500";
      } else if (runway >= 3 && runway < 6) {
        status = "Tight Zone";
        action = "Start preparing investor updates, trim overheads, and plan your next funding round.";
        colorClass = "text-[#F99321]";
      } else if (runway >= 6 && runway < 12) {
        status = "Manageable Zone";
        action = "Optimize spending, explore revenue growth, and track burn monthly.";
        colorClass = "text-[#8EC5FF]";
      } else {
        status = "Healthy Zone";
        action = "Focus on scaling operations, new product development, and strategic hires.";
        colorClass = "text-blue-600";
      }
    }

    setResult({
      burnRate: netBurn,
      runway: runway,
      status,
      action,
      colorClass
    });
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(val);
  };

  return (
    <div ref={containerRef} className="min-h-screen relative font-sans text-gray-800 antialiased selection:bg-[#F99321] selection:text-white pt-36 md:pt-44 pb-24">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="fixed inset-0 bg-white -z-20"></div>
      
      {/* Grid Pattern (High to Low Opacity Mask) */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_90%)]"></div>

      {/* Premium Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#8EC5FF]/20 blur-[120px] mix-blend-multiply -z-10 animate-pulse"></div>
      <div className="fixed bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#F99321]/15 blur-[120px] mix-blend-multiply -z-10"></div>


      <div className="max-w-6xl mx-auto px-5 md:px-10">
        
        {/* --- HEADER --- */}
        <div className="text-center calc-header mb-16 relative z-10">
           <span className="inline-block py-1 px-4 rounded-full bg-white border border-[#8EC5FF]/40 text-[#0066cc] text-xs font-bold tracking-[0.2em] uppercase mb-5 shadow-sm">
              Financial Tools
           </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            Startup <span className="text-[#F99321] underline decoration-4 decoration-[#8EC5FF]/30 underline-offset-4">Burn Rate</span> Calculator
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium tracking-tight max-w-2xl mx-auto">
            Calculate your runway instantly. Plan your fundraising and spending with precision.
          </p>
        </div>

        {/* --- CALCULATOR SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          
          {/* LEFT: INPUT FORM */}
          <div className="lg:col-span-5 calc-card bg-white/80 backdrop-blur-xl rounded-[2rem] p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F99321] via-[#8EC5FF] to-[#F99321]"></div>
             
             <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
               <span className="w-2 h-6 bg-[#F99321] rounded-full"></span>
               Enter Financials
             </h3>

             <div className="space-y-5">
                {/* Starting Cash */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Total Cash in Hand/Bank (INR)</label>
                  <input 
                    type="text" 
                    name="startingCash"
                    value={formData.startingCash}
                    onChange={handleChange}
                    placeholder="e.g. 500000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-bold focus:outline-none focus:border-[#8EC5FF] focus:ring-2 focus:ring-[#8EC5FF]/20 transition-all"
                  />
                </div>

                {/* Revenue */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Monthly Revenue (INR)</label>
                  <input 
                    type="text" 
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    placeholder="e.g. 200000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-bold focus:outline-none focus:border-[#8EC5FF] focus:ring-2 focus:ring-[#8EC5FF]/20 transition-all"
                  />
                </div>

                {/* Expenses */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Monthly Expenses (Fixed + Variable)</label>
                  <input 
                    type="text" 
                    name="monthlyExpenses"
                    value={formData.monthlyExpenses}
                    onChange={handleChange}
                    placeholder="e.g. 50000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-bold focus:outline-none focus:border-[#F99321] focus:ring-2 focus:ring-[#F99321]/20 transition-all"
                  />
                </div>

                {/* Inflows */}
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Expected Inflows (Funding/Loans)</label>
                  <input 
                    type="text" 
                    name="cashInflows"
                    value={formData.cashInflows}
                    onChange={handleChange}
                    placeholder="e.g. 10000"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 font-bold focus:outline-none focus:border-[#8EC5FF] focus:ring-2 focus:ring-[#8EC5FF]/20 transition-all"
                  />
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                <button 
                  onClick={calculateBurnRate}
                  className="cursor-pointer w-full bg-[#F99321] hover:bg-[#e0821a] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#F99321]/30 hover:shadow-[#F99321]/50 transform hover:-translate-y-1 transition-all duration-300 mt-4 tracking-wide"
                >
                  CALCULATE RUNWAY
                </button>
             </div>
          </div>

          {/* RIGHT: RESULTS & GUIDE */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. RESULT CARD */}
            {result ? (
               <div ref={resultRef} className="bg-white rounded-[2rem] p-8 md:p-10 border border-[#8EC5FF]/30 shadow-xl shadow-blue-50 relative overflow-hidden">
                  <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br ${result.runway === Infinity ? 'from-green-100' : 'from-[#F99321]/10'} to-transparent rounded-full blur-3xl -mr-16 -mt-16`}></div>
                  
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
                     <div>
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Net Burn Rate / Month</p>
                        <h2 className={`text-3xl md:text-4xl font-extrabold ${result.burnRate <= 0 ? 'text-green-500' : 'text-gray-900'}`}>
                           {formatCurrency(result.burnRate)}
                        </h2>
                        {result.burnRate <= 0 && <p className="text-xs text-green-600 font-medium mt-1">You are profitable!</p>}
                     </div>

                     <div>
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">Estimated Runway</p>
                        <h2 className={`text-4xl md:text-5xl font-extrabold ${result.colorClass}`}>
                           {result.runway === Infinity ? "Infinite" : `${result.runway.toFixed(1)} Months`}
                        </h2>
                     </div>
                  </div>

                  <div className={`mt-8 p-6 rounded-xl border ${result.runway === Infinity ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100'}`}>
                     <h4 className={`font-bold text-lg mb-2 ${result.colorClass}`}>{result.status}</h4>
                     <p className="text-gray-600">{result.action}</p>
                  </div>
               </div>
            ) : (
               // Placeholder State
               <div className="bg-white/50 border border-dashed border-gray-300 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center h-[300px]">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300">
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-gray-400 font-medium">Enter your details to see your financial health.</p>
               </div>
            )}

            {/* 2. INTERPRETATION GUIDE (Grid) */}
            <div className="calc-card">
               <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                 Runway Interpretation Guide
               </h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-red-50 rounded-2xl border border-red-100 hover:shadow-md transition-shadow">
                     <span className="text-red-500 font-extrabold text-sm uppercase tracking-wide block mb-2">&lt; 3 Months</span>
                     <p className="text-gray-800 font-bold mb-1">Critical Zone</p>
                     <p className="text-gray-500 text-xs leading-relaxed">Immediate risk. Cut discretionary spend & fundraise urgently.</p>
                  </div>
                  <div className="p-5 bg-orange-50 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
                     <span className="text-[#F99321] font-extrabold text-sm uppercase tracking-wide block mb-2">3–6 Months</span>
                     <p className="text-gray-800 font-bold mb-1">Tight Zone</p>
                     <p className="text-gray-500 text-xs leading-relaxed">Limited buffer. Trim overheads & plan funding round.</p>
                  </div>
                  <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100 hover:shadow-md transition-shadow">
                     <span className="text-[#8EC5FF] font-extrabold text-sm uppercase tracking-wide block mb-2">6–12 Months</span>
                     <p className="text-gray-800 font-bold mb-1">Manageable Zone</p>
                     <p className="text-gray-500 text-xs leading-relaxed">Breathing room. Optimize spending & explore growth.</p>
                  </div>
                  <div className="p-5 bg-green-50 rounded-2xl border border-green-100 hover:shadow-md transition-shadow">
                     <span className="text-green-600 font-extrabold text-sm uppercase tracking-wide block mb-2">12+ Months / Negative</span>
                     <p className="text-gray-800 font-bold mb-1">Healthy Zone</p>
                     <p className="text-gray-500 text-xs leading-relaxed">Strong position. Focus on scaling & strategic hires.</p>
                  </div>
               </div>
            </div>

            {/* 3. KEY TERMS */}
            <div className="calc-card bg-gray-50 rounded-2xl p-6 border border-gray-200">
               <h4 className="text-gray-900 font-bold mb-4">Understanding Key Terms</h4>
               <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                     <span className="font-bold text-[#F99321]">Burn Rate:</span> How quickly your company spends cash each month.
                  </li>
                  <li className="flex gap-2">
                     <span className="font-bold text-[#8EC5FF]">Runway:</span> How long your current cash will last before running out.
                  </li>
                  <li className="flex gap-2">
                     <span className="font-bold text-gray-700">Cash Inflows:</span> Money coming in (funding, grants, loans).
                  </li>
               </ul>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: HOW WE HELP (CTA) --- */}
        <div className="cta-section relative z-10">
          <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 border border-white/60 shadow-2xl text-center overflow-hidden relative group">
             
             {/* Gradient Line Top */}
             <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#F99321] via-[#8EC5FF] to-[#F99321]"></div>
             
             {/* Internal Dot Pattern (Consistent with Blogs) */}
             <div className="absolute inset-0 bg-[radial-gradient(#F99321_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.08] pointer-events-none"></div>

             {/* Content */}
             <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                  How We Help Startups Manage Their <span className="text-[#F99321] relative inline-block">Burn Rate <span className="absolute bottom-0 left-0 w-full h-2 bg-[#F99321]/20 -z-10 rounded-full"></span></span>
                </h2>

                <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                  At <span className="font-bold text-gray-900">Truthink</span>, we help founders bring clarity to their cash flow. We work closely with you to understand where money’s going, what’s actually driving growth, and how long your current runway can take you. From building simple models that make sense to tracking real numbers every month, we turn your burn rate from a worry into a plan.
                </p>

                <Link href={"/contact"} className="cursor-pointer group/btn relative inline-flex items-center justify-center bg-[#0066cc] text-white text-lg font-bold px-12 py-5 rounded-full shadow-[0_10px_20px_rgba(0,102,204,0.3)] hover:bg-[#005bb5] hover:shadow-[0_15px_30px_rgba(0,102,204,0.4)] hover:scale-105 transition-all duration-300">
                  Let's Discuss
                  <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </Link>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}