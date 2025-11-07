"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuItems } from "./menuItems"; // 👈 common data import

export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden md:block">
      <div className="flex justify-center ">
        <div
          className={`fixed z-50 mx-auto px-[clamp(1rem,4vw,6rem)] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
            isScrolled
              ? "w-full top-0 rounded-none  bg-white/90"
              : "w-[90%] top-10 rounded-2xl  bg-white "
          }`}
        >
          <Image
            alt="Logo"
            src="/Truthink logo0.png"
            width={isScrolled ? 120 : 150}
            height={isScrolled ? 80 : 100}
          />

          {/* Menu */}
          <div className="flex xl:ml-[clamp(0rem,15vw,15rem)] items-center">
            {menuItems.map((menu, i) => (
              <div key={i} className="group relative">
                {!menu.dropdown ? (
                  <Link
                    href={menu.href}
                    className={`px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 ${
                      isScrolled
                        ? "py-4 text-[clamp(0.3rem,1.8vw,1.2rem)]"
                        : "py-6 text-[clamp(0.3rem,1.8vw,1.3rem)]"
                    }`}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onMouseEnter={() => setOpenDropdown(i)}
                      onMouseLeave={() => setOpenDropdown(null)}
                      className={`px-4 rounded-lg hover:bg-blue-100 transition-all duration-200 ${
                        isScrolled
                          ? "py-3 text-[clamp(0.3rem,1.8vw,1.2rem)]"
                          : "py-6 text-[clamp(0.3rem,1.8vw,1.3rem)]"
                      }`}
                    >
                      {menu.title}
                    </button>

                    {openDropdown === i && (
                      <div
                        className={`absolute overflow-y-auto top-full mt-0 h-[80vh] rounded-4xl bg-[#2271B8] shadow-lg 
                            border border-gray-200 transition-all duration-300 px-[clamp(2rem,2vw,3rem)] py-[clamp(1rem,1vw,2rem)]
                             ${isScrolled ? "w-[28vw]" : "w-[35vw]"}`}
                        onMouseEnter={() => setOpenDropdown(i)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <h2 className="text-[#C9E5FF] text-[clamp(1rem,2vw,2rem)] mb-4 uppercase">
                          {menu.title}
                        </h2>
                        {menu.dropdown.map((item, j) => (
                          <Link
                            key={j}
                            href={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 pt-8 hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex justify-between">
                              <div className="flex flex-col gap-2 flex-4">
                                <h4 className="text-[#C9E5FF] text-[clamp(1.1rem,2vw,1.4rem)]">
                                  {item.title}
                                </h4>
                                <p className="text-white text-[clamp(1rem,2vw,1.1rem)]">
                                  {item.description}
                                </p>
                              </div>
                              <div>
                                <Image
                                  src="/Arrow 6.png"
                                  alt="arrow"
                                  width={51}
                                  height={0}
                                  className="pt-2 flex-1"
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

            <Link
              href="#"
              className={`mx-4 rounded-lg bg-blue-300 hover:bg-blue-200 transition-all duration-200 ${
                isScrolled
                  ? "py-2 px-5 text-[clamp(0.9rem,2vw,1.1rem)]"
                  : "py-4 px-7 text-[clamp(1rem,2vw,1.3rem)]"
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
