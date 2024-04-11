import React, { useLayoutEffect, useRef, useContext } from "react";
import Image from "next/image";
import SimpleFan from "../../Assets/RoundedFan.svg";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { DeviceTypeContext } from "../../Contexts/DeviceTypeProvider";

gsap.registerPlugin(ScrollTrigger);

const Ring = () => {
  const ringDiv = useRef();
  const { isDesktop } = useContext(DeviceTypeContext);

  useLayoutEffect(() => {
    if (isDesktop) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        tl.to("#simpleFanSvg", {
          rotateZ: 1080,
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: `body`,
          start: "top 0%",
          end: "bottom 100%",
          scrub: 1,
          animation: tl,
        });
      }, ringDiv);

      return () => ctx.revert();
    }
  }, [isDesktop]);
  return (
    <>
      {isDesktop && (
        <div
          className="z-10 fixed bottom-8 right-20 w-16 h-16 flex items-center justify-center"
          ref={ringDiv}
        >
          <Image
            id="simpleFanSvg"
            src={SimpleFan}
            alt="SimpleFan"
            width={200}
            height={200}
            className="object-contain simpleFanSvg absolute"
          />
        </div>
      )}
    </>
  );
};

export default Ring;
