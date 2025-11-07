import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Image component ko import karna na bhoolein

export default function Service4() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto my-20 px-8 gap-16"
      // Note: Maine responsive layout ke liye fixed style (width/height) hata diya hai
    >
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
          One of the only true scalable & hands-on startup accounting firms
        </h2>

        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          There are many basic bookkeeping firms out there, but very few
          operationally-focused startup accounting firms like us. Our business
          model focuses around high-touch and long-term engagements, where we
          take our clients from seed all the way through exit.
        </p>

        {/* BUTTON (Style same hai, bas text badla hai) */}
        <button className="group flex items-center rounded-full overflow-hidden shadow-md cursor-pointer text-sm font-medium w-fit">
          <span className="bg-[#5EA0EF] text-white px-6 py-3 rounded-l-full">
            GET IN TOUCH
          </span>
          <span className="bg-[#1C64F2] text-white p-[13px] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 rounded-r-full">
            <ArrowRight className="w-5 h-5" />
          </span>
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        {/* Peach background container */}
        <div className="bg-[#FFF7EF] p-8 rounded-3xl w-full max-w-lg">
          {/* --- AAPKI IMAGE YAHAN AAYEGI --- */}
          {/* 'src' ko apni 3-circle PNG image ke path se replace karein */}
          <Image
            src="/images/S4.png" // Example: "/images/my-chart.png"
            alt="Graphite vs other accounting firms chart"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
