import Image from "next/image";

const links = [
  ["Story", "#story"],
  ["Token", "#token"],
  ["Fan Art", "#fan-art"],
  ["Roadmap", "#roadmap"],
  ["Community", "#community"],
];

export function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="SPCXDOGE home">
        <Image src="/images/logo.png" width={54} height={54} alt="SPCXDOGE logo" priority />
        <span>SPCXDOGE</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={label} href={href}>{label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="#dapp">Enter DApp</a>
    </header>
  );
}
