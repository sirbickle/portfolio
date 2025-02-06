import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { achievementsport } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import translations from "../translate/translations"; // Importando o arquivo de traduções

const AchievementSportCard = ({ achievementsport }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={achievementsport.date}
      iconStyle={{ background: achievementsport.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={achievementsport.icon}
            alt={achievementsport.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{achievementsport.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {achievementsport.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {achievementsport.points.map((point, index) => (
          <li
            key={`achievementsport-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const AchievementSport = ({ language }) => {
  // Obtendo as traduções para o título e descrição da seção
  const { achievements_sport, journey_achievement_sport } = translations[language] || translations.en;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {journey_achievement_sport} {/* Texto de introdução dinâmico */}
        </p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
        >
          {achievements_sport} {/* Título dinâmico */}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievementsport.map((achievementsport, index) => (
            <AchievementSportCard
              key={`achievementsport-${index}`}
              achievementsport={achievementsport}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(AchievementSport);
