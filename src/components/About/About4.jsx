"use client";
import React, { useLayoutEffect, useRef } from "react"; // 1. Change useEffect to useLayoutEffect
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, PieChart, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About4() {
  const containerRef = useRef(null);

  // 2. Use useLayoutEffect instead of useEffect
  // useLayoutEffect DOM update hone ke turant baad sync mein chalta hai, painting se pehle.
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // 1. Heading Reveal
      gsap.fromTo(
        ".about-heading-group",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          },
        }
      );

      // 2. Icon Cards Stagger
      gsap.from(".feature-card", {
  y: 30,
  opacity: 1,
  duration: 0.8,
  stagger: 0.15,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".features-grid",
    start: "top 80%",
    once: true,
  },
});


      // 3. Text Paragraphs
      gsap.fromTo(
        ".content-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".right-column",
            start: "top 75%",
          },
        }
      );

    }, containerRef);

    // 3. Force ScrollTrigger Refresh (Important for Next.js Routing)
    // Thoda sa delay dekar refresh karein taaki layout settle ho jaye
    requestAnimationFrame(() => {
        ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 px-6 md:px-20 ">
        {/* Baaki ka JSX same rahega */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#8EC5FF1a_1px,transparent_1px),linear-gradient(to_bottom,#8EC5FF1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8EC5FF]/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F99321]/5 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 about-heading-group">
                <div className="flex items-center gap-2 mb-4">
                <span className="h-[2px] w-10 bg-[#F99321]"></span>
                <span className="text-[#F99321] font-bold tracking-widest uppercase text-xs">
                    About Truthink
                </span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                Who <br className="hidden md:block" /> we are.
                </h2>
                
                <p className="text-gray-500 text-lg max-w-sm border-l-2 border-gray-200 pl-6 py-2">
                Building financial clarity for the next generation of businesses.
                </p>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-12 right-column">
                
                <div className="content-text">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium">
                    Founded in 2024, <span className="text-[#005bb5] font-bold">Truthink</span> brings together over a decade of experience
                    from Big 4 consulting and hands-on work with early-stage startups.
                </p>
                </div>

                <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="feature-card p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#8EC5FF] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-[#8EC5FF]/10 flex items-center justify-center text-[#005bb5] mb-4 group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} />
                    </div>
                    <h4 className="text-gray-900 font-bold text-lg mb-2">Growth Focused</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Simplifying complex financial challenges so you can focus on scaling.</p>
                </div>

                <div className="feature-card p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#F99321] transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-[#F99321]/10 flex items-center justify-center text-[#d97706] mb-4 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={24} />
                    </div>
                    <h4 className="text-gray-900 font-bold text-lg mb-2">Compliance Ready</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Navigating regulatory landscapes with Big 4 precision and expertise.</p>
                </div>
                </div>

                <div className="content-text">
                <p className="text-lg leading-relaxed text-gray-600">
                    We’ve seen the startup journey up close — from the uncertainty of
                    launch to the challenges of scaling. With a mix of sharp financial
                    insight and real-world perspective, we partner with founders to turn
                    complexity into clarity.
                </p>
                </div>

                <div className="content-text relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F99321]/5 to-[#8EC5FF]/5 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-lg shadow-gray-200/50">
                    <div className="flex gap-4 items-start">
                    <div className="mt-1 text-[#F99321]">
                        <Target size={32} />
                    </div>
                    <div>
                        <h4 className="text-gray-900 font-bold text-lg mb-2">Our Core Mission</h4>
                        <p className="text-lg leading-relaxed text-gray-700 italic">
                            "To make finance simple and growth achievable — ensuring your
                            success is amplified while we handle the numbers."
                        </p>
                    </div>
                    </div>
                </div>
                </div>

            </div>

            </div>
        </div>
    </section>
  );
}