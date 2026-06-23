export default function Starfield() {
  const stars = Array.from({ length: 34 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {stars.map((_, i) => (
        <span
          key={i}
          className="animate-twinkle absolute block rounded-full bg-memeYellow"
          style={{
            width: i % 5 === 0 ? 7 : 3,
            height: i % 5 === 0 ? 7 : 3,
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            animationDelay: `${(i % 8) * 0.33}s`
          }}
        />
      ))}
    </div>
  );
}
