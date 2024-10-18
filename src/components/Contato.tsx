export default function Contato() {
  return (
    <section className="bg-blue-900 text-white py-16 px-10 mt-10">
      <div className="container mx-auto text-center lg:my-20">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
          Vamos Aprender um Novo Idioma?
        </h2>
        <p className="text-lg mb-10 lg:text-2xl">
          Domine o Francês e o Inglês com Aulas Interativas e Flexíveis –
          Aprenda no Seu Ritmo e Onde Estiver!
        </p>
        <div className="pt-10">
          <a
            href="https://wa.me/5591982588355" //
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 py-5 px-10 rounded-full text-2xl font-semibold hover:bg-blue-700"
          >
            Começar
          </a>
        </div>
      </div>
    </section>
  );
}
