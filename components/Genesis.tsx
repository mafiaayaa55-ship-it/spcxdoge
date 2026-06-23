const tiers = [
  ["SPCX Gold", "300 USDT", "500 seats"],
  ["SPCX Diamond", "Coming soon", "LP army"],
  ["SPCX Legend", "Coming soon", "Moon club"],
];

export function Genesis() {
  return (
    <section className="genesis section-yellow">
      <div className="section-head dark-head centered">
        <span>04</span>
        <h2>GENESIS SHAREHOLDER</h2>
      </div>
      <div className="tier-grid">
        {tiers.map(([name, price, tag]) => (
          <article className="tier-card" key={name}>
            <div className="tier-art">🐕</div>
            <h3>{name}</h3>
            <div className="tier-meta">
              <span>{price}</span>
              <span>{tag}</span>
            </div>
            <a href="#links" className="btn btn-yellow full">Claim Now</a>
          </article>
        ))}
      </div>
    </section>
  );
}
