import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume({ portfolio, sectionVariant }) {
  if (!portfolio.resume) return null;

  return (
    <motion.section
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-white/10 bg-teal-400/10 p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-400">
                Resume
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Download my CV
              </h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Get a deeper look at my technical background, projects, and growing experience.
              </p>
            </div>

            <a
              href={portfolio.resume}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-400 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}