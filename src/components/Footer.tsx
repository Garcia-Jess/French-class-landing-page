import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo_nome.png"
            alt="Logo profjess"
            width={100}
            height={100}
            className="bg-blue-700 rounded-full p-3"
          />
        </div>
        <div>
          <p className="text-gray-700 mt-5">
            Desenhado e desenvolvido por Jess Garcia
          </p>
          <p className="text-gray-600 font-bold">
            &copy; 2024 ProfJess. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
