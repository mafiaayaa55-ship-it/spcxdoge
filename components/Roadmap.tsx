const phases = ['Launch', 'LP Army', 'SPCX Rewards', 'DOGE Rewards', 'Moon'];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl brush-card rounded-[2rem] p-8">
        <h2 className="black-stroke text-center text-5xl font-black italic text-white md:text-7xl">ROADMAP</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {phases.map((phase, i) => (
            <div key={phase} className="rounded-3xl border-2 border-yellow-300/40 bg-white/5 p-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-memeYellow text-3xl text-black">{i === 0 ? '🚀' : i === 4 ? '🌕' : '⭐'}</div>
              <p className="mt-4 text-sm font-black text-white/50">PHASE {i + 1}</p>
              <p className="text-xl font-black text-memeYellow">{phase}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
