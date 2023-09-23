"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import svg1 from "../Assets/HeroDivSvg.svg";
import MyImage from "../Assets/MyImagePng.png";
import { mainHeadingArr, subHeadingArr } from "./Arrays";
import GsapMegnetic from "./GsapMegnetic";

const HeroSection = () => {
  const heroSection = useRef();
  const [arrowRotation, setArrowRotation] = useState(0);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    const animateElement = (
      elementId,
      animationProps,
      subDuration = "-=0.6"
    ) => {
      tl.from(
        elementId,
        {
          opacity: 0,
          duration: 1,
          ease: "expo",
          ...animationProps,
        },
        subDuration
      );
    };

    animateElement(".mainChar", { y: -50, stagger: 0.1, ease: "bounce" });

    animateElement(".subChar", {
      y: "random(-300,300)",
      x: "random(-100,400)",
      opacity: 0,
      ease: "bounce",
      stagger: 0.05,
    });
    animateElement("#mainImage", { y: -200, ease: "bounce" }, "-=1");
    animateElement("#contactBtn", { y: 200 }, "-=1");
    animateElement("#projectBtn", { y: 200, ease: "power1.out" }, "-=1");

    const ctx = gsap.context(() => {
      gsap.from("#HeroSvg", { scale: 0, duration: 1, opacity: 0 });
      tl.play();
    }, heroSection);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = () => {
    setArrowRotation(45);
  };

  const handleMouseLeave = () => {
    setArrowRotation(0);
  };

  return (
    <div className="relative" ref={heroSection}>
      <div className="heroSvg">
        <Image
          id="HeroSvg"
          src={svg1}
          alt="Svg"
          layout="responsive"
          className="object-contain"
        />
      </div>
      <div className="heroSection">
        <div className="heroHeadingContainer">
          <h1 id="mainHeading">
            {mainHeadingArr.map((value, index) => (
              <>
                <span className="mainHeadingWord inline-block" key={index}>
                  {value.split("").map((char, charIndex) => (
                    <span className="mainChar inline-block" key={charIndex}>
                      {char}
                    </span>
                  ))}
                </span>{" "}
              </>
            ))}
          </h1>
          <h2 id="mainSubHeading">
            {subHeadingArr.map((value, index) => (
              <>
                <span className="subHeadingWords inline-block" key={index}>
                  {" "}
                  {value.split("").map((char, charIndex) => (
                    <span className="subChar inline-block" key={charIndex}>
                      {char}
                    </span>
                  ))}
                </span>{" "}
              </>
            ))}
          </h2>
          <div className="heroBtnsDiv">
            <GsapMegnetic>
              <Link href="#contactme" id="contactBtn">
                <button className="greenBtn">Contact Me</button>
              </Link>
            </GsapMegnetic>
            <GsapMegnetic>
              <Link href="#projects" id="projectBtn">
                <h5
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Projects{" "}
                  <font
                    id="Arrow"
                    className="inline-block duration-300"
                    style={{ transform: `rotateZ(${arrowRotation}deg)` }}
                  >
                    →
                  </font>
                </h5>
              </Link>
            </GsapMegnetic>
          </div>
        </div>
        <div className="myImage">
          <Image
            id="mainImage"
            className="object-contain"
            src={MyImage}
            alt="MyImage"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
