const cards = [
  ['SPCX GOLD', '300 USDT', '500 Seats'],
  ['SPCX DIAMOND', 'Coming Soon', 'LP Army'],
  ['SPCX LEGEND', 'Coming Soon', 'Moon Club']
];

export default function Genesis() {
  return (
    <section id="genesis" className="bg-memeYellow px-4 py-20 text-black md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="black-stroke text-center text-5xl font-black italic md:text-7xl">GENESIS SHAREHOLDER</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map(([name, price, seats]) => (
            <div key={name} className="rounded-[2rem] border-4 border-black bg-black p-6 text-white shadow-[10px_10px_0_#000] transition hover:-translate-y-2">
              <div className="rounded-3xl bg-[linear-gradient(135deg,#ffd21f,#8b5a00)] p-6 text-center">
                <div className="text-7xl">🐕</div>
                <p className="mt-3 text-3xl font-black text-black">{name}</p>
              </div>
              <div className="mt-5 flex items-center justify-between font-black">
                <span>{price}</span>
                <span className="text-memeYellow">{seats}</span>
              </div>
              <button className="mt-6 w-full rounded-2xl bg-memeYellow py-4 text-lg font-black text-black hover:bg-white">Claim Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
