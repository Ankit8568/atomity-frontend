"use client";

import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";

interface CloudProviderCardProps {
  provider: "AWS" | "Azure" | "Google Cloud";
  savings: string;
  monthlyCost: string;
  optimization: number;
  trend: string;
  color?: "orange" | "cyan" | "emerald";
}

const glow = {
  orange: "hover:shadow-orange-500/20",
  cyan: "hover:shadow-cyan-500/20",
  emerald: "hover:shadow-emerald-500/20",
};

function ProviderLogo({
  provider,
}: {
  provider: "AWS" | "Azure" | "Google Cloud";
}) {
  switch (provider) {
    case "AWS":
      return (
        <svg
          width="34"
          height="34"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M16 41c9 7 23 7 32 0"
            stroke="#FF9900"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M21 25h6l5 14 5-14h6"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "Azure":
      return (
        <svg
          width="34"
          height="34"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M33 8L12 54h14l7-17 10 17h11L33 8z"
            fill="#0089D6"
          />
        </svg>
      );

    default:
      return (
        <svg
          width="34"
          height="34"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="20" r="8" fill="#EA4335" />
          <circle cx="21" cy="37" r="8" fill="#FBBC05" />
          <circle cx="43" cy="37" r="8" fill="#4285F4" />
          <circle cx="32" cy="47" r="8" fill="#34A853" />
        </svg>
      );
  }
}

export default function CloudProviderCard({
  provider,
  savings,
  monthlyCost,
  optimization,
  trend,
  color = "cyan",
}: CloudProviderCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 20,
      }}
      className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 shadow-2xl ${glow[color]}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
            <ProviderLogo provider={provider} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {provider}
            </h3>

            <p className="text-sm text-slate-400">
              Cloud Infrastructure
            </p>
          </div>
        </div>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {trend}
        </span>
      </div>

      <div className="mt-8">
        <ProgressBar
          value={optimization}
          color={color}
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Monthly Spend
          </p>

          <h4 className="mt-2 text-2xl font-bold text-white">
            {monthlyCost}
          </h4>
        </div>

        <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Savings
          </p>

          <h4 className="mt-2 text-2xl font-bold text-emerald-400">
            {savings}
          </h4>
        </div>
      </div>
    </motion.div>
  );
}