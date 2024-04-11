import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapHeading = ({ children }) => {
  const ref = useRef();
  useLayoutEffect(() => {
    const currentElem = ref.current;
    const headingAnimation = () => {
      const WhileInView = gsap.from(currentElem, {
        y: 70,
        opacity: 0,
        duration: 1,
        paused: true, // Start the animation paused
      });
      ScrollTrigger.create({
        trigger: currentElem,
        start: "top 80%",
        toggleActions: "play none none reverse",
        animation: WhileInView,
      });
    };
    const ctx = gsap.context(headingAnimation, ref);
    return () => {
      ctx.revert();
    };
  }, []);
  return React.cloneElement(children, { ref });
};

export default GsapHeading;
