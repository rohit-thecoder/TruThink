"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, Activity, Sparkles, TrendingUp, MoreHorizontal } from "lucide-react";

// Assuming your chart components are still located here
import { ChartPieDonut } from '../ui/ChartPieDonut';
import { ChartPieStacked } from '../ui/ChartPieStacked';
import { ChartBarLabel } from '../ui/ChartBarLabel';
import { ChartAreaDefault } from '../ui/ChartAreaDefault';
import { ChartLineLabel } from '../ui/ChartLineLabel';
import { ChartRadialLabel } from '../ui/ChartRadialLabel';
import { ChartTooltipIndicatorLine } from '../ui/ChartTooltipIndicatorLine';

// --- COMPONENTS ---

/**
 * Premium Glass Card
 * Uses a distinct glass effect with a subtle gradient border.
 */
const DashboardCard = ({ children, className = "", title, subtitle, delayClass = "" }) => (
  <div className={`bento-card group relative flex flex-col overflow-hidden rounded-[24px] border border-white/40 bg-white/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 ${className} ${delayClass}`}>
    
    {/* Hover Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Header */}
    {(title || subtitle) && (
      <div className="relative z-10 flex items-start justify-between p-6 pb-2">
        <div className="space-y-1">
          <h3 className="font-semibold text-slate-800 tracking-tight text-lg leading-none">{title}</h3>
          {subtitle && <p className="text-sm text-slate-500 font-medium">{subtitle}</p>}
        </div>
        
        {/* Interactive Icon */}
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm transition-all duration-300 hover:border-blue-200 hover:text-blue-600 active:scale-95">
          <ArrowUpRight size={16} />
        </button>
      </div>
    )}

    {/* Content */}
    <div className="relative z-10 flex-1 w-full min-h-[200px] flex items-center justify-center p-4">
      {children}
    </div>
  </div>
);

const HomeDashboard = () => {
  const containerRef = useRef(null);

  // --- GSAP ANIMATION LOGIC ---
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Animate Background Elements (Subtle fade in)
    tl.fromTo(".bg-element", 
      { opacity: 0 }, 
      { opacity: 1, duration: 2 }
    );

    // 2. Animate Header Text (Slide up + Fade)
    tl.fromTo(".hero-text-reveal",
      { y: 50, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
      { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, stagger: 0.15 },
      "-=1.5"
    );

    // 3. Animate Dashboard Cards (Staggered pop-up effect)
    tl.fromTo(".bento-card",
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.1 },
      "-=0.8"
    );

  }, { scope: containerRef }); // Scope ensures we only animate inside this component

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#F0F2F5] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      
      {/* ================= BACKGROUND ATMOSPHERE ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Mesh Gradient */}
        <div className="bg-element absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="bg-element absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-white-200/30 rounded-full blur-[120px] mix-blend-multiply" />
        {/* Noise Texture for realism */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="relative z-10 flex flex-col px-6 sm:px-10 lg:px-16 py-20 max-w-[1440px] mx-auto w-full">
        
        {/* ================= HERO SECTION ================= */}
        <div className="flex flex-col items-center justify-center text-center mb-20 space-y-8">
          
          {/* Animated Badge */}
          

          {/* Headline */}
          <h1 className="max-w-4xl mx-auto">
            <div className="hero-text-reveal text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1]">
              Insights That
            </div>
            <div className="hero-text-reveal text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 leading-[1.1]">
              Drive Valuation.
            </div>
          </h1>

          {/* Subtitle */}
          <p className="hero-text-reveal text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Empower your finance team with institutional-grade data. 
            Visualize revenue streams, operational costs, and growth metrics in real-time.
          </p>
        </div>


        {/* ================= BENTO GRID DASHBOARD ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full pb-20">
          
          {/* --- TOP ROW --- */}
          
          {/* Main Revenue Chart - Large */}
          <DashboardCard 
            className="lg:col-span-8 min-h-[420px]" 
            title="Revenue Trajectory" 
            subtitle="Composite analysis (YTD)"
          >
            <div className="w-full h-full">
               <ChartTooltipIndicatorLine />
            </div>
          </DashboardCard>

          {/* Right Column Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Market Share */}
            <DashboardCard className="flex-1" title="Market Share" subtitle="Global presence">
               <ChartPieDonut />
            </DashboardCard>
            
            {/* SPECIAL "DARK MODE" CARD FOR CONTRAST */}
            <div className="bento-card relative overflow-hidden rounded-[24px] bg-slate-900 p-8 text-white shadow-2xl shadow-slate-900/20 group">
              {/* Animated Glow in background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/5 text-xs font-semibold text-indigo-200">
                      <Sparkles size={12} className="text-yellow-300" />
                      <span>AI Insights</span>
                   </div>
                   <MoreHorizontal className="text-slate-500 hover:text-white transition-colors cursor-pointer" size={20}/>
                </div>

                <div>
                   <div className="text-slate-400 text-sm font-medium mb-1">Net Profit Margin</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-bold tracking-tight text-white">24.5%</span>
                     <span className="text-emerald-400 text-sm font-bold flex items-center">
                        <TrendingUp size={14} className="mr-1" /> +2.4%
                     </span>
                   </div>
                   <div className="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 w-[70%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>


          {/* --- BOTTOM ROW --- */}

          <DashboardCard className="lg:col-span-4" title="User Growth" subtitle="Monthly Active Users">
            <ChartLineLabel />
          </DashboardCard>

          <DashboardCard className="lg:col-span-4" title="Burn Rate" subtitle="Operational expenses">
             <ChartAreaDefault />
          </DashboardCard>

          <DashboardCard className="lg:col-span-4" title="Sales Mix" subtitle="By product category">
            <ChartBarLabel />
          </DashboardCard>

        </div>
        
        {/* Footer */}
        <div className="border-t border-slate-200/60 pt-8 text-center">
            <p className="text-slate-400 text-sm font-medium">Secured by <span className="text-slate-900">Enterprise Grade</span> Encryption</p>
        </div>

      </div>
    </div>
  );
}

export default HomeDashboard;