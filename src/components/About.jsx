import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About({ portfolio, sectionVariant }) {
  return (
    <motion.section
      id="about"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="Building useful products with clean interfaces"
          subtitle="A concise snapshot of who I am, what I do, and where I am headed."
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-slate-300">
            <p className="text-base leading-8 text-slate-300">{portfolio.about}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {portfolio.quickFacts.map((fact) => (
              <div
                key={fact}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm font-medium text-slate-200"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}