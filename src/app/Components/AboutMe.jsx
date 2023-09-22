"use client";
import React, { useLayoutEffect, useRef } from "react";
import { InfoCardArr } from "./Arrays";
import gsap from "gsap";
import { useWindowSize } from "./useWindowSize";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMe = useRef();
  const innerWidth = useWindowSize();

  useLayoutEffect(() => {
    const animateInfoContainers = () => {
      const tl = gsap.timeline();
      if (innerWidth > 1024) {
        tl.from(".firstContainer", {
          x: -200,
          opacity: 0,
          duration: 0.5,
        }).from(".notFirstContainer", {
          x: 200,
          y: 200,
          stagger: 0.5,
          opacity: 0,
        });
        ScrollTrigger.create({
          trigger: ".aboutMeInfoContainer",
          start: "top 80%",
          animation: tl,
          toggleActions: "play none none reverse",
        });
      } else {
        tl.from(".aboutMeInfoContainer", {
          x: 200,
          opacity: 0,
          stagger: 0.5,
        });
        ScrollTrigger.create({
          trigger: ".aboutMeInfoContainer",
          start: "top 80%",
          toggleActions: "play none none reverse",
          animation: tl,
        });
      }
    };

    const ctx = gsap.context(animateInfoContainers, aboutMe);

    return () => ctx.revert();
  }, [innerWidth]);

  const addMouseEvents = (container) => {
    container.addEventListener("mouseenter", () => {
      container.style.transform = "rotateZ(0)";
    });
    container.addEventListener("mouseleave", () => {
      container.style.transform = "rotateZ(-10deg)";
    });
  };

  return (
    <div id="aboutme" className="text-white px-20" ref={aboutMe}>
      <h2 id="heading1" className="heading my-16">
        About Me
      </h2>
      <InfoContainer
        desc={InfoCardArr[0].desc}
        rotateNone={true}
        idNumber={0}
      />
      <div className="aboutMeSubDiv flex items-center gap-14 mt-16">
        {InfoCardArr.slice(1).map((card, index) => (
          <InfoContainer
            key={index}
            title={card.title}
            desc={card.desc}
            idNumber={index + 1}
            rotateNone={innerWidth > 1024 ? false : true}
          />
        ))}
      </div>
    </div>
  );
};

const InfoContainer = ({ title, desc, rotateNone, idNumber }) => {
  return (
    <div
      id={`infoContainer${idNumber}`}
      className={`aboutMeInfoContainer ${
        idNumber == 0 ? "firstContainer" : "notFirstContainer"
      } ${rotateNone ? "" : "rotate-[-10deg]"}`}
    >
      {title && <h3>{title}</h3>}
      <p>{desc}</p>
    </div>
  );
};

export default AboutMe;
