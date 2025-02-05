import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { sporties } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const SportCard = ({
  index,
  name,
  description,
  image,

}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}> o texto e a imagem dos cards
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
    // </motion.div>
  );
};

const Exp_Sport = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
        <h2
          className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
        >
          Experiências
        </h2>
      {/* </motion.div> */}

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Alguns momentos que considero importante nos esportes que pratico ou pratiquei.
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
