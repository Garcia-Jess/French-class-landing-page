import Image from "next/image";
import ButtonAulaGratuita from "./ButtonAulaGratuita";
export default function Hero() {
  return (
    <section className="max-w-6xl mx-4 lg:mx-auto px-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Domine o <span className="text-red-500">Francês</span> e o
            <span className="text-blue-700"> Inglês </span>
            com Aulas Personalizadas
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Aulas online focadas em suas necessidades, do básico ao avançado,
            com flexibilidade de horários e material exclusivo.
          </p>
          <ButtonAulaGratuita />
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/aulas_online_frances_ingles_hero.png"
            alt="Aulas Online de Francês e Inglês"
            width={900}
            height={887}
          />
        </div>
      </div>
    </section>
  );
}
