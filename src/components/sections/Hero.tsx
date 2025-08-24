"use client";
import { motion } from "framer-motion";
import React from "react";
import WrapButton from "../ui/WrapButton";
import ArrowSvg from "../ui/ArrowSvg";
import FlipLink from "../ui/text-effect-flipper";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen overflow-hidden flex-col items-center justify-center py-20"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="font-opensans-bold text-lg text-gray-500 dark:text-gray-400 mb-2 tracking-wide"></div>
        <div className="flex flex-col items-end gap-3">
          <h1 className="font-opensans-bold font-semibold text-4xl text-start text-white mb-0">
            I am
          </h1>
          {/* <h1 className="font-opensans-bold uppercase font-semibold text-8xl text-white mb-0">
            Sudhansu
          </h1> */}
          <FlipLink href="" >SUDHANSU</FlipLink>
          <div className="w-full flex gap-4 items-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
              className="text-sm max-w-md text-start text-gray-700 dark:text-gray-200 font-medium leading-relaxed shadow-sm"
            >
              I craft beautiful web experiences and love building things that
              make a difference. Let’s connect and create something amazing.
            </motion.p>
            <WrapButton className="" href="">
              Resume
            </WrapButton>
          </div>
        </div>

        <ArrowSvg />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
          className="text-sm max-w-md text-start text-gray-700 dark:text-gray-200 font-medium leading-relaxed shadow-sm"
        >
          View my projects, education experience, skills and more
        </motion.p>

        

        {/* <TextScroll text="Frontend • Backend • Game-Dev • Full-Stack • MERN-Stack" default_velocity={1} className="text-white text-8xl font-semibold"/> */}
      </div>
    </section>
  );
};

export default Hero;
