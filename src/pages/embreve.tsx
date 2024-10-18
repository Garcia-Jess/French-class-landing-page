import Link from "next/link";
import Image from "next/image";
export default function EmBreve() {
  return (
    <>
      <div
        id="embreve"
        className="bg-gray-800 min-h-screen flex flex-col items-center justify-center"
      >
        <div className="mb-6">
          <div className="flex justify-center">
            <Image
              src="/images/logo_nome.png"
              alt="Aulas Online de Francês e Inglês"
              width={100}
              height={100}
              className="bg-blue-700 rounded-full p-3"
            />
          </div>
        </div>

        <div className="glass-blue rounded-lg shadow-lg p-8 max-w-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog em Breve!</h1>
          <p className="text-lg text-gray-400 mb-6">
            Estamos preparando conteúdos incríveis para o nosso blog. Fique
            atento!
          </p>
          <Link href="/">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600">
              Voltar ao Início
            </button>
          </Link>
        </div>

        <div className="mt-8 text-gray-400">
          &copy; 2024 ProfJess - Todos os direitos reservados.
        </div>
      </div>
    </>
  );
}
