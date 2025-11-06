"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { menuItems } from "./menuItems";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200">
        <Image alt="Logo" src="/Truthink logo0.png" width={130} height={80} />
        <button onClick={() => setOpen(!open)} className="text-3xl">
          ☰
        </button>
      </div>

      {open && (
        <div className="w-full bg-white shadow-md border-t border-gray-200">
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
