const steps = ["Launch", "LP Army", "SPCX Rewards", "DOGE Rewards", "Moon"];

export function Roadmap() {
  return (
    <section id="roadmap" className="roadmap section-dark anchor-section">
      <div className="card roadmap-card">
        <div className="section-head centered compact">
          <span>06</span>
          <h2>Roadmap</h2>
        </div>
        <div className="road-line">
          {steps.map((step, i) => (
            <div className="road-step" key={step}>
              <b>{i + 1}</b>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
