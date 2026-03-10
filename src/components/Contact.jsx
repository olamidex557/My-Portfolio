import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact({ portfolio, sectionVariant }) {
  return (
    <motion.section
      id="contact"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s build something useful"
          subtitle="Open to internships, junior roles, and collaborative opportunities."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href={`mailto:${portfolio.email}`}
            className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
          >
            <Mail className="text-teal-400" size={22} />
            <h3 className="mt-4 text-lg font-bold text-white">Email</h3>
            <p className="mt-2 text-sm text-slate-400">{portfolio.email}</p>
          </a>

          {portfolio.github && (
            <a
              href={portfolio.github}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
            >
              <Github className="text-teal-400" size={22} />
              <h3 className="mt-4 text-lg font-bold text-white">GitHub</h3>
              <p className="mt-2 text-sm text-slate-400">View my code and projects</p>
            </a>
          )}

          {portfolio.linkedin && (
            <a
              href={portfolio.linkedin}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]"
            >
              <Linkedin className="text-teal-400" size={22} />
              <h3 className="mt-4 text-lg font-bold text-white">LinkedIn</h3>
              <p className="mt-2 text-sm text-slate-400">Connect professionally</p>
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
}