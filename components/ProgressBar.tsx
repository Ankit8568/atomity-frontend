"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  color?: "cyan" | "emerald" | "violet" | "orange";
}

const gradients = {
  cyan: "from-cyan-400 via-cyan-500 to-blue-500",
  emerald: "from-emerald-400 via-emerald-500 to-green-500",
  violet: "from-violet-400 via-violet-500 to-fuchsia-500",
  orange: "from-orange-400 via-orange-500 to-amber-500",
};

export default function ProgressBar({
  value,
  color = "cyan",
}: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className={`h-full rounded-full bg-gradient-to-r ${gradients[color]} shadow-lg`}
        />
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400">Optimization</span>

        <span className="font-semibold text-white">
          {value}%
        </span>
      </div>
    </div>
  );
}