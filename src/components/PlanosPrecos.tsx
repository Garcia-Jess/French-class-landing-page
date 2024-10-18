import CardPreco1 from "@/components/CardPreco1";
import CardPreco2 from "@/components/CardPreco2";
import CardPreco3 from "@/components/CardPreco3";

export default function PlanoPreco() {
  return (
    <div
      id="precos"
      className="px-10 lg:px-20 mt-5 lg:flex lg:flex-col lg:justify-center"
    >
      <div className="lg:flex lg:flex-col lg:items-center">
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold mt-10 pt-10 text-gray-800">
          Planos e Preços
        </h2>
        <p className="text-center mt-2 pt-3 text-gray-600 md:text-xl lg:text-2xl md:max-w-2xl">
          Cada plano é pensado para garantir o máximo aproveitamento, com foco
          em resultados práticos e uma metodologia interativa.
        </p>
      </div>
      <div className="lg:flex lg:justify-center mt-10 lg:gap-5">
        <CardPreco1 />
        <CardPreco2 />
        <CardPreco3 />
      </div>
    </div>
  );
}
