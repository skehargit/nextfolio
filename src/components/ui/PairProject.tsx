import React from "react";
import { Project } from "@/data/projects";
// Smaller composable piece: mobile-only visual separator
const MobileSeparator = ({ className = "" }: { className?: string }) => (
  <div className={`y-border grid grid-cols-2 gap-4 sm:hidden ${className}`}>
    <div className="p-2 r-border"></div>
    <div className="p-2 l-border"></div>
  </div>
);

// Small local component for rendering a project card
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="h-full x-border p-4">
    <div className="h-[200px] s-border"></div>
    <div>
      <h2 className="font-sharpie-bold text-xl p-1">{project.title}</h2>
      <p className="p-1 line-clamp-2">{project.sub_description}</p>
    </div>
  </div>
);
const PairProject = ({ pair, idx }: { pair: Project[]; idx: number }) => {
  return (
    <div className=" w-full mx-auto max-w-3xl ">
      {" "}
      <div className="gap-0 sm:gap-4 grid grid-cols-1 sm:grid-cols-2">
        {/* First project */}
        <ProjectCard key={pair[0].project_id} project={pair[0]} />

        {/* Mobile-only separator in the middle */}
        {pair.length === 2 && <MobileSeparator key={`sep-${idx}`} />}

        {/* Second project (if present) */}
        {pair[1] && <ProjectCard key={pair[1].project_id} project={pair[1]} />}
      </div>
    </div>
  );
};

export default PairProject;
