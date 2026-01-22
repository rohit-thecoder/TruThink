// import About1 from '@/components/About/About1';
// import About2 from '@/components/About/About2';
// import About3 from '@/components/About/About3';
// import About4 from '@/components/About/About4';
// import About5 from '@/components/About/About5';
// import Founders from '@/components/About/Founders';
// import Contact0 from '@/components/Contact/Contact0';
// import FlippingCardsPage from '@/components/FlippingCard';
// import Footer from '@/components/Footer/Footer';
// import JsonLd from '@/components/JsonLd';
// import React from 'react'


// export const metadata = {
//   title: "About Truthink Consulting | Startup Advisors",
//   description: "Know our story, mission, and team behind Truthink Consulting",
//   keywords:"about Truthink Consulting, startup consultants India, SME advisory firm, financial consulting company, business growth advisors",
//   robots: { index: true, follow: true },
//   alternates: { canonical: "https://truthinkconsulting.in/about" },
//   openGraph: {
//     title: "About Truthink – Startup & SME Financial Experts",
//     description:
//       "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
//     url: "https://truthinkconsulting.in/about",
//     siteName: "Truthink",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "About Truthink – Startup & SME Financial Experts",
//     description:
//       "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
//   },
// };

// export const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "AboutPage",
//   name: "About Truthink",
//   description:
//     "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
//   url: "https://truthinkconsulting.in/about",
// };


// export default function Page() {
  
//   useEffect(() => {
//     // 1. Register Plugin Globally
//     gsap.registerPlugin(ScrollTrigger);

//     // 2. FORCE REFRESH AFTER LOAD
//     // Production par images dheere load hoti hain, isliye double refresh zaroori hai
//     const handleRefresh = () => {
//       ScrollTrigger.refresh();
//     };

//     // Window load event listener
//     window.addEventListener("load", handleRefresh);

//     // Backup timer (agar load event miss ho jaye)
//     const timer = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 1000); // 1 second delay
    
//     // Backup timer 2 (for slow networks)
//     const timer2 = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 3000); 

//     return () => {
//       window.removeEventListener("load", handleRefresh);
//       clearTimeout(timer);
//       clearTimeout(timer2);
//     };
//   }, []);

//   const jsonLdData = {
//     "@context": "https://schema.org",
//     "@type": "AboutPage",
//     name: "About Truthink",
//     description: "Learn about Truthink, our mission, values & expert team serving startups & SMEs.",
//     url: "https://truthinkconsulting.in/about",
//   };

//   return (
//     <div>
//       <JsonLd data={jsonLdData} />
//       <div className="overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scroll issues */}
//         <About1 />
//         <About4 />
//         <Founders/>
//         <About5 />
//       </div>
//     </div>
//   );
// }

import AboutContent from '@/components/About/AboutContent'; // Upar wala naya component

// --- METADATA (Ye Server par hi rahega, isliye build pass hogi) ---
export const metadata = {
  title: "About Truthink Consulting | Startup Advisors",
  description: "Know our story, mission, and team behind Truthink Consulting",
  alternates: { canonical: "https://truthinkconsulting.in/about" },
  openGraph: {
    title: "About Truthink – Startup & SME Financial Experts",
    description: "Learn about Truthink, our mission, values & expert team.",
    url: "https://truthinkconsulting.in/about",
    siteName: "Truthink",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Truthink",
  description: "Learn about Truthink, our mission, values & expert team.",
  url: "https://truthinkconsulting.in/about",
};

export default function Page() {
  return (
    // Hum data ko Client Component mein bhej rahe hain
    <AboutContent jsonLdData={jsonLd} />
  );
}