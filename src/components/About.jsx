import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { leo } from "../assets";

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

const About = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          Visão Geral
        </h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Oi, eu sou o Leonardo, tenho 25 anos, moro em Sorocaba e trabalho como Gerente de Projetos de TI. Sou formado em Análise e Desenvolvimento de Sistemas e, no meu dia a dia, gosto de combinar o lado técnico e teórico com a criatividade, especialmente ao gerenciar projetos. <br />
          Além do trabalho, tenho muitos interesses que me ajudam a manter a mente ativa: <br />
          Sou fã de jogos, desde clássicos como Warcraft 3 e Starcraft até World of Warcraft e Counter-Strike 2. Também gosto de jogos de tabuleiro e cartas e, de vez em quando, disputo uma partida de xadrez. <br />
          Música é outra paixão: toco baixo e guitarra, o que me ajuda a me desconectar um pouco do mundo digital. <br />
          Quando não estou envolvido em projetos de TI ou jogando, gosto de praticar esportes, especialmente correr e malhar. <br />
          Por fim, sou curioso e apaixonado por natureza, viagens, novas culturas e exploração. <br />
          Gosto de aprender sobre ciência, como cosmologia, astronomia, física e temas relacionados. Também estou sempre buscando aprender novos idiomas para me conectar melhor com o mundo. <br />
        </p>
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
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
