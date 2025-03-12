import React from "react";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { getAchievementStudy } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import translations from "../translate/translations";

const AchievementStudyCard = ({ achievementstudy }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={achievementstudy.date}
      iconStyle={{ background: achievementstudy.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={achievementstudy.icon}
            alt={achievementstudy.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{achievementstudy.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {achievementstudy.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {achievementstudy.points.map((point, index) => (
          <li
            key={`achievementstudy-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const AchievementStudy = ({ language }) => {
  // Obtendo as traduções para o título e descrição da seção
  const { achievements_study, journey_achievement_study } = translations[language] || translations.en;
  const achievementstudy = getAchievementStudy(language);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {journey_achievement_study} {/* Texto de introdução dinâmico */}
        </p>
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black text-center`}
        >
          {achievements_study} {/* Título dinâmico */}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {achievementstudy.map((achievementstudy, index) => (
            <AchievementStudyCard
              key={`achievementstudy-${index}`}
              achievementstudy={achievementstudy} // Passando o objeto da conquista
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(AchievementStudy);
