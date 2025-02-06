import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { leo } from "../assets";
import translations from "../translate/translations"; // Caminho relativo

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = ({ language }) => {
  // Obtendo as traduções baseadas no idioma
  const { intro, overview, description } = translations[language] || translations.en;

  return (
    <>
      {/* Título e introdução alinhados à esquerda */}
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>{intro}</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          {overview}
        </h2>
      </div>
      
      {/* Alinhamento flex para texto e imagem */}
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        {/* Texto à esquerda */}
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          dangerouslySetInnerHTML={{ __html: description }} // Renderizando HTML
        />

        {/* Imagem ao lado do texto */}
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
                src={leo}
                alt="leo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>

      {/* Cards de serviços alinhados */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
