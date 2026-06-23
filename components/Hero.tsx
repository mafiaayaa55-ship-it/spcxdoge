import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_70%_20%,rgba(255,210,31,.28),transparent_30%),linear-gradient(180deg,#050505,#090700)] pt-24">
      <div className="absolute -left-24 top-24 h-96 w-96 rounded-full bg-memeYellow/20 blur-3xl" />
      <div className="absolute -right-28 bottom-4 h-96 w-96 rounded-full bg-memeGold/20 blur-3xl" />
      <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-8">
        <div className="relative z-10">
          <div className="meme-font mb-5 inline-flex rotate-[-2deg] rounded-full border-2 border-memeYellow bg-black px-4 py-2 text-memeYellow shadow-glow">
            DOGE ENERGY · X POWER · TO THE MOON
          </div>
          <h1 className="comic-title text-6xl leading-none text-memeYellow md:text-8xl lg:text-[8.5rem]">SPCXDOGE</h1>
          <p className="black-stroke mt-4 text-3xl italic text-white md:text-5xl">THE X DOGE</p>
          <p className="mt-6 max-w-xl text-lg font-bold text-white/80 md:text-xl">
            A pure meme born from DOGE energy and powered by X value. No boring finance. Just community, memes, and moon energy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#token" className="rounded-2xl border-4 border-black bg-memeYellow px-7 py-4 text-lg font-black text-black shadow-glow transition hover:-translate-y-1 hover:bg-white">Buy Now 🚀</a>
            <a href="#links" className="rounded-2xl border-2 border-white bg-black px-7 py-4 text-lg font-black text-white transition hover:-translate-y-1 hover:border-memeYellow hover:text-memeYellow">Join Community</a>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-center">
          <div className="animate-moon absolute right-2 top-2 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,#ffe182,#b67912)] opacity-90 md:block" />
          <div className="animate-rocket absolute right-2 top-24 text-7xl">🚀</div>
          <Image src="/assets/logo.png" alt="SPCXDOGE mascot" width={620} height={620} className="relative z-10 drop-shadow-[0_0_35px_rgba(255,210,31,.55)]" priority />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[linear-gradient(180deg,transparent,#ffd21f)] opacity-90" />
    </section>
  );
}
