"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

type StackItem =
  | { name: string; src: string }
  | { name: string; srcLight: string; srcDark: string };

const stacks: StackItem[] = [
  { name: "React", src: "/svg/react.svg" },
  {
    name: "Next.js",
    srcLight: "/svg/nextjs-light.svg",
    srcDark: "/svg/nextjs-dark.svg",
  },
  { name: "TypeScript", src: "/svg/typescript.svg" },
  { name: "JavaScript", src: "/svg/js.svg" },
  { name: "Redux", src: "/svg/redux.svg" },
  { name: "Tailwind CSS", src: "/svg/tailwindcss.svg" },
  { name: "Node.js", src: "/svg/nodejs.svg" },
  {
    name: "express",
    srcLight: "/svg/express-light.svg",
    srcDark: "/svg/express-dark.svg",
  },
  { name: "MongoDB", src: "/svg/mongodb.svg" },
  { name: "Python", src: "/svg/python.svg" },
  { name: "Django", src: "/svg/django.svg" },

  { name: "Git", src: "/svg/git.svg" },
  { name: "Docker", src: "/svg/docker.svg" },

  { name: "Photoshop", src: "/svg/ps.svg" },
];

const Stacks = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className=" grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
      {stacks.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center justify-center "
          title={item.name}
        >
          <Image
            src={
              "src" in item
                ? item.src
                : resolvedTheme === "dark"
                ? item.srcDark
                : item.srcLight
            }
            alt={item.name}
            width={28}
            height={28}
            className="object-contain"
          />
          <span className="mt-1 text-[10px] text-muted-foreground text-center line-clamp-1">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stacks;
