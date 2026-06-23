import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="hero section-dark">
      <div className="hero-bg" />
      <div className="hero-copy">
        <p className="pill">DOGE ENERGY · X POWER · TO THE MOON</p>
        <h1 className="display-title">SPCXDOGE</h1>
        <h2>THE X DOGE</h2>
        <p className="hero-text">A pure meme born from DOGE energy and powered by X value.</p>
        <div className="hero-actions">
          <a href="#links" className="btn btn-yellow">Buy Now 🚀</a>
          <a href="#links" className="btn btn-outline">Join Telegram</a>
        </div>
      </div>
      <div className="hero-art" aria-label="SPCXDOGE artwork">
        <Image src="/images/hero-banner.png" width={1200} height={480} alt="SPCXDOGE meme header" priority />
      </div>
    </section>
  );
}
