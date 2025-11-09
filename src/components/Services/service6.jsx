import { ArrowRight } from "lucide-react";
import CtaButton from "../CtaButton";

export default function Service6() {
  return (
    <section className=" py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Startup Program:
        </h2>

        {/* Subheading (Slightly lighter font as in image) */}
        <h3 className="text-4xl md:text-5xl text-gray-800 leading-tight mt-2">
          Special pricing for early-stage startups
        </h3>

        {/* Button */}
        <div className="flex justify-center mt-12 md:mt-14">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
