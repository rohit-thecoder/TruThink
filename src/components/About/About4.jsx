"use client";
import { motion } from "framer-motion";

export default function About4() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading with subtle motion */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-semibold text-gray-900 mb-8 font-[Poppins]"
        >
          Who we are?
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700 font-[Inter] mb-5"
        >
          Founded in 2024, Truthink brings together over a decade of experience
          from Big 4 consulting and hands-on work with early and growth-stage
          startups. Our team blends technical expertise with a practical,
          founder-first approach — simplifying complex financial and compliance
          challenges so businesses can stay focused on growth.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700 font-[Inter] mb-5"
        >
          We’ve seen the startup journey up close — from the uncertainty of
          launch to the challenges of scaling — and we know what it takes to
          navigate each stage with clarity. With a mix of sharp financial
          insight and real-world perspective, we partner with founders to turn
          complexity into clarity and ambition into action.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-700 font-[Inter]"
        >
          At Truthink, our strength lies in making finance simple and growth
          achievable — so you can focus on building, while we ensure your
          success is amplified.
        </motion.p>
      </div>
    </section>
  );
}
