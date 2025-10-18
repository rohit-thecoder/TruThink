"use client";
import React, { useEffect } from "react";

const tiles = [
  "https://images.unsplash.com/photo-1580014317999-e9f1936787a5?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1522878129833-838a904a0e9e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1690571128844-dbd116258e3a?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?auto=format&fit=crop&w=500&q=80",
];

export default function MagicTiles() {
  useEffect(() => {
    const magicWand = document.getElementById("magic_wand");
    const tileElements = document.querySelectorAll(".tile");

    const clamp = (value, min, max) => Math.max(Math.min(value, max), min);
    const px = (value) => `${value}px`;

    const updateMouse = (mouseX, mouseY) => {
      const { innerWidth, innerHeight } = window;
      const mouse = {
        position: { x: mouseX, y: mouseY },
        decimal: { x: mouseX / innerWidth, y: mouseY / innerHeight },
        multiplier: { x: 1.3, y: 0.4 },
        offset: { x: innerWidth * -0.15, y: innerHeight * 0.1 },
        modifiedPosition: { x: 0, y: 0 },
      };
      mouse.modifiedPosition.x =
        mouse.position.x * mouse.multiplier.x + mouse.offset.x;
      mouse.modifiedPosition.y =
        mouse.position.y * mouse.multiplier.y + mouse.offset.y;
      return mouse;
    };

    const revealImages = (mouseX) => {
      tileElements.forEach((tile) => {
        const dims = tile.getBoundingClientRect();
        const relMouseX = mouseX - dims.left;
        const mouseXAsDecimal = clamp(relMouseX / dims.width, 0, 1);
        tile.style.setProperty("--opacity", mouseXAsDecimal);
        tile.style.setProperty("--blur", 1 - mouseXAsDecimal);
      });
    };

    const handleMouseMove = (e) => {
      const mouse = updateMouse(e.clientX, e.clientY);
      Object.assign(magicWand.style, {
        left: px(mouse.modifiedPosition.x),
        top: px(mouse.modifiedPosition.y),
        transform: `rotate(${mouse.decimal.x * 20 - 10}deg)`,
      });
      revealImages(mouse.modifiedPosition.x);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden flex justify-center items-center">
      {/* Magic Wand */}
      <div
        id="magic_wand"
        className="absolute w-6 sm:w-10 aspect-[1/10] rounded-3xl bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 shadow-lg z-50"
      >
        <div className="wand_cap h-1/5 w-full bg-gradient-to-r from-gray-300 via-white to-gray-300"></div>
      </div>

      {/* Tiles */}
      <div className="flex space-x-[-3rem] sm:space-x-[-5rem] relative z-10 flex-wrap justify-center">
        {tiles.map((src, i) => (
          <div
            key={i}
            className={`tile relative w-40 sm:w-80 aspect-square rounded-3xl overflow-hidden shadow-2xl grid place-items-center bg-[#212d40] mb-10 sm:mb-0`}
            style={{
              rotate: i % 2 === 0 ? "-4deg" : "4deg",
            }}
          >
            {/* Default Camera Icon */}
            <i className="fas fa-camera text-[4rem] sm:text-[8rem] text-gray-500 z-0 transition-all duration-500"></i>

            {/* Image Reveal */}
            <img
              src={src}
              alt={`tile-${i}`}
              className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500"
              style={{
                opacity: "var(--opacity, 0)",
                filter: "blur(calc(var(--blur, 1) * 10px))",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
