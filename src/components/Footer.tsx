import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <Image
            src="/images/logo_profjess.png"
            alt="Aulas Online de Francês e Inglês"
            width={50}
            height={50}
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