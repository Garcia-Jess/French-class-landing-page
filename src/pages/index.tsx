import AulasOnline from "@/components/AulasOnline";
import BannerComoFunc from "@/components/BannerComoFunc";
import BannerNivel from "@/components/BannerNivel";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PlanoPreco from "@/components/PlanosPrecos";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AulasOnline />
      <BannerComoFunc />
      <BannerNivel />
      <PlanoPreco />
    </div>
  );
}
