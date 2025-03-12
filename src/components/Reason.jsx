import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import translations from "../translate/translations";  

const Reason = ({ language }) => {
  // Obtendo as traduções para o título e descrição da seção
  const { reason_title, reason_description } = translations[language] || translations.en;

  return (
    <>
      <div variants={textVariant()}>
        {/* Título com animação */}
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          {reason_title} {/* Título dinâmico */}
        </h2>
      </div>

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        {/* Texto traduzido com animação e quebras de linha */}
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          dangerouslySetInnerHTML={{ __html: reason_description }} // Usando dangerouslySetInnerHTML para interpretar as tags HTML
        />

        {/* Exibindo apenas o EarthCanvas com altura ajustada */}
        <div className="xl:flex-1 xl:h-[400px] h-[300px] w-full ml-16">
          <EarthCanvas />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Reason, "reason");
