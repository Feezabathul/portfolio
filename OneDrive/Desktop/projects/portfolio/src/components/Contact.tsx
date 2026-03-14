"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Let's Connect!</h3>
            <p className="text-slate-600 font-medium mb-8 text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me!
            </p>

            <div className="space-y-6">
              <a href="mailto:feezabathul@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-primary transition-colors p-4 rounded-xl bg-white border border-slate-200 hover:border-primary/40 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Email me at</div>
                  <div className="font-bold">feezabathul@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/feeza-bathul-pv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-500/40 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-600">
                  <Linkedin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Connect on LinkedIn</div>
                  <div className="font-bold">Feeza Bathul PV</div>
                </div>
              </a>
              
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-700 hover:text-slate-900 transition-colors p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-700">
                  <Github size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">Check out my code</div>
                  <div className="font-bold">GitHub Profile</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-slate-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-slate-900"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-slate-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-slate-900"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-slate-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-bold transition-all hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
