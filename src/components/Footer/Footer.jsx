"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  MapPin, Mail, Phone, ArrowUpRight,
  Linkedin, Twitter, Instagram, Facebook, Navigation
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef(null);
  const pathname = usePathname(); // ✅ route change detector

  useEffect(() => {
    if (!footerRef.current) return;

    // 🧹 CLEAN PREVIOUS TRIGGERS
    ScrollTrigger.getAll().forEach(t => t.kill());

    // 🔁 RESET STATE (CRITICAL)
    gsap.set(".footer-col", { opacity: 0, y: 30 });
    gsap.set(".footer-divider", { scaleX: 0 });
    gsap.set(".footer-bottom", { opacity: 0, y: 10 });

    const ctx = gsap.context(() => {

      gsap.to(".footer-col", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      });

      gsap.to(".footer-divider", {
        scaleX: 1,
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });

      gsap.to(".footer-bottom", {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
      });

    }, footerRef);

    // 🧠 LET LAYOUT SETTLE
    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    return () => {
      ctx.revert();
    };

  }, [pathname]); //

  return (
    <footer ref={footerRef} className="relative bg-[#0f172a] text-white pt-24 pb-8 overflow-hidden font-sans">
      
      {/* ================= BACKGROUND SYSTEM ================= */}
      <div className="absolute inset-0 bg-[#0f172a] -z-20"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_80%)]"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[900px] h-[900px] bg-[#8EC5FF]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[900px] h-[900px] bg-[#F99321]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffffff20] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-20">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          {/* ❌ Removed 'opacity-0' class here */}
          <div className="footer-col lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <h2 className="text-3xl font-extrabold tracking-tight text-white flex items-center gap-1">
                TRUTHINK<div className="w-2 h-2 rounded-full bg-[#F99321] mt-3 group-hover:scale-125 transition-transform duration-300"></div>
              </h2>
            </Link>
            <p className="text-gray-400 leading-relaxed text-[15px] pr-4 font-medium max-w-sm">
              Empowering businesses with financial precision and strategic clarity. We turn complex numbers into your competitive advantage.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Linkedin, href: "#" }, 
                { Icon: Twitter, href: "#" }, 
                { Icon: Instagram, href: "#" }, 
                { Icon: Facebook, href: "#" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#F99321] hover:border-[#F99321] hover:-translate-y-1 transition-all duration-300 group shadow-lg shadow-black/20"
                >
                  <item.Icon size={18} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          {/* ❌ Removed 'opacity-0' class here */}
          <div className="footer-col lg:col-span-2 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8EC5FF]">Explore</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Our Team', 'Valuation Tool', 'Burn Rate Calc'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group text-[15px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F99321] scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          {/* ❌ Removed 'opacity-0' class here */}
          <div className="footer-col lg:col-span-3 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8EC5FF]">Reach Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 group cursor-default">
                <div className="w-9 h-9 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-[#F99321]/50 transition-colors">
                    <MapPin className="w-4 h-4 text-[#F99321]" />
                </div>
                <span className="text-[15px] leading-relaxed group-hover:text-gray-200 transition-colors">
                  No 6, 27th Main Road, Ejipura,<br />
                  VGS Layout, Near Navya Elite Apartments,<br />
                  Bangalore 560047
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="w-9 h-9 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#F99321]/50 transition-colors">
                    <Mail className="w-4 h-4 text-[#F99321]" />
                </div>
                <a href="mailto:hello@truthink.in" className="text-[15px] font-medium hover:text-white transition-colors">
                  hello@truthink.in
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="w-9 h-9 rounded-xl bg-[#1e293b] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#F99321]/50 transition-colors">
                    <Phone className="w-4 h-4 text-[#F99321]" />
                </div>
                <a href="tel:+916205693251" className="text-[15px] font-medium hover:text-white transition-colors">
                  +91 62056 93251
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: COLORFUL MAP */}
          {/* ❌ Removed 'opacity-0' class here */}
          <div className="footer-col lg:col-span-3 space-y-8">
             <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#8EC5FF]">Location</h3>
             
             {/* Map Container */}
             <div className="w-full h-44 rounded-2xl overflow-hidden border-[3px] border-white/10 shadow-2xl relative group bg-[#1a202c]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4852737646233!2d77.62823517531922!3d12.940769787371776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146a0040a8a5%3A0xb3e4a830e2c3a529!2s6%2C%2027th%20Cross%20Rd%2C%20VGS%20Layout%2C%20Muneshwara%20Swamy%20Layout%2C%20Ashwini%20Layout%2C%20Ejipura%2C%20Bengaluru%2C%20Karnataka%20560047!5e0!3m2!1sen!2sin!4v1768729139866!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'contrast(1.2) saturate(1.3)' }}
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-transform duration-700 group-hover:scale-110"
                ></iframe>
                <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
                
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="bg-white text-gray-900 p-2 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#F99321] hover:text-white transition-colors">
                        <Navigation size={14} />
                    </span>
                </div>
             </div>
             
             <a 
               href="https://www.google.com/maps/search/Sector+4,+City+Centre,+Bokaro+Steel+City,+Jharkhand+-+827004" 
               target="_blank" 
               className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#F99321] transition-colors uppercase tracking-wider group"
             >
                Get Directions <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </a>
          </div>

        </div>

        {/* --- DIVIDER LINE --- */}
        <div className="footer-divider w-full h-[1px] bg-white/10 mb-8"></div>

        {/* --- BOTTOM BAR --- */}
        {/* ❌ Removed 'opacity-0' class here */}
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Truthink Consulting. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-600 text-sm font-medium">
             <span className="w-3.5 h-3.5 rounded-full bg-green-500 animate-pulse"></span>
             <span></span>
          </div>
        </div>

      </div>
    </footer>
  );
}