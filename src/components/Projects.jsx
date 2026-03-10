import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ExternalLink, Menu } from "lucide-react";

const portfolio = {
  name: "Idowu Abdulquadri Olamide",
  title: "Frontend Developer | Computer Science Student | Building Practical Web Experiences",
  intro:
    "I build clean, responsive web applications that combine thoughtful design, usability, and practical problem-solving to create experiences people actually enjoy using.",
  about:
    "I am a Computer Science student at Afe Babalola University with a growing focus on frontend development and modern web technologies. I enjoy turning ideas into polished, accessible, and user-friendly products, and I am actively building projects that strengthen my skills in real-world problem solving, interface design, and full development workflow as I prepare for internship and junior developer opportunities.",
  quickFacts: [
    "Computer Science Student",
    "Graduating 2027",
    "Open to Internships",
    "Frontend Focused",
  ],
  skills: {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    Backend: ["Node.js", "Express"],
    Database: ["MongoDB", "MySQL", "PostgreSQL"],
    Tools: ["Git", "GitHub", "Figma", "Vercel"],
  },
  projects: [
    {
      title: "Whisper Wall",
      image: "/whisperwall.png",
      description:
        "An anonymous expression platform that allows people to share thoughts freely without revealing their identity, creating a safe and simple space for honest conversation.",
      features: [
        "Anonymous posting experience",
        "Clean responsive interface",
        "Supabase-powered backend for storing posts"
      ],
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "#",
      live: "https://whisper-wall-theta.vercel.app",
    },
    {
      title: "Project Two",
      description:
        "A placeholder project card ready to be replaced with your next strongest application or case study.",
      features: ["Feature one", "Feature two", "Feature three"],
      stack: ["React", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Project Three",
      description:
        "A placeholder project card ready for another polished project that shows your growth, technical range, and product thinking.",
      features: ["Feature one", "Feature two", "Feature three"],
      stack: ["React", "JavaScript"],
      github: "#",
      live: "#",
    },
  ],
  experience: [
    {
      title: "B.Sc. Computer Science",
      org: "Afe Babalola University",
      period: "2023 - 2027",
      details:
        "Studying Computer Science with growing experience in software development, problem solving, and building portfolio-ready web applications.",
    },
    {
      title: "Frontend Projects & Self-Learning",
      org: "Independent",
      period: "Ongoing",
      details:
        "Building responsive web applications and strengthening skills in React, UI design, and frontend architecture.",
    },
  ],
  email: "idowuabdulquadri7@gmail.com",
  github: "#",
  linkedin: "#",
  resume: "#",
};

const sectionVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-teal-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-slate-400">{subtitle}</p>}
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">
          {portfolio.name}<span className="text-teal-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {[
            ["About", "about"],
            ["Skills", "skills"],
            ["Projects", "projects"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href={portfolio.resume}
            className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Resume
          </a>
        </div>

        <button className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-teal-400">
            Reliable Builder
          </p>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {portfolio.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-slate-200">{portfolio.title}</p>
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
            <a
              href={portfolio.resume}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:border-white/20 hover:bg-white/5"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-300">
            <a href={portfolio.github} className="rounded-full border border-white/10 p-3 transition hover:bg-white/5">
              <Github size={18} />
            </a>
            <a href={portfolio.linkedin} className="rounded-full border border-white/10 p-3 transition hover:bg-white/5">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${portfolio.email}`} className="rounded-full border border-white/10 p-3 transition hover:bg-white/5">
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

function About() {
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
              <div key={fact} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-sm font-medium text-slate-200">
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Skills() {
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
            <div key={group} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
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

function Projects() {
  return (
    <motion.section
      id="projects"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Projects"
          title="Featured work"
          subtitle="A focused selection of projects that show how I think, build, and polish software."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <motion.article
              whileHover={{ y: -6 }}
              key={project.title}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5"
            >
              <div className="h-52 overflow-hidden border-b border-white/10 bg-slate-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-slate-500">
                    {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  "Project preview"
                )}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

                <div className="mt-5">
                  <p className="mb-2 text-sm font-semibold text-slate-200">Key Features</p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    {project.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Experience() {
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
            <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-300">{item.org}</p>
                </div>
                <span className="text-sm font-medium text-teal-400">{item.period}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Resume() {
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
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-400">Resume</p>
              <h3 className="mt-2 text-2xl font-bold text-white">Download my CV</h3>
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

function Contact() {
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
          <a href={`mailto:${portfolio.email}`} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
            <Mail className="text-teal-400" size={22} />
            <h3 className="mt-4 text-lg font-bold text-white">Email</h3>
            <p className="mt-2 text-sm text-slate-400">{portfolio.email}</p>
          </a>
          <a href={portfolio.github} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
            <Github className="text-teal-400" size={22} />
            <h3 className="mt-4 text-lg font-bold text-white">GitHub</h3>
            <p className="mt-2 text-sm text-slate-400">View my code and projects</p>
          </a>
          <a href={portfolio.linkedin} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.07]">
            <Linkedin className="text-teal-400" size={22} />
            <h3 className="mt-4 text-lg font-bold text-white">LinkedIn</h3>
            <p className="mt-2 text-sm text-slate-400">Connect professionally</p>
          </a>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {portfolio.name}. Built with React and good stubborn taste.</p>
        <div className="flex items-center gap-4">
          <a href={portfolio.github} className="transition hover:text-white">GitHub</a>
          <a href={portfolio.linkedin} className="transition hover:text-white">LinkedIn</a>
          <a href={`mailto:${portfolio.email}`} className="transition hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.14),transparent_55%)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
