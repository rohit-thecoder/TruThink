"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaTimes } from "react-icons/fa";
import { menuItems } from "./menuItems";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="md:hidden fixed top-0 left-0 w-full z-20">
      {/* Top Navbar Bar */}
      <div className=" flex justify-between items-center px-6 py-3 bg-white border-b border-gray-200">
        <Image alt="Logo" src="/Truthink logo0.png" width={130} height={80} />
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-[#003B70] focus:outline-none"
        >
          {open ? <FaTimes /> : "☰"}
        </button>
      </div>

      {/* Fullscreen overlay with slide animation */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-50 ease-in-out overflow-hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Animated menu container */}
        <ul
          className={`flex flex-col items-center gap-6 text-lg font-medium text-gray-800 mt-24 transform transition-transform duration-700 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        >
          {menuItems.map((menu, i) => (
            <li key={i} className="w-full px-6">
              {!menu.dropdown ? (
                <Link
                  href={menu.href}
                  className="block py-3 text-center hover:text-[#f6921e] transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  {menu.title}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleDropdown(i)}
                    className="flex justify-between items-center w-full py-3 text-center hover:text-[#f6921e] transition-colors duration-200"
                  >
                    <span className="mx-auto">{menu.title}</span>
                    <span className="text-[#f6921e] text-lg ml-2">
                      {activeDropdown === i ? <FaTimes /> : <FaPlus />}
                    </span>
                  </button>

                  {/* Dropdown items with smooth animation */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      activeDropdown === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2 py-2 text-gray-600">
                      {menu.dropdown.map((item, j) => (
                        <Link
                          key={j}
                          href={item.href}
                          className="hover:text-[#f6921e] transition-colors duration-200"
                          onClick={() => setOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}

          {/* Contact Button */}
          <li className="w-full px-6">
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
    </nav>
  );
}
