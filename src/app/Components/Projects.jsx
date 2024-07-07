"use client";
import React, { useMemo, useRef } from "react";
import ProjectContainer from "./ProjectContainer";
import { ProjectArr } from "../Assets/Data/Arrays";
import GsapHeading from "./GsapAnimations/GsapHeading";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animations } from "./GsapAnimations/GsapAnimations";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ref = useRef();
  useGSAP(
    () => {
      animations.projectsPin(ref);
    },
    { scope: ref }
  );
  const memoizedProjects = useMemo(
    () =>
      ProjectArr.map((project, index) => (
        <ProjectContainer key={index} project={project} index={index} />
      )),
    []
  );
  return (
    <div className="w-[100vw] text-white" id="projects">
      <GsapHeading>
        <h3 id="heading0" className="heading pt-5">
          Explore My Work
        </h3>
      </GsapHeading>
      <div ref={ref}>{memoizedProjects}</div>
    </div>
  );
};
export default Projects;
