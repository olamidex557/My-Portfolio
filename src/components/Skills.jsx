import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Skills({ portfolio, sectionVariant }) {
  return (
    <motion.section
      id="skills"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Skills"
          title="A practical toolkit"
          subtitle="Grouped cleanly for actual humans instead of fake percentage wizardry."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Object.entries(portfolio.skills).map(([group, items]) => (
            <div
              key={group}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="mb-4 text-lg font-bold text-white">{group}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}