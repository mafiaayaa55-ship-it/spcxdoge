const steps = [
  ['🛒', 'BUY', 'SPCXDOGE'],
  ['💧', 'ADD LP', 'TO LOCK'],
  ['🟡', 'EARN', 'SPCX REWARDS'],
  ['🐕', 'EARN', 'DOGE REWARDS'],
  ['🚀', 'REPEAT', 'TO THE MOON']
];

export default function WhyLP() {
  return (
    <section className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border-4 border-memeYellow bg-[radial-gradient(circle_at_right,rgba(255,210,31,.15),transparent_35%),#090909] p-8 shadow-glow">
        <h2 className="black-stroke text-center text-5xl font-black italic text-white md:text-7xl">WHY HOLD LP?</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {steps.map(([icon, title, desc], idx) => (
            <div key={title + desc} className="relative rounded-3xl border-2 border-yellow-300/40 bg-black/70 p-6 text-center">
              <div className="text-5xl">{icon}</div>
              <p className="mt-3 text-2xl font-black text-memeYellow">{title}</p>
              <p className="font-black text-white/70">{desc}</p>
              {idx < steps.length - 1 && <span className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-3xl font-black text-memeYellow md:block">→</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
