import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { hanieData } from "../asset/data";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left
       xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 items-center mt-40">
        {hanieData.experience.map((res) => {
          return (
            <ExperienceCard
              key={res.img}
              role={res.role}
              place={res.place}
              points={res.points}
              start={res.start}
              end={res.end}
              skills={res.skills}
              img={res.img}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default WorkExperience;
