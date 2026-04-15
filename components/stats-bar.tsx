const stats = [
  { value: "500+", label: "Teachers Helped" },
  { value: "15+ Years", label: "Industry Experience" },
  { value: "Multi-Carrier", label: "Insurance Access" },
];

export function StatsBar() {
  return (
    <section className="bg-cream border-y border-primary/20 py-8">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i > 0 ? "sm:border-l sm:border-primary/20" : ""
              }`}
            >
              <p className="text-[2.5rem] font-bold leading-tight text-primary font-heading">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-foreground font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
