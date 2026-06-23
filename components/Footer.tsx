import Image from "next/image";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Image src="/images/logo.png" alt="SPCXDOGE logo" width={42} height={42} />
        <span>SPCXDOGE</span>
      </div>
      <p>WOW TO THE MOON · DOGE ENERGY · X POWER</p>
    </footer>
  );
}
