export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-teal-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base text-slate-400">{subtitle}</p>}
    </div>
  );
}