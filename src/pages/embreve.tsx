import Link from "next/link";

export default function EmBreve() {
  return (
    <>
      <div
        id="embreve"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <div className="mb-6">
          <Link href="/">
            <button className="text-gray-800 font-bold text-2xl">
              ProfJess
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Blog em Breve!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Estamos preparando conteúdos incríveis para o nosso blog. Fique
            atento!
          </p>
          <Link href="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Voltar ao Início
            </button>
          </Link>
        </div>

        <div className="mt-8 text-gray-500">
          &copy; 2024 ProfJess - Todos os direitos reservados.
        </div>
      </div>
    </>
  );
}
