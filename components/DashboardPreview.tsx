"use client";

import { motion } from "framer-motion";
import { DASHBOARD_STATS, CLOUD_PROVIDERS } from "../constants/dashboard";

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-md"
    >
      {/* Glow */}
      <div className="absolute -inset-4 rounded-[2rem] bg-cyan-500/20 blur-3xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              NimbusIQ
            </h3>

            <p className="text-sm text-slate-400">
              Infrastructure Overview
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-emerald-300">
              Live
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "CPU", value: DASHBOARD_STATS.cpu },
            { label: "GPU", value: DASHBOARD_STATS.gpu },
            { label: "RAM", value: DASHBOARD_STATS.ram },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
              }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4"
            >
              <p className="text-xs uppercase tracking-wider text-slate-400">
                {item.label}
              </p>

              <p className="mt-2 text-2xl font-bold text-white">
                {item.value}%
              </p>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Providers */}
        <div className="mt-8 space-y-5">
          {CLOUD_PROVIDERS.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.6 + index * 0.15,
              }}
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">
                  {provider.name}
                </span>

                <span className="text-sm text-slate-400">
                  {provider.usage}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${provider.usage}%` }}
                  transition={{
                    duration: 1,
                    delay: 0.8 + index * 0.15,
                  }}
                  className={`h-full rounded-full ${provider.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Uptime
            </p>

            <p className="text-lg font-semibold text-white">
              {DASHBOARD_STATS.uptime}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Latency
            </p>

            <p className="text-lg font-semibold text-white">
              {DASHBOARD_STATS.latency}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Requests
            </p>

            <p className="text-lg font-semibold text-white">
              {DASHBOARD_STATS.requests}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}