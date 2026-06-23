import Navbar from '@/components/Navbar';
import Floaties from '@/components/Floaties';
import Starfield from '@/components/Starfield';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Token from '@/components/Token';
import LiveData from '@/components/LiveData';
import WhyLP from '@/components/WhyLP';
import Genesis from '@/components/Genesis';
import FanArt from '@/components/FanArt';
import Roadmap from '@/components/Roadmap';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Starfield />
      <Floaties />
      <Navbar />
      <Hero />
      <Story />
      <Token />
      <FanArt />
      <LiveData />
      <WhyLP />
      <Genesis />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  );
}
