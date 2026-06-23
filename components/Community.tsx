const links = ["X / Twitter", "Telegram", "BscScan", "DexScreener", "PancakeSwap"];

export function Community() {
  return (
    <section id="links" className="community section-yellow">
      <div className="section-head dark-head centered">
        <span>06</span>
        <h2>JOIN COMMUNITY</h2>
      </div>
      <div className="community-links">
        {links.map((link) => (
          <a href="#" key={link}>{link}</a>
        ))}
      </div>
      <div id="dapp" className="dapp-panel">
        <h3>READY TO TAKE OFF?</h3>
        <p>Enter the SPCXDOGE DApp and start your journey.</p>
        <a href="#" className="btn btn-yellow">Enter DApp 🚀</a>
      </div>
    </section>
  );
}
