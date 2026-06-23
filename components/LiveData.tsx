const stats = [
  ["Holders", "12,856", "+258 today"],
  ["LP Value", "$352,781", "+4.21%"],
  ["Treasury", "$241,352", "+3.15%"],
  ["SPCX Rewards", "1,250,000", "+1.25%"],
  ["DOGE Rewards", "65,320", "+2.08%"],
];

export function LiveData() {
  return (
    <section className="live section-dark">
      <div className="section-head centered">
        <span>03</span>
        <h2>LIVE DATA</h2>
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
