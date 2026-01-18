// "use client"
// import React from 'react'
// import { motion } from "framer-motion";
// import ServiceCard from './ServiceCard';
// import CtaButton from '../CtaButton';

// const SubServices = ({services, heading}) => {
//   return (
//     <section className=" px-5 2xl:px-0 py-16 md:py-32  xl:mx-[clamp(0px,5vw,160px)]  text-black0">
//       <h2 className="text-center text-4xl sm:text-4xl md:text-5xl font-medium text-black0 leading-tight mb-[clamp(2rem,4vw,4rem)]">
//         {heading}
//       </h2>
//       <p></p>
//       <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3  gap-8  w-full">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.2,
//               ease: "easeOut",
//             }}
//             viewport={{ once: true }} // Animate only once on scroll
//             className="w-full flex justify-center"
//           >
//             <ServiceCard
//               key={index}
//               title={service?.title}
//               description={service?.description}
//             />
//           </motion.div>
//         ))}
//       </div>
//       <div className='flex justify-center mt-12 md:mt-20 '>
//         <CtaButton className="" />
//       </div>
//     </section>
//   );
// }

// export default SubServices

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import CtaButton from "../CtaButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SubServices = ({ services, heading }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 0. SET INITIAL STATES (Prevents Flash of Unstyled Content)
      gsap.set(".sub-heading", { y: 50, opacity: 0 });
      gsap.set(".service-card-item", { y: 60, opacity: 0, scale: 0.95 });
      gsap.set(".cta-wrapper", { y: 30, opacity: 0 });

      // 1. Heading Animation
      gsap.to(".sub-heading", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // 2. Staggered Card Entry
      gsap.to(".service-card-item", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 85%",
        },
      });
      
      // 3. CTA Button Reveal
      gsap.to(".cta-wrapper", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2, // Small delay so it appears after cards start
        scrollTrigger: { 
            trigger: ".services-grid", 
            start: "bottom 95%" 
        } 
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className=" relative px-5 2xl:px-0 py-20 md:py-32 xl:mx-[clamp(0px,5vw,160px)] text-black0 overflow-hidden">
      
      {/* Background Decor (Subtle Glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-blue-50/40 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

      <div className="mb-[clamp(3rem,5vw,5rem)] text-center flex flex-col items-center">
  <h2 className="sub-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#0f172a] leading-tight tracking-tight">
    {heading}
  </h2>
  {/* Gradient Accent Line */}
  <div className="mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#F99321] via-[#8EC5FF] to-[#F99321] opacity-80"></div>
</div>
      
      <div className="services-grid max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card-item group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2rem] border border-gray-100 bg-white p-1 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2"
          >
            {/* ================= PREMIUM BACKGROUND LAYERS ================= */}
            
            {/* 1. Base Grid (Very Subtle Technical Lines) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.9] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* 2. Circle Dots (UPDATED: Much Lower Opacity for Premium Feel) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1.5px,transparent_1.5px)] [background-size:20px_20px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_70%)] opacity-[0.15] group-hover:opacity-30 transition-opacity duration-700"></div>
            </div>

            {/* 3. Brand Colors Glow (Orange & Blue) - Visible only on Hover */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8EC5FF]/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F99321]/15 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* 4. Active Border Gradient on Hover */}
            <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-[#8EC5FF]/20 transition-colors duration-500 pointer-events-none"></div>


            {/* ================= CONTENT WRAPPER ================= */}
            <div className="relative z-10 flex h-full flex-col p-2">
                <div className="bg-white/0 h-full rounded-2xl transition-colors">
                  <ServiceCard
                    title={service?.title}
                    description={service?.description}
                  />
                </div>
            </div>
            
            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#F99321] to-[#8EC5FF] transition-all duration-500 ease-out group-hover:w-full"></div>
          </div>
        ))}
      </div>

      <div className="cta-wrapper flex justify-center mt-16 md:mt-24">
        <CtaButton />
      </div>
    </section>
  );
};

export default SubServices;