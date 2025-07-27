"use client";
import { motion, AnimatePresence, Variants } from "framer-motion";
import React from "react";
const socialLinks = [
  {
    name: "LinkedIn",
    url: "#",
    color: "#0A66C2",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="inline-block">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.78-1.75-1.75 0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.78 1.75-1.75 1.75zm13 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.83-1.56 3.02 0 3.58 1.99 3.58 4.58v4.75z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "#",
    color: "#333",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="inline-block">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.084 1.838 1.237 1.838 1.237 1.072 1.837 2.812 1.306 3.498.998.108-.775.42-1.306.762-1.606-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.431.372.814 1.102.814 2.222 0 1.606-.015 2.902-.015 3.297 0 .322.217.699.825.581C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Resume",
    url: "#",
    color: "#eab308",
    icon: (
      <svg width="24" height="24" fill="currentColor" className="inline-block">
        <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 8L16 4.586A2 2 0 0 0 14.828 4H6zm6 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4 2h8v2H8v-2zm0 4h8v2H8v-2z" />
      </svg>
    ),
  },
];

const linkVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: (i = 1) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.15,
      type: "spring",
      stiffness: 350,
    },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex h-screen flex-col items-center justify-center py-20"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="font-opensans-bold text-lg text-gray-500 dark:text-gray-400 mb-2 tracking-wide"></div>
        <div className="flex flex-col items-end gap-3">
          <h1 className="font-opensans-bold font-semibold text-4xl text-start text-white mb-0">
            I am
          </h1>
          <h1 className="font-opensans-bold uppercase font-semibold text-8xl text-white mb-0">
            Sudhansu
          </h1>
          <div className="text-white flex items-center gap-2">
            <img
              src="/five-stars.svg"
              alt="Five Stars"
              className="mx-auto my-4 w-32"
            />
            
            <div className="flex items-center gap-2">
            <span>View my resume </span>
              <button className=" text-lg lg:font-semibold isolation-auto before:hover:scale-150 before:hover:duration-700 relative z-10  overflow-hidden group">
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-white group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-white group-hover:fill-black"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* <span className="font-opensans-bold text-lg md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2 ml-2">
            Sekhar Behera
          </span> */}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
          className="text-sm max-w-lg text-start text-gray-700 dark:text-gray-200 font-medium leading-relaxed shadow-sm"
        >
          I craft beautiful web experiences and love building things that make a
          difference. Let’s connect and create something amazing.
        </motion.p>
        {/* <div className="flex gap-6 mt-8 text-white">
          <div>
            <button>Resume</button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
