import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapParallax = ({ children }) => {
  const containerRef = useRef();
  const projectsRef = useRef([]); // Array to hold refs for each project

  useLayoutEffect(() => {
    const container = containerRef.current;

    // Pin the container
    ScrollTrigger.create({
      trigger: container,
      pin: true,
      start: "top top",
      end: "+=200%", // Make it last longer than the content
      markers: true,
    });

    // Animate each project
    projectsRef.current.forEach((projectRef, index) => {
      gsap.to(projectRef.current, {
        x: () => -(window.innerWidth * 0.5 * index), // Adjust speed based on index
        ease: "none",
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "top top",
          end: "+=200%",
        },
      });
    });
  }, []);
  return (
    <div ref={containerRef} className="project-container">
      {children.map((project, index) => (
        <div ref={(el) => (projectsRef.current[index] = el)} key={index}>
          {project}
        </div>
      ))}
    </div>
  );

  // return React.cloneElement(children, { containerRef });
};

export default GsapParallax;
