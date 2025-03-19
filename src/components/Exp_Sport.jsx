import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { getSporties } from "../constants";
import { fadeIn } from "../utils/motion";
import translations from "../translate/translations";
import { drive, aeb } from "../assets";

const SportCard = ({ name, description, image, source_code_link, liveUrl }) => {
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

        {/* Círculos de links */}
        <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
          {/* Link para o Google Drive */}
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={drive} // ícone do Google Drive
                alt="source code"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
          {/* Link para AEB */}
          {liveUrl && (
            <div
              onClick={() => window.open(liveUrl, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={aeb} // ícone do AEB
                alt="live url"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
        </div>
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
  const sporties = getSporties(language);

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
