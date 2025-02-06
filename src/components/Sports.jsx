import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { judo } from "../assets";
import translations from "../translate/translations"; // Caminho para o arquivo de traduções

const Sport = ({ language }) => {
  // Obtendo as traduções com base no idioma selecionado
  const { sport, journey_sport } = translations[language] || translations.en;

  return (
    <>
      <div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          {sport}
        </h2>
      </div>

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        {/* Texto traduzido */}
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          dangerouslySetInnerHTML={{ __html: journey_sport }} // Renderizando o conteúdo com HTML (caso tenha)
        />

        {/* Imagem de Judô */}
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={judo}
                alt="judo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(Sport, "esporte");
