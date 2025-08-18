import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/Logo.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-6 px-8 md:px-32 bg-white ">
      <a href="">
        <img
          src={Logo}
          alt="Logo"
          className="w-28 xl:w-52 hover:scale-105 transition-all"
        />
      </a>

      <ul className="hidden xl:flex items-center gap-12 font-normal text-base ">
        <li className="p-3 cursor-pointer hover:text-gray-500 hover:scale-105 transition-all">
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-3 cursor-pointer hover:text-gray-500 hover:scale-105 transition-all">
          <Link to="Service" smooth={true} duration={500}>
            Service
          </Link>
        </li>
        <li className="p-3 cursor-pointer hover:text-gray-500 hover:scale-105 transition-all">
          <Link to="Feature" smooth={true} duration={500}>
            Feature
          </Link>
        </li>
        <li className="p-3 cursor-pointer hover:text-gray-500 hover:scale-105 transition-all">
          <Link to="Product" smooth={true} duration={500}>
            Product
          </Link>
        </li>
        <li className="p-3 cursor-pointer hover:text-gray-500 hover:scale-105 transition-all">
          <Link to="Testimonial" smooth={true} duration={500}>
            Testimonial
          </Link>
        </li>
        <li className="p-3 cursor-pointer hover:text-gray-500 hover:scale-105 transition-all">
          <Link to="FAQ" smooth={true} duration={500}>
            FAQ
          </Link>
        </li>
      </ul>

      <div className="hidden xl:flex items-center justify-center gap-1">
        <button className="px-5 py-2.5 rounded-lg text-primary cursor-pointer">
          Login
        </button>
        <button className="px-5 py-2.5 rounded-lg bg-primary text-white cursor-pointer">
          Signup
        </button>
      </div>

      <div
        className="xl:hidden block text-black text-5xl cursor-pointer"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {isMenuOpen && (
        <div className="absolute xl:hiddden top-18 left-0 w-full bg-green-200 flex flex-col items-center gap-1 pb-2 font-semibold text-normal">
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">
            <Link to="Home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">
            <Link to="Service" smooth={true} duration={500}>
              Service
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">
            <Link to="Feature" smooth={true} duration={500}>
              Feature
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">
            <Link to="Product" smooth={true} duration={500}>
              Product
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">
            <Link to="Testimonial" smooth={true} duration={500}>
              Testimonial
            </Link>
          </li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">
            <Link to="FAQ" smooth={true} duration={500}>
              FAQ
            </Link>
          </li>
          <div className="flex items-center justify-center gap-1">
            <button className="px-5 py-2.5 rounded-lg text-primary cursor-pointer">
              Login
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-primary text-white cursor-pointer">
              Signup
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
