import Image from "next/image";

const art = [
  "fan-moon.png",
  "fan-xenergy.png",
  "fan-rocket.png",
  "fan-king.png",
  "fan-army.png",
  "fan-lp.png",
  "fan-galaxy.png",
  "fan-wow.png",
];

export function FanArt() {
  const loop = [...art, ...art];
  return (
    <section id="fan-art" className="fan section-yellow anchor-section">
      <div className="section-head dark-head centered">
        <span>03</span>
        <h2>Fan Art</h2>
      </div>
      <div className="marquee" aria-label="SPCXDOGE fan art gallery">
        <div className="marquee-track">
          {loop.map((file, index) => (
            <div className="fan-card" key={`${file}-${index}`}>
              <Image src={`/images/${file}`} alt="SPCXDOGE fan art" width={360} height={360} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
