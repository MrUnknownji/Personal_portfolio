import gsap from "gsap";
import React, { useLayoutEffect } from "react";

const PinnedFan = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        trigger: "#hero-div",
        start: "top 0%",
        end: "bottom 75%",
      },
    });

    tl.to("#pin-windmill", {
      y: 100,
      opacity: 0,
    });
  }, []);
  return (
    <div
      id="pin-windmill"
      className="absolute z-[100] bottom-[-7.5%] right-[15%] w-[70vw] h-[12vmax] rounded-3xl bg-gradient-to-t from-black to-gray-800"
    />
  );
};

export default PinnedFan;
