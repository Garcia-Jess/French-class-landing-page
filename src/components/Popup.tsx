import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";

export default function Popup({ show, closePopup }) {
  if (!show) return null;
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
      id="aboutPopup"
    >
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-sm relative">
        {/*<!-- Botão de fechar -->*/}
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-red-400 hover:text-gray-600 text-2xl"
        >
          <IoCloseCircle />
        </button>

        {/* <!-- Foto --> */}
        <div className="flex justify-center">
          <Image
            src="/images/foto_perfil_profjess.png"
            alt="Icone Google Meet"
            width={100}
            height={100}
          />
        </div>

        {/* <!-- Texto Descritivo --> */}
        <h2 className="text-center text-2xl font-bold mb-2">Jessica Garcia</h2>
        <p className="text-center text-gray-600 mb-4">
          Sou professora de francês e inglês com 8 anos de experiência e
          desenvolvedora web apaixonada por design, tecnologia e linguagens.
        </p>

        {/* <!-- Botão para LinkedIn --> */}
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/j%C3%A9ssica-garcia-b41854170/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
