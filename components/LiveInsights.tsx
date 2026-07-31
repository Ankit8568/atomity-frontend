"use client";

import { motion } from "framer-motion";
import { useCloudData } from "../hooks/useCloudData";
import MetricCard from "./MetricCard";

export default function LiveInsights() {
  const { data, isLoading, error } = useCloudData();

  if (isLoading) {
    return (
      <div className="py-12 text-center text-slate-400">
        Loading live cloud insights...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-center text-red-300">
        Failed to load cloud insights.
      </div>
    );
  }

  return (
    <section className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          Live API Data
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Live Cloud Insights
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          This section demonstrates dynamic data fetching using
          React Query with automatic caching.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {data?.map((post) => (
          <MetricCard
            key={post.id}
            title={post.title}
            value={`#${post.id}`}
          />
        ))}
      </div>
    </section>
  );
}