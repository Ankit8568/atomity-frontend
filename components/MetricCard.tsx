"use client";

import { motion, useReducedMotion } from "framer-motion";

interface MetricCardProps {
  title: string;
  value: string;
}

export default function MetricCard({
  title,
  value,
}: MetricCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0, y: 20, scale: 0.95 }
      }
      whileInView={
        shouldReduceMotion
          ? {}
          : { opacity: 1, y: 0, scale: 1 }
      }
      whileHover={
        shouldReduceMotion
          ? {}
          : { y: -6, scale: 1.02 }
      }
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-cyan-400/40 hover:bg-white/10"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">{title}</p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {value}
          </h3>
        </div>

        <div className="text-3xl">☁️</div>
      </div>
    </motion.div>
  );
}