import Image from 'next/image';

const arts = ['/fanart/fanart-1.png', '/fanart/fanart-2.png', '/fanart/fanart-3.png', '/fanart/fanart-4.png'];

export default function FanArt() {
  const loop = [...arts, ...arts];
  return (
    <section id="fan-art" className="overflow-hidden bg-memeYellow px-0 py-20 text-black">
      <h2 className="black-stroke mb-10 text-center text-5xl font-black italic text-black md:text-7xl">FAN ART</h2>
      <div className="marquee-track flex w-max gap-6 px-6">
        {loop.map((src, i) => (
          <div key={`${src}-${i}`} className="h-64 w-64 overflow-hidden rounded-[2rem] border-4 border-black bg-black shadow-[8px_8px_0_#000] md:h-80 md:w-80">
            <Image src={src} alt="SPCXDOGE fan art" width={500} height={500} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
