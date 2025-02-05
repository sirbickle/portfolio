import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { formatura } from "../assets";

const StudyCard = ({ index, title, icon }) => (
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

const Study = () => {
  return (
    <>
      <div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          Estudo
        </h2>
      </div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Minha jornada escolar começou em 2005 na pré-escola LEA EDY ALONSO SALIBA, onde finalizei meus estudos em 2006. Em 2007, ingressei na 1ª série (2º ano) na mesma escola, onde estudei até 2010, quando me formei na 4ª série (5º ano). <br />
          Em 2011, comecei em uma nova escola, a ISABEL LOPES MONTEIRO, iniciando a reta final para o Ensino Médio. Estudei lá até 2014, participando do time de handebol, com o qual fomos vice-campeões do JES contra a escola Matheus Maylasky. Apesar de participar também do time de basquete nos anos seguintes, não obtive grandes resultados, mas me diverti muito. <br />
          Durante o ensino fundamental, comecei a me interessar por uma nova língua, então fui ver as opções no "CEL" (Centro de Línguas), nele, tinha várias opções: francês, italiano, inglês, japonês e alemão, e o alemão, particularmente, me chamou muita atenção, tanto pela pronúncia, quanto por eu não conhecer tanto a cultura, então acreditei que seria uma boa oportunidade.
          Apesar de não estar mais estudando essa língua, pois me interessei pelo russo, ainda tenho um grande carinho por ela, sinceramente, foi o que abriu as portas para conhecer novas culturas e aprender novos idiomas.
          Durante o curso, tive experiências incríveis, desde conhecer nativos e ter boas conversas, até ter a oportunidade de ir para o país pelo Goethe, infelizmente, não consegui, poís na época era por sorteio. <br />
          Após concluir meus estudos na ISABEL LOPES MONTEIRO, fui para o SENADOR LUIZ NOGUEIRA MARTINS, onde estudei de 2015 até 2017 e finalizei o Ensino Médio. <br />
          Em 2022, entrei na Faculdade de Engenharia de Sorocaba como estudante de Tecnólogo em Análise e Desenvolvimento de Sistemas, formando-me em 2024. <br />
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
                src={formatura}
                alt="formatura"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default SectionWrapper(Study, "study");
