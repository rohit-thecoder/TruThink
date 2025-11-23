"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact2() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_f40h0fl", // 🔥 Replace
        "template_ahc17sp", // 🔥 Replace
        formRef.current,
        "kGXcLxYuJcUPnXLeF" // 🔥 Replace
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current.reset();

          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Try again.");
          console.log(error);
        }
      );
  };

  return (
    <section className=" py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-4xl font-semibold text-gray-900 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Schedule an intro call{" "}
            <a href="tel:+916205693251" className="text-blue-600 underline font-medium">
              HERE
            </a>{" "}
            or send us a message below. It’s the best decision you’ll make this
            week.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center">
            <Image
              src="https://images.pexels.com/photos/14760650/pexels-photo-14760650.jpeg"
              alt="Contact Us"
              width={500}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Right Form */}
          <form ref={formRef} onSubmit={sendEmail} className="w-full lg:w-1/2 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  First Name
                </label>
                <input
                  name="first_name"
                  required
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Industry
                </label>
                <input
                  name="industry"
                  type="text"
                  placeholder="Industry type"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  How’d you hear about us?
                </label>
                <input
                  name="source"
                  type="text"
                  placeholder="Mention how you heard about us"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white text-xl font-semibold py-3 rounded-lg transition-all duration-300 cursor-pointer ${
                  loading
                    ? "bg-gray-400 "
                    : "bg-gray-400 hover:shadow-xl hover:bg-orange-600"
                }`}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {/* Success Message */}
              {sent && (
                <p className="text-green-600 text-center mt-4 font-medium">
                  ✅ Your message has been sent successfully!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
