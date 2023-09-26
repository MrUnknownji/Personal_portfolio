"use client";
import React from "react";
import ProjectContainer from "./ProjectContainer";
import { ProjectArr } from "./Arrays";

const Projects = ({flag}) => {
  return (
    <div className="w-[100vw] text-white" id="projects">
      <h3 id="heading0" className="heading pt-5">
        Explore My Work
      </h3>
      {ProjectArr.map((project, index) => (
        <ProjectContainer key={index} project={project} index={index} flag={flag} />
      ))}
    </div>
  );
};
export default Projects;
