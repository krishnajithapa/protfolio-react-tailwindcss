import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// Navigation items array
const navItems = [
  { id: 1, text: "About" },
  { id: 2, text: "Portfolio" },
  { id: 3, text: "Experience" },
  { id: 4, text: "Skills" },
  { id: 5, text: "Contact" },
];

const Menu = () => {
  // State to manage mobile navigation visibility
  const [navOpen, setNavOpen] = useState(false);

  // Toggle mobile navigation
  const toggleNav = () => setNavOpen((prev) => !prev);

  // Scroll to section and close mobile nav
  const handleNavClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  return (
    <header className="bg-black z-50 sticky top-0 flex justify-between items-center h-24 px-4 text-white">
      {/* Logo */}
      <h1
        onClick={() => handleNavClick("about")}
        className="w-full text-3xl font-bold text-primary cursor-pointer"
      >
        Krishna Thapa
      </h1>

      {/* Desktop Navigation */}
      <nav>
        <ul className="hidden md:flex">
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              onClick={() => handleNavClick(text.toLowerCase())}
              className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              {text}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Toggle Icon */}
      <button
        onClick={toggleNav}
        className="block md:hidden focus:outline-none"
        aria-label={navOpen ? "Close menu" : "Open menu"}
      >
        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      <nav>
        <ul
          className={`md:hidden w-full text-center left-0 text-white transition-all ease-in-out duration-500 ${
            navOpen ? "absolute top-24 bg-black" : "fixed top-[-100%]"
          }`}
        >
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              onClick={() => handleNavClick(text.toLowerCase())}
              className="p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer"
            >
              {text}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
