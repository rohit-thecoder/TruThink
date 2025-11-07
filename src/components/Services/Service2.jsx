import { ArrowRight } from "lucide-react";

export default function Service2() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-start justify-between mx-auto my-20 p-8 rounded-3xl"
      style={{
        width: "1132px",
        height: "663px",
        maxWidth: "95vw",
      }}
    >
      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-[32px] md:text-[40px] font-light text-gray-900 mb-8 leading-tight">
          Why do the best founders & teams invest in startup accounting
          services?
        </h2>

        {/* BUTTON */}
        <button className="group flex items-center rounded-full overflow-hidden shadow-md cursor-pointer text-sm font-medium w-fit">
          <span className="bg-[#5EA0EF] text-white px-6 py-3 rounded-l-full">
            Request a Proposal
          </span>
          <span className="bg-[#1C64F2] text-white p-[13px] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 rounded-r-full">
            <ArrowRight className="w-5 h-5" />
          </span>
        </button>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="bg-[#FEF2E9] text-gray-800 p-8 rounded-3xl shadow-md max-w-[500px] ml-auto leading-relaxed">
          <p className="mb-4">
            Ask any second or third-time founder and they will tell you that
            they don’t mess around with accounting or financial planning. They
            get quality startup accounting services from the get-go in order to
            ensure success. Why? Because understanding the economics of a
            business is crucial for an early-stage and growing startup.
          </p>
          <p>
            Cash is king, especially when you are early on, and startups must
            have a tight outlook on cashflow, runway, capital needs, revenue and
            unit economics in order to succeed. Be among the best growing
            startups that utilize Graphite’s startup accounting services.
          </p>
        </div>
      </div>
    </section>
  );
}
