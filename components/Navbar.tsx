"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../constants/navigation";
import Button from "./Button";

interface NavLink {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/90 shadow-lg backdrop-blur-2xl"
          : "bg-slate-950/60 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <motion.a
          href="#platform"
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L4 20h4l2-5h4l2 5h4L12 2z" />
            </svg>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              NimbusIQ
            </h2>

            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Cloud Analytics
            </p>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link: NavLink) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.label}

              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm font-medium text-emerald-300">
              Live
            </span>
          </div>

          <Button>Start Monitoring</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-white lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {NAV_LINKS.map((link: NavLink) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}

              <Button>Start Monitoring</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}