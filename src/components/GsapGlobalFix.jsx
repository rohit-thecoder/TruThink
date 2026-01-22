"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapGlobalFix() {
  useEffect(() => {
    const onLoad = () => {
      // Let images, fonts, layout settle
      setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 800);
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return null;
}
