const tokenRows = [
  ['Token Name', 'SPCXDOGE'],
  ['Total Supply', '1,000,000,000'],
  ['Chain', 'BSC'],
  ['Pair', 'SPCXDOGE / USDT'],
  ['Tax', '3%']
];

const rewards = [
  ['1%', 'Marketing', 'Market push, community growth, brand ops'],
  ['1%', 'SPCX Rewards', 'Shared with LP holders'],
  ['1%', 'DOGE Rewards', 'Shared with LP holders']
];

export default function Token() {
  return (
    <section id="token" className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="brush-card rounded-[2rem] p-8">
            <h2 className="black-stroke text-4xl font-black italic text-white md:text-6xl">TOKEN DETAILS</h2>
            <div className="mt-8 space-y-4">
              {tokenRows.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between border-b border-yellow-300/20 pb-3 font-black">
                  <span className="text-white/60">{k}</span>
                  <span className="text-memeYellow">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="rewards" className="brush-card rounded-[2rem] p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="black-stroke text-4xl font-black italic text-white md:text-6xl">TAX & REWARDS</h2>
              <span className="rounded-full bg-memeYellow px-5 py-2 text-2xl font-black text-black">3%</span>
            </div>
            <div className="mt-8 grid gap-4">
              {rewards.map(([pct, name, desc]) => (
                <div key={name} className="rounded-2xl border-2 border-yellow-300/40 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-memeYellow hover:text-black">
                  <div className="flex items-center gap-5">
                    <span className="text-5xl font-black text-memeYellow group-hover:text-black">{pct}</span>
                    <div>
                      <p className="text-2xl font-black">{name}</p>
                      <p className="font-bold opacity-75">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
