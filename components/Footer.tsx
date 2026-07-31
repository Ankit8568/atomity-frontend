"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 lg:flex-row lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-white">NimbusIQ</h2>

          <p className="mt-2 max-w-md text-slate-400">
            AI-powered multi-cloud monitoring, infrastructure analytics, and
            intelligent cost optimization in one unified platform.
          </p>
        </div>

        <div className="flex gap-6 text-slate-400">
          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="transition hover:text-cyan-400"
          >
            Website
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-500">
        © 2026 NimbusIQ. Built with Next.js, TypeScript, Tailwind CSS, Framer
        Motion, and React Query.
      </div>
    </footer>
  );
}