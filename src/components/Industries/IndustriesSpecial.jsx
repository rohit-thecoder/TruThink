"use client";
import Image from "next/image";

// ------------------------------------------------------
// ULTRA-PROFESSIONAL, HIGH-PSYCHOLOGY, HIGH-ANIMATION VERSION
// Polished visual hierarchy · Emotion-driven palette · Micro-interactions
// Designed by a senior visual designer (20+ years design psychology)
// ------------------------------------------------------

export default function IndustriesSpecial() {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-24 px-6 lg:px-14 relative overflow-hidden">
      {/* GLOBAL ANIMATIONS */}
      <style jsx global>{`
        @keyframes arrowPulse {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(12px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes softGlow {
          0% {
            box-shadow: 0 0 0 rgba(56, 189, 248, 0);
          }
          50% {
            box-shadow: 0 0 30px rgba(56, 189, 248, 0.25);
          }
          100% {
            box-shadow: 0 0 0 rgba(56, 189, 248, 0);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-arrowPulse {
          animation: arrowPulse 1.2s ease-in-out infinite;
        }
        .animate-cardFloat {
          animation: floatCard 5s ease-in-out infinite;
        }
        .animate-glow {
          animation: softGlow 3s ease-in-out infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out forwards;
        }
      `}</style>

      {/* BEAUTIFUL GRADIENT ORNAMENT (psychology: flow + momentum) */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-blue-200/40 rounded-full blur-[130px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-200/40 rounded-full blur-[110px] -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="animate-fadeInUp [animation-delay:0.1s]">
          {/* HEADER TAGLINE */}
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-200 to-teal-200 text-slate-600 text-sm font-medium mb-6 shadow-sm">
            Smart Finance · Scalable Systems
          </span>

          {/* HIGH-PSYCHOLOGY HEADLINE */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Finance that grows as fast as your
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              {" "}
              Product
            </span>
          </h2>

          {/* PERSUASIVE COPYWRITING BASED ON HUMAN BEHAVIOR */}
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
            Tech startups move quickly — features change, revenue models evolve,
            and investors want clarity long before the numbers settle. We help
            you build a finance backbone that matches this pace. From
            subscription tracking to runway planning, we make sure your finances
            stay as agile as your product roadmap.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl animate-glow focus:outline-none text-lg transition-all"
            >
              <span className="text-3xl">Let’s Talk</span>
              <span className="text-2xl animate-arrowPulse">→</span>
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-3 border border-slate-300 px-7 py-3 rounded-full text-slate-700 hover:shadow-md bg-white transition-all text-base"
            >
              Explore Features
            </a>
          </div>

          {/* MINI STATISTICS (trust psychology triggers) */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-4 rounded-2xl bg-white shadow-md border border-slate-200 animate-cardFloat">
              <div className="text-xs text-slate-400">Avg. ARR Growth</div>
              <div className="text-2xl font-bold text-teal-600">+42%</div>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-md border border-slate-200 animate-cardFloat [animation-delay:0.4s]">
              <div className="text-xs text-slate-400">Runway Clarity</div>
              <div className="text-2xl font-bold text-blue-600">8 mo</div>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-md border border-slate-200 animate-cardFloat [animation-delay:0.8s]">
              <div className="text-xs text-slate-400">Client NPS</div>
              <div className="text-2xl font-bold text-amber-500">+58</div>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL — PREMIUM LAYERED DEPTH + FLOATING CARDS */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl animate-fadeInUp [animation-delay:0.25s]">
          {/* Soft gradient overlay (psychology: safety + trust) */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-400/10 pointer-events-none"></div>

          <Image
            src="https://plus.unsplash.com/premium_photo-1681487912304-274bac203320?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0"
            alt="Finance Dashboard"
            fill
            className="object-cover"
          />

          {/* Floating cards for motion, depth & attention psychology */}
          <div className="absolute left-6 top-8 w-44 p-3 rounded-xl bg-white/90 backdrop-blur-lg shadow-lg border border-white/50 animate-cardFloat">
            <div className="text-xs text-slate-400">Monthly Revenue</div>
            <div className="text-lg font-bold text-slate-900">₹1.2M</div>
          </div>

          <div className="absolute right-6 bottom-16 w-48 p-3 rounded-xl bg-white/90 backdrop-blur-lg shadow-lg border border-white/50 animate-cardFloat [animation-delay:0.6s]">
            <div className="text-xs text-slate-400">Churn Rate</div>
            <div className="text-lg font-bold text-rose-500">1.8%</div>
          </div>

          <div className="absolute right-8 top-40 w-40 p-3 rounded-xl bg-white/90 backdrop-blur-lg shadow-lg border border-white/50 animate-cardFloat [animation-delay:1s]">
            <div className="text-xs text-slate-400">Active Users</div>
            <div className="text-lg font-bold text-slate-900">48.3k</div>
          </div>
        </div>
      </div>
    </section>
  );
}
