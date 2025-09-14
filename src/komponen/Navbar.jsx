import { useState, useEffect } from "react";
import xcodeLogo from "../assets/img/xcode.jpg";
import hamburger from "../assets/img/bar.png";
import home from "../assets/img/home.svg";
import about from "../assets/img/about.svg";
import silabus from "../assets/img/silabus.svg";
import fasilitas from "../assets/img/fasilitas.svg";
import testimoni from "../assets/img/testimoni.svg";
import team from "../assets/img/team.svg";
import client from "../assets/img/client.svg";
import contact from "../assets/img/contact.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menus = [
    { name: "Home", icon: home },
    { name: "About Us", icon: about },
    { name: "Silabus", icon: silabus },
    { name: "Fasilitas", icon: fasilitas },
    { name: "Testimonial", icon: testimoni },
    { name: "Team", icon: team },
    { name: "Our Client", icon: client },
    { name: "Contact", icon: contact },
  ];

  return (
    <header className="header">
      <nav>
        {/* Logo */}
        <img src={xcodeLogo} alt="Logo" className="logo-xcode" />

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="logo-hamburger-btn"
        >
          <img src={hamburger} alt="Menu" className="logo-hamburger" />
        </button>

        {/* Menu */}
        <ul className={`nav-laptop ${menuOpen ? "active" : ""}`}>
          {menus.map((item) => (
            <li
              key={item.name}
              className={activeMenu === item.name ? "active" : ""}
              onClick={() => 
                {setActiveMenu(item.name);
                setMenuOpen(false);
                }}
            >
               <a href={`#${item.name}`}>
              <img src={item.icon} alt={item.name} />
              <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
