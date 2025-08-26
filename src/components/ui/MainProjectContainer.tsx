import React from "react";
import { Project } from "@/data/projects";

const MainProjectContainer = ({ project }: { project?: Project }) => {
  if (!project) {
    return (
      <div className="h-full x-border p-4">
        <div className="h-[200px] s-border"></div>
        <div>
          <h2 className="font-sharpie-bold text-xl p-1">Coming soon</h2>
          <p className="p-1 line-clamp-2">Project details will be added.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full x-border p-4">
      <div className="h-[200px] s-border"></div>
      <div>
        <h2 className="font-sharpie-bold text-xl p-1">{project.title}</h2>
        <p className="p-1 line-clamp-2">{project.sub_description}</p>
      </div>
    </div>
  );
};

export default MainProjectContainer;
