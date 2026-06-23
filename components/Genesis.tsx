const tiers = [
  ["Gold", "300 USDT", "500 seats", "G"],
  ["Diamond", "Coming soon", "LP army", "D"],
  ["Legend", "Coming soon", "Moon club", "L"],
];

export function Genesis() {
  return (
    <section className="genesis section-dark">
      <div className="section-head centered">
        <span>05</span>
        <h2>Genesis Shareholder</h2>
      </div>
      <div className="tier-grid">
        {tiers.map(([name, price, tag, mark]) => (
          <article className="tier-card" key={name}>
            <div className="tier-badge">{mark}</div>
            <h3>{name}</h3>
            <div className="tier-meta">
              <span>{price}</span>
              <span>{tag}</span>
            </div>
            <a href="#community" className="btn btn-yellow full">Claim Now</a>
          </article>
        ))}
      </div>
    </section>
  );
}
