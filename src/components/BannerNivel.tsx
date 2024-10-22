import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from "next/image";

export default function BannerNivel() {
  return (
    <div
      id="nivel"
      className="bg-blue-200 px-10 lg:px-20 mt-10 pb-20 md:flex lg:gap-5"
    >
      <div className="lg:ml-20">
        <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-start mt-10 pt-20 text-gray-800">
          Ainda não sabe seu nível de francês/inglês? Faça o teste agora e
          descubra!
        </div>
        <div className="flex flex-col justify-start mt-5 text-blue-700 font-bold lg:text-2xl">
          <a
            className="flex place-content-start gap-3"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfAPSHSSr26r06dw851vPQuwZlJyBAG6LLaroNVU5AWs-9itQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer teste de <span className="text-red-500">francês</span>
            <FaArrowAltCircleRight />
          </a>
          <a
            className="flex items-center gap-3 mt-3"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeMQhSQR8cCNoKjQ95UZd1jtZ-R_gjGhk2IB160aJ-5koJPag/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fazer teste de inglês
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
      <div className="lg:mr-20">
        <Image
          className="mt-10 md:pt-20"
          src="/images/estudante_idiomas.png"
          alt="Ilustração estudante de idiomas"
          width={900}
          height={887}
        />
      </div>
    </div>
  );
}
