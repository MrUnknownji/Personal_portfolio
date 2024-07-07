import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { animations } from "./GsapAnimations";

const GsapHeading = ({ children, animationOptions }) => {
  const ref = useRef();
  
  useGSAP(() => {
    animations.heading.init(ref.current, animationOptions);
  }, { scope: ref });

  return React.cloneElement(children, { ref });
};

export default GsapHeading;
