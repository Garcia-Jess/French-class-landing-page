export default function Perguntas() {
  return (
    <div
      id="perguntas"
      className="px-10 lg:px-20 mt-5 lg:flex lg:flex-col lg:justify-center lg:items-center"
    >
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
                As aulas online são personalizadas de acordo com o seu nível e
                necessidades. Você terá acesso a um professor qualificado que
                conduzirá as aulas ao vivo, usando ferramentas interativas para
                garantir um aprendizado eficiente e prático. Além disso, poderá
                estudar no conforto da sua casa, com horários flexíveis.
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
                Não é necessário ter conhecimento prévio. Oferecemos aulas para
                todos os níveis, desde iniciantes até avançados. O conteúdo será
                adaptado ao seu nível atual, garantindo que você possa progredir
                de forma consistente e eficaz.
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
                As aulas têm duração de 60 minutos. No entanto, a quantidade de
                aulas por semana e a intensidade podem ser adaptadas de acordo
                com a sua disponibilidade e objetivos de aprendizado.
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
                Para começar, você precisará de um dispositivo com acesso à
                internet (computador, tablet ou smartphone), uma conexão estável
                e um fone de ouvido com microfone para garantir uma boa
                comunicação durante as aulas.
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
                Sim, oferecemos um certificado de conclusão ao final do curso,
                que comprova a carga horária e o nível de conhecimento
                adquirido. No entanto, é importante destacar que o certificado
                não é oficial, ou seja, ele não tem validade legal reconhecida
                por instituições de ensino ou órgãos governamentais. Ainda
                assim, pode ser utilizado como uma referência de seu progresso e
                dedicação no aprendizado do francês.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
