const steps = ["Launch", "LP Army", "SPCX Rewards", "DOGE Rewards", "Moon"];

export function Roadmap() {
  return (
    <section id="roadmap" className="roadmap section-dark">
      <div className="card roadmap-card">
        <div className="section-head centered compact">
          <span>05</span>
          <h2>ROADMAP</h2>
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
