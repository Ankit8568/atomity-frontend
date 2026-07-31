"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function CTASection() {
  return (
    <section className="bg-slate-950 px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600 to-cyan-600 p-12 text-center shadow-2xl"
      >
        <h2 className="text-4xl font-bold text-white">
          Ready to modernize your cloud?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Deploy faster, monitor smarter, and scale confidently with our cloud
          platform.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Start Free Trial</Button>
          <Button variant="secondary">Contact Sales</Button>
        </div>
      </motion.div>
    </section>
  );
}