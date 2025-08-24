import React from "react";
import Image from "next/image";
const Education = ({
  logoSrc,
  name,
  course,
  duration,
}: {
  logoSrc: string;
  name: string;
  course: string;
  duration: string;
}) => (
  <div className="p-4 s-border  rounded-md   space-y-2">
    <div className="flex items-center space-x-2">
      <div className="h-8 w-8 flex items-center justify-center">
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={32}
          height={32}
          className="w-full h-full object-contain rounded-sm"
        />
      </div>
      <span className="text-md font-semibold uppercase">{name}</span>
    </div>

    <div className="text-xs ">
      <span className="font-medium">{course}</span>
      <span className="mx-1">|</span>
      <span>{duration}</span>
    </div>
  </div>
);

export default Education;
