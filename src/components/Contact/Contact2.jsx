"use client";
import Image from "next/image";

export default function Contact2() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Schedule an intro call{" "}
            <a href="#" className="text-blue-600 underline font-medium">
              HERE
            </a>{" "}
            or send us a message below. It’s the best decision you’ll make for
            your business all week.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
              alt="Contact Us"
              width={400}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Right Form */}
          <form className="w-full lg:w-1/2 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  placeholder="Industry type"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  How’d you hear about us?
                </label>
                <input
                  type="text"
                  placeholder="Mention how you heard about us"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-gray-300 hover:bg-gray-400 text-black text-xl font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
