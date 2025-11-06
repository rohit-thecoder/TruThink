"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { menuItems } from "./menuData";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-md px-4 py-3 flex justify-between items-center">
      <Image alt="Logo" src="/Truthink logo0.png" width={120} height={60} />
      <button onClick={() => setOpen(!open)} className="text-2xl">
        ☰
      </button>

      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md border-t border-gray-200">
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
