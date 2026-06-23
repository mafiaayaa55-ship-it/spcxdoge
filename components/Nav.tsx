import Image from "next/image";

const links = ["Story", "Token", "Rewards", "Fan Art", "Roadmap", "Links"];

export function Nav() {
  return (
    <header className="nav">
      <a className="brand" href="#top" aria-label="SPCXDOGE home">
        <Image src="/images/logo.png" width={56} height={56} alt="SPCXDOGE logo" />
        <span>SPCXDOGE</span>
      </a>
      <nav className="nav-links">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase().replaceAll(" ", "-")}`}>
            {link}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#dapp">Enter DApp</a>
    </header>
  );
}
