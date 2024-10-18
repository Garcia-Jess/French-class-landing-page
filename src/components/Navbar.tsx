import { useState } from "react";
import Link from "next/link";
import Popup from "./Popup";

import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  //Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Show Popup
  const openPopup = () => {
    setShow(true);
  };

  //Hide popup
  const closePopup = () => {
    setShow(false);
  };

  return (
    <>
      <nav id="home">
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
              <button
                onClick={openPopup}
                className="py-5 px-3 font-semibold hover:text-blue-800"
              >
                Sobre
              </button>
              <a
                href="#nivel"
                className="py-5 px-3 font-bold hover:text-blue-800"
              >
                Nívelamento
              </a>
              <a
                href="#precos"
                className="py-5 px-3 font-bold hover:text-blue-800"
              >
                Preços
              </a>
              <a
                href="#perguntas"
                className="py-5 px-3 font-bold hover:text-blue-800"
              >
                Perguntas
              </a>
              <Link href="/embreve">
                <button className="py-5 px-3 font-bold hover:text-blue-800">
                  Blog
                </button>
              </Link>
            </div>

            {/* <!-- MOBILE BUTTON --> */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="mobile-menu-button">
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
        <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white`}>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-200">
            Sobre
          </a>
          <a
            href="#nivel"
            className="block py-2 px-4 text-sm hover:bg-blue-200"
          >
            Nivelamento
          </a>
          <a
            href="#precos"
            className="block py-2 px-4 text-sm hover:bg-blue-200"
          >
            Preços
          </a>
          <a
            href="#perguntas"
            className="block py-2 px-4 text-sm hover:bg-blue-200"
          >
            Perguntas
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-200">
            Blog
          </a>
        </div>
        <Popup show={show} closePopup={closePopup} />
      </nav>
    </>
  );
}
