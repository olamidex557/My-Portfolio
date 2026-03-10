import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero({ portfolio }) {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-400">
            Reliable Builder
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {portfolio.name}
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-200">
            {portfolio.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            {portfolio.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-teal-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              View Projects
            </a>

            {portfolio.resume && (
              <a
                href={portfolio.resume}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
              >
                <Download size={18} />
                Download CV
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-300">
            {portfolio.github && (
              <a
                href={portfolio.github}
                className="rounded-full border border-white/10 p-3 transition hover:bg-white/5"
              >
                <Github size={18} />
              </a>
            )}

            {portfolio.linkedin && (
              <a
                href={portfolio.linkedin}
                className="rounded-full border border-white/10 p-3 transition hover:bg-white/5"
              >
                <Linkedin size={18} />
              </a>
            )}

            <a
              href={`mailto:${portfolio.email}`}
              className="rounded-full border border-white/10 p-3 transition hover:bg-white/5"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-teal-400/10 blur-3xl" />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-slate-900/80 p-10">
              <div className="flex min-h-[320px] items-center justify-center rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 text-center text-slate-400">
                Profile image or clean avatar goes here
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}