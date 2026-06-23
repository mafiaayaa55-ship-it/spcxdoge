const stats = [
  ['Holders', '12,856', '+258 today'],
  ['LP Value', '$352,781', '+4.21%'],
  ['Treasury', '$241,352', '+3.15%'],
  ['SPCX Rewards', '1,250,000', '+1.25%'],
  ['DOGE Rewards', '65,320', '+2.08%']
];

export default function LiveData() {
  return (
    <section className="bg-black px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="black-stroke mb-8 text-center text-5xl font-black italic text-white md:text-7xl">LIVE DATA</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {stats.map(([label, value, sub]) => (
            <div key={label} className="brush-card rounded-3xl p-6 text-center transition hover:-translate-y-1 hover:shadow-glow">
              <p className="text-sm font-black uppercase text-white/60">{label}</p>
              <p className="mt-3 text-3xl font-black text-memeYellow">{value}</p>
              <p className="mt-2 text-sm font-black text-green-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
