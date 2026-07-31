"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time Monitoring",
    description:
      "Track your cloud infrastructure with live metrics and instant updates.",
  },
  {
    title: "Secure Infrastructure",
    description:
      "Protect your applications with enterprise-grade security practices.",
  },
  {
    title: "Performance Analytics",
    description:
      "Visualize usage trends and optimize your resources efficiently.",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-slate-950 px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to monitor and manage your cloud platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-2xl">
                ☁️
              </div>

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}