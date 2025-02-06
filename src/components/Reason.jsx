import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import translations from "../translate/translations"; // Importando o arquivo de traduções

const Reason = ({ language }) => {
  // Obtendo as traduções para o título e descrição da seção
  const { reason_title, reason_description } = translations[language] || translations.en;

  return (
    <>
      <div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          {reason_title} {/* Título dinâmico */}
        </h2>
      </div>
      
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex-[0.75] bg-tertiary p-8 rounded-2xl text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {reason_description} {/* Descrição dinâmica */}
        </motion.div>
        
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-[500px] h-[400px] w-full ml-16"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Reason, "reason");
