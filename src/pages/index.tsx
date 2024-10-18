import AulasOnline from "@/components/AulasOnline";
import BannerComoFunc from "@/components/BannerComoFunc";
import BannerNivel from "@/components/BannerNivel";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Perguntas from "@/components/Perguntas";
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
      <Perguntas />
      <Contato />
      <Footer />
    </div>
  );
}
