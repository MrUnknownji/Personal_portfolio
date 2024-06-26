"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import svg1 from "../Assets/HeroDivSvg.svg";
// import MyImage from "../Assets/MyImageUncropped-transformed-transparent2.png";
import { mainHeadingArr, subHeadingArr } from "./Arrays";
import GsapMegnetic from "./GsapAnimations/GsapMegnetic";
import FlexibleDragAndDrop from "./elements/FlexibleDragAndDrop";
const HeroSection = () => {
  const heroSection = useRef();
  const [arrowRotation, setArrowRotation] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      animateElement(".mainChar", {
        y: -50,
        stagger: 0.1,
        duration: 1,
        ease: "bounce",
      });

      animateElement(
        ".subChar",
        {
          y: "random(-300,300)",
          x: "random(-100,400)",
          opacity: 0,
          duration: 1,
          ease: "bounce",
          stagger: 0.05,
        },
        "-=1.5"
      );
      animateElement(
        "#mainImage",
        { y: 100, duration: 0.7, ease: "none" },
        "-=1.5"
      );
      animateElement("#contactBtn", { y: 200 }, "-=2");
      animateElement("#projectBtn", { y: 200, ease: "power1.out" }, "-=2");

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
    <div className="relative" id="hero-div" ref={heroSection}>
      <div className="heroSvg">
        <Image
          id="HeroSvg"
          src={svg1}
          alt="Svg"
          width={1000}
          height={1000}
          className="object-contain HeroSvg"
        />
      </div>
      <div className="heroSection">
        <div className="heroHeadingContainer">
          <h1 id="mainHeading">
            {mainHeadingArr.map((value, index) => (
              <span key={index}>
                <span className="mainHeadingWord inline-block" key={index}>
                  {value.split("").map((char, charIndex) => (
                    <span className="mainChar inline-block" key={charIndex}>
                      <FlexibleDragAndDrop key={index}>
                        {char}
                      </FlexibleDragAndDrop>
                    </span>
                  ))}
                </span>
                {index === 1 && <br />}{" "}
              </span>
            ))}
          </h1>
          <h2 id="mainSubHeading">
            {subHeadingArr.map((value, index) => (
              <span key={index}>
                <span className="subHeadingWords inline-block" key={index}>
                  {" "}
                  {value.split("").map((char, charIndex) => (
                    <span className="subChar inline-block" key={charIndex}>
                      {char}
                    </span>
                  ))}
                </span>{" "}
              </span>
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
            src={require("../Assets/MyImageUncropped-transformed-transparent2.png")}
            alt="MyImage"
            width={900}
            height={900}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
