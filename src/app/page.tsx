import { HeroSection } from "@/components/Home/hero";
import { Navbar } from "@/components/Home/navbar";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />
    </main>
  );
}
