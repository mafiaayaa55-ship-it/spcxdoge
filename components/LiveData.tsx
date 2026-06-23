const stats = [
  ["Price", "$0.000000", "live soon"],
  ["Market Cap", "$0", "after launch"],
  ["Holders", "0", "community ready"],
  ["LP Value", "$0", "launch pool"],
  ["Tax", "3%", "1 + 1 + 1"],
];

export function LiveData() {
  return (
    <section className="live section-dark">
      <div className="section-head centered">
        <span>04</span>
        <h2>Live Data</h2>
      </div>
      <div className="stats-grid">
        {stats.map(([label, value, change]) => (
          <article className="stat-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <em>{change}</em>
          </article>
        ))}
      </div>
    </section>
  );
}
