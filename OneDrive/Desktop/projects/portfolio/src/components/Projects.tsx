"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Peta-Parking",
      type: "Parking Management System",
      description: "Online platform to manage parking slots with real-time availability. Features a booking and cancellation system along with an admin dashboard for monitoring slots and user bookings.",
      tech: ["TypeScript", "JavaScript", "CSS", "Supabase", "Java"],
      features: [
        "Real-time slot availability",
        "Booking and cancellation system",
        "Admin dashboard monitoring",
        "Mobile-friendly design"
      ]
    },
    {
      title: "AI-Based Crop Recommendation",
      type: "Machine Learning / Agronomy",
      description: "Uses AI semantic segmentation and Hugging Face Inference API for land analysis (identifies roads, buildings, greenery, water). Provides crop suggestions based on 50+ crops using agronomic rules.",
      tech: ["Python", "FastAPI", "OpenCV", "NumPy", "HTML", "Tailwind CSS"],
      features: [
        "Semantic segmentation for land analysis",
        "Hugging Face API integration",
        "Agronomic rule-based recommendations",
        "50+ crops supported"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900"
          >
            Featured <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-primary mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-2 shadow-sm hover:shadow-xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <FolderGit2 className="text-primary" size={32} />
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-bold text-primary mb-4">{project.type}</p>
                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-2 text-sm text-slate-600 font-medium">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
