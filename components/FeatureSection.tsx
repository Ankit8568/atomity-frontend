"use client";

import { motion } from "framer-motion";
import AnalyticsCard from "./AnalyticsCard";
import CloudProviderCard from "./CloudProviderCard";
import CloudHealth from "./CloudHealth";
import LiveInsights from "./LiveInsights";

export default function FeatureSection() {
  return (
    <section
      aria-labelledby="analytics-heading"
      className="relative bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-8">
        {/* ================= Analytics ================= */}
        <section
          id="analytics"
          className="scroll-mt-24"
          aria-labelledby="analytics-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
              Infrastructure Analytics
            </span>

            <h2
              id="analytics-heading"
              className="mt-6 text-4xl font-bold text-white"
            >
              Real-Time Performance Monitoring
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Track infrastructure health with live CPU, GPU, and memory
              utilization across every cloud provider.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            <AnalyticsCard
              title="CPU Usage"
              value={74}
              subtitle="Optimized performance"
              color="cyan"
            />

            <AnalyticsCard
              title="GPU Usage"
              value={61}
              subtitle="AI workloads"
              color="violet"
            />

            <AnalyticsCard
              title="Memory Usage"
              value={82}
              subtitle="Healthy allocation"
              color="emerald"
            />
          </div>
        </section>

        {/* ================= Cloud Optimization ================= */}
        <section
          id="optimization"
          className="scroll-mt-24"
          aria-labelledby="optimization-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              Cost Optimization
            </span>

            <h2
              id="optimization-heading"
              className="mt-6 text-4xl font-bold text-white"
            >
              Reduce Multi-Cloud Spending
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              AI-powered recommendations help eliminate waste, resize
              workloads, and maximize cloud efficiency.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <CloudProviderCard
              provider="AWS"
              savings="$12,450"
              monthlyCost="$48,300"
              optimization={87}
              trend="+14%"
              color="orange"
            />

            <CloudProviderCard
              provider="Azure"
              savings="$9,180"
              monthlyCost="$36,200"
              optimization={81}
              trend="+11%"
              color="cyan"
            />

            <CloudProviderCard
              provider="Google Cloud"
              savings="$7,920"
              monthlyCost="$28,900"
              optimization={89}
              trend="+16%"
              color="emerald"
            />
          </div>
        </section>

        {/* ================= Cloud Health ================= */}
        <section
          id="cloud-health"
          className="scroll-mt-24"
          aria-labelledby="cloud-health-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
              Infrastructure Health
            </span>

            <h2
              id="cloud-health-heading"
              className="mt-6 text-4xl font-bold text-white"
            >
              Everything Running Smoothly
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Monitor availability, latency, incident response, and overall
              cloud health from one unified dashboard.
            </p>
          </motion.div>

          <CloudHealth />

          <div className="mt-8">
            <LiveInsights />
          </div>
        </section>
      </div>
    </section>
  );
}