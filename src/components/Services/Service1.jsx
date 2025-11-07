import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Service1({info}) {
  return (
    <section
      className="relative bg-[#F1F9FF] rounded-3xl overflow-hidden shadow-md mx-auto my-8 flex flex-col md:flex-row"
      style={{
        width: "1132px",
        height: "663px",
        maxWidth: "95vw", // makes it responsive on smaller screens
        maxHeight: "90vh",
      }}
    >
      {/* LEFT SECTION */}
      <div className="relative w-full md:w-1/2 flex flex-col justify-center">
        <div
          className="absolute"
          style={{
            top: "100px",
            left: "48px",
            right: "48px",
          }}
        >
          <h2 className="text-[32px] md:text-[36px] font-semibold text-gray-900 mb-[38px] leading-tight">
            {info?.title}
          </h2>

          <p className="text-gray-700 text-[16px] leading-relaxed mb-[52px] max-w-[400px]">
            {info?.description}
          </p>

          {/* BOOK A CALL Button */}
          <button className="group flex items-center rounded-full overflow-hidden shadow-md cursor-pointer text-sm font-medium">
            <span className="bg-[#5EA0EF] text-white px-6 py-3 rounded-l-full">
              BOOK A CALL
            </span>
            <span className="bg-[#1C64F2] text-white p-[13px] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 rounded-r-full">
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>

      {/* RIGHT SECTION (Full height image) */}
      <div className="w-full md:w-1/2 relative h-full">
        <Image
          src={info?.src}
          alt="Team working together"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
