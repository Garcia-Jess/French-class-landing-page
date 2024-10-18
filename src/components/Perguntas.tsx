export default function Perguntas() {
  return (
    <div className="px-10 lg:px-20 mt-5 lg:flex lg:flex-col lg:justify-center lg:items-center">
      <div className="lg:flex lg:flex-col lg:items-center">
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-bold mt-10 pt-10 text-gray-800">
          Perguntas Frequentes
        </h2>
        <p className="text-center mt-2 pt-3 text-gray-600 md:text-xl lg:text-2xl md:max-w-2xl">
          Nossas aulas online são totalmente adaptadas ao seu nível e objetivos,
          proporcionando uma experiência de aprendizado prática, eficiente e
          interativa. Aprenda no conforto da sua casa, com flexibilidade de
          horários.
        </p>
      </div>
      <section className="w-full max-w-4xl mx-auto p-4 md:mt-10">
        <div className="space-y-4">
          {/* Pergunta 1 */}
          <div className="bg-white shadow-md rounded-lg w-full lg:max-w-[1000px] mx-auto">
            <details className="p-4 cursor-pointer">
              <summary className="text-lg font-semibold">
                Como funcionam as aulas online?
              </summary>
              <p className="mt-2 text-gray-600">
                Tailwind CSS é uma framework CSS utilitária que permite criar
                layouts rapidamente usando classes pré-definidas diretamente no
                HTML.
              </p>
            </details>
          </div>

          {/* Pergunta 2 */}
          <div className="bg-white shadow-md rounded-lg w-full lg:max-w-[1000px] mx-auto">
            <details className="p-4 cursor-pointer">
              <summary className="text-lg font-semibold">
                Preciso ter conhecimento prévio?
              </summary>
              <p className="mt-2 text-gray-600">
                Você pode aprender Tailwind CSS acessando a documentação
                oficial, explorando tutoriais online, e praticando com projetos
                reais.
              </p>
            </details>
          </div>

          {/* Pergunta 3 */}
          <div className="bg-white shadow-md rounded-lg w-full lg:max-w-[1000px] mx-auto">
            <details className="p-4 cursor-pointer">
              <summary className="text-lg font-semibold">
                Qual a duração das aulas?
              </summary>
              <p className="mt-2 text-gray-600">
                Sim, Tailwind CSS pode ser facilmente integrado com React ou
                qualquer outra biblioteca ou framework JavaScript.
              </p>
            </details>
          </div>

          {/* Pergunta 4 */}
          <div className="bg-white shadow-md rounded-lg w-full lg:max-w-[1000px] mx-auto">
            <details className="p-4 cursor-pointer">
              <summary className="text-lg font-semibold">
                O que preciso para começar?
              </summary>
              <p className="mt-2 text-gray-600">
                Sim, Tailwind CSS pode ser facilmente integrado com React ou
                qualquer outra biblioteca ou framework JavaScript.
              </p>
            </details>
          </div>

          {/* Pergunta 5 */}
          <div className="bg-white shadow-md rounded-lg w-full lg:max-w-[1000px] mx-auto">
            <details className="p-4 cursor-pointer">
              <summary className="text-lg font-semibold">
                Oferece certificado de conclusão?
              </summary>
              <p className="mt-2 text-gray-600">
                Sim, Tailwind CSS pode ser facilmente integrado com React ou
                qualquer outra biblioteca ou framework JavaScript.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
