import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import svg1 from "../Assets/HeroDivSvg.svg";
import { mainHeadingArr, subHeadingArr } from "../Assets/Data/Arrays";
import FlexibleDragAndDrop from "./elements/FlexibleDragAndDrop";
import GsapMegnetic from "./GsapAnimations/GsapMegnetic";

const HeroSection = () => {
  const heroSection = useRef();
  const [arrowRotation, setArrowRotation] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      const animateElement = (selector, props, position = "-=0.6") => {
        tl.from(
          selector,
          { opacity: 0, duration: 1, ease: "expo", ...props },
          position
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
    },
    { scope: heroSection }
  );

  const renderTextWithAnimation = (textArray, charClassName) =>
    textArray.map((word, wordIndex) => (
      <span key={wordIndex}>
        <span className="inline-block">
          {word.split("").map((char, charIndex) => (
            <span className={`${charClassName} inline-block`} key={charIndex}>
              {charClassName === "mainChar" ? (
                <FlexibleDragAndDrop>{char}</FlexibleDragAndDrop>
              ) : (
                char
              )}
            </span>
          ))}
        </span>
        {wordIndex === 1 && charClassName === "mainChar" && <br />}{" "}
      </span>
    ));

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
            {renderTextWithAnimation(mainHeadingArr, "mainChar")}
          </h1>
          <h2 id="mainSubHeading">
            {renderTextWithAnimation(subHeadingArr, "subChar")}
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
                  onMouseEnter={() => setArrowRotation(45)}
                  onMouseLeave={() => setArrowRotation(0)}
                >
                  Projects{" "}
                  <span
                    id="Arrow"
                    className="inline-block duration-300"
                    style={{ transform: `rotateZ(${arrowRotation}deg)` }}
                  >
                    →
                  </span>
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
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
