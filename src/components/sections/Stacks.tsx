"use client";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

type StackItem =
  | { name: string; src: string }
  | { name: string; srcLight: string; srcDark: string };

const stacks: StackItem[] = [
  { name: "React", src: "/svg/stack/react.svg" },
  {
    name: "Next.js",
    srcLight: "/svg/stack/nextjs-light.svg",
    srcDark: "/svg/stack/nextjs-dark.svg",
  },
  { name: "TypeScript", src: "/svg/stack/typescript.svg" },
  { name: "JavaScript", src: "/svg/stack/js.svg" },
  { name: "Redux", src: "/svg/stack/redux.svg" },
  { name: "Tailwind CSS", src: "/svg/stack/tailwindcss.svg" },
  { name: "Node.js", src: "/svg/stack/nodejs.svg" },
  {
    name: "express",
    srcLight: "/svg/stack/express-light.svg",
    srcDark: "/svg/stack/express-dark.svg",
  },
  { name: "MongoDB", src: "/svg/stack/mongodb.svg" },
  { name: "Python", src: "/svg/stack/python.svg" },
  { name: "Django", src: "/svg/stack/django.svg" },

  { name: "Git", src: "/svg/stack/git.svg" },
  { name: "Docker", src: "/svg/stack/docker.svg" },

  { name: "Photoshop", src: "/svg/stack/ps.svg" },
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
