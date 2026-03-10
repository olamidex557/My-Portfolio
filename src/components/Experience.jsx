import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Experience({ portfolio, sectionVariant }) {
  return (
    <motion.section
      id="experience"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experience"
          title="Education and growth"
          subtitle="Academic background, practical learning, and momentum that proves I am not just pressing keys at random."
        />

        <div className="space-y-6">
          {portfolio.experience.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-300">{item.org}</p>
                </div>
                <span className="text-sm font-medium text-teal-400">
                  {item.period}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}