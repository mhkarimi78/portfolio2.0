import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  name: string;
  img: string;
};

function Skill({ directionLeft, name, img }: Props) {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className=" rounded-full border border-gray-500 object-cover w-24 h-24"
        src={img}
        alt={name}
      />
    </div>
  );
}

export default Skill;
