import React, { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="text-primary bg-secondary w-full">
        <div className="w-full px-4 transition-all duration-[50ms] md:container md:mx-auto md:px-10 lg:px-20">
          <div className="flex flex-row items-center justify-between gap-4 py-4 md:flex-row md:gap-6">
            <div className="flex w-full items-center justify-between gap-8 md:w-auto lg:gap-16">
              <a href="" className="h-auto w-30">
                <img src={logo} alt="Desiree Logo" className="h-auto w-30" />
              </a>

              <nav className="hidden items-center justify-center gap-10 md:flex">
                <a href="" className="hover:underline">
                  LOCATIONS
                </a>
                <a href="" className="hover:underline">
                  EVENEMENTEN
                </a>
              </nav>
            </div>

            <div className="flex gap-6 lg:gap-32">
              <div className="hidden items-center gap-2 md:flex lg:gap-6">
                <a
                  href=""
                  className="border-primary hover:bg-primary border-2 px-6 py-1.5 transition-all hover:text-white"
                >
                  WEBSHOP
                </a>
                <a href="" className="transition-all hover:text-black">
                  <i className="fa-solid fa-user"></i>
                </a>
                <a href="" className="transition-all hover:text-black">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>

                <div className="cursor-pointer font-bold">EN</div>
              </div>

              <button
                className="flex items-center justify-center"
                onClick={() => setIsMenuOpen(true)}
              >
                <i className="fa-solid fa-bars text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="bg-secondary text-primary bg-opacity-80 fixed inset-0 z-50 transition-all">
          <div className="flex h-screen w-full flex-col items-center justify-center px-8 py-6 lg:container lg:mx-auto lg:py-15">
            <div className="flex w-full items-center justify-between">
              <a href="" className="h-auto w-40">
                <img src={logo} alt="Desiree Logo" className="h-auto w-full" />
              </a>

              <button
                className="top-6 right-8 text-4xl focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="flex h-full flex-col items-center justify-center text-center">
              <nav className="flex flex-col gap-4 text-xl font-bold">
                <div className="flex items-center justify-center gap-4 text-lg">
                  <a
                    href=""
                    className="transition-all hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="fa-solid fa-user"></i>
                  </a>
                  <a
                    href=""
                    className="transition-all hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                  </a>
                </div>
                <a
                  href=""
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  LOCATIONS
                </a>
                <a
                  href=""
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  EVENEMENTEN
                </a>
                <a
                  href=""
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WEBSHOP
                </a>
              </nav>

              <div className="bg-primary my-8 h-[1px] w-[120%]"></div>

              <nav className="flex flex-col gap-4 text-xl font-medium">
                <a
                  href=""
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  OUR STORY
                </a>
                <a
                  href=""
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FOR COMPANIES
                </a>
                <a
                  href=""
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  POINT OF SALE
                </a>
                <a
                  href=""
                  className="hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </a>

                <div className="mt-8 flex items-center justify-center gap-4 text-lg">
                  <button>EN</button>
                  <button className="text-tertiary">NL</button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
