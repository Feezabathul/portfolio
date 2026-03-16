"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/70 backdrop-blur border-b border-black/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-extrabold text-xl tracking-tight text-primary select-none"
        >
          Feeza.
        </motion.span>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-2"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <NavItem
                key={link.href}
                label={link.label}
                href={link.href}
                isActive={isActive}
                onClick={handleNavClick}
              />
            );
          })}
        </motion.div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-primary/5 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white border-t border-slate-100"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-lg font-extrabold text-sm transition-all ${
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-slate-600 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({
  label,
  href,
  isActive,
  onClick,
}: {
  label: string;
  href: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <a
      href={href}
      onClick={(e) => onClick(e, href)}
      className={`relative px-3 py-2 rounded-md text-sm font-extrabold group transition-colors duration-200 ${
        isActive ? "text-primary" : "text-slate-600 hover:text-primary"
      }`}
    >
      <span className="relative z-10 transition-transform duration-200 inline-block group-hover:scale-105">
        {label}
      </span>
      {/* Animated underline */}
      <span
        className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-300 origin-left ${
          isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-80"
        }`}
      />
      {/* Active background highlight */}
      {isActive && (
        <motion.span
          layoutId="nav-active-bg"
          className="absolute inset-0 rounded-md bg-primary/8"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </a>
  );
}
