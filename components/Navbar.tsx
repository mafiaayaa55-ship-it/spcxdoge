import Image from 'next/image';

const links = ['Story', 'Token', 'Rewards', 'Fan Art', 'Roadmap', 'Links'];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-yellow-400/20 bg-black/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="SPCXDOGE logo" width={52} height={52} className="rounded-xl" priority />
          <span className="yellow-stroke text-xl font-black italic text-memeYellow md:text-2xl">SPCXDOGE</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-black uppercase md:flex">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-memeYellow">
              {item}
            </a>
          ))}
        </nav>
        <a href="#dapp" className="rounded-full border-2 border-black bg-memeYellow px-4 py-2 text-sm font-black text-black shadow-glow transition hover:-translate-y-0.5 hover:bg-white">
          Enter DApp
        </a>
      </div>
    </header>
  );
}
