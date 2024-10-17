import AulasOnline from "@/components/AulasOnline";
import BannerComoFunc from "@/components/BannerComoFunc";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AulasOnline />
      <BannerComoFunc />
    </div>
  );
}
