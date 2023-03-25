import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { hanieData } from "../asset/data";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url={hanieData.socialOne}
          fgColor={hanieData.socialColor}
          bgColor="transparent"
        />
        <SocialIcon
          url={hanieData.socialTwo}
          fgColor={hanieData.socialColor}
          bgColor="transparent"
        />
        <SocialIcon
          url={hanieData.socialThree}
          fgColor={hanieData.socialColor}
          bgColor="transparent"
        />
        <SocialIcon
          url={hanieData.socialFour}
          fgColor={hanieData.socialColor}
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gary-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          fgColor={hanieData.socialColor}
          bgColor="transparent"
        />
        <p
          className="uppercase hidden md:inline-flex text-sm"
          style={{
            color: `${hanieData.socialColor}`,
          }}
        >
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
