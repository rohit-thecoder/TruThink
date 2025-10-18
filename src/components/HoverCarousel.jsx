"use client"; // ✅ Add this at the very top

import { useState } from "react";
import styles from "./HoverCarousel.module.css";

const pictures = 12;
const hoverZones = 9;
const api = "https://unsplash.it/800";

export default function HoverCarousel() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <nav className={`${styles.hoverCarousel} flex items-end w-full max-w-6xl gap-3`}>
        {Array.from({ length: pictures }).map((_, i) => (
          <a
            key={i}
            href="#"
            className={`${styles.carouselItem} ${
              hovered === i
                ? styles.active
                : hovered !== null
                ? styles.dimmed
                : ""
            }`}
            style={{ "--i": i, "--img": `url(${api}?${i})` }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={styles.img}></div>
            <aside className={styles.hoverZone}>
              {Array.from({ length: hoverZones }).map((_, z) => (
                <i key={z}></i>
              ))}
            </aside>
          </a>
        ))}
      </nav>

      <label className="fixed bottom-4 left-4 text-white cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <input id="dbg" type="checkbox" className="hidden" />
        Debug
      </label>
    </div>
  );
}
