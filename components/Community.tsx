const links = [
  ['X / Twitter', '#'],
  ['Telegram', '#'],
  ['BscScan', '#'],
  ['DexScreener', '#'],
  ['PancakeSwap', '#']
];

export default function Community() {
  return (
    <section id="links" className="bg-memeYellow px-4 py-20 text-black md:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="black-stroke text-5xl font-black italic md:text-7xl">JOIN COMMUNITY</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="rounded-full border-4 border-black bg-black px-7 py-4 text-lg font-black text-white shadow-[6px_6px_0_rgba(0,0,0,.45)] transition hover:-translate-y-1 hover:bg-white hover:text-black">
              {label}
            </a>
          ))}
        </div>
        <div id="dapp" className="mt-14 rounded-[2rem] border-4 border-black bg-black p-8 text-white shadow-[10px_10px_0_rgba(0,0,0,.4)]">
          <h3 className="text-4xl font-black text-memeYellow">READY TO TAKE OFF?</h3>
          <p className="mt-3 text-xl font-bold text-white/70">Enter the SPCXDOGE DApp and start your journey.</p>
          <a href="#" className="mt-6 inline-block rounded-2xl bg-memeYellow px-10 py-5 text-xl font-black text-black hover:bg-white">Enter DApp 🚀</a>
        </div>
      </div>
    </section>
  );
}
