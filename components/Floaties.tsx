const words = ['WOW', 'LFG', 'GM', 'SEND IT', 'WEN MOON', 'X DOGE'];

export default function Floaties() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {words.map((word, i) => (
        <span
          key={word}
          className="animate-floatUp absolute rounded-full border-2 border-white bg-memeYellow px-3 py-1 text-xs font-black text-black shadow-glow md:text-sm"
          style={{
            left: `${8 + i * 15}%`,
            top: `${24 + (i % 3) * 18}%`,
            animationDelay: `${i * 0.75}s`
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
