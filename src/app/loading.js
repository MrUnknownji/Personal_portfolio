"use client";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const loadingArr = ["L", "o", "a", "d", "i", "n", "g", ".", ".", "."];
const welcomeArr = ["W", "e", "l", "c", "o", "m", "e", ".", ".", "."];

const Loading = () => {
  const ref = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      ".loadingName",
      {
        x: 50,
        y: -50,
        opacity: 0,
        rotateX: -180,
      },
      {
        stagger: 0.09,
        x: 0,
        y: 0,
        opacity: 1,
        rotateX: 0,
      },
      "+=0.1"
    ).to(".loadingName", {
      stagger: 0.09,
      x: -50,
      y: 50,
      opacity: 0,
      rotateX: 180,
    });
  });
  return (
    <div
      className="loadingDiv h-[100vh] flex items-center justify-center font-bold text-white"
      ref={ref}
    >
      <div>
        {welcomeArr.map((value, index) => (
          <font className="loadingName inline-block" key={index}>
            {value}
          </font>
        ))}
      </div>
    </div>
  );
};

export default Loading;
