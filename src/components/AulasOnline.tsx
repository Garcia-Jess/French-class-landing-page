import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
export default function AulasOnline() {
  return (
    <section className="bg-gray-100 pt-3 mt-5">
      <div className="mx-5 px-2 mt-10 pt-10 max-w-6xl mx-4 lg:mx-auto lg:px-4 mt-10">
        <div className="relative flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-800">
            Vantagens das Aulas Online
          </h2>
          <p className="mt-5 text-center text-gray-600 max-w-2xl lg:text-2xl">
            Nossas aulas online são totalmente adaptadas ao seu nível e
            objetivos, proporcionando uma experiência de aprendizado prática,
            eficiente e interativa. Aprenda no conforto da sua casa, com
            flexibilidade de horários.
          </p>

          {/* Imagem de fundo com posição absoluta */}
          <div className="md:relative md:w-full md:mb-20 lg:mb-10">
            <div className="hidden md:block">
              <Image
                className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-5"
                src="/images/notebook6.png"
                alt="Foto de notebook"
                width={900}
                height={887}
              />
            </div>

            {/* Conteúdo sobre a imagem */}
            <div className="relative z-10 text-center flex flex-col items-center h-full pt-20 lg:pt-20">
              <div>
                <h2 className="text-2xl font-bold lg:text-4xl text-gray-800">
                  Por que Escolher Aulas Online
                </h2>

                {/* Lista centralizada com itens alinhados à esquerda */}
                <ul className="mt-5 space-y-4 text-left max-w-lg text-gray-900 lg:text-xl">
                  <li className="flex items-start">
                    <FaCheckCircle className="w-7 h-7 text-blue-700 mr-3" />{" "}
                    Conveniência e Conforto: Aprenda onde estiver, sem precisar
                    se deslocar.
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="w-6 h-6 text-blue-700 mr-3" />{" "}
                    Aulas Gravadas: Opção de gravar e revisar a aula quando
                    quiser.
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="w-8 h-8 text-blue-700 mr-3" />{" "}
                    Plataformas Simples: Usamos Zoom/Google Meet para uma
                    experiência fácil e direta.
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="w-6 h-6 text-blue-700 mr-3" />{" "}
                    Interatividade: Ferramentas digitais e quizzes em tempo
                    real.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ícones abaixo da imagem e da lista */}
        <div className="relative flex flex-wrap gap-10 md:gap-7 lg:gap-10 md:flex justify-center mt-20 pb-10 lg:mt-40">
          <Image
            src="/images/icone_googleclassroom.png"
            alt="Icone Google Classroom"
            width={50}
            height={50}
          />
          <Image
            src="/images/icone_googledocs.png"
            alt="Icone Google Docs"
            width={50}
            height={50}
          />
          <Image
            src="/images/icone_googledrive.png"
            alt="Icone Google Drive"
            width={50}
            height={50}
          />
          <Image
            src="/images/icone_kahoot.png"
            alt="Icone Kahoot"
            width={50}
            height={50}
          />
          <Image
            src="/images/icone_tv5monde.png"
            alt="Icone TV5Monde"
            width={50}
            height={50}
          />
          <Image
            src="/images/icone_wifi.png"
            alt="Icone WiFi"
            width={50}
            height={50}
          />
          <Image
            src="/images/icone_googlecalendar.png"
            alt="Icone Google Calendar"
            width={50}
            height={50}
          />
          <Image
            src="/images/icone_googlemeet.png"
            alt="Icone Google Meet"
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
}
