"use client";
import React from "react";
import ProjectContainer from "./ProjectContainer";
import { ProjectArr } from "./Arrays";

const Projects = () => {
  return (
    <div className="w-[100vw] text-white" id="projects">
      <h3 id="heading0" className="heading pt-5">
        Explore My Work
      </h3>
      {ProjectArr.map((project, index) => (
        <ProjectContainer key={index} project={project} index={index} />
      ))}
    </div>
  );
};
export default Projects;
