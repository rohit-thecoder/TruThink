import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Image component ko import karna na bhoolein
import CtaButton from "../CtaButton";

export default function Service4() {
  return (
    <div className="relative">
      {" "}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto py-20  px-8 md:pl-30 gap-16"
        // Note: Maine responsive layout ke liye fixed style (width/height) hata diya hai
      >
       
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/2 flex flex-3 flex-col justify-center">
          <h2 className="relative z-2 text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">
            One of the only true scalable & hands-on startup accounting firms
          </h2>

          <p className="relative z-2 text-gray-700 mb-10 text-lg leading-relaxed">
            There are many basic bookkeeping firms out there, but very few
            operationally-focused startup accounting firms like us. Our business
            model focuses around high-touch and long-term engagements, where we
            take our clients from seed all the way through exit.
          </p>

          {/* BUTTON (Style same hai, bas text badla hai) */}
          <CtaButton />
        </div>

        {/* RIGHT SECTION */}
        <div className="hidden w-full md:w-1/2 mt-10 md:mt-0 md:flex flex-2 justify-center">
          {/* Peach background container */}
          <div className=" p-8 rounded-3xl w-full max-w-lg">
            {/* --- AAPKI IMAGE YAHAN AAYEGI --- */}
            {/* 'src' ko apni 3-circle PNG image ke path se replace karein */}
            <Image
              src="https://images.pexels.com/photos/8145261/pexels-photo-8145261.jpeg" // Example: "/images/my-chart.png"
              alt="Graphite vs other accounting firms chart"
              width={700}
              height={500}
              className="w-full h-auto rounded-2xl relative z-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
