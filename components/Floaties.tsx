const words = ['WOW', 'LFG', 'GM', 'SEND IT', 'WEN MOON'];

export default function Floaties() {
  return (
    <div className="floaties" aria-hidden="true">
      {words.map((w, i) => (
        <span key={w} style={{ animationDelay: `${i * 1.2}s`, left: `${8 + i * 19}%` }}>
          {w}
        </span>
      ))}
    </div>
  );
}
