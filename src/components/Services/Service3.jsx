// components/ServiceCards.jsx
export default function Service3() {
  const services = [
    {
      title: "Comprehensive Bookkeeping",
      description:
        "Always-on bookkeeping so your books are accurate, on an accrual basis, and ready to use for operating & growth.",
    },
    {
      title: "Tech Stack Implementation",
      description:
        "We've built and integrated hundreds of scalable startup accounting tech stacks.",
    },
    {
      title: "Bill Pay & Invoicing",
      description:
        "Your one-stop shop for everything — we handle bills, invoices, payroll, tax filings, and much more.",
    },
    {
      title: "Financial Reporting",
      description:
        "Get clear, customized reports to make confident decisions, impress investors, and stay audit-ready.",
    },
    {
      title: "Fractional CFO Services",
      description:
        "Strategic financial leadership — forecasting, fundraising, and metrics that drive growth.",
    },
    {
      title: "Payroll & Compliance",
      description:
        "Smooth payroll and compliance management so you can focus on scaling your business.",
    },
    {
      title: "Tax Strategy & Filing",
      description:
        "Save money and stay compliant with proactive startup-focused tax planning and filing.",
    },
    {
      title: "Expense Management",
      description:
        "Automated tools to track, categorize, and manage your company’s spending in real time.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Our Startup Accounting Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
            Your accounting team will consist of experienced Controllers,
            Accountants, and Bookkeepers who understand your business and tailor
            financial processes that fit your needs.
          </p>
        </div>

        {/* --- Responsive Services Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-xs sm:max-w-sm bg-white rounded-2xl border border-[#97CEFF] flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* --- Card Header --- */}
              <div className="bg-[#D8EDFF] p-5 flex-shrink-0">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                  {service.title}
                </h3>
              </div>

              {/* --- Card Body --- */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div className="overflow-hidden">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-[#2271B8] text-white py-2.5 px-4 rounded-full text-sm font-medium hover:opacity-85 transition-all duration-200">
                    GET IN TOUCH
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
