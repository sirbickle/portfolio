import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { menu, close } from "../assets";
import { LOGO2 } from "../assets";
import { getNavlinks } from "../constants";

// Importando as bandeiras
import brazilFlag from "../assets/brazil1.png";
import usaFlag from "../assets/usa1.png";
import russiaFlag from "../assets/russia1.png";

const Navbar = ({ language, setLanguage }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navLinks = getNavlinks(language);

  // Define o texto traduzido para "Início"
  const homeText = language === "en" ? "Home" : language === "ru" ? "Главная" : "Inicio";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo + Início */}
        <Link to="/" className="flex items-center" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={LOGO2} alt="logo" className="w-24 h-24 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">{homeText} &nbsp;</p>
        </Link>

        {/* Menu de Navegação */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Seletor de Idioma com Bandeiras */}
        <div className="flex items-center gap-2">
          <button onClick={() => setLanguage("pt")} className={`${language === "pt" ? "border-2 border-white" : ""} rounded-full`}>
            <img src={brazilFlag} alt="Português" className="w-8 h-8 rounded-full cursor-pointer" />
          </button>
          <button onClick={() => setLanguage("en")} className={`${language === "en" ? "border-2 border-white" : ""} rounded-full`}>
            <img src={usaFlag} alt="English" className="w-8 h-8 rounded-full cursor-pointer" />
          </button>
          <button onClick={() => setLanguage("ru")} className={`${language === "ru" ? "border-2 border-white" : ""} rounded-full`}>
            <img src={russiaFlag} alt="Русский" className="w-8 h-8 rounded-full cursor-pointer" />
          </button>
        </div>

        {/* Menu Responsivo (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => { setToggle(!toggle); setActive(nav.title); }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
