import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Token } from "@/components/Token";
import { FanArt } from "@/components/FanArt";
import { LiveData } from "@/components/LiveData";
import { Genesis } from "@/components/Genesis";
import { Roadmap } from "@/components/Roadmap";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <main className="site-shell">
      <BackgroundEffects />
      <Nav />
      <Hero />
      <Story />
      <Token />
      <FanArt />
      <LiveData />
      <Genesis />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  );
}
