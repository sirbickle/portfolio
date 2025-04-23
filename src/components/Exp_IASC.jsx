import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { getIASC } from "../constants";
import { fadeIn } from "../utils/motion";
import translations from "../translate/translations";

const IASC_Card = ({
  name,
  description,
  customDescription,
  image,
  source_code_link,
  liveUrl,
  driveIcon,
  liveIcon,
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
          alt="iasc_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={driveIcon}
                alt="source code"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
          {liveUrl && (
            <div
              onClick={() => window.open(liveUrl, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={liveIcon}
                alt="live url"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p
          className="mt-2 text-secondary text-[14px] h-[8rem] overflow-y-scroll"
          dangerouslySetInnerHTML={{
            __html: customDescription || description,
          }}
        />
      </div>
    </Tilt>
  );
};

const Exp_IASC = ({ language }) => {
  const {
    experiences_title_iasc,
    experiences_description_iasc,
  } = translations[language] || translations.en;
  const iascItems = getIASC(language);

  return (
    <>
      <h2
        className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
      >
        {experiences_title_iasc}
      </h2>

      <div
        variants={fadeIn("", "", 1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        dangerouslySetInnerHTML={{
          __html: experiences_description_iasc,
        }}
      />

      <div className="mt-20 flex flex-wrap gap-7">
        {iascItems.map((iasc, index) => (
          <IASC_Card
            key={`iasc-${index}`}
            index={index}
            {...iasc}
            customDescription={iasc.customDescription}
            driveIcon={iasc.driveIcon}
            liveIcon={iasc.liveIcon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Exp_IASC);
