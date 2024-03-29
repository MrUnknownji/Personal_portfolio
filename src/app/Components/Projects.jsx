"use client";
import React from "react";
import ProjectContainer from "./ProjectContainer";
import { ProjectArr } from "./Arrays";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="w-[100vw] text-white" id="projects">
      <motion.h3
        id="heading0"
        className="heading pt-5"
        initial={{ opacity: 0, y: 70 }}
        transition={{ type: "spring", duration: 2,delay:0.5, stiffness: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Explore My Work
      </motion.h3>
      {ProjectArr.map((project, index) => (
        <ProjectContainer key={index} project={project} index={index} />
      ))}
    </div>
  );
};
export default Projects;
