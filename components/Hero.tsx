"use client";

import { motion } from "framer-motion";
import DashboardPreview from "./DashboardPreview";
import Button from "./Button";
import { DASHBOARD_STATS } from "../constants/dashboard";

const heroStats = [
  {
    label: "Platform Uptime",
    value: DASHBOARD_STATS.uptime,
  },
  {
    label: "Avg. Latency",
    value: DASHBOARD_STATS.latency,
  },
  {
    label: "API Requests",
    value: DASHBOARD_STATS.requests,
  },
];
export default function Hero() {
     return (
    <section
        id="platform"
         className="relative scroll-mt-24 overflow-hidden bg-slate-950 pt-36 pb-24"
          >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[140px]" />

      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-sm font-medium text-cyan-300">
              Live Multi-Cloud Analytics
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Operate Your
            <span className="block bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
              Multi-Cloud Infrastructure
            </span>
            with Confidence.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Gain complete visibility across AWS, Azure, and Google Cloud with
            AI-powered analytics, real-time performance monitoring, and
            intelligent cost optimization—all from a single unified platform.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Start Monitoring</Button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
              View Live Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8">
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                }}
              >
                <p className="text-3xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="w-full max-w-lg"
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}