"use client";

import { motion } from "framer-motion";

const providers = [
  {
    name: "Amazon Web Services",
    short: "AWS",
    status: "Healthy",
    uptime: "99.99%",
    regions: "31 Regions",
    color: "bg-orange-500",
  },
  {
    name: "Microsoft Azure",
    short: "Azure",
    status: "Healthy",
    uptime: "99.98%",
    regions: "60+ Regions",
    color: "bg-cyan-500",
  },
  {
    name: "Google Cloud",
    short: "GCP",
    status: "Healthy",
    uptime: "99.97%",
    regions: "39 Regions",
    color: "bg-emerald-500",
  },
];

export default function CloudHealth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl"
    >
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Cloud Health
          </h2>

          <p className="mt-1 text-slate-400">
            Live availability across all connected cloud providers.
          </p>
        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
          ● All Systems Operational
        </div>
      </div>

      <div className="space-y-5">
        {providers.map((provider, index) => (
          <motion.div
            key={provider.short}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.12,
              duration: 0.5,
            }}
            className="rounded-2xl border border-white/5 bg-black/20 p-5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.06]"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`h-4 w-4 rounded-full ${provider.color} shadow-lg`}
                />

                <div>
                  <h3 className="font-semibold text-white">
                    {provider.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {provider.regions}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Status
                  </p>

                  <p className="font-semibold text-emerald-400">
                    {provider.status}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Availability
                  </p>

                  <p className="font-semibold text-white">
                    {provider.uptime}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}