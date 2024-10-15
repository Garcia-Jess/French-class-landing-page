import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className="">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* <!-- logo --> */}
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-900 font-bold hover:text-gray-900 gap-3"
                >
                  <Image
                    src="/images/logo_profjess.png"
                    alt="Picture of the author"
                    width={43}
                    height={43}
                  />
                  <span className="font-bold">ProfJess</span>
                </a>
              </div>
            </div>
            {/* <!-- nav left --> */}

            {/* <!-- nav right --> */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-5 px-3 font-semibold hover:text-blue-800"
              >
                Sobre
              </a>
              <a href="" className="py-5 px-3 font-bold hover:text-blue-800">
                Nívelamento
              </a>
              <a href="" className="py-5 px-3 font-bold hover:text-blue-800">
                Preços
              </a>
              <a href="" className="py-5 px-3 font-bold hover:text-blue-800">
                Perguntas
              </a>
              <a href="" className="py-5 px-3 font-bold hover:text-blue-800">
                Blog
              </a>
            </div>

            {/* <!-- MOBILE BUTTON --> */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- MOBILE MENU --> */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Sobre
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Nivelamento
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Preços
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Perguntas
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Blog
          </a>
        </div>
      </nav>
    </>
  );
}
