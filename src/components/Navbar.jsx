import { Menu } from "lucide-react";

export default function Navbar({ portfolio }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-lg font-bold tracking-wide text-white">
          {portfolio.name}
          <span className="text-teal-400">.</span>
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

          {portfolio.resume && (
            <a
              href={portfolio.resume}
              className="rounded-xl bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Resume
            </a>
          )}
        </div>

        <button className="rounded-xl border border-white/10 p-2 text-slate-200 md:hidden">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}