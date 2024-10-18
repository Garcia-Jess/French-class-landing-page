import { IoIosCheckmarkCircle } from "react-icons/io";

export default function CardPreco2() {
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center">
        <div className="bg-blue-900 shadow-xl rounded-2xl max-w-sm overflow-hidden transform transition-transform hover:scale-105 duration-300">
          {/* <!-- Plano Premium --> */}
          <div className="text-gray-200 text-center py-6">
            <h2 className="text-3xl font-bold">Semi-Intensivo</h2>
            <p className="text-sm mt-2">Mais foco, com flexibilidade</p>
          </div>
          {/* !-- Preço --> */}
          <div className="p-8">
            <div className="flex justify-center items-baseline">
              <h3 className="text-5xl font-bold text-white">R$450</h3>
              <span className="text-lg text-white ml-2">/mês</span>
            </div>
            {/* <!-- Benefícios --> */}
            <ul className="mt-5 space-y-4 text-left max-w-lg text-white">
              <li className="flex items-start">
                <IoIosCheckmarkCircle className="w-5 h-5 text-green-500 mr-3" />{" "}
                Aula 2 vezes por semana
              </li>
              <li className="flex items-start">
                <IoIosCheckmarkCircle className="w-5 h-5 text-green-500 mr-3" />{" "}
                Correção de atividades
              </li>
              <li className="flex items-start">
                <IoIosCheckmarkCircle className="w-5 h-5 text-green-500 mr-3" />{" "}
                Aula gravada
              </li>
              <li className="flex items-start">
                <IoIosCheckmarkCircle className="w-5 h-5 text-green-500 mr-3" />{" "}
                Grupo de conversação grátis
              </li>
            </ul>
            {/* <!-- Botão --> */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/5591982588355" //
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-900 py-3 px-10 rounded-3xl font-semibold transition-colors duration-300"
              >
                Quero
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
