"use client";

import { motion } from "framer-motion";

interface AnalyticsCardProps {
  title: string;
  value: number;
  color: "cyan" | "emerald" | "violet";
  subtitle: string;
}

const colorMap = {
  cyan: {
    stroke: "#22d3ee",
    glow: "shadow-cyan-500/20",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-400/20",
  },
  emerald: {
    stroke: "#10b981",
    glow: "shadow-emerald-500/20",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
  },
  violet: {
    stroke: "#8b5cf6",
    glow: "shadow-violet-500/20",
    badge: "bg-violet-500/10 text-violet-300 border-violet-400/20",
  },
};

export default function AnalyticsCard({
  title,
  value,
  color,
  subtitle,
}: AnalyticsCardProps) {
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (value / 100) * circumference;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl shadow-2xl ${colorMap[color].glow}`}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 right-0 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}%
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {subtitle}
          </p>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${colorMap[color].badge}`}
        >
          LIVE
        </span>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="relative h-32 w-32">
          <svg
            className="-rotate-90"
            width="128"
            height="128"
          >
            <circle
              cx="64"
              cy="64"
              r={radius}
              fill="transparent"
              stroke="rgba(255,255,255,.08)"
              strokeWidth="10"
            />

            <motion.circle
              cx="64"
              cy="64"
              r={radius}
              fill="transparent"
              stroke={colorMap[color].stroke}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{
                strokeDashoffset: circumference,
              }}
              whileInView={{
                strokeDashoffset: progress,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: "easeOut",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              {value}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
          <span>Usage Trend</span>
          <span>Last Hour</span>
        </div>

        <div className="flex h-12 items-end gap-1">
          {[30, 42, 36, 55, 48, 70, 66, 84].map((height, index) => (
            <motion.div
              key={index}
              initial={{
                height: 0,
              }}
              whileInView={{
                height,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
                duration: 0.4,
              }}
              className="flex-1 rounded-full bg-gradient-to-t from-slate-700 to-slate-300/70"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}