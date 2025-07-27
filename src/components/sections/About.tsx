import React from "react";

const About = () => {
  return (
    <section className="w-full flex flex-col md:flex-row max-w-4xl items-center md:items-start gap-6 md:gap-8 border-2 border-zinc-800 border-dashed rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 my-8 mx-auto">
      {/* Left: Profile Image */}
      <div className=" w-full  max-w-80 overflow-hidden rounded-xl shadow-md mb-4 md:mb-0">
        <img
          src="/IMG_1008.jpg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Right: About Content */}
      <div className="flex-1 text-white">
        <p className="text-lg mb-3 font-opensans-semibold">
          I’m Sudhansu Sekhar Behera from Odisha, a mechanical engineering
          graduate turned self-taught web developer. I love building clean,
          responsive UIs and interactive experiences.
        </p>

        <p className="text-gray-300 mb-3">
          Currently interning as a frontend developer at mrpshop.in and a game
          developer at eklavya.me, I’m focused on sharpening my skills through
          real-world projects.
        </p>

        <p className="text-gray-300 mb-4">
          I started with HTML & CSS, moved to JavaScript and React, explored
          backend basics, REST APIs, and added animations using GSAP & Framer
          Motion. Always learning, building, and improving.
        </p>
      </div>
    </section>
  );
};

export default About;
