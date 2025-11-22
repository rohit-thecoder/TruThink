import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { IoMail } from "react-icons/io5";

const Founders = () => {
  return (
    <section className="py-10 md:py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <h2 className="text-4xl font-bold mb-12 text-black0 text-center">
          Meet The Founders
          <div className="w-24 h-[3px] bg-black mx-auto mt-3 mb-12 rounded-full"></div>
        </h2>
        {/* Founder 1 */}
        <div className="grid md:grid-cols-1 gap-10 items-start md:mt-10">
          {/* Left block */}
          <div className="flex flex-col items-center text-center md:text-left">
            <img
              src="https://images.pexels.com/photos/30767572/pexels-photo-30767572.jpeg"
              alt="Venkatesh R"
              className="w-48 h-48 rounded-xl object-cover mb-4 shadow"
            />

            <h3 className="text-2xl font-semibold text-gray-900">
              Venkatesh R
            </h3>
            <p className="text-lg text-gray-600 mb-4">Co-founder</p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/venkatesh-r-1136b2189"
                target="_blank"
              >
                <BsLinkedin className='w-8 h-8'/>
              </a>

              <a href="mailto:venkatesh@truthinkconsulting.in">
                <IoMail className='w-8 h-8'/>
              </a>
            </div>
          </div>

          {/* Right block */}
          <p className="leading-relaxed text-gray-700 text-[18px]">
            A finance professional with 6+ years of experience and a sharp eye
            for both detail and direction, Venkatesh brings a rare mix of tax
            expertise, operational leadership, and startup experience to
            Truthink. He started his career with PwC, where he worked in the
            taxation division, handling complex direct and indirect tax matters
            for diverse clients.
            <br />
            <br />
            Eager to move closer to the business side of finance, he went on to
            lead the finance and accounting function at Geeklurn, a fast-growing
            startup, where he built strong financial controls and streamlined
            reporting from the ground up.
            <br />
            <br />
            Later, as Chief of Staff – Operations at a boutique consulting firm,
            he worked directly with the founder on strategy, operations, and
            client delivery — strengthening his understanding of how businesses
            scale efficiently.
            <br />
            <br />
            At Truthink, he anchors the firm’s commitment to precision,
            practicality, and purpose-driven growth.
          </p>
        </div>

        {/* Founder 2 */}
        <div className="grid md:grid-cols-1 gap-10 items-start">
          {/* Left block */}
          <div className="flex flex-col items-center text-center md:text-left">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGKyrsYmks-9A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694544745556?e=1765411200&v=beta&t=-N6D0W5diqFC3FLxIZwdLIMq_-VF7E14PA42yNIFzK4"
              alt="Kanhaiya Bharti"
              className="w-48 h-48 rounded-xl object-cover mb-4 shadow"
            />

            <h3 className="text-2xl font-semibold text-gray-900">
              Kanhaiya Bharti
            </h3>
            <p className="text-lg text-gray-600 mb-4">Co-founder</p>

            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kbharti95" target="_blank">
                <BsLinkedin className="w-8 h-8" />
              </a>

              <a href="mailto:kanhaiya@truthinkconsulting.in">
                <IoMail className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right block */}
          <p className="leading-relaxed text-gray-700 text-[18px]">
            Chartered Accountant by profession and a problem-solver by instinct
            with 4+ years of experience, Kanhaiya brings a rare blend of
            big-firm experience and startup agility to Truthink. He began his
            career with Deloitte, where he worked on the audits of S&P 500
            companies.
            <br />
            <br />
            He later worked with tech and manufacturing startups — helping
            founders set up end-to-end finance systems from scratch. He also led
            an Accounts Payable team for an Australian MNC, improving cash flow
            and operational efficiency.
            <br />
            <br />
            Over time, he has valued multiple startups across industries,
            engaging with founders, analyzing pitch decks, and giving financial
            insights.
            <br />
            <br />
            At Truthink, he brings all of this together — turning financial data
            into direction, and helping businesses grow with clarity and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Founders
