import { useState } from "react";
import { LOGO4 } from "../assets";
import Typewriter from "react-ts-typewriter";
import { Link } from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState("");

  return (
    <div className="bg-black-200 sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-0">
      <div className="flex justify-center items-center">
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={LOGO4} alt="logo" className="w-28 h-28 object-contain" />
        </Link>
        <div className="text-secondary text-[17px] leading-[30px] text-center select-none">
          {/* Direitos Autorais em Português */}
          <p>{new Date().getFullYear()} &copy; Criado por Leonardo Lima. Todos os direitos reservados.</p>
          
          {/* Direitos Autorais em Inglês Britânico */}
          <p>{new Date().getFullYear()} &copy; Created by Leonardo Lima. All rights reserved.</p>

          {/* Direitos Autorais em Russo */}
          <p>{new Date().getFullYear()} &copy; Создано Леонардо Лима. Все права защищены.</p>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center text-purple-500 font-bold self-start text-2xl">
        <Typewriter
          text={[
            "Obrigado Pela Atenção!",
            "Thank you for your attention!",
            "Спасибо за внимание!",
          ]}
          loop
          speed={80}
          cursor={false}
        />
      </div>
    </div>
  );
};

export default Footer;
