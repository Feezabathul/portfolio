"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Palette, Lightbulb } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <GraduationCap size={24} className="text-blue-500" />,
      title: "Education",
      desc: "B.Tech CS at Cochin University of Science and Technology (2028)"
    },
    {
      icon: <Code2 size={24} className="text-emerald-500" />,
      title: "Developer",
      desc: "Aspiring Full Stack Developer building innovative digital solutions"
    },
    {
      icon: <Palette size={24} className="text-purple-500" />,
      title: "Design",
      desc: "Interested in crafting seamless UI/UX experiences"
    },
    {
      icon: <Lightbulb size={24} className="text-amber-500" />,
      title: "Exploration",
      desc: "Passionate about exploring new technologies constantly"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-slate-700 leading-relaxer mb-6 font-medium">
              Hello! I am a B.Tech Computer Science student currently studying at Cochin University of Science and Technology, expected to graduate in 2028.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              I am highly passionate about exploring the frontiers of new technologies and possess a keen interest in UI/UX design. My goal is to become a Full Stack Developer, bridging the gap between beautiful interfaces and robust backend systems.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              When I'm not coding, I enjoy learning about system architectures and analyzing engaging digital interactions to build better, more innovative digital solutions for tomorrow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="font-bold text-xl mb-2 text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-600 font-medium">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
