"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12 z-10 w-full">
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block px-5 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold shadow-sm text-primary"
          >
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900"
          >
            Hi, I&apos;m <span className="text-primary">Feeza</span>
          </motion.h1>

          <div className="h-12 md:h-16 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-3xl font-bold text-slate-700"
            >
              <Typewriter
                words={[
                  "B.Tech Computer Science Student",
                  "Aspiring Full Stack Developer",
                  "UI/UX Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-600 max-w-xl mx-auto md:mx-0 mb-10 text-lg leading-relaxed font-medium"
          >
            A Computer Science student passionate about exploring new technologies, building innovative solutions, and creating meaningful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center shadow-lg shadow-primary/25"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center shadow-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-[8px] border-white shadow-xl shadow-slate-200/50 group hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-2 transition-all duration-500">
            <Image 
               src="/new-profile.jpg" 
               alt="Feeza Bathul PV" 
               fill 
               className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
               priority
               sizes="(max-width: 768px) 288px, 384px"
               quality={90}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
