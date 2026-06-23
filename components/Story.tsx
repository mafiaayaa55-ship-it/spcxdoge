import Image from 'next/image';

export default function Story() {
  return (
    <section id="story" className="relative bg-memeYellow px-4 py-20 text-black md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] border-4 border-black bg-black p-8 text-white shadow-[10px_10px_0_#000]">
            <h2 className="black-stroke text-5xl font-black italic text-memeYellow md:text-7xl">STORY</h2>
            <p className="mt-6 text-xl font-black leading-relaxed text-white/90">
              Born from DOGE energy and powered by X value, SPCXDOGE is not another meme — it is the next evolution of meme culture.
            </p>
            <p className="mt-5 text-lg font-bold text-white/70">One dog. One X. One mission: to the moon.</p>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-black bg-[#0b0b0b] p-6 shadow-[10px_10px_0_#000]">
            <div className="absolute right-8 top-8 rounded-full bg-white px-5 py-2 text-2xl font-black text-black">WOW</div>
            <Image src="/assets/header.png" alt="SPCXDOGE header art" width={1200} height={630} className="h-full min-h-[320px] rounded-3xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
