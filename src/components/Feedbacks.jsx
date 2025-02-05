import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
// import { ComputersCanvas } from "./canvas";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imageProjects } from "../constants";
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);
const ImageCarousel = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <p className={styles.sectionSubText}>Check it out</p>
      <h2
        className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
      >
        Preview.
      </h2>
      <Slider {...settings}>
        {imageProjects.map((project) => (
          <div key={project.id} className="carousel-slide">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img className="" src={project.image} alt={project.title} />
            </a>
            <h3 className="text-center mt-5 font-bold text-lg">
              {project.title}
            </h3>
            <p>{project.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <>
      {/* <div
        className="relative w-full h-screen mx-auto"
        style={{ bottom: "15rem" }}
      >
        <ComputersCanvas />
      </div> */}
      <div className={` bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          {/* <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2
              className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
            >
              Testimonials.
            </h2>
          </motion.div>
        </div>
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))} */}
          <ImageCarousel />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");
