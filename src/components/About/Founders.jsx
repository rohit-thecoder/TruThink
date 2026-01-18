
// "use client";
// import React, { useEffect, useRef } from 'react'
// import { BsLinkedin } from "react-icons/bs";
// import { CgMail } from "react-icons/cg";
// import { IoMail } from "react-icons/io5";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Plugin register karein
// gsap.registerPlugin(ScrollTrigger);

// const Founders = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
      
//       // 1. Title Animation
//       gsap.from(".section-title", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".section-title",
//           start: "top 85%",
//         }
//       });

//       // 2. Founder Blocks Animation (Loop through each founder)
//       const founders = gsap.utils.toArray(".founder-row");
      
//       founders.forEach((founder) => {
//         // Isme founder.children ko target kar rahe hain (Left Block & Right P)
//         gsap.from(founder.children, {
//           y: 60,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.3, // Pehle photo aayegi, fir text (0.3s gap)
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: founder,
//             start: "top 75%", // Jab element thoda upar aaye tab start ho
//           }
//         });
//       });

//     }, containerRef);

//     return () => ctx.revert(); // Cleanup
//   }, []);

//   return (
//     <section ref={containerRef} className="py-10 md:py-20 px-5 md:px-20">
//       <div className="max-w-6xl mx-auto px-5 py-16 space-y-20">
        
//         {/* Title ko target karne ke liye 'section-title' class add ki (Only for GSAP) */}
//         <h2 className="section-title text-4xl font-bold mb-12 text-black0 text-center">
//           Meet The Founders
//           <div className="w-24 h-[3px] bg-black mx-auto mt-3 mb-12 rounded-full"></div>
//         </h2>

//         {/* Founder 1 */}
//         {/* 'founder-row' class add ki GSAP targeting ke liye */}
//         <div className="founder-row grid md:grid-cols-1 gap-10 items-start md:mt-10">
//           {/* Left block */}
//           <div className="flex flex-col items-center text-center md:text-left">
//             <img
//               src="https://images.pexels.com/photos/30767572/pexels-photo-30767572.jpeg"
//               alt="Venkatesh R"
//               className="w-48 h-48 rounded-xl object-cover mb-4 shadow"
//             />

//             <h3 className="text-2xl font-semibold text-gray-900">
//               Venkatesh R
//             </h3>
//             <p className="text-lg text-gray-600 mb-4">Co-founder</p>

//             <div className="flex gap-4">
//               <a
//                 href="https://www.linkedin.com/in/venkatesh-r-1136b2189"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <BsLinkedin className='w-8 h-8'/>
//               </a>

//               <a href="mailto:venkatesh@truthinkconsulting.in">
//                 <IoMail className='w-8 h-8'/>
//               </a>
//             </div>
//           </div>

//           {/* Right block */}
//           <p className="leading-relaxed text-gray-800 text-[18px]">
//             A finance professional with 6+ years of experience and a sharp eye
//             for both detail and direction, Venkatesh brings a rare mix of tax
//             expertise, operational leadership, and startup experience to
//             Truthink. He started his career with PwC, where he worked in the
//             taxation division, handling complex direct and indirect tax matters
//             for diverse clients.
//             <br />
//             <br />
//             Eager to move closer to the business side of finance, he went on to
//             lead the finance and accounting function at Geeklurn, a fast-growing
//             startup, where he built strong financial controls and streamlined
//             reporting from the ground up.
//             <br />
//             <br />
//             Later, as Chief of Staff – Operations at a boutique consulting firm,
//             he worked directly with the founder on strategy, operations, and
//             client delivery — strengthening his understanding of how businesses
//             scale efficiently.
//             <br />
//             <br />
//             At Truthink, he anchors the firm’s commitment to precision,
//             practicality, and purpose-driven growth.
//           </p>
//         </div>

//         {/* Founder 2 */}
//         <div className="founder-row grid md:grid-cols-1 gap-10 items-start">
//           {/* Left block */}
//           <div className="flex flex-col items-center text-center md:text-left">
//             <img
//               src="https://media.licdn.com/dms/image/v2/D4D03AQGKyrsYmks-9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694544745556?e=1765411200&v=beta&t=-N6D0W5diqFC3FLxIZwdLIMq_-VF7E14PA42yNIFzK4"
//               alt="Kanhaiya Bharti"
//               className="w-48 h-48 rounded-xl object-cover mb-4 shadow"
//             />

//             <h3 className="text-2xl font-semibold text-gray-900">
//               Kanhaiya Bharti
//             </h3>
//             <p className="text-lg text-gray-600 mb-4">Co-founder</p>

//             <div className="flex gap-4">
//               <a href="https://www.linkedin.com/in/kbharti95" target="_blank" rel="noreferrer">
//                 <BsLinkedin className="w-8 h-8" />
//               </a>

//               <a href="mailto:kanhaiya@truthinkconsulting.in">
//                 <IoMail className="w-8 h-8" />
//               </a>
//             </div>
//           </div>

//           {/* Right block */}
//           <p className="leading-relaxed text-gray-800 text-[18px]">
//             Chartered Accountant by profession and a problem-solver by instinct
//             with 4+ years of experience, Kanhaiya brings a rare blend of
//             big-firm experience and startup agility to Truthink. He began his
//             career with Deloitte, where he worked on the audits of S&P 500
//             companies.
//             <br />
//             <br />
//             He later worked with tech and manufacturing startups — helping
//             founders set up end-to-end finance systems from scratch. He also led
//             an Accounts Payable team for an Australian MNC, improving cash flow
//             and operational efficiency.
//             <br />
//             <br />
//             Over time, he has valued multiple startups across industries,
//             engaging with founders, analyzing pitch decks, and giving financial
//             insights.
//             <br />
//             <br />
//             At Truthink, he brings all of this together — turning financial data
//             into direction, and helping businesses grow with clarity and
//             confidence.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Founders

"use client";
import React, { useEffect, useRef } from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register Plugin
gsap.registerPlugin(ScrollTrigger);

const Founders = () => {
  const containerRef = useRef(null);
  
  // Refs for specific elements to animate
  const headerRef = useRef(null);
  const founder1Ref = useRef(null);
  const founder2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation (Fade Up)
      gsap.fromTo(
        headerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Function to animate each founder row
      const animateFounder = (ref, isReverse = false) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ref,
            start: "top 80%", // Jab element screen ke 80% pe aaye
            end: "bottom top",
            toggleActions: "play none none reverse",
          },
        });

        const imageSide = ref.querySelector(".founder-card");
        const textSide = ref.querySelector(".founder-bio");

        // Profile Card Slide In
        timeline.fromTo(
          imageSide,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
        // Bio Text Slide In (Staggered)
        .fromTo(
          textSide,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6" // Start before previous ends
        );

        // Parallax Effect on Image (Crawling)
        gsap.to(ref.querySelector("img"), {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: ref,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      };

      animateFounder(founder1Ref.current);
      animateFounder(founder2Ref.current);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-10 md:py-24 px-5 md:px-20  overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* --- HEADER --- */}
        <div ref={headerRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center tracking-tight">
            Meet The Founders
            <div className="w-24 h-[4px] bg-gradient-to-r from-blue-400 to-orange-400 mx-auto mt-4 mb-12 rounded-full"></div>
          </h2>
        </div>

        {/* --- FOUNDER 1 --- */}
        <div ref={founder1Ref} className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
          
          {/* Left block (Profile Card) */}
          <div className="founder-card flex flex-col items-center text-center md:text-left bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden rounded-xl mb-6 w-full h-64 md:h-64 relative group">
              <img
                src="https://images.pexels.com/photos/30767572/pexels-photo-30767572.jpeg"
                alt="Venkatesh R"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Venkatesh R
            </h3>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-6">Co-founder</p>

            <div className="flex gap-4 w-full justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/venkatesh-r-1136b2189"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0077b5] transition-colors transform hover:scale-110 duration-300"
              >
                <BsLinkedin className='w-7 h-7'/>
              </a>

              <a href="mailto:venkatesh@truthinkconsulting.in"
                 className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110 duration-300">
                <IoMail className='w-8 h-8'/>
              </a>
            </div>
          </div>

          {/* Right block (Bio) */}
          <div className="founder-bio bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-md md:shadow-none border md:border-none border-gray-100">
            <div className="prose prose-lg text-gray-600 leading-relaxed text-[17px] md:text-[18px]">
              <p className="mb-6">
                A finance professional with <span className="text-gray-900 font-semibold">6+ years of experience</span> and a sharp eye
                for both detail and direction, Venkatesh brings a rare mix of tax
                expertise, operational leadership, and startup experience to
                Truthink. He started his career with <span className="text-gray-900 font-semibold">PwC</span>, where he worked in the
                taxation division, handling complex direct and indirect tax matters
                for diverse clients.
              </p>
              <p className="mb-6">
                Eager to move closer to the business side of finance, he went on to
                lead the finance and accounting function at <span className="text-gray-900 font-semibold">Geeklurn</span>, a fast-growing
                startup, where he built strong financial controls and streamlined
                reporting from the ground up.
              </p>
              <p className="mb-6">
                Later, as Chief of Staff – Operations at a boutique consulting firm,
                he worked directly with the founder on strategy, operations, and
                client delivery — strengthening his understanding of how businesses
                scale efficiently.
              </p>
              <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-800 font-medium bg-orange-50/50 py-2 rounded-r-lg">
                At Truthink, he anchors the firm’s commitment to precision,
                practicality, and purpose-driven growth.
              </blockquote>
            </div>
          </div>
        </div>

        {/* --- FOUNDER 2 --- */}
        <div ref={founder2Ref} className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-16 items-start">
          
          {/* Left block (Profile Card) */}
          <div className="founder-card flex flex-col items-center text-center md:text-left bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="overflow-hidden rounded-xl mb-6 w-full h-64 md:h-64 relative group">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGKyrsYmks-9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694544745556?e=1765411200&v=beta&t=-N6D0W5diqFC3FLxIZwdLIMq_-VF7E14PA42yNIFzK4"
                alt="Kanhaiya Bharti"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Kanhaiya Bharti
            </h3>
            <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-6">Co-founder</p>

            <div className="flex gap-4 w-full justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/kbharti95" target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-[#0077b5] transition-colors transform hover:scale-110 duration-300">
                <BsLinkedin className="w-7 h-7" />
              </a>

              <a href="mailto:kanhaiya@truthinkconsulting.in"
                 className="text-gray-400 hover:text-orange-500 transition-colors transform hover:scale-110 duration-300">
                <IoMail className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right block (Bio) */}
          <div className="founder-bio bg-white md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-md md:shadow-none border md:border-none border-gray-100">
            <div className="prose prose-lg text-gray-600 leading-relaxed text-[17px] md:text-[18px]">
              <p className="mb-6">
                Chartered Accountant by profession and a problem-solver by instinct
                with <span className="text-gray-900 font-semibold">4+ years of experience</span>, Kanhaiya brings a rare blend of
                big-firm experience and startup agility to Truthink. He began his
                career with <span className="text-gray-900 font-semibold">Deloitte</span>, where he worked on the audits of S&P 500
                companies.
              </p>
              <p className="mb-6">
                He later worked with tech and manufacturing startups — helping
                founders set up end-to-end finance systems from scratch. He also led
                an Accounts Payable team for an Australian MNC, improving cash flow
                and operational efficiency.
              </p>
              <p className="mb-6">
                Over time, he has valued multiple startups across industries,
                engaging with founders, analyzing pitch decks, and giving financial
                insights.
              </p>
              <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-800 font-medium bg-orange-50/50 py-2 rounded-r-lg">
                At Truthink, he brings all of this together — turning financial data
                into direction, and helping businesses grow with clarity and
                confidence.
              </blockquote>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Founders;