const token = [
  ["Token Name", "SPCXDOGE"],
  ["Total Supply", "1,000,000,000"],
  ["Chain", "BSC"],
  ["Pair", "SPCXDOGE / USDT"],
];

const rewards = [
  ["1%", "Marketing", "Market push, community growth, brand ops"],
  ["1%", "SPCX Rewards", "Shared with LP holders"],
  ["1%", "DOGE Rewards", "Shared with LP holders"],
];

export function Token() {
  return (
    <section id="token" className="token section-dark">
      <div className="card token-card">
        <h2>Token Details</h2>
        <div className="token-list">
          {token.map(([label, value]) => (
            <div key={label} className="token-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div id="rewards" className="card rewards-card">
        <div className="card-title-row">
          <h2>Tax & Rewards</h2>
          <span className="tax-badge">3%</span>
        </div>
        <div className="reward-list">
          {rewards.map(([pct, title, text]) => (
            <div className="reward-row" key={title}>
              <b>{pct}</b>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
