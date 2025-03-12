import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { MoonCanvas } from "./canvas";
import translations from "../translate/translations";

const Reason = ({ language }) => {
  // Obtendo as traduções para o título e descrição da seção
  const { reason_final_description } = translations[language] || translations.en;

  return (
    <>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        {/* Texto traduzido com animação e quebras de linha, onde o título estava */}
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          dangerouslySetInnerHTML={{ __html: reason_final_description }} // Usando dangerouslySetInnerHTML para interpretar as tags HTML
        />

        {/* Exibindo o MoonCanvas com altura ajustada de forma responsiva */}
        <div className="xl:flex-1 xl:h-[600px] h-[400px] w-full ml-16">
          <MoonCanvas />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Reason, "reason");
