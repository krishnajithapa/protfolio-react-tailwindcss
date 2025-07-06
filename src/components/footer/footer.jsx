import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

/**
 * Footer component displays contact information and social media links.
 */
function Footer() {
  // Social media contacts array
  const contacts = [
    {
      id: 1,
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/krishna-thapa-2969b7220/",
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: FaInstagram,
      link: "#",
      label: "Instagram",
    },
    {
      id: 3,
      icon: FaGithub,
      link: "https://github.com/krishnajithapa",
      label: "GitHub",
    },
  ];

  return (
    <footer id="contact" className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-evenly items-center">
          {/* Contact Information */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Contact Me
            </h3>
            <a
              href="mailto:thapakrishnaji@gmail.com"
              className="hover:text-blue-500"
              aria-label="Email"
            >
              <p className="text-white hover:underline">
                Email: thapakrishnaji@gmail.com
              </p>
            </a>
            <a
              href="tel:+9779842613340"
              className="text-white hover:underline"
              aria-label="Phone"
            >
              Phone: +977 9842613340
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-evenly flex-1">
            {contacts.map(({ id, icon: Icon, link, label }) => (
              <a
                key={id}
                href={link}
                rel="noopener noreferrer"
                className="hover:text-primary text-white transition-colors"
                target="_blank"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        {/* Copyright */}
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
