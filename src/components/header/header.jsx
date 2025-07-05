import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Menu = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNav(false); // Close the mobile menu after scrolling
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Portfolio" },
    { id: 3, text: "Skills" },
    { id: 4, text: "Contact" },
  ];

  return (
    <div className="bg-black sticky top-0 flex justify-between items-center h-24 px-4 text-white">
      {/* Logo */}
      <h1
        onClick={() => scrollToSection("about")}
        className="w-full text-3xl font-bold text-primary"
      >
        Krishna Thapa
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.text.toLowerCase())}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`md:hidden w-full  text-center left-0 text-white transition-all ease-in-out duration-500 ${
          nav ? "absolute top-24 bg-black" : "fixed top-[-100%]"
        }`}
      >
        {/* Mobile Logo */}
        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => scrollToSection(item.text.toLowerCase())}
            className="p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
