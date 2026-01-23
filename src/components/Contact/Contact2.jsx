// "use client";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import emailjs from "emailjs-com";

// export default function Contact2() {
//   const formRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [sent, setSent] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_f40h0fl", // 🔥 Replace
//         "template_ahc17sp", // 🔥 Replace
//         formRef.current,
//         "kGXcLxYuJcUPnXLeF" // 🔥 Replace
//       )
//       .then(
//         () => {
//           setLoading(false);
//           setSent(true);
//           formRef.current.reset();

//           setTimeout(() => setSent(false), 4000);
//         },
//         (error) => {
//           setLoading(false);
//           alert("Something went wrong. Try again.");
//           console.log(error);
//         }
//       );
//   };

//   return (
//     <section className=" py-16 px-6 md:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center md:text-left mb-10">
//           <h2 className="text-4xl font-semibold text-gray-900 mb-2">
//             Get in Touch
//           </h2>
//           <p className="text-gray-600 text-base md:text-lg max-w-3xl">
//             Schedule an intro call{" "}
//             <a href="tel:+916205693251" className="text-blue-600 underline font-medium">
//               HERE
//             </a>{" "}
//             or send us a message below. It’s the best decision you’ll make this
//             week.
//           </p>
//         </div>

//         {/* Layout */}
//         <div className="flex flex-col lg:flex-row items-center gap-10">
//           {/* Left Image */}
//           <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
//             <Image
//               src="https://images.pexels.com/photos/14760650/pexels-photo-14760650.jpeg"
//               alt="Contact Us"
//               width={500}
//               height={400}
//               className="object-contain rounded-xl"
//             />
//           </div>

//           {/* Right Form */}
//           <form ref={formRef} onSubmit={sendEmail} className="w-full lg:w-1/2 ">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   First Name
//                 </label>
//                 <input
//                   name="first_name"
//                   required
//                   type="text"
//                   placeholder="Enter your first name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   name="email"
//                   type="email"
//                   required
//                   placeholder="Enter your email"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Company
//                 </label>
//                 <input
//                   name="company"
//                   type="text"
//                   placeholder="Your company name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Industry
//                 </label>
//                 <input
//                   name="industry"
//                   type="text"
//                   placeholder="Industry type"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   How’d you hear about us?
//                 </label>
//                 <input
//                   name="source"
//                   type="text"
//                   placeholder="Mention how you heard about us"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>

//               <div className="md:col-span-2">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Write your message here..."
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none"
//                 ></textarea>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="mt-8">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className={`w-full text-white text-xl font-semibold py-3 rounded-lg transition-all duration-300 cursor-pointer ${
//                   loading
//                     ? "bg-gray-400 "
//                     : "bg-gray-400 hover:shadow-xl hover:bg-orange-600"
//                 }`}
//               >
//                 {loading ? "Sending..." : "Submit"}
//               </button>

//               {/* Success Message */}
//               {sent && (
//                 <p className="text-green-600 text-center mt-4 font-medium">
//                   ✅ Your message has been sent successfully!
//                 </p>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  User, Mail, Building2, Briefcase, Globe, MessageSquare, 
  Send, Loader2, CheckCircle2, PhoneCall, ArrowUpRight 
} from "lucide-react";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Contact2() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // --- ANIMATION LOGIC ---
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      // Safety: Purane triggers kill karein
      ScrollTrigger.getAll().forEach(t => t.kill());

      // 1. Header Animation
      gsap.fromTo(
        ".contact-header-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-header-anim",
            // FIX: Trigger point ko 'top 95%' kiya taaki thoda sa bhi dikhte hi start ho jaye
            start: "top 95%", 
            toggleActions: "play none none none", // Sirf play kare, reverse na kare
          },
        }
      );

      // 2. Image & Form Animation
      gsap.fromTo(
        [".contact-card-anim"], 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.3, // Image pehle, fir form
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%", // Jaldi trigger karein
            toggleActions: "play none none none",
          },
        }
      );

    }, containerRef);

    // --- SAFETY FALLBACK (The Main Fix) ---
    // Agar kisi wajah se animation atak gayi, toh 2.5 second baad
    // jabardasti sab kuch visible kar do.
    const safetyTimer = setTimeout(() => {
        // Check karein agar opacity 0 hai toh 1 karein
        gsap.to([".contact-header-anim", ".contact-card-anim"], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            overwrite: "auto" // Animation override kar dega
        });
        ScrollTrigger.refresh();
    }, 2500);

    return () => {
        ctx.revert();
        clearTimeout(safetyTimer);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    gsap.to(buttonRef.current, {
        scale: 0.97, duration: 0.1, ease: "power2.inOut",
        onComplete: () => {
            gsap.to(buttonRef.current, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.5)" });
            processSubmission();
        }
    });
  };

  const processSubmission = () => {
    setLoading(true);
    emailjs.sendForm("service_f40h0fl", "template_ahc17sp", formRef.current, "kGXcLxYuJcUPnXLeF")
      .then(() => {
          setLoading(false); setSent(true); formRef.current.reset();
          gsap.delayedCall(6, () => setSent(false));
      }, (error) => {
          setLoading(false); alert("Error sending message."); console.error(error);
      });
  };

  // Input Component
  const InputField = ({ label, name, type, placeholder, Icon, required = false }) => (
    <div className="space-y-2 group/field relative">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 flex items-center gap-1">
            {label} {required && <span className="text-[#F99321]">*</span>}
        </label>
        <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within/field:text-[#8EC5FF]">
                <Icon size={20} strokeWidth={1.5} />
            </div>
            <input name={name} type={type} required={required} placeholder={placeholder}
                className="w-full bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl pl-12 pr-5 py-4 text-gray-900 font-medium focus:outline-none focus:bg-white focus:border-[#8EC5FF] focus:ring-4 focus:ring-[#8EC5FF]/10 transition-all duration-300 placeholder:text-gray-400 shadow-sm"
            />
        </div>
    </div>
  );

  return (
    <section ref={containerRef} className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen flex items-center">
      
      {/* Backgrounds (Fixed) */}
      <div className="fixed inset-0 bg-white -z-20"></div>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_90%)]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#8EC5FF]/20 blur-[100px] mix-blend-multiply -z-10 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#F99321]/15 blur-[100px] mix-blend-multiply -z-10"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* HEADING (Added class 'contact-header-anim' for targeting) */}
        <div className="text-center md:text-left mb-16 contact-header-anim opacity-0">
           <div className="flex justify-center md:justify-start"> 
             <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/80 border border-[#8EC5FF]/30 text-[#0066cc] text-xs font-bold tracking-[0.15em] uppercase mb-6 shadow-sm backdrop-blur-md">
               <MessageSquare size={14} /> Contact Us
             </span>
           </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Let’s start a <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F99321] to-[#d97706]">meaningful conversation.</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Ready to scale? Schedule a direct intro call{" "}
            <a href="tel:+919901234680" className="inline-flex items-center gap-1 text-[#0066cc] font-bold hover:text-[#F99321] transition-colors underline decoration-2 underline-offset-4 group">
              HERE <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a> or fill out the details below.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
          
          {/* LEFT: IMAGE CARD (Added class 'contact-card-anim' for targeting) */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between contact-card-anim opacity-0">
            <div className="relative w-full h-[450px] lg:h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-white/80 group origin-bottom-left">
              <Image src="https://images.pexels.com/photos/14760650/pexels-photo-14760650.jpeg" alt="Contact Truthink Team" fill className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105" priority 
                onLoadingComplete={() => ScrollTrigger.refresh()} // Image load hone par refresh
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white shadow-lg">
                 <div className="flex items-center gap-3 mb-3">
                    <div className="bg-[#F99321] p-2 rounded-full"><PhoneCall size={20} className="text-white" /></div>
                    <p className="text-sm font-bold uppercase tracking-widest opacity-90">Support & Sales</p>
                 </div>
                 <p className="text-2xl font-semibold tracking-tight">Mon - Fri, 9am - 7pm IST</p>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM CARD (Added class 'contact-card-anim' for targeting) */}
          <div className="w-full lg:w-[55%] contact-card-anim opacity-0">
            <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-[0_20px_40px_rgb(0,0,0,0.04)] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#F99321]/0 via-[#F99321] to-[#8EC5FF]"></div>
               <form ref={formRef} onSubmit={sendEmail} className="space-y-7 relative z-10">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <InputField label="First Name" name="first_name" type="text" placeholder="Adtiya" Icon={User} required />
                   <InputField label="Email Address" name="email" type="email" placeholder="aditya@xyz.com" Icon={Mail} required />
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <InputField label="Company Name" name="company" type="text" placeholder="Truthink Pvt Ltd." Icon={Building2} />
                     <InputField label="Industry Sector" name="industry" type="text" placeholder="Fintech, SaaS..." Icon={Briefcase} />
                 </div>
                 <InputField label="How did you find us?" name="source" type="text" placeholder="LinkedIn, Referral..." Icon={Globe} />
                 <div className="space-y-2 group/field relative">
                   <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 flex items-center gap-1">Message <span className="text-[#F99321]">*</span></label>
                   <div className="relative">
                       <div className="absolute left-4 top-5 text-gray-400 transition-colors duration-300 group-focus-within/field:text-[#8EC5FF]"><MessageSquare size={20} strokeWidth={1.5} /></div>
                       <textarea name="message" rows="4" required placeholder="Tell us about your project challenges..." className="w-full bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl pl-12 pr-5 py-4 text-gray-900 font-medium focus:outline-none focus:bg-white focus:border-[#8EC5FF] focus:ring-4 focus:ring-[#8EC5FF]/10 transition-all duration-300 placeholder:text-gray-400 shadow-sm resize-none"></textarea>
                   </div>
                 </div>
                 <div className="pt-4">
                     <button ref={buttonRef} type="submit" disabled={loading || sent} className={`cursor-pointer w-full relative overflow-hidden group bg-[#111827] text-white text-lg font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl shadow-gray-900/10 ${loading || sent ? "cursor-not-allowed opacity-90" : ""}`}>
                       <span className="relative z-10 flex items-center justify-center gap-3">
                           {loading ? <><Loader2 size={24} className="animate-spin text-[#8EC5FF]" /> Sending Request...</> : sent ? <><CheckCircle2 size={24} className="text-green-400" /> Message Sent!</> : <><Send size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" /> Send Message</>}
                       </span>
                       {!loading && !sent && <div className="absolute inset-0 bg-gradient-to-r from-[#F99321] to-[#d97706] translate-y-[101%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>}
                     </button>
                 </div>
                 {sent && (
                   <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
                      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-sm ring-8 ring-green-50/30"><CheckCircle2 size={40} className="text-green-500" strokeWidth={1.5} /></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Received!</h3>
                      <p className="text-gray-600 font-medium max-w-xs">Thanks for reaching out.</p>
                   </div>
                 )}
               </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}