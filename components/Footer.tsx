import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-yellow-300/30 bg-black px-4 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="SPCXDOGE logo" width={44} height={44} />
          <span className="font-black text-memeYellow">SPCXDOGE</span>
        </div>
        <p className="font-black text-white/60">WOW TO THE MOON · DOGE ENERGY · X POWER</p>
      </div>
    </footer>
  );
}
