"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    dropdown: [
      {
        title: "Startup & SME Consulting",
        description:
          "Helping startups and small businesses grow with strategy, planning, and operational guidance.",
        href: "/services/startup-sme-consulting",
      },
      {
        title: "Modelling and Valuation",
        description:
          "Creating financial models and valuing businesses for investment and growth.",
        href: "/services/modelling-valuation",
      },
      {
        title: "Taxation & Compliances",
        description:
          "Managing taxes and ensuring regulatory compliance for businesses efficiently.",
        href: "/services/taxation-compliances",
      },
      {
        title: "AP & AR Management",
        description:
          "Managing taxes and ensuring regulatory compliance for businesses efficiently.",
        href: "/services/ap-ar-management",
      },
    ],
  },
  {
    title: "Industries",
    dropdown: [
      {
        title: "Tech Startups",
        description: "Accounting & consulting for tech and SaaS companies.",
        href: "/industries/tech-startups",
      },
      {
        title: "Manufacturing Startups",
        description:
          "Specialized solutions for factories, logistics, and production-based companies.",
        href: "/industries/manufacturing-startups",
      },
      {
        title: "All Startups",
        description:
          "Comprehensive consulting for startups and SMEs across industries — finance, valuation, tax, and compliance made simple",
        href: "/industries/all-startup-smes",
      },
    ],
  },
  {
    title: "Resources",
    dropdown: [
      {
        title: "Free Pitchdeck Template ",
        description:
          "Download a free investor-ready pitch deck template for your startup.",
        href: "/resources/free-pitchdesk-template",
      },
      {
        title: "Valuation Calculator",
        description:
          "Use our free calculator to estimate your startup’s valuation instantly.",
        href: "/resources/valuation-calculator",
      },
      {
        title: "Burnrate Calculator",
        description: "Calculate your monthly burn rate and cash runway easily.",
        href: "/resources/burn-rate-calculator",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
  },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
     if (window.innerWidth >= 768) {
       // md breakpoint se upar hi chale
       setIsScrolled(window.scrollY > 20);
     } else {
       setIsScrolled(false);
     }
    };

    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => 
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-gray-500 shadow-md ">
      <div className="flex justify-center ">
        <div
          className={`fixed z-50 bg-amber-400 mx-auto px-[clamp(1rem,4vw,6rem)] flex justify-between items-center  transition-all duration-200  ${
            isScrolled
              ? "w-full top-0 rounded-none shadow-lg bg-white"
              : "w-[90%] top-10 rounded-2xl shadow-md bg-white "
          } `}
        >
          <Image
            alt="Logo"
            src="/Truthink logo0.png"
            width={isScrolled ? 120 : 150}
            height={isScrolled ? 80 : 100}
          />

          {/* 🖥️ Desktop Menu */}
          <div className="hidden md:flex xl:ml-[clamp(0rem,15vw,15rem)]  items-center ">
            {menuItems.map((menu, i) => (
              <div key={i} className="group">
                {/* Simple Links */}
                {!menu.dropdown ? (
                  <Link
                    href={menu?.href}
                    className={`px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 ${
                      isScrolled
                        ? "py-4 text-[clamp(0.3rem,1.8vw,1.2rem)]"
                        : "py-6 text-[clamp(0.3rem,1.8vw,1.3rem)]"
                    } `}
                  >
                    {menu?.title}
                  </Link>
                ) : (
                  <>
                    {/* Dropdown Button  */}
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === i ? null : i)
                      }
                      onMouseEnter={() => setOpenDropdown(i)} // 🧲 Hover pe open
                      onMouseLeave={() => setOpenDropdown(null)} // ❌ Mouse leave pe close
                      className={`px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 ${
                        isScrolled
                          ? "py-3 text-[clamp(0.3rem,1.8vw,1.2rem)]"
                          : "py-6 text-[clamp(0.3rem,1.8vw,1.3rem)]"
                      } `}
                    >
                      <span>{menu?.title}</span>
                    </button>

                    {/* Dropdown Content */}
                    {openDropdown === i && (
                      <div
                        className="absolute overflow-y-auto hidden scrollbar-hide top-full mt-0  w-[40%] h-[80vh] rounded-4xl bg-[#2271B8] shadow-lg border border-gray-200 group-hover:block hover:block transition-all duration-300 px-[clamp(2rem,2vw,3rem)] py-[clamp(1rem,1vw,2rem)]"
                        onMouseEnter={() => setOpenDropdown(i)} // 👈 Dropdown ke andar jane par open hi rahe
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <h2 className=" text-[#C9E5FF] text-[clamp(1rem,2vw,2rem)] mb-4 uppercase">
                          {menu.title}
                        </h2>

                        {menu.dropdown.map((item, j) => (
                          <Link
                            key={j}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 pt-8 hover:bg-blue-50 transition-colors "
                          >
                            <div className="flex justify-between">
                              <div className="flex flex-col flex-4 gap-2">
                                <h4 className="text-[#C9E5FF] text-[clamp(1.1rem,2vw,1.4rem)]">
                                  {item?.title}
                                </h4>
                                <p className="text-white text-[clamp(1rem,2vw,1.1rem)]">
                                  {item?.description}
                                </p>
                              </div>
                              <div className="pt-2 flex-1">
                                <Image
                                  src="/Arrow 6.png"
                                  alt="arrow"
                                  width={51}
                                  height={0}
                                  className=""
                                />
                              </div>
                            </div>
                            {j < menu.dropdown.length - 1 && (
                              <hr className="text-white mt-4" />
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Contact Us  */}
            <div className="hidden md:flex">
              <Link
                href="#"
                className={`  mx-4 rounded-lg bg-blue-300 hover:bg-blue-200 transition-all duration-200 ${
                  isScrolled
                    ? "py-2 px-5 text-[clamp(0.9rem,2vw,1.1rem)]"
                    : "py-4 px-7 text-[clamp(1rem,2vw,1.3rem)]"
                } `}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* 📱 Mobile Toggle Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-[70px] left-0 w-full bg-white shadow-md border-t border-gray-200 z-40">
          <ul className="flex flex-col space-y-3 p-4 text-center text-lg font-medium">
            {menuItems.map((menu, i) => (
              <li key={i}>
                {!menu.dropdown ? (
                  <Link href={menu.href}>{menu.title}</Link>
                ) : (
                  <details className="group">
                    <summary className="cursor-pointer list-none">
                      {menu.title}
                    </summary>
                    <div className="flex flex-col space-y-2 mt-2 text-gray-600">
                      {menu.dropdown.map((item, j) => (
                        <Link
                          key={j}
                          href={item.href}
                          className="hover:text-blue-600"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </li>
            ))}
            <li>
              <Link
                href="#"
                className="block bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
