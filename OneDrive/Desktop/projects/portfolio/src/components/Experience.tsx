"use client";

import { motion } from "framer-motion";
import { Briefcase, Trophy, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900"
          >
            Experience & <span className="text-primary">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="space-y-12">
          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid grid-cols-5 gap-8 items-center">
              <div className="hidden md:block col-span-2 text-right">
                <div className="text-xl font-bold text-primary">Peta-Era Technologies</div>
                <div className="text-slate-500 font-medium flex items-center justify-end gap-2 mt-1">
                  <Calendar size={16} /> 4-Week Internship
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center z-10 text-primary">
                <Briefcase size={20} />
              </div>
              <div className="md:col-span-2 md:col-start-4 bg-white border border-slate-200 p-6 rounded-2xl hover:border-primary/40 shadow-sm transition-colors">
                <h3 className="text-xl font-bold mb-2 md:hidden text-primary">Peta-Era Technologies</h3>
                <h4 className="text-lg font-bold mb-2 text-slate-900">Development Intern</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  Worked on real-world development projects. Built the Peta-Parking system, managing a full stack environment from database setup (Supabase) to front-end construction.
                </p>
              </div>
            </div>
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-12 bottom-0 w-px bg-slate-200 md:-translate-x-1/2 -z-10" />
          </motion.div>

          {/* Achievement Item */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 md:text-right bg-white border border-slate-200 p-6 rounded-2xl hover:border-amber-400/40 shadow-sm transition-colors order-2 md:order-1">
                <h3 className="text-xl font-bold mb-2 md:hidden text-amber-500">Hackathon Selection</h3>
                <h4 className="text-lg font-bold mb-2 text-slate-900">Makethon Shortlist</h4>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  Shortlisted for Makethon, widely recognized as South India's Largest Hackathon, highlighting competitive problem-solving skills and innovative thinking.
                </p>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center z-10 text-amber-500 order-1 md:order-2">
                <Trophy size={20} />
              </div>
              <div className="hidden md:block col-span-2 md:col-start-4 order-3">
                <div className="text-xl font-bold text-amber-500">Hackathon Selection</div>
                <div className="text-slate-500 font-medium flex items-center gap-2 mt-1">
                  南 Makethon - South India
                </div>
              </div>
            </div>
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 -top-12 bottom-0 w-px bg-slate-200 md:-translate-x-1/2 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
