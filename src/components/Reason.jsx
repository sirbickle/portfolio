import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Reason = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          Motivo pelo qual quero estudar na Rússia
        </h2>
      </div>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex-[0.75] bg-tertiary p-8 rounded-2xl text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Gosto de aprender sobre ciência, como cosmologia, astronomia, física e temas relacionados. Também estou sempre buscando aprender novos idiomas para me conectar melhor com o mundo. <br />
        </motion.div>
        
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-[500px] h-[400px] w-full ml-16"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Reason, "reason");
