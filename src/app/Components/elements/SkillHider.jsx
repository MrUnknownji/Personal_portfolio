import React from "react";
import { useGSAP } from "@gsap/react";
import { animations } from "../GsapAnimations/GsapAnimations";

const SkillHider = () => {
  useGSAP(() => {
    animations.skillHider.init();
  });

  return (
    <div
      id="hider-card"
      className="absolute z-[100] bottom-[-7.5%] right-[15%] w-[70vw] h-[12vmax] rounded-3xl bg-gradient-to-t from-black to-gray-800"
    />
  );
};

export default SkillHider;
