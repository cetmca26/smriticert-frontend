import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const links = [
  { to: '#features', label: 'Features' },
  { to: '#certifications', label: 'Certifications' },
  { to: '#portfolio', label: 'Portfolio' },
  { to: '#contact', label: 'Contact' }
];


function Headerc() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header>
      <nav
        className={`group absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent`}
        data-state={menuOpen ? 'active' : ''}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            {/* Logo Section */}
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
              <a href="#" aria-label="logo" className="flex items-center space-x-2">
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="size-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div className="h-6 w-2 bg-primary"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Smriti<span className="text-primary">Cert</span>
                </span>
              </a>

              {/* Mobile Menu Button */}
              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="hamburger"
                  onClick={toggleMenu}
                  className="relative -mr-6 p-6 active:scale-95 duration-300"
                >
                  <div
                    className={`m-auto h-0.5 w-5 rounded bg-gray-950 dark:bg-white origin-top transition duration-300 ${
                      menuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></div>
                  <div
                    className={`m-auto mt-2 h-0.5 w-5 rounded bg-gray-950 dark:bg-white origin-bottom transition duration-300 ${
                      menuOpen ? '-rotate-45 -translate-y-1' : ''
                    }`}
                  ></div>
                </button>
              </div>
            </div>

            {/* Overlay Background on Mobile */}
            <div
              aria-hidden="true"
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-950/70 lg:hidden ${
                menuOpen ? 'scale-y-100 origin-top' : ''
              }`}
            ></div>

            {/* Navigation Links */}
            <div
              className={`invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent ${
                menuOpen ? 'visible opacity-100 scale-100' : ''
              }`}
            >
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <div className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.to}
                      className="hover:text-primary block transition dark:hover:text-white md:px-4"
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Call-to-Action */}
              <div className="mt-12 lg:mt-0">
                <a
                  onClick={() => navigate("/register")}
                  className="cursor-pointer relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">Register</span>
                </a>
              </div>
              <div className="mt-12 lg:mt-0">
                <a
                  onClick={() => navigate("/login")}
                  className=" cursor-pointer relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">Login</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headerc;
