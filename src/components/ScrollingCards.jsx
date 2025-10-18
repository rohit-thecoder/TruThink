"use client";
import { motion } from "framer-motion";

const cards = [
  { 
    title: "Boba Drops", 
    desc: "Build a HTML + CSS Static Site!, Get free Boba", 
    color: "bg-orange-600", 
    link: "https://example.com/boba",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png"
  },
  { 
    title: "Cider", 
    desc: "Design, Code, and Ship an iOS app to the App Store in 30 days.", 
    color: "bg-orange-500", 
    link: "https://example.com/cider",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888857.png"
  },
  { 
    title: "Putting The 'You' In CPU", 
    desc: "Curious what happens when you run a program on your computer? Read this.", 
    color: "bg-gray-100 text-gray-900", 
    link: "https://example.com/cpu",
    logo: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png"
  },
  { 
    title: "Sprig", 
    desc: "Join hundreds of teenagers making tile-based JavaScript games", 
    color: "bg-black text-white", 
    link: "https://example.com/sprig",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
  },
  { 
    title: "Dev Quest", 
    desc: "Build 10+ small projects and master HTML, CSS, JS.", 
    color: "bg-blue-600 text-white", 
    link: "https://example.com/devquest",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919828.png"
  },
  { 
    title: "CloudSprint", 
    desc: "Learn cloud computing by deploying live apps in 2 weeks.", 
    color: "bg-purple-600 text-white", 
    link: "https://example.com/cloudsprint",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968252.png"
  },
];

export default function ScrollingCards() {
  return (
    <section>
    <div className="overflow-hidden w-full bg-white py-16 relative">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <motion.a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`relative min-w-[280px] p-6 pt-12 rounded-2xl shadow-md ${card.color} transform transition-transform duration-10 hover:shadow-xl cursor-pointer`}
          >
            {/* Floating Logo */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white flex items-center justify-center">
                <img src={card.logo} alt="logo" className="w-8 h-8 object-contain" />
              </div>
            </div>

            {/* Card Content */}
            <h3 className="text-lg font-bold mb-2 text-center">{card.title}</h3>
            <p className="text-sm leading-snug text-center">{card.desc}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
    </section>
  );
}
