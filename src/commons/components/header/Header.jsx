import React from "react";
import "./header.css";
import logo from "../../assets/Logo_BCN.png";

const Header = () => {
  return (
    <div className="header-wrap">
      <header class="w-full text-gray-700 rounded-lg shadow-sm body-font">
        <div class="container flex flex-col flex-wrap items-center px-4 py-3 mx-auto md:flex-row">
          <nav class="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
            <a
              href="#_"
              class="mr-5 font-semibold hover:text-gray-900 glow-on-hover"
            >
              Giới thiệu
            </a>
            <a
              href="#_"
              class="mr-5 font-semibold hover:text-gray-900 glow-on-hover"
            >
              About
            </a>
            <a
              href="#_"
              class="font-semibold hover:text-gray-900 glow-on-hover"
            >
              Contact
            </a>
          </nav>
          <a class="logo flex items-center order-first mb-4 lg:order-none lg:w-1/5 lg:items-center lg:justify-center md:mb-0">
            <img src={logo} alt="logo" className="h-14 w-14" />
          </a>
          <div class="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
            {/* <a href="#_" class="mr-5 font-medium hover:text-gray-900">
              Login
            </a> */}
            <button class="Btn">
              <div class="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div class="text">Admin</div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
