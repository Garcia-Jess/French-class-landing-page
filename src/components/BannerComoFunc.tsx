export default function BannerComoFunc() {
  return (
    <div className="text-center flex flex-col items-center h-full pt-20 px-10">
      <h2 className="text-2xl font-bold lg:text-4xl text-gray-800">
        Como Funciona?
      </h2>
      <ul className="mt-5 space-y-4 text-left max-w-3xl text-gray-600 lg:text-2xl">
        <li className="flex items-start">📲 Agende uma Aula Experimental</li>
        <li className="flex items-start">
          🎯 Defina Seus Objetivos (conversa inicial gratuita)
        </li>
        <li className="flex items-start">📘 Plano Personalizado de Estudo</li>
        <li className="flex items-start">🖥️ Aulas Online Interativas</li>
        <li className="flex items-start">
          📈 Progresso Monitorado com Feedback
        </li>
      </ul>
    </div>
  );
}
