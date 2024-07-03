import gsap from "gsap";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const GsapHeading = ({ children }) => {
  const ref = useRef();
  useGSAP(
    () => {
      const currentElem = ref.current;
      const WhileInView = gsap.from(currentElem, {
        y: 70,
        opacity: 0,
        duration: 1,
        paused: true,
      });
      ScrollTrigger.create({
        trigger: currentElem,
        start: "top 80%",
        toggleActions: "play none none reverse",
        animation: WhileInView,
      });
    },
    { scope: ref }
  );
  return React.cloneElement(children, { ref });
};

export default GsapHeading;
