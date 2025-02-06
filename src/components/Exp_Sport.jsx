import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { sporties } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import translations from "../translate/translations"; // Importando o arquivo de traduções

const SportCard = ({
  index,
  name,
  description,
  image,
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="sport_image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] h-[8rem] overflow-y-scroll">
          {description}
        </p>
      </div>
    </Tilt>
  );
};

const Exp_Sport = ({ language }) => {
  const { experiences_title, experiences_description } = translations[language] || translations.en;

  return (
    <>
      <h2
        className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
      >
        {experiences_title}
      </h2>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {experiences_description}
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {sporties.map((sport, index) => (
          <SportCard key={`sport-${index}`} index={index} {...sport} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Exp_Sport);
