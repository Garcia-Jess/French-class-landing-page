import { FaArrowAltCircleRight } from "react-icons/fa";

import Image from "next/image";
export default function BannerNivel() {
  return (
    <div className="bg-blue-200 px-10 lg:px-20 mt-10 pb-20 md:flex lg:gap-5">
      <div className="lg:ml-20">
        <div className="text-2xl md:text-4xl lg:text-6xl font-bold text-start mt-10 pt-20 text-gray-800">
          Ainda não sabe seu nível de francês/inglês? Faça o teste agora e
          descubra!
        </div>
        <div className="flex items-center mt-5 text-blue-700 font-bold lg:text-2xl">
          <a className="flex items-center gap-3" href="">
            Fazer teste
            <FaArrowAltCircleRight />
          </a>
        </div>
      </div>
      <div className="lg:mr-20">
        <Image
          className="mt-10 md:pt-20"
          src="/images/estudante_idiomas.png"
          alt="Foto de notebook"
          width={900}
          height={887}
        />
      </div>
    </div>
  );
}
