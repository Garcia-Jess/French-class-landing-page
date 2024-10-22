import AulasOnline from "@/components/AulasOnline";
import BannerComoFunc from "@/components/BannerComoFunc";
import BannerNivel from "@/components/BannerNivel";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Perguntas from "@/components/Perguntas";
import PlanoPreco from "@/components/PlanosPrecos";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Aulas Particulares de Francês e Inglês Online - Jess Garcia
        </title>
        <link rel="icon" href="/images/favicon.png" type="image/png" />

        {/* <!-- Meta description para atrair potenciais alunos --> */}
        <meta
          name="description"
          content="Aulas particulares de Francês e Inglês online com Jess Garcia. Aprenda de forma personalizada, no seu ritmo e com materiais exclusivos. Para todos os níveis."
        />

        {/* <!-- Palavras-chave otimizadas --> */}
        <meta
          name="keywords"
          content="aulas de francês online, aulas de inglês online, professor de francês, professor de inglês, aulas particulares de francês, aulas particulares de inglês, aprender francês, aprender inglês, Jess Garcia, tutor de idiomas, francês para iniciantes, inglês para iniciantes"
        />

        <meta name="author" content="Jess Garcia" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Meta tags Open Graph para redes sociais --> */}
        <meta
          property="og:title"
          content="Aulas de Francês e Inglês Online - Jess Garcia"
        />
        <meta
          property="og:description"
          content="Ofereço aulas particulares de Francês e Inglês online para todos os níveis. Aulas personalizadas, flexíveis e com foco nos seus objetivos."
        />
        <meta property="og:image" content="/images/jess.png" />
        <meta property="og:url" content="https://www.profjess.com.br" />

        {/* <!-- Meta tags Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
    </>
  );
}
