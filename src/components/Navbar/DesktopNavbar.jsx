"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuItems } from "./menuData"; // ✅ menu data separate file mein

export default function DesktopNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 mx-auto px-[clamp(1rem,4vw,6rem)] flex justify-between items-center transition-all duration-200
      ${
        isScrolled
          ? "w-full top-0 bg-white rounded-none shadow-lg"
          : "w-[90%] top-10 bg-white rounded-2xl shadow-md"
      }
      border border-[#003B70]
    `}
    >
      <Image
        alt="Logo"
        src="/Truthink logo0.png"
        width={isScrolled ? 120 : 150}
        height={isScrolled ? 80 : 100}
      />

      <div className="hidden md:flex items-center xl:ml-[clamp(0rem,15vw,15rem)]">
        {menuItems.map((menu, i) => (
          <div key={i} className="group relative">
            {!menu.dropdown ? (
              <Link
                href={menu.href}
                className={`px-4 py-6 hover:bg-blue-100 transition-all duration-200 text-[clamp(0.3rem,1.8vw,1.2rem)]`}
              >
                {menu.title}
              </Link>
            ) : (
              <>
                <button
                  onMouseEnter={() => setOpenDropdown(i)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="px-4 py-6 hover:bg-blue-100 transition-all duration-200 text-[clamp(0.3rem,1.8vw,1.2rem)]"
                >
                  {menu.title}
                </button>

                {openDropdown === i && (
                  <div
                    className="absolute top-full mt-0 w-[40%] h-[80vh] overflow-y-auto rounded-4xl bg-[#2271B8] shadow-lg px-6 py-4"
                    onMouseEnter={() => setOpenDropdown(i)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <h2 className="text-[#C9E5FF] text-xl mb-4 uppercase">
                      {menu.title}
                    </h2>

                    {menu.dropdown.map((item, j) => (
                      <Link
                        key={j}
                        href={item.href}
                        className="block py-4 text-white hover:bg-blue-50 transition-colors"
                      >
                        <h4 className="text-[#C9E5FF] text-lg">{item.title}</h4>
                        <p className="text-white text-sm">{item.description}</p>
                        {j < menu.dropdown.length - 1 && (
                          <hr className="mt-2" />
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
          className="mx-4 rounded-lg bg-blue-300 hover:bg-blue-200 py-3 px-6"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
