import Image from "next/image";

const art = ["fan-1.png", "fan-2.png", "fan-3.png", "fan-4.png", "fan-5.png"];

export function FanArt() {
  const loop = [...art, ...art];
  return (
    <section id="fan-art" className="fan section-yellow">
      <div className="section-head dark-head centered">
        <span>02</span>
        <h2>FAN ART</h2>
      </div>
      <div className="marquee" aria-label="SPCXDOGE fan art gallery">
        <div className="marquee-track">
          {loop.map((file, index) => (
            <div className="fan-card" key={`${file}-${index}`}>
              <Image src={`/images/${file}`} alt="SPCXDOGE fan art" width={420} height={260} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
