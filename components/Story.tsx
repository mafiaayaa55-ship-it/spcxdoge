const panels = [
  ["DOGE", "The king of meme culture."],
  ["SPCX", "The spark of future value."],
  ["MERGE", "Meme meets X power."],
  ["BORN", "The X Doge enters the moon race."],
];

export function Story() {
  return (
    <section id="story" className="story section-yellow anchor-section">
      <div className="section-head dark-head">
        <span>01</span>
        <h2>The Story</h2>
      </div>
      <div className="story-grid">
        {panels.map(([title, text], i) => (
          <article className="story-card" key={title}>
            <div className="story-num">{i + 1}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
