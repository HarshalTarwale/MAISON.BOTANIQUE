import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Occasions } from "@/components/sections/Occasions";
import { Collections } from "@/components/sections/Collections";
import { Atelier } from "@/components/sections/Atelier";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Almanac } from "@/components/sections/Almanac";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Occasions />
        <Collections />
        <Atelier />
        <Services />
        <Testimonials />
        <Almanac />
      </main>
      <Footer />
    </div>
  );
}
