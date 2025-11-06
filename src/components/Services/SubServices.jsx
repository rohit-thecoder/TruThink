"use client"
import React from 'react'
import { motion } from "framer-motion";
import ServiceCard from './ServiceCard';

const SubServices = ({services, heading}) => {
  return (
    <section className="bg-white px-[clamp(1rem,2vw,3rem)] py-[clamp(3rem,10vw,5rem)] text-black0">
      <h2 className="text-center text-[clamp(2rem,4vw,3.5rem)] font-medium mb-[clamp(2rem,4vw,4rem)]">
        {heading}
      </h2>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center justify-items-center items-stretch md:mx-[clamp(3rem,5vw,6rem)] md:my-[clamp(2rem,2vw,4rem)]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }} // Animate only once on scroll
            className="w-full flex justify-center"
          >
            <ServiceCard
              key={index}
              title={service?.title}
              description={service?.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SubServices
