export default function Footer({ portfolio }) {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {portfolio.name}. Built with React and good stubborn taste.</p>

        <div className="flex items-center gap-4">
          {portfolio.github && (
            <a href={portfolio.github} className="transition hover:text-white">
              GitHub
            </a>
          )}

          {portfolio.linkedin && (
            <a href={portfolio.linkedin} className="transition hover:text-white">
              LinkedIn
            </a>
          )}

          <a href={`mailto:${portfolio.email}`} className="transition hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}