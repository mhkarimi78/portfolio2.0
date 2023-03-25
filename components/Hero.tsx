import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { hanieData } from "../asset/data";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: hanieData.words,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        width={200}
        height={200}
        src={
          require("../asset/mahsa.jpg")
          // "../asset/hanie.JPG"
        }
        alt=""
      />
      <div className="z-20">
        <h2
          className="text-sm uppercase pb-2 tracking-[15px]"
          style={{
            color: `${hanieData.roleColor}`,
          }}
        >
          {hanieData.role}
        </h2>
        <h1
          className="text-5xl lg:text-6xl font-semibold px-10"
          style={{
            color: `${hanieData.roleColor}`,
          }}
        >
          <span>{text}</span>
          <Cursor cursorColor="#f7AB0A" />
        </h1>
      </div>
      <div className="pt-5">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
