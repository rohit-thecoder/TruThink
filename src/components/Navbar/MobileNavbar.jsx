// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaPlus, FaTimes } from "react-icons/fa";
// import { menuItems } from "./menuItems";
// import { usePathname, useRouter } from "next/navigation";

// export default function MobileNavbar() {
//   const [open, setOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const router = useRouter();
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);
//    const [clickedLink, setClickedLink] = useState(null);

//   // ✅ Listen when route changes (after navigation complete)
//   useEffect(() => {
//     const handleRouteChange = () => {
//       setOpen(false);
//       setLoading(false);
//       setClickedLink(null);
//     };

//     // App Router: router.events nahi hota, isliye router.refresh ya pathname observe karte hain
//     // Simple trick: whenever pathname changes, close menu
//     handleRouteChange();
//   }, [pathname]);

//   // ✅ Route navigation ke time loader show karo
//   const handleNavigation = async (href) => {
//     if (pathname !== href) {
//       setClickedLink(href); 
//       setLoading(true);
//       await router.push(href);
//     }
//   };

//   useEffect(() => {
//     if (open) {
//       // Background scroll band
//       document.body.style.overflow = "hidden";
//     } else {
//       // Scroll wapas allow
//       document.body.style.overflow = "auto";
//     }

//     // Cleanup (safety ke liye)
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [open]);


//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   return (
//     <>
//       {/* 🟧 Horizontal top loader */}
//       {loading && <div className="loader-bar"></div>}

      
//       {/* Navbar always on top */}
//       <nav className="md:hidden fixed top-0 left-0 w-full z-50">
//         <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-gray-200">
//           <Link href="/" >
//           <Image alt="Logo" src="/Truthink logo0.png" width={130} height={80} />
//           </Link>
//           <button
//             onClick={() => setOpen(!open)}
//             className="text-3xl text-[#003B70] focus:outline-none"
//           >
//             {open ? <FaTimes /> : "☰"}
//           </button>
//         </div>
//       </nav>

//       {/* Overlay (separate from navbar) */}
//       <div
//         className={`md:hidden fixed inset-0 bg-white transition-all duration-300 ease-in-out overflow-y-auto z-11 ${
//           open
//             ? "opacity-100 pointer-events-auto"
//             : "opacity-0 pointer-events-none"
//         }`}
//       >
//         <ul
//           className={`flex flex-col justify-center items-start gap-0 text-xl font-semibold text-gray-800 mt-24 transform transition-transform duration-700 ${
//             open ? " opacity-100" : " opacity-0"
//           }`}
//         >
//           {menuItems.map((menu, i) => (
//             <li key={i} className="w-full px-6 ">
//               {!menu.dropdown ? (
//                 <>
//                   <Link
//                     href={menu.href}
//                     className={`block py-6 text-start  transition-colors duration-200 ${
//                       pathname === menu.href || clickedLink === menu.href
//                         ? "text-[#f6921e]"
//                         : "text-gray-800 "
//                     }`}
//                     onClick={(e) =>{ handleNavigation(menu.href);
//                       e.preventDefault();
//                     }}
//                   >
//                     {menu.title}
//                   </Link>
//                   <hr className="border-gray-300 my-2 w-full" />
//                 </>
//               ) : (
//                 <>
//                   <div>
//                     <button
//                       onClick={() => toggleDropdown(i)}
//                       className="flex justify-between items-start w-full py-6 text-start hover:text-[#f6921e] transition-colors duration-200"
//                     >
//                       <span className="">{menu.title}</span>
//                       <span className="text-[#f6921e] text-lg ml-2 text-end">
//                         {activeDropdown === i ? <FaTimes /> : <FaPlus />}
//                       </span>
//                     </button>

//                     <div
//                       className={`overflow-hidden transition-all duration-500 ${
//                         activeDropdown === i
//                           ? "h-full opacity-100"
//                           : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <div className="flex flex-col items-start gap-5 py-4 text-gray-600">
//                         {menu.dropdown.map((item, j) => (
//                           <div key={j} className="w-full ">
//                             <Link
//                               key={j}
//                               href={item.href}
//                               className={` transition-colors duration-200 ${
//                                 pathname === item.href
//                                   ? "text-[#f6921e]"
//                                   : "text-gray-800 "
//                               }`}
//                               onClick={() => handleNavigation(item.href)}
//                             >
//                               <div className="flex flex-col ">
//                                 <h4 className="pt-2 text-xl ">{item.title}</h4>
//                                 <p className=" text-lg font-medium">
//                                   {item.description}
//                                 </p>
//                               </div>
//                             </Link>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <hr className="border-gray-300 my-1 w-full" />
//                 </>
//               )}
//             </li>
//           ))}

//           {/* Contact Button */}
//           <li className="w-full px-6 my-6 ">
//             <Link
//               href="/contact"
//               className="block text-center bg-[#f6921e] text-white py-2 rounded-full hover:bg-[#e07d1c] transition-colors duration-200"
//               onClick={() => setOpen(false)}
//             >
//               Contact Us
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { menuItems } from "./menuItems";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, 
  ArrowRight, Phone, Mail 
} from "lucide-react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // --- LOGIC ---
  useEffect(() => {
    setOpen(false);
    setLoading(false);
    document.body.style.overflow = "auto";
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleNavigation = async (href) => {
    if (pathname !== href) {
      setLoading(true);
      await router.push(href);
    } else {
      setOpen(false);
    }
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // --- ANIMATION VARIANTS ---
  const menuVars = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit: { x: "100%", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } },
  };

  const itemVars = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] }, opacity: 0 },
    open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] }, opacity: 1 },
  };

  return (
    <>
      {/* 1. TOP LOADER */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#f6921e] to-[#f9a826] animate-loaderAnim z-[9999]" />
      )}

      {/* 2. FIXED HEADER */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
        <div className="flex justify-between items-center px-5 py-3">
          {/* LOGO */}
          <Link href="/" onClick={() => handleNavigation("/")} className="relative z-50">
            <Image 
              alt="Truthink Logo" 
              src="/Truthink logo0.png" 
              width={110} 
              height={40} 
              className="object-contain" 
              priority
            />
          </Link>

          {/* RIGHT SIDE: CONTACT BTN + MENU TOGGLE */}
          <div className="flex items-center gap-3">
            
            {/* ✨ NEW HEADER CONTACT BUTTON ✨ */}
            <Link 
                href="/contact" 
                onClick={() => handleNavigation("/contact")}
                className="bg-[#2271B8] text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-md shadow-blue-100 hover:bg-[#1a5c96] active:scale-95 transition-all duration-200"
            >
                Get in Touch
            </Link>

            {/* MENU TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="cursor-pointer p-2 rounded-full hover:bg-gray-50 transition-colors focus:outline-none relative z-50"
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                  <Menu className={`absolute transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"} text-[#0f172a]`} size={28} strokeWidth={2} />
                  <X className={`absolute transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"} text-[#f6921e]`} size={28} strokeWidth={2} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 3. FULL SCREEN MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto"
          >
             {/* Background Pattern for Premium Feel */}
             <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none"></div>

            <div className="flex flex-col h-full px-6 pt-28 pb-10 relative z-10">
              
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-2"
              >
                {menuItems.map((menu, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.div variants={itemVars}>
                      
                      {/* --- MENU ITEM HEADER --- */}
                      {!menu.dropdown ? (
                        <div className="border-b border-gray-100/80">
                            <Link
                            href={menu.href}
                            onClick={(e) => { e.preventDefault(); handleNavigation(menu.href); }}
                            className={`flex items-center justify-between py-5 text-2xl font-semibold tracking-tight transition-colors
                                ${pathname === menu.href ? "text-[#f6921e]" : "text-[#0f172a]"}`}
                            >
                            {menu.title}
                            {pathname === menu.href && <span className="w-2 h-2 rounded-full bg-[#f6921e] shadow-[0_0_10px_#f6921e]" />}
                            </Link>
                        </div>
                      ) : (
                        <div className="border-b border-gray-100/80">
                          <button
                            onClick={() => toggleDropdown(i)}
                            className={`flex cursor-pointer items-center justify-between w-full py-5 text-2xl font-semibold tracking-tight transition-colors
                                ${activeDropdown === i ? "text-[#f6921e]" : "text-[#0f172a]"}`}
                          >
                            {menu.title}
                            <ChevronDown 
                                size={24} 
                                className={`transition-transform duration-300 ${activeDropdown === i ? "rotate-180 text-[#f6921e]" : "text-gray-400"}`} 
                            />
                          </button>

                          {/* --- ACCORDION CONTENT --- */}
                          <AnimatePresence>
                            {activeDropdown === i && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-3 pb-6 pl-2">
                                  {menu.dropdown.map((item, j) => (
                                    <Link
                                      key={j}
                                      href={item.href}
                                      onClick={(e) => { e.preventDefault(); handleNavigation(item.href); }}
                                      className="group flex flex-col p-4 bg-gray-50/80 border border-gray-100 rounded-xl active:scale-[0.98] transition-all"
                                    >
                                      <div className="flex items-center justify-between mb-1">
                                        <h4 className={`text-[17px] font-bold ${pathname === item.href ? "text-[#2271B8]" : "text-gray-800"}`}>
                                            {item.title}
                                        </h4>
                                        <ArrowRight size={16} className={`text-gray-300 group-hover:text-[#f6921e] transition-colors`} />
                                      </div>
                                      <p className="text-xs text-gray-500 leading-relaxed">
                                        {item.description}
                                      </p>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* --- BOTTOM SECTION (BIG CONTACT) --- */}
              <motion.div 
                variants={itemVars}
                className="mt-auto pt-10"
              >
                 <Link
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); handleNavigation("/contact"); }}
                    className="w-full flex items-center justify-center gap-2 bg-[#0f172a] text-white py-4 rounded-2xl text-lg font-bold shadow-xl shadow-gray-200 active:scale-[0.98] transition-all"
                  >
                    Contact Us <ArrowRight size={20} className="text-[#f6921e]" />
                  </Link>

                  {/* Quick Contacts */}
                  <div className="flex justify-center gap-8 mt-8 text-gray-400">
                     <a href="tel:+916205693251" className="flex items-center gap-2 hover:text-[#f6921e] transition-colors p-2">
                        <Phone size={18} /> <span className="text-sm font-medium">Call</span>
                     </a>
                     <a href="mailto:hello@truthink.in" className="flex items-center gap-2 hover:text-[#f6921e] transition-colors p-2">
                        <Mail size={18} /> <span className="text-sm font-medium">Email</span>
                     </a>
                  </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}