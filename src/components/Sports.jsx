import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { judo } from "../assets";

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

const Sport = () => {
  return (
    <>
      <div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          Esporte
        </h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
         Sem dúvidas, o Judô é algo importante na minha vida, comecei a praticar quando tinha 7 ou 8 anos e parei entre 14 ou 15 anos, nesse esporte, tive a honra de participar da Federação Paulista de Judô, viajar para vários municípios do estado de São Paulo para competições, treinei na academia Bandeirantes Sorocaba e fui aluno do Sensei Antonio Rizzardo. <br />
         Tenho um currículo considerável no Judô em questão de competições, tendo participado de eventos desde 2007 dentro de Sorocaba e até mesmo em outros municípios pela Federação Paulista de Judô, com um total de 28 campeonatos ganhos entre 2007 e 2013, porém os que mais me marcaram foram o Regional e o Estadual, sendo campeão no Regional e vice-campeão no Estadual.<br />
         O principal motivo de minha mãe me colocar nesse esporte foi o fato de eu ser um pouco impulsivo e precisar gastar energia com algo, tinha tentado outros esportes, como natação e futebol, porém o único que realmente gostei foi o Judô. Por conta do horário do curso de alemão, tive que abrir mão do Judô, e com isso, encerrei minhas atividades na faixa verde, faltando apenas 3 faixas para atingir a faixa preta. <br />
         Porém não é só judô que pratiquei, Fui vice-campeão de Handebol no ensino fundamental no campeonato JES (Jogos Estudantis). Atualmente, ainda pratico esportes, como corrida, onde já participei de 3 maratonas, e faço academia 3 vezes por semana.</p>

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
