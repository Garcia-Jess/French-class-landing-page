export default function BannerComoFunc() {
  return (
    <div className="text-center flex flex-col items-center h-full pt-20 px-10">
      <h2 className="text-2xl font-bold lg:text-4xl text-gray-800">
        Como Funciona?
      </h2>
      <ul className="mt-5 space-y-4 text-left font-bold max-w-lg text-gray-600">
        <li className="flex items-start">1. Agende uma Aula Experimental</li>
        <li className="flex items-start">
          2. Defina Seus Objetivos (conversa inicial gratuita)
        </li>
        <li className="flex items-start">3. Plano Personalizado de Estudo</li>
        <li className="flex items-start">4. Aulas Online Interativas</li>
        <li className="flex items-start">
          5. Progresso Monitorado com Feedback
        </li>
      </ul>
    </div>
  );
}
