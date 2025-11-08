"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaTimes } from "react-icons/fa";
import { menuItems } from "./menuItems";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
   const [clickedLink, setClickedLink] = useState(null);

  // ✅ Listen when route changes (after navigation complete)
  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
      setLoading(false);
      setClickedLink(null);
    };

    // App Router: router.events nahi hota, isliye router.refresh ya pathname observe karte hain
    // Simple trick: whenever pathname changes, close menu
    handleRouteChange();
  }, [pathname]);

  // ✅ Route navigation ke time loader show karo
  const handleNavigation = async (href) => {
    if (pathname !== href) {
      setClickedLink(href); 
      setLoading(true);
      await router.push(href);
    }
  };

  useEffect(() => {
    if (open) {
      // Background scroll band
      document.body.style.overflow = "hidden";
    } else {
      // Scroll wapas allow
      document.body.style.overflow = "auto";
    }

    // Cleanup (safety ke liye)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);


  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* 🟧 Horizontal top loader */}
      {loading && <div className="loader-bar"></div>}

      
      {/* Navbar always on top */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-3 bg-white border-b border-gray-200">
          <Image alt="Logo" src="/Truthink logo0.png" width={130} height={80} />
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-[#003B70] focus:outline-none"
          >
            {open ? <FaTimes /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Overlay (separate from navbar) */}
      <div
        className={`md:hidden fixed inset-0 bg-white transition-all duration-300 ease-in-out overflow-y-auto z-10 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul
          className={`flex flex-col justify-center items-start gap-0 text-xl font-semibold text-gray-800 mt-24 transform transition-transform duration-700 ${
            open ? " opacity-100" : " opacity-0"
          }`}
        >
          {menuItems.map((menu, i) => (
            <li key={i} className="w-full px-6 ">
              {!menu.dropdown ? (
                <>
                  <Link
                    href={menu.href}
                    className={`block py-3 text-start  transition-colors duration-200 ${
                      pathname === menu.href || clickedLink === menu.href
                        ? "text-[#f6921e]"
                        : "text-gray-800 "
                    }`}
                    onClick={(e) =>{ handleNavigation(menu.href);
                      e.preventDefault();
                    }}
                  >
                    {menu.title}
                  </Link>
                  <hr className="border-gray-300 my-2 w-full" />
                </>
              ) : (
                <>
                  <div>
                    <button
                      onClick={() => toggleDropdown(i)}
                      className="flex justify-between items-start w-full py-6 text-start hover:text-[#f6921e] transition-colors duration-200"
                    >
                      <span className="">{menu.title}</span>
                      <span className="text-[#f6921e] text-lg ml-2 text-end">
                        {activeDropdown === i ? <FaTimes /> : <FaPlus />}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeDropdown === i
                          ? "h-full opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="flex flex-col items-start gap-5 py-4 text-gray-600">
                        {menu.dropdown.map((item, j) => (
                          <div key={j} className="w-full ">
                            <Link
                              key={j}
                              href={item.href}
                              className={` transition-colors duration-200 ${
                                pathname === item.href
                                  ? "text-[#f6921e]"
                                  : "text-gray-800 "
                              }`}
                              onClick={() => handleNavigation(item.href)}
                            >
                              <div className="flex flex-col ">
                                <h4 className="pt-2 text-xl ">{item.title}</h4>
                                <p className=" text-lg font-medium">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <hr className="border-gray-300 my-1 w-full" />
                </>
              )}
            </li>
          ))}

          {/* Contact Button */}
          <li className="w-full px-6 my-6 ">
            <Link
              href="#"
              className="block text-center bg-[#f6921e] text-white py-2 rounded-full hover:bg-[#e07d1c] transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
