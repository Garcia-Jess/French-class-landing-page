import { IoIosCheckmarkCircle } from "react-icons/io";

export default function CardPreco3() {
  return (
    <div className="mt-5">
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-2xl max-w-sm overflow-hidden transform transition-transform hover:scale-105 duration-300">
          {/* <!-- Plano Premium --> */}
          <div className="text-gray-700 text-center py-6">
            <h2 className="text-3xl font-bold">Intensivo</h2>
            <p className="text-sm mt-2">
              Para quem busca fluência de forma rápida
            </p>
          </div>
          {/* !-- Preço --> */}
          <div className="p-8">
            <div className="flex justify-center items-baseline">
              <h3 className="text-5xl font-bold text-gray-900">R$650</h3>
              <span className="text-lg text-gray-500 ml-2">/mês</span>
            </div>
            {/* <!-- Benefícios --> */}
            <ul className="mt-5 space-y-4 text-left max-w-lg text-gray-600">
              <li className="flex items-start">
                <IoIosCheckmarkCircle className="w-5 h-5 text-green-500 mr-3" />{" "}
                Aula 3 vezes por semana
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
                className="bg-blue-900 text-white py-3 px-10 rounded-3xl font-semibold transition-colors duration-300 hover:bg-blue-800"
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
