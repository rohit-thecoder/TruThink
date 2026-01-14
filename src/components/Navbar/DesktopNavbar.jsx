// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { menuItems } from "./menuItems"; // 👈 common data import
// import { usePathname, useRouter } from "next/navigation";

// export default function DesktopNavbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [clickedLink, setClickedLink] = useState(null);
//   const pathname = usePathname();
//   const router = useRouter();
//    const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setOpenDropdown(null);
//     setClickedLink(null);
//     setLoading(false);
//   }, [pathname]);

//   const handleNavigation = async (href) => {
//     if (pathname !== href) {
//       setClickedLink(href);
//        setLoading(true);
//       await router.push(href);
//     }
//   };

//   return (
//     <nav className="hidden md:block">
//       {loading && (
//         <div className="fixed top-0 left-0 w-full h-[3px] bg-[#f6921e] animate-loaderAnim z-[9999]" />
//       )}
//       <div className="flex justify-center max-w-7xl mx-auto ">
//         <div
//           className={`fixed z-50 max-w-8xl mx-auto px-[clamp(1rem,4vw,6rem)] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
//             isScrolled
//               ? "w-full top-0 rounded-none  bg-white/90"
//               : "w-[90%] top-10 rounded-2xl  bg-white "
//           }`}
//         >
//           <Link href="/" className="cursor-pointer">
//             <div
//               className="cursor-pointer"
//               onClick={(e) => {
//                 e.preventDefault();
//                 if (pathname !== "/") {
//                   setLoading(true);
//                   handleNavigation("/");
//                 }
//               }}
//             >
//               <Image
//                 alt="Logo"
//                 src="/Truthink logo0.png"
//                 width={isScrolled ? 120 : 150}
//                 height={isScrolled ? 80 : 100}
//               />
//             </div>
//           </Link>

//           {/* Menu */}
//           <div className="flex xl:ml-[clamp(0rem,15vw,15rem)] items-center">
//             {menuItems.map((menu, i) => (
//               <div key={i} className="group relative">
//                 {!menu.dropdown ? (
//                   <Link
//                     href={menu.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleNavigation(menu.href);
//                     }}
//                     className={`px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 ${
//                       pathname === menu.href || clickedLink === menu.href
//                         ? "text-[#f6921e]"
//                         : "text-gray-800 hover:text-[#f6921e]"
//                     } ${
//                       isScrolled
//                         ? "py-4 text-[clamp(0.3rem,1.8vw,1.2rem)]"
//                         : "py-6 text-[clamp(0.3rem,1.8vw,1.3rem)]"
//                     }`}
//                   >
//                     {menu.title}
//                   </Link>
//                 ) : (
//                   <>
//                     <button
//                       onMouseEnter={() => setOpenDropdown(i)}
//                       onMouseLeave={() => setOpenDropdown(null)}
//                       className={`px-4 cursor-pointer rounded-lg hover:bg-blue-100 transition-all duration-200 ${
//                         pathname === menu.href || clickedLink === menu.href
//                           ? "text-[#f6921e]"
//                           : "text-gray-800 hover:text-[#f6921e]"
//                       } ${
//                         isScrolled
//                           ? "py-3 text-[clamp(0.3rem,1.8vw,1.2rem)]"
//                           : "py-6 text-[clamp(0.3rem,1.8vw,1.3rem)]"
//                       }`}
//                     >
//                       {menu.title}
//                     </button>

//                     {openDropdown === i && (
//                       <div
//                         className={`absolute overflow-y-auto top-full mt-0 h-[80vh] rounded-4xl bg-[#2271B8] shadow-lg 
//                             border border-gray-200 transition-all duration-300 px-[clamp(2rem,2vw,3rem)] py-[clamp(1rem,3vw,5rem)]
//                              ${isScrolled ? "w-[28vw]" : "w-[35vw]"}`}
//                         onMouseEnter={() => setOpenDropdown(i)}
//                         onMouseLeave={() => setOpenDropdown(null)}
//                       >
//                         {/* <h2 className="text-[#C9E5FF] text-[clamp(1rem,2vw,2rem)] mb-4 uppercase">
//                           {menu.title}
//                         </h2> */}
//                         {menu.dropdown.map((item, j) => (
//                           <Link
//                             key={j}
//                             href={item.href}
//                             onClick={(e) => {
//                               e.preventDefault();
//                               handleNavigation(item.href);
//                             }}
//                             className={`block px-4 pt-8 hover:bg-blue-50 transition-colors  ${
//                               pathname === item.href ||
//                               clickedLink === item.href
//                                 ? "text-[#f6921e]"
//                                 : "text-white hover:text-[#f6921e]"
//                             }`}
//                           >
//                             <div className="flex justify-between">
//                               <div className="flex flex-col gap-2 flex-4">
//                                 <h4 className="text-[#C9E5FF] text-[clamp(1.1rem,2vw,1.4rem)]">
//                                   {item.title}
//                                 </h4>
//                                 <p className="text-white text-[clamp(0.8rem,2vw,1rem)]">
//                                   {item.description}
//                                 </p>
//                               </div>
//                               <div>
//                                 <Image
//                                   src="/Arrow 6.png"
//                                   alt="arrow"
//                                   width={51}
//                                   height={0}
//                                   className="pt-2 flex-1"
//                                 />
//                               </div>
//                             </div>
//                             {j < menu.dropdown.length - 1 && (
//                               <hr className="text-white mt-4" />
//                             )}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </>
//                 )}
//               </div>
//             ))}

//             <Link
//               href="/contact"
//               className={`mx-4 rounded-lg bg-blue-300 hover:bg-white transition-all duration-200 ${
//                 isScrolled
//                   ? "py-2 px-5 text-[clamp(0.9rem,2vw,1.1rem)]"
//                   : "py-3 px-6 text-[clamp(1rem,2vw,1.3rem)]"
//               }`}
//             >
//               Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuItems } from "./menuItems"; // 👈 common data import
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react"; // Ideally use an icon for dropdown indicators

export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setClickedLink(null);
    setLoading(false);
  }, [pathname]);

  const handleNavigation = async (href) => {
    if (pathname !== href) {
      setClickedLink(href);
      setLoading(true);
      await router.push(href);
    }
  };

  return (
    <nav className="hidden md:block relative z-[9999]">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#f6921e] to-[#f9a826] animate-loaderAnim z-[10000]" />
      )}
      
      <div className="flex justify-center w-full">
        <div
          className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex justify-between items-center px-8 md:px-12 lg:px-16
            ${isScrolled
              ? "w-full top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-3"
              : "w-[92%] max-w-7xl top-6 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-200/40 py-4"
            }
          `}
        >
          {/* Logo Section */}
          <Link href="/" className="cursor-pointer flex-shrink-0" onClick={(e) => {
              if (pathname === "/") e.preventDefault();
              else handleNavigation("/");
          }}>
            <div className="relative transition-all duration-300">
              <Image
                alt="Truthink Logo"
                src="/Truthink logo0.png"
                width={isScrolled ? 130 : 150}
                height={isScrolled ? 45 : 55}
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Menu Items */}
          <div className="flex items-center gap-1 lg:gap-2">
            {menuItems.map((menu, i) => (
              <div key={i} className="relative group"
                   onMouseEnter={() => menu.dropdown && setOpenDropdown(i)}
                   onMouseLeave={() => setOpenDropdown(null)}
              >
                {/* Top Level Link / Button */}
                {!menu.dropdown ? (
                  <Link
                    href={menu.href}
                    onClick={(e) => { e.preventDefault(); handleNavigation(menu.href); }}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                      ${pathname === menu.href 
                        ? "text-[#f6921e] bg-orange-50" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <button
                    className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer
                      ${openDropdown === i || pathname.startsWith(menu.href)
                        ? "text-[#2271B8] bg-blue-50" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                  >
                    {menu.title}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === i ? "rotate-180" : ""}`}/>
                  </button>
                )}

                {/* Dropdown Menu */}
                {menu.dropdown && openDropdown === i && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-max min-w-[320px] animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* Arrow Pointer */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 z-10"></div>
                    
                    <div className="relative bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-20">
                        {/* Decorative Top Bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#2271B8] to-[#f6921e]"></div>
                        
                        <div className="p-2 grid gap-1">
                          {menu.dropdown.map((item, j) => (
                            <Link
                              key={j}
                              href={item.href}
                              onClick={(e) => { e.preventDefault(); handleNavigation(item.href); }}
                              className={`group flex items-start gap-4 p-3 rounded-lg transition-all duration-200
                                ${pathname === item.href ? "bg-blue-50" : "hover:bg-gray-50"}
                              `}
                            >
                              <div className="flex-1">
                                <h4 className={`text-sm font-semibold mb-0.5 transition-colors ${
                                    pathname === item.href ? "text-[#2271B8]" : "text-gray-800 group-hover:text-[#2271B8]"
                                }`}>
                                  {item.title}
                                </h4>
                                {item.description && (
                                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                              {/* Arrow icon replaces Image for cleaner load */}
                              <div className={`mt-1 text-gray-300 transition-transform duration-300 group-hover:text-[#f6921e] group-hover:translate-x-1`}>
                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                              </div>
                            </Link>
                          ))}
                        </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-gray-200">
                <Link
                href="/contact"
                onClick={(e) => { if(pathname !== '/contact') { e.preventDefault(); handleNavigation("/contact"); }}}
                className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#2271B8] text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0
                    ${isScrolled ? "px-5 py-2 text-sm" : "px-6 py-2.5 text-sm"}
                `}
                >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5c96] to-[#2271B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}