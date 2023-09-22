import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

const BackgoundCircles = () => {
  useLayoutEffect(() => {
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach((bubble) => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      const randomX = () => gsap.utils.random(0, window.innerWidth);
      const randomY = () => gsap.utils.random(0, window.innerHeight);
      const randomDuration = () => gsap.utils.random(5, 10);

      tl.to(bubble, {
        x: randomX,
        y: randomY,
        duration: randomDuration,
        onComplete: () => {
          tl.vars.startAt = {
            x: randomX,
            y: randomY,
            duration:randomDuration,
          };
        },
      });
      tl.play();
    });
  }, []);

  return (
    <div className="fixed">
      <div
        id="bubble1"
        className="bubble w-[200px] h-[200px] bg-cyan-500 rounded-full absolute top-0 left-0 -z-10"
      ></div>
      <div
        id="bubble2"
        className="bubble w-[150px] h-[150px] bg-green-500 rounded-full absolute top-48 left-96 -z-10"
      ></div>
      <div
        id="bubble3"
        className="bubble w-[50px] h-[50px] bg-pink-500 rounded-full absolute top-52 left-52 -z-10"
      ></div>
      <div
        id="bubble4"
        className="bubble w-[75px] h-[75px] bg-violet-500 rounded-full absolute top-96 left-8 -z-10"
      ></div>
      <div
        id="bubble5"
        className="bubble w-[100px] h-[100px] bg-red-500 rounded-full absolute top-20 left-20 -z-10"
      ></div>
      <div
        id="bubble6"
        className="bubble w-[125px] h-[125px] bg-orange-500 rounded-full absolute top-24 left-52 -z-10"
      ></div>
    </div>
  );
};

export default BackgoundCircles;
