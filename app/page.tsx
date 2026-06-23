import Floaties from '@/components/Floaties';

const fanArts = [
  '/memes/meme1.png',
  '/memes/meme2.png',
  '/memes/meme3.png',
  '/memes/meme4.png',
];

const links = [
  ['X', 'Twitter'],
  ['TG', 'Telegram'],
  ['BS', 'BscScan'],
  ['DS', 'DexScreener'],
  ['PC', 'PancakeSwap'],
];

export default function Home() {
  return (
    <main>
      <Floaties />
      <nav className="nav">
        <a className="brand" href="#home"><img src="/logo.png" alt="SPCXDOGE logo" /> <b>SPCXDOGE</b></a>
        <div className="navLinks">
          <a href="#story">Story</a>
          <a href="#token">Token</a>
          <a href="#rewards">LP Rewards</a>
          <a href="#fanart">Fan Art</a>
          <a href="#links">Links</a>
        </div>
        <a className="navBtn" href="#dapp">Enter DApp</a>
      </nav>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="tag">DOGE ENERGY · X POWER · TO THE MOON</p>
          <h1>SPCXDOGE</h1>
          <h2>MEME × VALUE</h2>
          <p className="sub">The X Doge has landed. No boring finance. Just community, memes, rewards, and moon energy.</p>
          <div className="actions">
            <a className="btn yellow" href="#buy">Buy Now 🚀</a>
            <a className="btn ghost" href="#links">Join Community</a>
          </div>
        </div>
        <div className="heroArt">
          <div className="moon" />
          <img className="mascot breathe" src="/logo.png" alt="SPCXDOGE mascot" />
          <div className="rocket">🚀</div>
          <div className="speech">WOW</div>
        </div>
      </section>

      <section id="story" className="story section card wide">
        <div>
          <p className="eyebrow">Story</p>
          <h3>The X Doge</h3>
          <p>Born from DOGE energy and powered by X value, SPCXDOGE is not another meme — it is the next evolution of meme culture.</p>
        </div>
        <div className="comicDogs">
          <span>😎</span><span>🚀</span><span>🌕</span><span>💛</span>
        </div>
      </section>

      <section id="token" className="grid2 section">
        <div className="card tokenCard">
          <p className="eyebrow">Token Details</p>
          <h3>Simple. Loud. Meme.</h3>
          <ul className="facts">
            <li><span>Token Name</span><b>SPCXDOGE</b></li>
            <li><span>Total Supply</span><b>1,000,000,000</b></li>
            <li><span>Chain</span><b>BSC</b></li>
            <li><span>Pair</span><b>SPCXDOGE / USDT</b></li>
            <li><span>Tax</span><b>3%</b></li>
          </ul>
        </div>
        <div id="rewards" className="card rewardsCard">
          <p className="eyebrow">Tax & Rewards</p>
          <h3>3% Tax</h3>
          <div className="taxRows">
            <div><b>1%</b><span>Marketing</span></div>
            <div><b>1%</b><span>SPCX Rewards</span></div>
            <div><b>1%</b><span>DOGE Rewards</span></div>
          </div>
          <p className="mini">LP holders share SPCX + DOGE rewards.</p>
        </div>
      </section>

      <section className="section live card wide">
        <p className="eyebrow">Live Data</p>
        <div className="stats">
          <div><span>Holders</span><b>12,856</b><em>+255 today</em></div>
          <div><span>LP Value</span><b>$352,781</b><em>+4.21%</em></div>
          <div><span>Treasury</span><b>$241,352</b><em>+3.15%</em></div>
          <div><span>SPCX Rewards</span><b>1,250,000</b><em>+1.25%</em></div>
          <div><span>DOGE Rewards</span><b>65,320</b><em>+2.08%</em></div>
        </div>
      </section>

      <section className="section flywheel card wide">
        <p className="eyebrow">Why Hold LP?</p>
        <div className="steps">
          <div>Buy<br/><b>SPCXDOGE</b></div><span>→</span>
          <div>Add<br/><b>LP</b></div><span>→</span>
          <div>Earn<br/><b>SPCX</b></div><span>→</span>
          <div>Earn<br/><b>DOGE</b></div><span>→</span>
          <div>Repeat<br/><b>Moon</b></div>
        </div>
      </section>

      <section className="section genesis grid2">
        <div className="card">
          <p className="eyebrow">Genesis Shareholder</p>
          <h3>Become part of the SPCX legend.</h3>
          <ul className="checks">
            <li>Limited seats</li>
            <li>Exclusive rewards</li>
            <li>Community access</li>
          </ul>
          <a className="btn yellow" href="#buy">Claim Now</a>
        </div>
        <div className="card roadmap">
          <p className="eyebrow">Roadmap</p>
          <div className="roadSteps">
            <div><b>1</b><span>Launch</span></div>
            <div><b>2</b><span>LP Army</span></div>
            <div><b>3</b><span>SPCX Rewards</span></div>
            <div><b>4</b><span>DOGE Rewards</span></div>
            <div><b>5</b><span>Moon</span></div>
          </div>
        </div>
      </section>

      <section id="fanart" className="section fan card wide">
        <p className="eyebrow">Fan Art</p>
        <div className="marquee"><div className="track">
          {[...fanArts, ...fanArts].map((src, i) => <img key={i} src={src} alt="SPCXDOGE meme art" />)}
        </div></div>
      </section>

      <section id="links" className="section links card wide">
        <p className="eyebrow">Links</p>
        <div className="linkGrid">{links.map(([short, label]) => <a key={label} href="#"><b>{short}</b><span>{label}</span></a>)}</div>
      </section>

      <section id="dapp" className="section dapp card wide">
        <h3>Ready to take off?</h3>
        <p>Enter the SPCXDOGE DApp and start your journey.</p>
        <a className="btn yellow big" href="#">Enter DApp 🚀</a>
      </section>

      <footer>SPCXDOGE · WOW TO THE MOON · © 2026</footer>
    </main>
  );
}
