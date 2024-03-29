import React from "react";
import { motion } from "framer-motion";
import { hanieData } from "../asset/data";
import Image from "next/image";

type img = {
  img: typeof import("*.jpg");
};

type skills = {
  src: string;
  alt: string;
};

type Props = {
  key: string;
  place: string;
  role: string;
  points: string[];
  start: string;
  end: string;
  skills: skills[];
  img: img;
};

function ExperienceCard({
  key,
  role,
  place,
  points,
  start,
  end,
  skills,
  img,
}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-screen
    w-[500px] md:w-[600px] 
    xl:w-[800px] snap-center bg=[#292929] 
    p-10 hover:opacity-100 opacity-40 
    cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <Image
        // ?motion.img
        // initial={{
        //   y: -100,
        //   opacity: 0,
        // }}
        // transition={{
        //   duration: 1.2,
        // }}
        // whileInView={{
        //   opacity: 1,
        //   y: 0,
        // }}
        // viewport={{ once: true }}
        className="rounded-full object-contain object-center"
        // "
        // w-22
        //  h-22
        // object-cover
        // object-center
        // "
        // style={{
        //   width: 50,
        //   height: 50,
        // }}
        width={300}
        height={300}
        src={img?.img}
        alt="afarinesh"
      />
      <div className="px-0 md:px-10">
        <p
          className="font-bold text-2xl mt-1"
          style={{
            color: hanieData.roleColor,
          }}
        >
          {role}
        </p>
        <h4
          className="text-4l font-light"
          style={{
            color: hanieData.roleColor,
          }}
        >
          {place}
        </h4>
        <div className="flex space-x-2 my-2">
          {skills?.map((res) => {
            return (
              <img
                key={key}
                className="h-10 w-10"
                src={res?.src}
                alt={res?.alt}
              />
            );
          })}
        </div>
        <p
          className="uppercase py-5"
          style={{
            color: hanieData.roleColor,
          }}
        >
          Started work {start} - Ended {end}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {points?.map((res) => {
            return (
              <li
                key={res}
                style={{
                  color: hanieData.roleColor,
                }}
              >
                {res}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
