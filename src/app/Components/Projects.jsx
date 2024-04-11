"use client";
import React, { useLayoutEffect, useRef } from "react";
import ProjectContainer from "./ProjectContainer";
import { ProjectArr } from "./Arrays";
import GsapHeading from "./GsapAnimations/GsapHeading";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const currentElem = ref.current;

    const anim = () => {
      const pinContainer = gsap.to(currentElem, {});
      ScrollTrigger.create({
        trigger: currentElem,
        pin: false,
        start: "top 20%",
        end:'bottom 20%',
        scrub: true,
        animation: pinContainer,
      });
    };

    const ctx = gsap.context(anim, ref);
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="w-[100vw] text-white" id="projects">
      <GsapHeading>
        <h3 id="heading0" className="heading pt-5">
          Explore My Work
        </h3>
      </GsapHeading>
      <div ref={ref}>
        {ProjectArr.map((project, index) => (
          <ProjectContainer key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Projects;

// initial={{ opacity: 0, y: 70 }}
// transition={{ type: "spring", duration: 2,delay:0.5, stiffness: 100 }}
// whileInView={{ opacity: 1, y: 0 }}
