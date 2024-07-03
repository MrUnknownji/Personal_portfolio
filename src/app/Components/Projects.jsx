// "use client";
// import React, { useRef } from "react";
// import ProjectContainer from "./ProjectContainer";
// import { ProjectArr } from "./Arrays";
// import GsapHeading from "./GsapAnimations/GsapHeading";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const Projects = () => {
//   const ref = useRef();
//   useGSAP(
//     () => {
//       const currentElem = ref.current;
//       const pinContainer = gsap.to(currentElem, {});
//       ScrollTrigger.create({
//         trigger: currentElem,
//         pin: false,
//         start: "top 20%",
//         end: "bottom 20%",
//         scrub: true,
//         animation: pinContainer,
//       });
//     },
//     { scope: ref }
//   );
//   return (
//     <div className="w-[100vw] text-white" id="projects">
//       <GsapHeading>
//         <h3 id="heading0" className="heading pt-5">
//           Explore My Work
//         </h3>
//       </GsapHeading>
//       <div ref={ref}>
//         {ProjectArr.map((project, index) => (
//           <ProjectContainer key={index} project={project} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Projects;
"use client";
import React, { useRef } from "react";
import ProjectContainer from "./ProjectContainer";
import { ProjectArr } from "../Assets/Data/Arrays";
import GsapHeading from "./GsapAnimations/GsapHeading";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const ref = useRef();
  useGSAP(
    () => {
      const currentElem = ref.current;
      const pinContainer = gsap.to(currentElem, {});
      ScrollTrigger.create({
        trigger: currentElem,
        pin: false,
        start: "top 20%",
        end: "bottom 20%",
        scrub: true,
        animation: pinContainer,
      });
    },
    { scope: ref }
  );
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
