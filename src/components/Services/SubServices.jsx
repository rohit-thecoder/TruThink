"use client"
import React from 'react'
import { motion } from "framer-motion";
import ServiceCard from './ServiceCard';

const SubServices = ({services, heading}) => {
  return (
    <section className=" px-5 2xl:px-0 py-16 md:py-32  xl:mx-[clamp(0px,5vw,160px)]  text-black0">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium text-black0 leading-tight mb-[clamp(2rem,4vw,4rem)]">
        {heading}
      </h2>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8  items-stretch w-full">
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
