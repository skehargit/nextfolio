import React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
const Experience = ({
  logoSrc,
  company,
  website,
  position,
  duration,
  description,
}: {
  logoSrc: string;
  company: string;
  website: string;
  position: string;
  duration: string;
  description: string[];
}) => (
  <div className="p-4 s-border rounded-md space-y-2">
    <div className="flex items-center space-x-3">
      <div className="h-8 w-8 flex items-center justify-center">
        <Image
          src={logoSrc}
          alt={`${company} logo`}
          className="w-full h-full object-contain rounded-sm"
        />
      </div>
      <span className="text-lg font-semibold">{company}</span>
      <a href={website} target="_blank" rel="noopener noreferrer" className="">
        <ExternalLink size={16} />
      </a>
    </div>
    <div className="text-sm ">
      <span className="font-medium">{position}</span>
      <span className="mx-1">|</span>
      <span>{duration}</span>
    </div>
    <ul className="list-disc list-inside text-sm  space-y-1 pl-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Experience;
