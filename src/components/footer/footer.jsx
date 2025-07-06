import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

function Footer() {
  const contacts = [
    {
      id: 1,
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/krishna-thapa-2969b7220/",
    },
    { id: 2, icon: FaInstagram, link: "#" },
    { id: 3, icon: FaGithub, link: "https://github.com/krishnajithapa" },
  ];
  return (
    <footer id="contact" className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          {/* Left Section (Contact Info) */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
            <a
              href="mailto:thapakrishnaji@gmail.com"
              className="hover:text-blue-500"
            >
              <p className="text-white hover:underline">
                Email: thapakrishnaji@gmail.com
              </p>
            </a>
            <a href="tel:+9779842613340" className="text-white hover:underline">
              Phone: +977 9842613340
            </a>
          </div>

          {/* Right Section (Social Icons) */}
          <div className="flex space-x-4 justify-evenly flex-1">
            {contacts.map(({ id, icon: Icon, link }) => (
              <a
                key={id}
                href={link}
                rel="noopener noreferrer"
                className="hover:text-primary text-white"
                target="_blank"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Krishna Thapa. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
